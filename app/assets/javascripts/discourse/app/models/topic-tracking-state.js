import EmberObject, { get } from "@ember/object";
import discourseComputed, { on } from "discourse-common/utils/decorators";
import Category from "discourse/models/category";
import { deepEqual, deepMerge } from "discourse-common/lib/object";
import DiscourseURL from "discourse/lib/url";
import { NotificationLevels } from "discourse/lib/notification-levels";
import PreloadStore from "discourse/lib/preload-store";
import User from "discourse/models/user";
import { isEmpty } from "@ember/utils";

function isNew(topic) {
  return (
    topic.last_read_post_number === null &&
    ((topic.notification_level !== 0 && !topic.notification_level) ||
      topic.notification_level >= NotificationLevels.TRACKING) &&
    isUnseen(topic)
  );
}

function isUnread(topic) {
  return (
    topic.last_read_post_number !== null &&
    topic.last_read_post_number < topic.highest_post_number &&
    topic.notification_level >= NotificationLevels.TRACKING
  );
}

function isUnseen(topic) {
  return !topic.is_seen;
}

function hasMutedTags(topicTagIds, mutedTagIds, siteSettings) {
  if (!mutedTagIds || !topicTagIds) {
    return false;
  }
  return (
    (siteSettings.remove_muted_tags_from_latest === "always" &&
      topicTagIds.any((tagId) => mutedTagIds.includes(tagId))) ||
    (siteSettings.remove_muted_tags_from_latest === "only_muted" &&
      topicTagIds.every((tagId) => mutedTagIds.includes(tagId)))
  );
}

