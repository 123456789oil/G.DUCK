import Controller from "@ember/controller";
import { action } from "@ember/object";
import { equal } from "@ember/object/computed";
import discourseComputed from "discourse-common/utils/decorators";
import { extractError } from "discourse/lib/ajax-error";
import { bufferedProperty } from "discourse/mixins/buffered-content";
import ModalFunctionality from "discourse/mixins/modal-functionality";
import Group from "discourse/models/group";
import Invite from "discourse/models/invite";
import I18n from "I18n";

export default Controller.extend(
  ModalFunctionality,
  bufferedProperty("invite"),
  {
    allGroups: null,

    invite: null,
    invites: null,

    autogenerated: false,
    showAdvanced: false,

    type: "link",

    topicId: null,
    topicTitle: null,
    groupIds: null,

    onShow() {
      Group.findAll().then((groups) => {
        this.set("allGroups", groups.filterBy("automatic", false));
      });

      this.setProperties({
        autogenerated: false,
        showAdvanced: false,
      });

      this.setInvite(Invite.create());
    },

    onClose() {
      if (this.autogenerated) {
        this.invite
          .destroy()
          .then(() => this.invites.removeObject(this.invite));
      }
    },

    setInvite(invite) {
      this.setProperties({
        invite,
        type: invite.email ? "email" : "link",
        groupIds: invite.groups ? invite.groups.map((g) => g.id) : null,
      });

      if (invite.topics && invite.topics.length > 0) {
        this.setProperties({
          topicId: invite.topics[0].id,
          topicTitle: invite.topics[0].title,
        });
      } else {
        this.setProperties({ topicId: null, topicTitle: null });
      }
    },

    save(autogenerated) {
      const newRecord =
        (this.autogenerated || !this.invite.id) && !autogenerated;

      this.set("autogenerated", autogenerated);

      const data = {
        group_ids: this.groupIds,
        topic_id: this.topicId,
        expires_at: this.buffered.get("expires_at"),
      };

      if (this.type === "link") {
        data.max_redemptions_allowed = this.buffered.get(
          "max_redemptions_allowed"
        );
      } else if (this.type === "email") {
        data.email = this.buffered.get("email");
        data.custom_message = this.buffered.get("custom_message");
      }

      return this.invite
        .save(data)
        .then(() => {
          this.rollbackBuffer();

          if (newRecord) {
            this.invites.unshiftObject(this.invite);
          }

          if (!this.autogenerated) {
            this.appEvents.trigger("modal-body:flash", {
              text: I18n.t("user.invited.invite.invite_saved"),
              messageClass: "success",
            });
          }
        })
        .catch((e) =>
          this.appEvents.trigger("modal-body:flash", {
            text: extractError(e),
            messageClass: "error",
          })
        );
    },

    isLink: equal("type", "link"),
    isEmail: equal("type", "email"),

    @discourseComputed("buffered.expires_at")
    expiresAtRelative(expires_at) {
      return moment.duration(moment(expires_at) - moment()).humanize();
    },

    @discourseComputed("type", "buffered.email")
    disabled(type, email) {
      if (type === "email") {
        return !email;
      }

      return false;
    },

    @discourseComputed("type", "invite.email", "buffered.email")
    saveLabel(type, email, bufferedEmail) {
      return type === "email" && email !== bufferedEmail
        ? "user.invited.invite.send_invite_email"
        : "user.invited.invite.save_invite";
    },

    @action
    saveInvite() {
      this.appEvents.trigger("modal-body:clearFlash");

      this.save();
    },
  }
);
