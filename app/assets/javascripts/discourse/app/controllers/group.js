import Controller, { inject as controller } from "@ember/controller";
import EmberObject, { action } from "@ember/object";
import I18n from "I18n";
import discourseComputed from "discourse-common/utils/decorators";
import { capitalize } from "@ember/string";
import { inject as service } from "@ember/service";
import { htmlSafe } from "@ember/template";
import { iconHTML } from "discourse-common/lib/icon-library";

const Tab = EmberObject.extend({
  init() {
    this._super(...arguments);

    this.setProperties({
      route: this.route || `group.${this.name}`,
      message: I18n.t(`groups.${this.i18nKey || this.name}`),
    });
  },
});

export default Controller.extend({
  application: controller(),
  dialog: service(),
  counts: null,
  showing: "members",
  destroying: null,
  showTooltip: false,

  @discourseComputed(
    "showMessages",
    "model.user_count",
    "model.request_count",
    "canManageGroup",
    "model.allow_membership_requests"
  )
  tabs(
    showMessages,
    userCount,
    requestCount,
    canManageGroup,
    allowMembershipRequests
  ) {
    const membersTab = Tab.create({
      name: "members",
      route: "group.index",
      icon: "users",
      i18nKey: "members.title",
      count: userCount,
    });

    const defaultTabs = [membersTab, Tab.create({ name: "activity" })];

    if (canManageGroup && allowMembershipRequests) {
      defaultTabs.push(
        Tab.create({
          name: "requests",
          i18nKey: "requests.title",
          icon: "user-plus",
          count: requestCount,
        })
      );
    }

    if (showMessages) {
      defaultTabs.push(
        Tab.create({
          name: "messages",
          i18nKey: "messages",
        })
      );
    }

    if (canManageGroup) {
      defaultTabs.push(
        Tab.create({
          name: "manage",
          i18nKey: "manage.title",
          icon: "wrench",
        })
      );
    }

    defaultTabs.push(
      Tab.create({
        name: "permissions",
        i18nKey: "permissions.title",
      })
    );

    return defaultTabs;
  },

  @discourseComputed(
    "model.has_messages",
    "model.is_group_user",
    "currentUser.can_send_private_messages"
  )
  showMessages(hasMessages, isGroupUser) {
    if (!this.currentUser?.can_send_private_messages) {
      return false;
    }

    if (!hasMessages) {
      return false;
    }

    return isGroupUser || (this.currentUser && this.currentUser.admin);
  },

  @discourseComputed("model.displayName", "model.full_name")
  groupName(displayName, fullName) {
    return capitalize(fullName || displayName);
  },

  @discourseComputed("model.messageable")
  displayGroupMessageButton(messageable) {
    return this.currentUser && messageable;
  },

  @discourseComputed("model", "model.automatic")
  canManageGroup(model, automatic) {
    return (
      this.currentUser &&
      (this.currentUser.canManageGroup(model) ||
        (model.can_admin_group && automatic))
    );
  },

  @action
  messageGroup() {
    this.send("createNewMessageViaParams", {
      recipients: this.get("model.name"),
      hasGroups: true,
    });
  },

  @action
  destroyGroup() {
    this.set("destroying", true);

    const model = this.model;
    const title = I18n.t("admin.groups.delete_confirm", { group: model.name });

    const membersWarning = model.members.length
      ? `<p>
          ${iconHTML("users")}
          ${I18n.t("admin.groups.delete_details", {
            count: model.members.length,
          })} 
         </p>`
      : "";

    const messageWarning =
      model.has_messages && model.message_count > 0
        ? `<p>${iconHTML("envelope")} 
            ${I18n.t("admin.groups.delete_with_messages_confirm", {
              count: model.message_count,
            })}
          </p>`
        : "";

    const undoWarning = `<p> 
        ${iconHTML("exclamation-triangle")}  
        ${I18n.t("admin.groups.delete_warning")}
        </p>`;

    const message = htmlSafe(
      `${membersWarning} ${messageWarning} ${undoWarning}`
    );

    this.dialog.deleteConfirm({
      title,
      message,
      didConfirm: () => {
        model
          .destroy()
          .then(() => this.transitionToRoute("groups.index"))
          .catch((error) => {
            // eslint-disable-next-line no-console
            console.error(error);
            this.dialog.alert(I18n.t("admin.groups.delete_failed"));
          })
          .finally(() => this.set("destroying", false));
      },
      didCancel: () => this.set("destroying", false),
    });
  },

  @action
  toggleDeleteTooltip() {
    this.toggleProperty("showTooltip");
  },
});
