import EmberObject, { computed } from "@ember/object";
import { mapBy } from "@ember/object/computed";
import Category from "discourse/models/category";
import { makeArray } from "discourse-common/lib/helpers";
import CategoryRow from "select-kit/components/category-row";
import MultiSelectComponent from "select-kit/components/multi-select";

export default MultiSelectComponent.extend({
  pluginApiIdentifiers: ["category-selector"],
  classNames: ["category-selector"],
  categories: null,
  blockedCategories: null,

  selectKitOptions: {
    filterable: true,
    allowAny: false,
    allowUncategorized: true,
    displayCategoryDescription: false,
    selectedChoiceComponent: "selected-choice-category",
  },

  init() {
    this._super(...arguments);

    if (!this.blockedCategories) {
      this.set("blockedCategories", []);
    }
  },

  content: computed("categories.[]", "blockedCategories.[]", function () {
    return Category.list().filter((category) => {
      if (category.isUncategorizedCategory) {
        if (this.options?.allowUncategorized !== undefined) {
          return this.options.allowUncategorized;
        }

        return this.selectKit.options.allowUncategorized;
      }

      return (
        this.categories.includes(category) ||
        !this.blockedCategories.includes(category)
      );
    });
  }),

  value: mapBy("categories", "id"),

  modifyComponentForRow() {
    return CategoryRow;
  },

  async search(filter) {
    let categories;
    if (this.site.lazy_load_categories) {
      const rejectCategoryIds = new Set([
        ...this.categories.map((c) => c.id),
        ...this.blockedCategories.map((c) => c.id),
      ]);

      categories = await Category.asyncSearch(filter, {
        includeUncategorized:
          this.options?.allowUncategorized !== undefined
            ? this.options.allowUncategorized
            : this.selectKit.options.allowUncategorized,
        rejectCategoryIds: Array.from(rejectCategoryIds),
      });
    } else {
      categories = this._super(filter);
    }

    // If there is a single match or an exact match and it has subcategories,
    // add a row for selecting all subcategories
    if (
      categories.length === 1 ||
      (categories.length > 0 && categories[0].name.localeCompare(filter) === 0)
    ) {
      // Descendants may not be loaded if lazy loading is enabled. Search for
      // subcategories will make sure these are loaded
      if (this.site.lazy_load_categories) {
        await Category.asyncSearch("", {
          parentCategoryId: categories[0].id,
        });
      }

      if (categories[0].descendants.length > 1) {
        categories.splice(
          1,
          0,
          EmberObject.create({
            // This is just a hack to ensure the IDs are unique, but ensure
            // that parseInt still returns a valid ID in order to generate the
            // label
            id: `${categories[0].id}+subcategories`,
            categories: categories[0].descendants,
          })
        );
      }
    }

    return categories;
  },

  select(value, item) {
    if (item.categories) {
      this.selectKit.change(
        makeArray(this.value).concat(item.categories.mapBy("id")),
        makeArray(this.selectedContent).concat(item.categories)
      );
    } else {
      this._super(value, item);
    }
  },

  actions: {
    onChange(values) {
      this.onChange(values.map((v) => Category.findById(v)).filter(Boolean));
      return false;
    },
  },
});
