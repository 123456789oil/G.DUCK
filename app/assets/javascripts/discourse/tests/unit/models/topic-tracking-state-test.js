import { test } from "qunit";
import DiscourseURL from "discourse/lib/url";
import { getProperties } from "@ember/object";
import Category from "discourse/models/category";
import MessageBus from "message-bus-client";
import {
  discourseModule,
  publishToMessageBus,
} from "discourse/tests/helpers/qunit-helpers";
import { NotificationLevels } from "discourse/lib/notification-levels";
import TopicTrackingState from "discourse/models/topic-tracking-state";
import User from "discourse/models/user";
import Topic from "discourse/models/topic";
import createStore from "discourse/tests/helpers/create-store";
import sinon from "sinon";

discourseModule("Unit | Model | topic-tracking-state", function (hooks) {
  hooks.beforeEach(function () {
    this.clock = sinon.useFakeTimers(new Date(2012, 11, 31, 12, 0).getTime());
  });

  hooks.afterEach(function () {
    this.clock.restore();
  });

  test("tag counts", function (assert) {
    const trackingState = TopicTrackingState.create();

    trackingState.loadStates([
      {
        topic_id: 1,
        last_read_post_number: null,
        tags: ["foo", "baz"],
        created_in_new_period: true,
      },
      {
        topic_id: 2,
        last_read_post_number: null,
        tags: ["baz"],
        created_in_new_period: true,
      },
      {
        topic_id: 3,
        last_read_post_number: null,
        tags: ["random"],
      },
      {
        topic_id: 4,
        last_read_post_number: 1,
        highest_post_number: 7,
        tags: ["pending"],
        notification_level: NotificationLevels.TRACKING,
        unread_not_too_old: true,
      },
      {
        topic_id: 5,
        last_read_post_number: 1,
        highest_post_number: 7,
        tags: ["bar", "pending"],
        notification_level: NotificationLevels.TRACKING,
        unread_not_too_old: true,
      },
      {
        topic_id: 6,
        last_read_post_number: 1,
        highest_post_number: 7,
        tags: null,
        notification_level: NotificationLevels.TRACKING,
      },
    ]);

    const tagCounts = trackingState.countTags(["baz", "pending"]);

    assert.equal(tagCounts["baz"].newCount, 2, "baz tag new counts");
    assert.equal(tagCounts["baz"].unreadCount, 0, "baz tag unread counts");
    assert.equal(
      tagCounts["pending"].unreadCount,
      2,
      "pending tag unread counts"
    );
    assert.equal(tagCounts["pending"].newCount, 0, "pending tag new counts");
  });

  test("tag counts - with total", function (assert) {
    const trackingState = TopicTrackingState.create();

    trackingState.loadStates([
      {
        topic_id: 1,
        last_read_post_number: null,
        tags: ["foo", "baz"],
        created_in_new_period: true,
      },
      {
        topic_id: 2,
        last_read_post_number: null,
        tags: ["baz"],
        created_in_new_period: true,
      },
      {
        topic_id: 3,
        last_read_post_number: null,
        tags: ["random"],
      },
      {
        topic_id: 4,
        last_read_post_number: 1,
        highest_post_number: 7,
        tags: ["pending"],
        notification_level: NotificationLevels.TRACKING,
        unread_not_too_old: true,
      },
      {
        topic_id: 5,
        last_read_post_number: 1,
        highest_post_number: 7,
        tags: ["bar", "pending"],
        notification_level: NotificationLevels.TRACKING,
        unread_not_too_old: true,
      },
      {
        topic_id: 6,
        last_read_post_number: 1,
        highest_post_number: 7,
        tags: null,
        notification_level: NotificationLevels.TRACKING,
      },
      {
        topic_id: 7,
        last_read_post_number: 7,
        highest_post_number: 7,
        tags: ["foo", "baz"],
      },
      {
        topic_id: 8,
        last_read_post_number: 4,
        highest_post_number: 4,
        tags: ["pending"],
        notification_level: NotificationLevels.TRACKING,
      },
      {
        topic_id: 9,
        last_read_post_number: 88,
        highest_post_number: 88,
        tags: ["pending"],
        notification_level: NotificationLevels.TRACKING,
      },
    ]);

    const states = trackingState.countTags(["baz", "pending"], {
      includeTotal: true,
    });

    assert.equal(states["baz"].newCount, 2, "baz tag new counts");
    assert.equal(states["baz"].unreadCount, 0, "baz tag unread counts");
    assert.equal(states["baz"].totalCount, 3, "baz tag total counts");
    assert.equal(states["pending"].unreadCount, 2, "pending tag unread counts");
    assert.equal(states["pending"].newCount, 0, "pending tag new counts");
    assert.equal(states["pending"].totalCount, 4, "pending tag total counts");
  });

  test("forEachTracked", function (assert) {
    const trackingState = TopicTrackingState.create();

    trackingState.loadStates([
      {
        topic_id: 1,
        last_read_post_number: null,
        tags: ["foo", "new"],
      },
      {
        topic_id: 2,
        last_read_post_number: null,
        tags: ["new"],
      },
      {
        topic_id: 3,
        last_read_post_number: null,
        tags: ["random"],
        created_in_new_period: true,
      },
      {
        topic_id: 4,
        last_read_post_number: 1,
        highest_post_number: 7,
        category_id: 7,
        tags: ["bug"],
        notification_level: NotificationLevels.TRACKING,
        unread_not_too_old: true,
      },
      {
        topic_id: 5,
        last_read_post_number: 1,
        highest_post_number: 7,
        tags: ["bar", "bug"],
        category_id: 7,
        notification_level: NotificationLevels.TRACKING,
        unread_not_too_old: true,
      },
      {
        topic_id: 6,
        last_read_post_number: 1,
        highest_post_number: 7,
        tags: null,
        notification_level: NotificationLevels.TRACKING,
      },
    ]);

    let randomUnread = 0,
      randomNew = 0,
      sevenUnread = 0,
      sevenNew = 0;

    trackingState.forEachTracked((topic, isNew, isUnread) => {
      if (topic.category_id === 7) {
        if (isNew) {
          sevenNew += 1;
        }
        if (isUnread) {
          sevenUnread += 1;
        }
      }

      if (topic.tags && topic.tags.indexOf("random") > -1) {
        if (isNew) {
          randomNew += 1;
        }
        if (isUnread) {
          randomUnread += 1;
        }
      }
    });

    assert.equal(randomNew, 1, "random tag new");
    assert.equal(randomUnread, 0, "random tag unread");
    assert.equal(sevenNew, 0, "category seven new");
    assert.equal(sevenUnread, 2, "category seven unread");
  });

  test("sync - delayed new topics for backend list are removed", function (assert) {
    const trackingState = TopicTrackingState.create();
    trackingState.loadStates([{ last_read_post_number: null, topic_id: 111 }]);

    trackingState.updateSeen(111, 7);
    const list = {
      topics: [
        {
          highest_post_number: null,
          id: 111,
          unread_posts: 10,
        },
      ],
    };

    trackingState.sync(list, "new");
    assert.equal(
      list.topics.length,
      0,
      "expect new topic to be removed as it was seen"
    );
  });

  test("sync - delayed unread topics for backend list are marked seen", function (assert) {
    const trackingState = TopicTrackingState.create();
    trackingState.loadStates([{ last_read_post_number: null, topic_id: 111 }]);

    trackingState.updateSeen(111, 7);
    const list = {
      topics: [
        Topic.create({
          highest_post_number: null,
          id: 111,
          unread_posts: 10,
          unseen: true,
          prevent_sync: false,
        }),
      ],
    };

    trackingState.sync(list, "unread");
    assert.equal(
      list.topics[0].unseen,
      false,
      "expect unread topic to be marked as seen"
    );
    assert.equal(
      list.topics[0].prevent_sync,
      true,
      "expect unread topic to be marked as prevent_sync"
    );
  });

  test("sync - remove topic from state for performance if it is seen and has no unread or new posts and there are too many tracked topics in memory", function (assert) {
    const trackingState = TopicTrackingState.create();
    trackingState.loadStates([{ topic_id: 111 }, { topic_id: 222 }]);
    trackingState.set("_trackedTopicLimit", 1);

    const list = {
      topics: [
        Topic.create({
          id: 111,
          unseen: false,
          seen: true,
          unread_posts: 0,
          prevent_sync: false,
        }),
      ],
    };

    trackingState.sync(list, "unread");
    assert.notOk(
      trackingState.states.has("t111"),
      "expect state for topic 111 to be deleted"
    );

    trackingState.loadStates([{ topic_id: 111 }, { topic_id: 222 }]);
    trackingState.set("_trackedTopicLimit", 5);
    trackingState.sync(list, "unread");
    assert.ok(
      trackingState.states.has("t111"),
      "expect state for topic 111 not to be deleted"
    );
  });

  test("sync - updates state to match list topic for unseen and unread/new topics", function (assert) {
    const trackingState = TopicTrackingState.create();
    trackingState.loadStates([
      { topic_id: 111, last_read_post_number: 0 },
      { topic_id: 222, last_read_post_number: 1 },
    ]);

    const list = {
      topics: [
        Topic.create({
          id: 111,
          unseen: true,
          seen: false,
          unread_posts: 0,
          highest_post_number: 20,
          category_id: 1,
          tags: ["pending"],
        }),
        Topic.create({
          id: 222,
          unseen: false,
          seen: true,
          unread_posts: 3,
          highest_post_number: 20,
        }),
      ],
    };

    trackingState.sync(list, "unread");

    let state111 = trackingState.findState(111);
    let state222 = trackingState.findState(222);
    assert.equal(
      state111.last_read_post_number,
      null,
      "unseen topics get last_read_post_number reset to null"
    );
    assert.propEqual(
      getProperties(state111, "highest_post_number", "tags", "category_id"),
      { highest_post_number: 20, tags: ["pending"], category_id: 1 },
      "highest_post_number, category, and tags are set for a topic"
    );
    assert.equal(
      state222.last_read_post_number,
      17,
      "last_read_post_number is highest_post_number - (unread + new)"
    );
  });

  test("sync - states missing from the topic list are updated based on the selected filter", function (assert) {
    const trackingState = TopicTrackingState.create();
    trackingState.loadStates([
      {
        topic_id: 111,
        last_read_post_number: 4,
        highest_post_number: 5,
        notification_level: NotificationLevels.TRACKING,
        unread_not_too_old: true,
      },
      {
        topic_id: 222,
        last_read_post_number: null,
        seen: false,
        notification_level: NotificationLevels.TRACKING,
        created_in_new_period: true,
      },
    ]);

    const list = {
      topics: [],
    };

    trackingState.sync(list, "unread");
    assert.equal(
      trackingState.findState(111).last_read_post_number,
      5,
      "last_read_post_number set to highest post number to pretend read"
    );

    trackingState.sync(list, "new");
    assert.equal(
      trackingState.findState(222).last_read_post_number,
      1,
      "last_read_post_number set to 1 to pretend not new"
    );
  });

  discourseModule(
    "establishChannels - unread message payload processed",
    function (unreadHooks) {
      let trackingState;
      let unreadTopicPayload = {
        topic_id: 111,
        message_type: "unread",
        payload: {
          topic_id: 111,
          category_id: 123,
          topic_tag_ids: [44],
          tags: ["pending"],
          last_read_post_number: 4,
          highest_post_number: 10,
          created_at: "2012-11-31 12:00:00 UTC",
          archetype: "regular",
          notification_level: NotificationLevels.TRACKING,
        },
      };
      let currentUser;

      unreadHooks.beforeEach(function () {
        currentUser = User.create({
          username: "chuck",
        });
        User.resetCurrent(currentUser);

        trackingState = TopicTrackingState.create({
          messageBus: MessageBus,
          currentUser,
          siteSettings: this.siteSettings,
        });
        trackingState.establishChannels();
        trackingState.loadStates([
          {
            topic_id: 111,
            last_read_post_number: 4,
            highest_post_number: 4,
            notification_level: NotificationLevels.TRACKING,
          },
        ]);
      });

      test("message count is incremented and callback is called", function (assert) {
        let messageIncrementCalled = false;
        trackingState.onMessageIncrement(() => {
          messageIncrementCalled = true;
        });
        publishToMessageBus("/topic-tracking-state", unreadTopicPayload);
        assert.equal(
          trackingState.messageCount,
          1,
          "message count incremented"
        );
        assert.equal(
          messageIncrementCalled,
          true,
          "message increment callback called"
        );
      });

      test("state is modified and callback is called", function (assert) {
        let stateCallbackCalled = false;
        trackingState.onStateChange(() => {
          stateCallbackCalled = true;
        });
        publishToMessageBus("/topic-tracking-state", unreadTopicPayload);
        assert.deepEqual(
          trackingState.findState(111),
          {
            topic_id: 111,
            category_id: 123,
            topic_tag_ids: [44],
            tags: ["pending"],
            last_read_post_number: 4,
            highest_post_number: 10,
            notification_level: NotificationLevels.TRACKING,
            created_at: "2012-11-31 12:00:00 UTC",
            archetype: "regular",
          },
          "topic state updated"
        );
        assert.equal(stateCallbackCalled, true, "state change callback called");
      });

      test("adds incoming so it is counted in topic lists", function (assert) {
        trackingState.trackIncoming("all");
        publishToMessageBus("/topic-tracking-state", unreadTopicPayload);
        assert.deepEqual(
          trackingState.newIncoming,
          [111],
          "unread topic is incoming"
        );
        assert.equal(
          trackingState.incomingCount,
          1,
          "incoming count is increased"
        );
      });

      test("dismisses new topic", function (assert) {
        trackingState.loadStates([
          {
            last_read_post_number: null,
            topic_id: 112,
            notification_level: NotificationLevels.TRACKING,
            category_id: 1,
            is_seen: false,
            tags: ["foo"],
          },
        ]);

        publishToMessageBus("/topic-tracking-state", {
          message_type: "dismiss_new",
          payload: { topic_ids: [112] },
        });
        assert.equal(trackingState.findState(112).is_seen, true);
      });

      test("marks a topic as read", function (assert) {
        trackingState.loadStates([
          {
            last_read_post_number: null,
            topic_id: 112,
            notification_level: NotificationLevels.TRACKING,
            category_id: 1,
            is_seen: false,
            tags: ["foo"],
          },
        ]);
        publishToMessageBus("/topic-tracking-state", {
          message_type: "read",
          topic_id: 112,
          payload: {
            topic_id: 112,
            last_read_post_number: 4,
            highest_post_number: 4,
            notification_level: NotificationLevels.TRACKING,
          },
        });
        assert.propEqual(
          getProperties(
            trackingState.findState(112),
            "highest_post_number",
            "last_read_post_number"
          ),
          { highest_post_number: 4, last_read_post_number: 4 },
          "highest_post_number and last_read_post_number are set for a topic"
        );
        assert.deepEqual(
          trackingState.findState(112).tags,
          ["foo"],
          "tags are not accidentally cleared"
        );
      });
    }
  );

  discourseModule(
    "establishChannels - new message payload processed",
    function (establishChannelsHooks) {
      let trackingState;
      let newTopicPayload = {
        topic_id: 222,
        message_type: "new_topic",
        payload: {
          topic_id: 222,
          category_id: 123,
          topic_tag_ids: [44],
          tags: ["pending"],
          last_read_post_number: null,
          highest_post_number: 1,
          created_at: "2012-11-31 12:00:00 UTC",
          archetype: "regular",
        },
      };
      let currentUser;

      establishChannelsHooks.beforeEach(function () {
        currentUser = User.create({
          username: "chuck",
        });
        User.resetCurrent(currentUser);

        trackingState = TopicTrackingState.create({
          messageBus: MessageBus,
          currentUser,
          siteSettings: this.siteSettings,
        });
        trackingState.establishChannels();
      });

      test("topics in muted categories do not get added to the state", function (assert) {
        trackingState.currentUser.set("muted_category_ids", [123]);
        publishToMessageBus("/topic-tracking-state", newTopicPayload);
        assert.equal(
          trackingState.findState(222),
          null,
          "the new topic is not in the state"
        );
      });

      test("topics in muted tags do not get added to the state", function (assert) {
        trackingState.currentUser.set("muted_tag_ids", [44]);
        publishToMessageBus("/topic-tracking-state", newTopicPayload);
        assert.equal(
          trackingState.findState(222),
          null,
          "the new topic is not in the state"
        );
      });

      test("message count is incremented and callback is called", function (assert) {
        let messageIncrementCalled = false;
        trackingState.onMessageIncrement(() => {
          messageIncrementCalled = true;
        });
        publishToMessageBus("/topic-tracking-state", newTopicPayload);
        assert.equal(
          trackingState.messageCount,
          1,
          "message count incremented"
        );
        assert.equal(
          messageIncrementCalled,
          true,
          "message increment callback called"
        );
      });

      test("state is modified and callback is called", function (assert) {
        let stateCallbackCalled = false;
        trackingState.onStateChange(() => {
          stateCallbackCalled = true;
        });
        publishToMessageBus("/topic-tracking-state", newTopicPayload);
        assert.deepEqual(
          trackingState.findState(222),
          {
            topic_id: 222,
            category_id: 123,
            topic_tag_ids: [44],
            tags: ["pending"],
            last_read_post_number: null,
            highest_post_number: 1,
            created_at: "2012-11-31 12:00:00 UTC",
            archetype: "regular",
          },
          "new topic loaded into state"
        );
        assert.equal(stateCallbackCalled, true, "state change callback called");
      });

      test("adds incoming so it is counted in topic lists", function (assert) {
        trackingState.trackIncoming("all");
        publishToMessageBus("/topic-tracking-state", newTopicPayload);
        assert.deepEqual(
          trackingState.newIncoming,
          [222],
          "new topic is incoming"
        );
        assert.equal(
          trackingState.incomingCount,
          1,
          "incoming count is increased"
        );
      });
    }
  );

  test("establishChannels - delete message payload processed", function (assert) {
    const trackingState = TopicTrackingState.create({ messageBus: MessageBus });
    trackingState.establishChannels();

    trackingState.loadStates([
      {
        topic_id: 111,
        deleted: false,
      },
    ]);

    publishToMessageBus("/topic-tracking-state", {
      message_type: "delete",
      topic_id: 111,
    });

    assert.equal(
      trackingState.findState(111).deleted,
      true,
      "marks the topic as deleted"
    );
    assert.equal(trackingState.messageCount, 1, "increments message count");
  });

  test("establishChannels - recover message payload processed", function (assert) {
    const trackingState = TopicTrackingState.create({ messageBus: MessageBus });
    trackingState.establishChannels();

    trackingState.loadStates([
      {
        topic_id: 111,
        deleted: true,
      },
    ]);

    publishToMessageBus("/topic-tracking-state", {
      message_type: "recover",
      topic_id: 111,
    });

    assert.equal(
      trackingState.findState(111).deleted,
      false,
      "marks the topic as not deleted"
    );
    assert.equal(trackingState.messageCount, 1, "increments message count");
  });

  test("establishChannels - destroy message payload processed", function (assert) {
    sinon.stub(DiscourseURL, "router").value({
      currentRoute: { parent: { name: "topic", params: { id: 111 } } },
    });
    sinon.stub(DiscourseURL, "redirectTo");

    const trackingState = TopicTrackingState.create({ messageBus: MessageBus });
    trackingState.establishChannels();
    trackingState.loadStates([
      {
        topic_id: 111,
        deleted: false,
      },
    ]);

    publishToMessageBus("/topic-tracking-state", {
      message_type: "destroy",
      topic_id: 111,
    });

    assert.equal(trackingState.messageCount, 1, "increments message count");
    assert.ok(
      DiscourseURL.redirectTo.calledWith("/"),
      "redirect to / because topic is destroyed"
    );
  });

  test("subscribe to category", function (assert) {
    const store = createStore();
    const darth = store.createRecord("category", { id: 1, slug: "darth" }),
      luke = store.createRecord("category", {
        id: 2,
        slug: "luke",
        parentCategory: darth,
      }),
      categoryList = [darth, luke];

    sinon.stub(Category, "list").returns(categoryList);

    const trackingState = TopicTrackingState.create();

    trackingState.trackIncoming("c/darth/1/l/latest");

    trackingState.notifyIncoming({
      message_type: "new_topic",
      topic_id: 1,
      payload: { category_id: 2, topic_id: 1 },
    });
    trackingState.notifyIncoming({
      message_type: "new_topic",
      topic_id: 2,
      payload: { category_id: 3, topic_id: 2 },
    });
    trackingState.notifyIncoming({
      message_type: "new_topic",
      topic_id: 3,
      payload: { category_id: 1, topic_id: 3 },
    });

    assert.equal(
      trackingState.get("incomingCount"),
      2,
      "expect to properly track incoming for category"
    );

    trackingState.resetTracking();
    trackingState.trackIncoming("c/darth/luke/2/l/latest");

    trackingState.notifyIncoming({
      message_type: "new_topic",
      topic_id: 1,
      payload: { category_id: 2, topic_id: 1 },
    });
    trackingState.notifyIncoming({
      message_type: "new_topic",
      topic_id: 2,
      payload: { category_id: 3, topic_id: 2 },
    });
    trackingState.notifyIncoming({
      message_type: "new_topic",
      topic_id: 3,
      payload: { category_id: 1, topic_id: 3 },
    });

    assert.equal(
      trackingState.get("incomingCount"),
      1,
      "expect to properly track incoming for subcategory"
    );
  });

  test("getSubCategoryIds", function (assert) {
    const store = createStore();
    const foo = store.createRecord("category", { id: 1, slug: "foo" });
    const bar = store.createRecord("category", {
      id: 2,
      slug: "bar",
      parent_category_id: foo.id,
    });
    const baz = store.createRecord("category", {
      id: 3,
      slug: "baz",
      parent_category_id: bar.id,
    });
    sinon.stub(Category, "list").returns([foo, bar, baz]);

    const trackingState = TopicTrackingState.create();
    assert.deepEqual(Array.from(trackingState.getSubCategoryIds(1)), [1, 2, 3]);
    assert.deepEqual(Array.from(trackingState.getSubCategoryIds(2)), [2, 3]);
    assert.deepEqual(Array.from(trackingState.getSubCategoryIds(3)), [3]);
  });

  test("countNew", function (assert) {
    const store = createStore();
    const foo = store.createRecord("category", {
      id: 1,
      slug: "foo",
    });
    const bar = store.createRecord("category", {
      id: 2,
      slug: "bar",
      parent_category_id: foo.id,
    });
    const baz = store.createRecord("category", {
      id: 3,
      slug: "baz",
      parent_category_id: bar.id,
    });
    const qux = store.createRecord("category", {
      id: 4,
      slug: "qux",
    });
    sinon.stub(Category, "list").returns([foo, bar, baz, qux]);

    let currentUser = User.create({
      username: "chuck",
      muted_category_ids: [4],
    });

    const trackingState = TopicTrackingState.create({ currentUser });

    assert.equal(trackingState.countNew(1), 0);
    assert.equal(trackingState.countNew(2), 0);
    assert.equal(trackingState.countNew(3), 0);

    trackingState.states.set("t112", {
      last_read_post_number: null,
      id: 112,
      notification_level: NotificationLevels.TRACKING,
      category_id: 2,
      created_in_new_period: true,
    });

    assert.equal(trackingState.countNew(1), 1);
    assert.equal(trackingState.countNew(1, undefined, true), 0);
    assert.equal(trackingState.countNew(1, "missing-tag"), 0);
    assert.equal(trackingState.countNew(2), 1);
    assert.equal(trackingState.countNew(3), 0);

    trackingState.states.set("t113", {
      last_read_post_number: null,
      id: 113,
      notification_level: NotificationLevels.TRACKING,
      category_id: 3,
      tags: ["amazing"],
      created_in_new_period: true,
    });

    assert.equal(trackingState.countNew(1), 2);
    assert.equal(trackingState.countNew(2), 2);
    assert.equal(trackingState.countNew(3), 1);
    assert.equal(trackingState.countNew(3, "amazing"), 1);
    assert.equal(trackingState.countNew(3, "missing"), 0);

    trackingState.states.set("t111", {
      last_read_post_number: null,
      id: 111,
      notification_level: NotificationLevels.TRACKING,
      category_id: 1,
      created_in_new_period: true,
    });

    assert.equal(trackingState.countNew(1), 3);
    assert.equal(trackingState.countNew(2), 2);
    assert.equal(trackingState.countNew(3), 1);

    trackingState.states.set("t115", {
      last_read_post_number: null,
      id: 115,
      category_id: 4,
    });
    assert.equal(trackingState.countNew(4), 0);
  });

  test("mute and unmute topic", function (assert) {
    let currentUser = User.create({
      username: "chuck",
      muted_category_ids: [],
    });

    const trackingState = TopicTrackingState.create({ currentUser });

    trackingState.trackMutedOrUnmutedTopic({
      topic_id: 1,
      message_type: "muted",
    });
    assert.equal(currentUser.muted_topics[0].topicId, 1);

    trackingState.trackMutedOrUnmutedTopic({
      topic_id: 2,
      message_type: "unmuted",
    });
    assert.equal(currentUser.unmuted_topics[0].topicId, 2);

    trackingState.pruneOldMutedAndUnmutedTopics();
    assert.equal(trackingState.isMutedTopic(1), true);
    assert.equal(trackingState.isUnmutedTopic(2), true);

    this.clock.tick(60000);
    trackingState.pruneOldMutedAndUnmutedTopics();
    assert.equal(trackingState.isMutedTopic(1), false);
    assert.equal(trackingState.isUnmutedTopic(2), false);
  });
});
