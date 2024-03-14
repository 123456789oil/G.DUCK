import { action } from "@ember/object";
import { service } from "@ember/service";
import BulkTopicActions from "discourse/components/modal/bulk-topic-actions";
import i18n from "discourse-common/helpers/i18n";
import DropdownSelectBoxComponent from "select-kit/components/dropdown-select-box";
import { _addBulkDropdownAction } from "discourse/components/modal/bulk-topic-actions";

const _customButtons = [];
const _customOnSelection = {};

export function _addBulkDropdownButton(opts) {
  _customButtons.push({
    id: opts.label,
    icon: opts.icon,
    name: i18n(opts.label),
    visible: opts.visible,
  });
  _addBulkDropdownAction(opts.label, opts.action);
  _customOnSelection[opts.label] = opts.label;
}

export default DropdownSelectBoxComponent.extend({
  classNames: ["bulk-select-topics-dropdown"],
  headerIcon: null,
  showFullTitle: true,
  selectKitOptions: {
    showCaret: true,
    showFullTitle: true,
    none: "select_kit.components.bulk_select_topics_dropdown.title",
  },

  modal: service(),
  router: service(),
  currentUser: service(),
  siteSettings: service(),

  computeContent() {
    let options = [];
    options = options.concat([
      {
        id: "update-category",
        icon: "pencil-alt",
        name: i18n("topic_bulk_actions.update_category.name"),
        description: i18n("topic_bulk_actions.update_category.description"),
      },
      {
        id: "update-notifications",
        icon: "d-regular",
        name: i18n("topic_bulk_actions.update_notifications.name"),
        description: i18n(
          "topic_bulk_actions.update_notifications.description"
        ),
      },
      {
        id: "reset-bump-dates",
        icon: "anchor",
        name: i18n("topic_bulk_actions.reset_bump_dates.name"),
        description: i18n("topic_bulk_actions.reset_bump_dates.description"),
      },
      {
        id: "defer",
        icon: "circle",
        name: i18n("topic_bulk_actions.defer.name"),
        description: i18n("topic_bulk_actions.defer.description"),
        visible: ({ currentUser }) => currentUser.user_option.enable_defer,
      },
      {
        id: "close-topics",
        icon: "lock",
        name: i18n("topic_bulk_actions.close_topics.name"),
      },
      {
        id: "archive-topics",
        icon: "folder",
        name: i18n("topic_bulk_actions.archive_topics.name"),
      },
      {
        id: "unlist-topics",
        icon: "far-eye-slash",
        name: i18n("topic_bulk_actions.unlist_topics.name"),
        visible: ({ topics }) =>
          topics.some((t) => t.visible) &&
          !topics.some((t) => t.isPrivateMessage),
      },
      {
        id: "relist-topics",
        icon: "far-eye",
        name: i18n("topic_bulk_actions.relist_topics.name"),
        visible: ({ topics }) =>
          topics.some((t) => !t.visible) &&
          !topics.some((t) => t.isPrivateMessage),
      },
      {
        id: "append-tags",
        icon: "tag",
        name: i18n("topic_bulk_actions.append_tags.name"),
        visible: ({ currentUser, siteSettings }) =>
          siteSettings.tagging_enabled && currentUser.canManageTopic,
      },
      {
        id: "replace-tags",
        icon: "tag",
        name: i18n("topic_bulk_actions.replace_tags.name"),
        visible: ({ currentUser, siteSettings }) =>
          siteSettings.tagging_enabled && currentUser.canManageTopic,
      },
      {
        id: "remove-tags",
        icon: "tag",
        name: i18n("topic_bulk_actions.remove_tags.name"),
        visible: ({ currentUser, siteSettings }) =>
          siteSettings.tagging_enabled && currentUser.canManageTopic,
      },
      {
        id: "delete-topics",
        icon: "trash-alt",
        name: i18n("topic_bulk_actions.delete_topics.name"),
        visible: ({ currentUser }) => currentUser.staff,
      },
    ]);

    return [...options, ..._customButtons].filter(({ visible }) => {
      if (visible) {
        return visible({
          topics: this.bulkSelectHelper.selected,
          currentUser: this.currentUser,
          siteSettings: this.siteSettings,
        });
      } else {
        return true;
      }
    });
  },

  showBulkTopicActionsModal(actionName, title, opts = {}) {
    let allowSilent = false;
    if (opts.allowSilent === true) {
      allowSilent = true;
    }
    if (opts.custom === true) {
      title = i18n(_customOnSelection[actionName]);
    } else {
      title = i18n(`topics.bulk.${title}`);
    }

    this.modal.show(BulkTopicActions, {
      model: {
        action: actionName,
        title: title,
        bulkSelectHelper: this.bulkSelectHelper,
        refreshClosure: () => this.router.refresh(),
        allowSilent,
        initialAction: "set-component",
      },
    });
  },

  @action
  onSelect(id) {
    switch (id) {
      case "update-category":
        this.showBulkTopicActionsModal(id, "change_category");
        break;
      case "update-notifications":
        this.showBulkTopicActionsModal(id, "notification_level");
        break;
      case "close-topics":
        this.showBulkTopicActionsModal("close", "close_topics", {
          allowSilent: true,
        });
        break;
      case "archive-topics":
        this.showBulkTopicActionsModal("archive", "archive_topics");
        break;
      case "unlist-topics":
        this.showBulkTopicActionsModal("unlist", "unlist_topics");
        break;
      case "relist-topics":
        this.showBulkTopicActionsModal("relist", "relist_topics");
        break;
      case "append-tags":
        this.showBulkTopicActionsModal(id, "choose_append_tags");
        break;
      case "replace-tags":
        this.showBulkTopicActionsModal(id, "change_tags");
        break;
      case "remove-tags":
        this.showBulkTopicActionsModal(id, "remove_tags");
        break;
      case "delete-topics":
        this.showBulkTopicActionsModal("delete", "delete");
        break;
      case "reset-bump-dates":
        this.showBulkTopicActionsModal(id, "reset_bump_dates");
        break;
      case "defer":
        this.showBulkTopicActionsModal(id, "defer");
        break;
      default:
        if (_customOnSelection[id]) {
          this.showBulkTopicActionsModal(id, _customOnSelection[id], {custom: true})
        }
    }
  },
});