const TopicTrackingState = EmberObject.extend({
  messageCount: 0,

  @on("init")
  _setup() {
    this.unreadSequence = [];
    this.newSequence = [];
    this.states = {};
    this.messageIncrementCallbacks = [];
    this.stateChangeCallbacks = [];
  },

  establishChannels() {
    const tracker = this;

    const process = (data) => {
      if (["muted", "unmuted"].includes(data.message_type)) {
        tracker.trackMutedOrUnmutedTopic(data);
        return;
      }

      tracker.pruneOldMutedAndUnmutedTopics();

      if (tracker.isMutedTopic(data.topic_id)) {
        return;
      }

      if (
        this.siteSettings.mute_all_categories_by_default &&
        !tracker.isUnmutedTopic(data.topic_id)
      ) {
        return;
      }

      if (data.message_type === "delete") {
        tracker.removeTopic(data.topic_id);
        tracker.incrementMessageCount();
      }

      if (["new_topic", "latest"].includes(data.message_type)) {
        const muted_category_ids = User.currentProp("muted_category_ids");
        if (
          muted_category_ids &&
          muted_category_ids.includes(data.payload.category_id)
        ) {
          return;
        }
      }

      if (["new_topic", "latest"].includes(data.message_type)) {
        const mutedTagIds = User.currentProp("muted_tag_ids");
        if (
          hasMutedTags(
            data.payload.topic_tag_ids,
            mutedTagIds,
            this.siteSettings
          )
        ) {
          return;
        }
      }

      const old = this.findState(data);

      if (data.message_type === "latest") {
        tracker.notify(data);

        if ((old && old.tags) !== data.payload.tags) {
          this.modifyStateProp(data, "tags", data.payload.tags);
          tracker.incrementMessageCount();
        }
      }

      if (data.message_type === "dismiss_new") {
        tracker.dismissNewTopic(data);
      }

      if (["new_topic", "unread", "read"].includes(data.message_type)) {
        tracker.notify(data);
        if (!deepEqual(old, data.payload)) {
          if (data.message_type === "read") {
            let mergeData = {};

            // we have to do this because the "read" event does not
            // include tags; we don't want them to be overridden
            if (old) {
              mergeData = {
                tags: old.tags,
                topic_tag_ids: old.topic_tag_ids,
              };
            }

            this.modifyState(data, deepMerge(data.payload, mergeData));
          } else {
            this.modifyState(data, data.payload);
          }
          tracker.incrementMessageCount();
        }
      }
    };

    this.messageBus.subscribe("/new", process);
    this.messageBus.subscribe("/latest", process);
    if (this.currentUser) {
      this.messageBus.subscribe(
        "/unread/" + this.currentUser.get("id"),
        process
      );
    }

    this.messageBus.subscribe("/delete", (msg) => {
      this.modifyStateProp(msg, "deleted", true);
      tracker.incrementMessageCount();
    });

    this.messageBus.subscribe("/recover", (msg) => {
      this.modifyStateProp(msg, "deleted", undefined);
      tracker.incrementMessageCount();
    });

    this.messageBus.subscribe("/destroy", (msg) => {
      tracker.incrementMessageCount();
      const currentRoute = DiscourseURL.router.currentRoute.parent;
      if (
        currentRoute.name === "topic" &&
        parseInt(currentRoute.params.id, 10) === msg.topic_id
      ) {
        DiscourseURL.redirectTo("/");
      }
    });
  },

  mutedTopics() {
    return (this.currentUser && this.currentUser.muted_topics) || [];
  },

  unmutedTopics() {
    return (this.currentUser && this.currentUser.unmuted_topics) || [];
  },

  trackMutedOrUnmutedTopic(data) {
    let topics, key;
    if (data.message_type === "muted") {
      key = "muted_topics";
      topics = this.mutedTopics();
    } else {
      key = "unmuted_topics";
      topics = this.unmutedTopics();
    }
    topics = topics.concat({
      topicId: data.topic_id,
      createdAt: Date.now(),
    });
    this.currentUser && this.currentUser.set(key, topics);
  },

  dismissNewTopic(data) {
    data.payload.topic_ids.forEach((topicId) => {
      this.modifyStateProp(topicId, "is_seen", true);
    });
    this.incrementMessageCount();
  },

  pruneOldMutedAndUnmutedTopics() {
    const now = Date.now();
    let mutedTopics = this.mutedTopics().filter(
      (mutedTopic) => now - mutedTopic.createdAt < 60000
    );
    let unmutedTopics = this.unmutedTopics().filter(
      (unmutedTopic) => now - unmutedTopic.createdAt < 60000
    );
    this.currentUser &&
      this.currentUser.set("muted_topics", mutedTopics) &&
      this.currentUser.set("unmuted_topics", unmutedTopics);
  },

  isMutedTopic(topicId) {
    return !!this.mutedTopics().findBy("topicId", topicId);
  },

  isUnmutedTopic(topicId) {
    return !!this.unmutedTopics().findBy("topicId", topicId);
  },

  updateSeen(topicId, highestSeen) {
    if (!topicId || !highestSeen) {
      return;
    }
    const state = this.findState(topicId);
    if (
      state &&
      (!state.last_read_post_number ||
        state.last_read_post_number < highestSeen)
    ) {
      this.modifyStateProp(topicId, "last_read_post_number", highestSeen);
      this.incrementMessageCount();
    }
  },

  notify(data) {
    if (!this.newIncoming) {
      return;
    }
    if (data.payload && data.payload.archetype === "private_message") {
      return;
    }

    const filter = this.filter;
    const filterCategory = this.filterCategory;
    const categoryId = data.payload && data.payload.category_id;

    if (filterCategory && filterCategory.get("id") !== categoryId) {
      const category = categoryId && Category.findById(categoryId);
      if (
        !category ||
        category.get("parentCategory.id") !== filterCategory.get("id")
      ) {
        return;
      }
    }

    if (
      ["all", "latest", "new"].includes(filter) &&
      data.message_type === "new_topic"
    ) {
      this.addIncoming(data.topic_id);
    }

    if (["all", "unread"].includes(filter) && data.message_type === "unread") {
      const old = this.findState(data);
      if (!old || old.highest_post_number === old.last_read_post_number) {
        this.addIncoming(data.topic_id);
      }
    }

    if (filter === "latest" && data.message_type === "latest") {
      this.addIncoming(data.topic_id);
    }

    this.set("incomingCount", this.newIncoming.length);
  },

  addIncoming(topicId) {
    if (this.newIncoming.indexOf(topicId) === -1) {
      this.newIncoming.push(topicId);
    }
  },

  resetTracking() {
    this.newIncoming = [];
    this.set("incomingCount", 0);
  },

  // track how many new topics came for this filter
  trackIncoming(filter) {
    this.newIncoming = [];
    const split = filter.split("/");

    if (split.length >= 4) {
      filter = split[split.length - 1];
      // c/cat/subcat/6/l/latest
      let category = Category.findSingleBySlug(
        split.splice(1, split.length - 4).join("/")
      );
      this.set("filterCategory", category);
    } else {
      this.set("filterCategory", null);
    }

    this.set("filter", filter);
    this.set("incomingCount", 0);
  },

  @discourseComputed("incomingCount")
  hasIncoming(incomingCount) {
    return incomingCount && incomingCount > 0;
  },

  removeTopic(topic_id) {
    delete this.states[this.stateKey(topic_id)];
    this.afterStateChange();
  },

  // If we have a cached topic list, we can update it from our tracking information.
  updateTopics(topics) {
    if (isEmpty(topics)) {
      return;
    }

    topics.forEach((topic) => {
      const state = this.findState(topic.get("id"));

      if (state) {
        const lastRead = topic.get("last_read_post_number");
        const isSeen = topic.get("is_seen");
        if (
          lastRead !== state.last_read_post_number ||
          isSeen !== state.is_seen
        ) {
          const postsCount = topic.get("posts_count");
          let newPosts = postsCount - state.highest_post_number,
            unread = postsCount - state.last_read_post_number;

          if (newPosts < 0) {
            newPosts = 0;
          }
          if (!state.last_read_post_number) {
            unread = 0;
          }
          if (unread < 0) {
            unread = 0;
          }

          topic.setProperties({
            highest_post_number: state.highest_post_number,
            last_read_post_number: state.last_read_post_number,
            new_posts: newPosts,
            unread: unread,
            is_seen: state.is_seen,
            unseen: !state.last_read_post_number && isUnseen(state),
          });
        }
      }
    });
  },

  /**
    Uses the provided topic list to apply changes to the in-memory topic
    tracking state, remove state as required, and also compensate for missing
    in-memory state.

    Any state changes will make a callback to all state change callbacks defined
    via onStateChange and all message increment callbacks defined via onMessageIncrement

    @method sync
    @param {TopicList} list
    @param {String} filter - The filter used for the list e.g. new/unread
    @param {Object} queryParams - The query parameters for the list e.g. page
   */
  sync(list, filter, queryParams) {
    if (!list || !list.topics) {
      return;
    }

    // make sure any server-side state matches reality in the client side
    this._fixDelayedServerState(list, filter);

    // make sure all the state is up to date with what is accurate
    // from the server
    list.topics.forEach(this._syncStateFromListTopic.bind(this));

    // correct missing states, safeguard in case message bus is corrupt
    if (this._shouldCompensateState(list, filter, queryParams)) {
      this._correctMissingState(list, filter);
    }

    this.incrementMessageCount();
  },

  // fix delayed "new" topics by removing the now seen
  // topic from the list (for the "new" list) or setting the topic
  // to "seen" for other lists.
  //
  // client side we know they are not new, server side we think they are.
  // this can happen if the list is cached or the update to the state
  // for a particular seen topic has not yet reached the server.
  //
  // TODO (martin): this may affect the total counts (the splice removal)
  _fixDelayedServerState(list, filter) {
    for (let index = list.topics.length - 1; index >= 0; index--) {
      const state = this.findState(list.topics[index].id);
      if (state && state.last_read_post_number > 0) {
        if (filter === "new") {
          list.topics.splice(index, 1);
        } else {
          list.topics[index].set("unseen", false);
          list.topics[index].set("prevent_sync", true);
        }
      }
    }
  },

  // this updates the topic in the state to match the
  // topic from the list (e.g. updates category, highest read post
  // number, tags etc.)
  _syncStateFromListTopic(topic) {
    const state = this.findState(topic.id) || {};

    // make a new copy so we aren't modifying the state object directly while
    // we make changes
    const newState = { ...state };

    newState.topic_id = topic.id;
    newState.notification_level = topic.notification_level;

    // see ListableTopicSerializer for unread/unseen/new_posts and other
    // topic property logic
    if (topic.unseen) {
      newState.last_read_post_number = null;
    } else if (topic.unread || topic.new_posts) {
      newState.last_read_post_number =
        topic.highest_post_number -
        ((topic.unread || 0) + (topic.new_posts || 0));
    } else {
      // remove the topic if it is no longer unread/new (it has been seen)
      // and if there are too many topics in memory
      //
      // TODO (martin) add the list limit
      if (!topic.prevent_sync) {
        this.removeTopic(topic.id);
      }
      return;
    }

    newState.highest_post_number = topic.highest_post_number;
    if (topic.category) {
      newState.category_id = topic.category.id;
    }

    if (topic.tags) {
      newState.tags = topic.tags;
    }

    this.modifyState(topic.id, newState);
  },

  // this stops sync of tracking state when list is filtered, in the past this
  // would cause the tracking state to become inconsistent.
  _shouldCompensateState(list, filter, queryParams) {
    let shouldCompensate =
      (filter === "new" || filter === "unread") && !list.more_topics_url;

    if (shouldCompensate && queryParams) {
      Object.keys(queryParams).forEach((k) => {
        if (k !== "ascending" && k !== "order") {
          shouldCompensate = false;
        }
      });
    }

    return shouldCompensate;
  },

  // any state that is not in the provided list must be updated
  // based on the filter selected so we do not have any incorrect
  // state in the list
  _correctMissingState(list, filter) {
    const ids = {};
    list.topics.forEach((topic) => (ids[this.stateKey(topic.id)] = true));

    Object.keys(this.states).forEach((topicKey) => {
      // if the topic is already in the list then there is
      // no compensation needed; we already have latest state
      // from the backend
      if (ids[topicKey]) {
        return;
      }

      const newState = { ...this.findState(topicKey) };
      if (filter === "unread" && isUnread(newState)) {
        // pretend read. if unread, the highest_post_number will be greater
        // than the last_read_post_number
        newState.last_read_post_number = newState.highest_post_number;
      }

      if (filter === "new" && isNew(newState)) {
        // pretend not new. if the topic is new, then last_read_post_number
        // will be null.
        newState.last_read_post_number = 1;
      }

      this.modifyState(topicKey, newState);
    });
  },

  incrementMessageCount() {
    this.incrementProperty("messageCount");
    this.messageIncrementCallbacks.forEach((cb) => cb());
  },

  onMessageIncrement(cb) {
    this.messageIncrementCallbacks.push(cb);
  },

  onStateChange(cb) {
    this.stateChangeCallbacks.push(cb);
  },

  getSubCategoryIds(categoryId) {
    const result = [categoryId];
    const categories = Category.list();

    for (let i = 0; i < result.length; ++i) {
      for (let j = 0; j < categories.length; ++j) {
        if (result[i] === categories[j].parent_category_id) {
          result[result.length] = categories[j].id;
        }
      }
    }

    return new Set(result);
  },

  countCategoryByState(type, categoryId, tagId, noSubcategories) {
    const subcategoryIds = noSubcategories
      ? new Set([categoryId])
      : this.getSubCategoryIds(categoryId);
    const mutedCategoryIds =
      this.currentUser && this.currentUser.muted_category_ids;
    let filter = type === "new" ? isNew : isUnread;

    return Object.values(this.states).filter(
      (topic) =>
        filter(topic) &&
        topic.archetype !== "private_message" &&
        !topic.deleted &&
        (!categoryId || subcategoryIds.has(topic.category_id)) &&
        (!tagId || (topic.tags && topic.tags.indexOf(tagId) > -1)) &&
        (type !== "new" ||
          !mutedCategoryIds ||
          mutedCategoryIds.indexOf(topic.category_id) === -1)
    ).length;
  },

  countNew(categoryId, tagId, noSubcategories) {
    return this.countCategoryByState("new", categoryId, tagId, noSubcategories);
  },

  countUnread(categoryId, tagId, noSubcategories) {
    return this.countCategoryByState(
      "unread",
      categoryId,
      tagId,
      noSubcategories
    );
  },

  forEachTracked(fn, opts = {}) {
    this.trackedTopics(opts).forEach((trackedTopic) => {
      fn(trackedTopic.topic, trackedTopic.newTopic, trackedTopic.unreadTopic);
    });
  },

  trackedTopics(opts = {}) {
    return Object.values(this.states)
      .map((topic) => {
        if (topic.archetype !== "private_message" && !topic.deleted) {
          let newTopic = isNew(topic);
          let unreadTopic = isUnread(topic);
          if (newTopic || unreadTopic || opts.includeAll) {
            return { topic, newTopic, unreadTopic };
          }
        }
      })
      .compact();
  },

  countTags(tags) {
    let counts = {};

    tags.forEach((tag) => {
      counts[tag] = { unreadCount: 0, newCount: 0 };
    });

    this.forEachTracked((topic, newTopic, unreadTopic) => {
      if (topic.tags) {
        tags.forEach((tag) => {
          if (topic.tags.indexOf(tag) > -1) {
            if (unreadTopic) {
              counts[tag].unreadCount++;
            }
            if (newTopic) {
              counts[tag].newCount++;
            }
          }
        });
      }
    });

    return counts;
  },

  countCategory(category_id, tagId) {
    let sum = 0;
    Object.values(this.states).forEach((topic) => {
      if (
        topic.category_id === category_id &&
        !topic.deleted &&
        (!tagId || (topic.tags && topic.tags.indexOf(tagId) > -1))
      ) {
        sum +=
          topic.last_read_post_number === null ||
          topic.last_read_post_number < topic.highest_post_number
            ? 1
            : 0;
      }
    });
    return sum;
  },

  lookupCount(name, category, tagId, noSubcategories) {
    if (name === "latest") {
      return (
        this.lookupCount("new", category, tagId, noSubcategories) +
        this.lookupCount("unread", category, tagId, noSubcategories)
      );
    }

    let categoryId = category ? get(category, "id") : null;

    if (name === "new") {
      return this.countNew(categoryId, tagId, noSubcategories);
    } else if (name === "unread") {
      return this.countUnread(categoryId, tagId, noSubcategories);
    } else {
      const categoryName = name.split("/")[1];
      if (categoryName) {
        return this.countCategory(categoryId, tagId);
      }
    }
  },

  loadStates(data) {
    // I am taking some shortcuts here to avoid 500 gets for a large list
    (data || []).forEach((topic) => {
      this.modifyState(topic, topic);
    });
  },

  modifyState(topic, data) {
    this.states[this.stateKey(topic)] = data;
    this.afterStateChange();
  },

  modifyStateProp(topic, prop, data) {
    const state = this.states[this.stateKey(topic)];
    if (state) {
      state[prop] = data;
      this.afterStateChange();
    }
  },

  findState(topicOrId) {
    return this.states[this.stateKey(topicOrId)];
  },

  stateKey(topicOrId) {
    if (typeof topicOrId === "number") {
      return `t${topicOrId}`;
    } else if (typeof topicOrId === "string" && topicOrId.indexOf("t") > -1) {
      return topicOrId;
    } else {
      return `t${topicOrId.topic_id}`;
    }
  },

  afterStateChange() {
    this.notifyPropertyChange("states");
    this.stateChangeCallbacks.forEach((cb) => cb());
  },
});

export function startTracking(tracking) {
  const data = PreloadStore.get("topicTrackingStates");
  tracking.loadStates(data);
  tracking.initialStatesLength = data && data.length;
  tracking.establishChannels();
  PreloadStore.remove("topicTrackingStates");
}

export default TopicTrackingState;
