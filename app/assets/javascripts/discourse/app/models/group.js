import EmberObject from "@ember/object";
import { equal } from "@ember/object/computed";
import { isEmpty } from "@ember/utils";
import discourseComputed, { observes } from "discourse-common/utils/decorators";
import { ajax } from "discourse/lib/ajax";
import Category from "discourse/models/category";
import GroupHistory from "discourse/models/group-history";
import RestModel from "discourse/models/rest";
import Topic from "discourse/models/topic";
import User from "discourse/models/user";
import { Promise } from "rsvp";
import DiscourseURL from "discourse/lib/url";

const Group = RestModel.extend({
  user_count: 0,
  limit: null,
  offset: null,

  request_count: 0,
  requestersLimit: null,
  requestersOffset: null,

  init() {
    this._super(...arguments);
    this.setProperties({ members: [], requesters: [] });
  },

  @discourseComputed("automatic_membership_email_domains")
  emailDomains(value) {
    return isEmpty(value) ? "" : value;
  },

  @discourseComputed("automatic")
  type(automatic) {
    return automatic ? "automatic" : "custom";
  },

  findMembers(params, refresh) {
    if (isEmpty(this.name) || !this.can_see_members) {
      return Promise.reject();
    }

    if (refresh) {
      this.setProperties({ limit: null, offset: null });
    }

    params = Object.assign(
      { offset: (this.offset || 0) + (this.limit || 0) },
      params
    );

    return Group.loadMembers(this.name, params).then(result => {
      const ownerIds = new Set();
      result.owners.forEach(owner => ownerIds.add(owner.id));

      const members = refresh ? [] : this.members;
      members.pushObjects(
        result.members.map(member => {
          member.owner = ownerIds.has(member.id);
          return User.create(member);
        })
      );

      this.setProperties({
        members,
        user_count: result.meta.total,
        limit: result.meta.limit,
        offset: result.meta.offset
      });
    });
  },

  findRequesters(params, refresh) {
    if (isEmpty(this.name) || !this.can_see_members) {
      return Promise.reject();
    }

    if (refresh) {
      this.setProperties({ requestersOffset: null, requestersLimit: null });
    }

    params = Object.assign(
      {
        offset: (this.requestersOffset || 0) + (this.requestersLimit || 0),
        requesters: true
      },
      params
    );

    return Group.loadMembers(this.name, params).then(result => {
      const requesters = refresh ? [] : this.requesters;
      requesters.pushObjects(result.members.map(m => User.create(m)));

      this.setProperties({
        requesters,
        request_count: result.meta.total,
        requestersLimit: result.meta.limit,
        requestersOffset: result.meta.offset
      });
    });
  },

  removeOwner(member) {
    return ajax(`/admin/groups/${this.id}/owners.json`, {
      type: "DELETE",
      data: { user_id: member.id }
    }).then(() => this.findMembers({}, true));
  },

  removeMember(member, params) {
    return ajax(`/groups/${this.id}/members.json`, {
      type: "DELETE",
      data: { user_id: member.id }
    }).then(() => this.findMembers(params, true));
  },

  addMembers(usernames, filter, notifyUsers, emails = []) {
    return ajax(`/groups/${this.id}/members.json`, {
      type: "PUT",
      data: { usernames, emails, notify_users: notifyUsers }
    }).then(response => {
      if (filter) {
        this._filterMembers(response);
      } else {
        this.findMembers();
      }
    });
  },

  addOwners(usernames, filter, notifyUsers) {
    return ajax(`/admin/groups/${this.id}/owners.json`, {
      type: "PUT",
      data: { group: { usernames, notify_users: notifyUsers } }
    }).then(response => {
      if (filter) {
        this._filterMembers(response);
      } else {
        this.findMembers({}, true);
      }
    });
  },

  _filterMembers(response) {
    return this.findMembers({ filter: response.usernames.join(",") });
  },

  @discourseComputed("display_name", "name")
  displayName(groupDisplayName, name) {
    return groupDisplayName || name;
  },

  @discourseComputed("flair_bg_color")
  flairBackgroundHexColor(flairBgColor) {
    return flairBgColor
      ? flairBgColor.replace(new RegExp("[^0-9a-fA-F]", "g"), "")
      : null;
  },

  @discourseComputed("flair_color")
  flairHexColor(flairColor) {
    return flairColor
      ? flairColor.replace(new RegExp("[^0-9a-fA-F]", "g"), "")
      : null;
  },

  canEveryoneMention: equal("mentionable_level", 99),

  @discourseComputed("visibility_level")
  isPrivate(visibilityLevel) {
    return visibilityLevel > 1;
  },

  @observes("isPrivate", "canEveryoneMention")
  _updateAllowMembershipRequests() {
    if (this.isPrivate || !this.canEveryoneMention) {
      this.set("allow_membership_requests", false);
    }
  },

  @observes("watching_category_ids")
  _updateWatchingCategories() {
    this.set(
      "watchingCategories",
      Category.findByIds(this.watching_category_ids)
    );
  },

  @observes("tracking_category_ids")
  _updateTrackingCategories() {
    this.set(
      "trackingCategories",
      Category.findByIds(this.tracking_category_ids)
    );
  },

  @observes("watching_first_post_category_ids")
  _updateWatchingFirstPostCategories() {
    this.set(
      "watchingFirstPostCategories",
      Category.findByIds(this.watching_first_post_category_ids)
    );
  },

  @observes("muted_category_ids")
  _updateMutedCategories() {
    this.set("mutedCategories", Category.findByIds(this.muted_category_ids));
  },

  asJSON() {
    const attrs = {
      name: this.name,
      mentionable_level: this.mentionable_level,
      messageable_level: this.messageable_level,
      visibility_level: this.visibility_level,
      members_visibility_level: this.members_visibility_level,
      automatic_membership_email_domains: this.emailDomains,
      title: this.title,
      primary_group: !!this.primary_group,
      grant_trust_level: this.grant_trust_level,
      incoming_email: this.incoming_email,
      smtp_server: this.smtp_server,
      smtp_port: this.smtp_port,
      smtp_ssl: this.smtp_ssl,
      imap_server: this.imap_server,
      imap_port: this.imap_port,
      imap_ssl: this.imap_ssl,
      imap_mailbox_name: this.imap_mailbox_name,
      email_username: this.email_username,
      email_password: this.email_password,
      flair_icon: null,
      flair_upload_id: null,
      flair_bg_color: this.flairBackgroundHexColor,
      flair_color: this.flairHexColor,
      bio_raw: this.bio_raw,
      public_admission: this.public_admission,
      public_exit: this.public_exit,
      allow_membership_requests: this.allow_membership_requests,
      full_name: this.full_name,
      default_notification_level: this.default_notification_level,
      membership_request_template: this.membership_request_template,
      publish_read_state: this.publish_read_state
    };

    ["muted", "watching", "tracking", "watching_first_post"].forEach(s => {
      let prop =
        s === "watching_first_post"
          ? "watchingFirstPostCategories"
          : s + "Categories";

      let categories = this.get(prop);

      if (categories) {
        attrs[s + "_category_ids"] =
          categories.length > 0 ? categories.map(c => c.get("id")) : [-1];
      }

      let tags = this.get(s + "_tags");

      if (tags) {
        attrs[s + "_tags"] = tags.length > 0 ? tags : [""];
      }
    });

    if (this.flair_type === "icon") {
      attrs["flair_icon"] = this.flair_icon;
    } else if (this.flair_type === "image") {
      attrs["flair_upload_id"] = this.flair_upload_id;
    }

    if (!this.id) {
      attrs["usernames"] = this.usernames;
      attrs["owner_usernames"] = this.ownerUsernames;
    }

    return attrs;
  },

  create() {
    return ajax("/admin/groups", {
      type: "POST",
      data: { group: this.asJSON() }
    }).then(resp => {
      this.setProperties({
        id: resp.basic_group.id,
        usernames: null,
        ownerUsernames: null
      });

      this.findMembers();
    });
  },

  save() {
    return ajax(`/groups/${this.id}`, {
      type: "PUT",
      data: { group: this.asJSON() }
    })
      .then(data => {
        if (data.route_to) {
          DiscourseURL.routeTo(data.route_to);
        }
      });
  },

  destroy() {
    if (!this.id) {
      return;
    }
    return ajax(`/admin/groups/${this.id}`, { type: "DELETE" });
  },

  findLogs(offset, filters) {
    return ajax(`/groups/${this.name}/logs.json`, {
      data: { offset, filters }
    }).then(results => {
      return EmberObject.create({
        logs: results["logs"].map(log => GroupHistory.create(log)),
        all_loaded: results["all_loaded"]
      });
    });
  },

  findPosts(opts) {
    opts = opts || {};
    const type = opts.type || "posts";
    const data = {};

    if (opts.beforePostId) {
      data.before_post_id = opts.beforePostId;
    }

    if (opts.categoryId) {
      data.category_id = parseInt(opts.categoryId, 10);
    }

    return ajax(`/groups/${this.name}/${type}.json`, { data }).then(posts => {
      return posts.map(p => {
        p.user = User.create(p.user);
        p.topic = Topic.create(p.topic);
        p.category = Category.findById(p.category_id);
        return EmberObject.create(p);
      });
    });
  },

  setNotification(notification_level, userId) {
    this.set("group_user.notification_level", notification_level);
    return ajax(`/groups/${this.name}/notifications`, {
      data: { notification_level, user_id: userId },
      type: "POST"
    });
  },

  requestMembership(reason) {
    return ajax(`/groups/${this.name}/request_membership`, {
      type: "POST",
      data: { reason }
    });
  }
});

Group.reopenClass({
  findAll(opts) {
    return ajax("/groups/search.json", { data: opts }).then(groups =>
      groups.map(g => Group.create(g))
    );
  },

  loadMembers(name, opts) {
    return ajax(`/groups/${name}/members.json`, { data: opts });
  },

  mentionable(name) {
    return ajax(`/groups/${name}/mentionable`);
  },

  messageable(name) {
    return ajax(`/groups/${name}/messageable`);
  },

  checkName(name) {
    return ajax("/groups/check-name", { data: { group_name: name } });
  }
});

export default Group;
