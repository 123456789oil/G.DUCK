import discourseComputed from "discourse-common/utils/decorators";
import DropdownSelectBoxComponent from "select-kit/components/dropdown-select-box";
import ChangeCategory from "discourse/components/bulk-actions/change-category";
import TopicBulkActions from "discourse/components/modal/topic-bulk-actions";
import BulkTopicActions from "discourse/components/modal/bulk-topic-actions";
import { action } from "@ember/object";
import { inject as service } from "@ember/service";

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

  computeContent() {
    let options = [];
    options = options.concat([
      {
        id: "update-category",
        icon: "pencil-alt",
        name: "Update Category",
        description: "Choose the new category for the selected topics",
      },
      {
        id: "close-topics",
        icon: "lock",
        name: "Close Topics",
        description:
          "Selected topics will be either Closed, Archived, or Unlisted",
      },
    ]);
    return options;
  },

  @action
  onSelect(id) {
    switch (id) {
      case "update-category":
        // Temporary: just use the existing modal & action
        this.modal.show(TopicBulkActions, {
          model: {
            topics: this.bulkSelectHelper.selected,
            category: this.category,
            refreshClosure: () => this.router.refresh(),
            initialAction: "set-component",
            initialComponent: ChangeCategory,
          },
        });
        break;
      case "close-topics":
        this.modal.show(BulkTopicActions, {
          model: {
            title: "Bulk Close Topics",
            topics: this.bulkSelectHelper.selected,
            silent: true,
          },
        });
        break;
    }
  },
});
