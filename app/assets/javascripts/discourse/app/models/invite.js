import EmberObject from "@ember/object";
import { Promise } from "rsvp";
import User from "discourse/models/user";
import { ajax } from "discourse/lib/ajax";
import { isNone } from "@ember/utils";
import { popupAjaxError } from "discourse/lib/ajax-error";
import { userPath } from "discourse/lib/url";

const Invite = EmberObject.extend({
  destroy() {
    return ajax("/invites", {
      type: "DELETE",
      data: { id: this.id },
    }).then(() => this.set("destroyed", true));
  },

  reinvite() {
    return ajax("/invites/reinvite", {
      type: "POST",
      data: { email: this.email },
    })
      .then(() => this.set("reinvited", true))
      .catch(popupAjaxError);
  },
});

Invite.reopenClass({
  create() {
    const result = this._super.apply(this, arguments);
    if (result.user) {
      result.user = User.create(result.user);
    }
    return result;
  },

  findInvitedBy(user, filter, search, offset) {
    if (!user) {
      Promise.resolve();
    }

    const data = {};
    if (!isNone(filter)) {
      data.filter = filter;
    }
    if (!isNone(search)) {
      data.search = search;
    }
    data.offset = offset || 0;

    return ajax(userPath(`${user.username_lower}/invited.json`), {
      data,
    }).then((result) => {
      result.invites = result.invites.map((i) => Invite.create(i));
      return EmberObject.create(result);
    });
  },

  reinviteAll() {
    return ajax("/invites/reinvite-all", { type: "POST" });
  },

  destroyAll() {
    return ajax("/invites/destroy-all", { type: "POST" });
  },
});

export default Invite;
