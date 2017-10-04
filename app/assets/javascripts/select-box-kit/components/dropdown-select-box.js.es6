import computed from "ember-addons/ember-computed-decorators";
import SelectBoxKitComponent from "select-box-kit/components/select-box-kit";

export default SelectBoxKitComponent.extend({
  classNames: "dropdown-select-box",

  verticalOffset: 3,

  fullWidthOnMobile: true,

  headerComponent: "dropdown-select-box/dropdown-select-box-header",

  init() {
    this._super();

    const value = this.get("value") || Ember.get(this.get("content"), "firstObject.value");
    this.set("value", value);
  },

  @computed
  templateForRow() {
    return (rowComponent) => {
      let template = "";
      const content = rowComponent.get("content");

      const icon = rowComponent.icon();
      if (icon) {
        template += `<div class="icons">${icon}</div>`;
      }

      const title = Handlebars.escapeExpression(Ember.get(content, "name"));
      const desc = Handlebars.escapeExpression(Ember.get(content, "originalContent.description"));

      template += `
        <div class="texts">
          <span class="title">${title}</span>
          <span class="desc">${desc}</span>
        </div>
      `;

      return template;
    };
  },

  actions: {
    onSelect(value) {
      this.defaultOnSelect();

      this.set("value", value);
    }
  },
});
