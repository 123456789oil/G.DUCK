import { on, observes } from "ember-addons/ember-computed-decorators";
import computed from "ember-addons/ember-computed-decorators";

export default Ember.Component.extend({
  layoutName: "discourse-common/templates/components/select-box",
  classNames: "select-box",
  classNameBindings: ["expanded:is-expanded", "hidden:is-hidden", "disabled:is-disabled"],

  disabled: false,
  expanded: false,
  focused: false,
  filterFocused: false,
  renderBody: false,
  wrapper: true,
  hidden: false,
  tabindex: 0,
  scrollableParentSelector: ".modal-body",

  caretUpIcon: "caret-up",
  caretDownIcon: "caret-down",
  headerText: I18n.t("select_box.default_header_text"),
  dynamicHeaderText: true,
  icon: null,
  clearable: false,

  value: null,
  highlightedValue: null,
  selectedContent: null,
  noContentLabel: I18n.t("select_box.no_content"),
  none: null,

  valueAttribute: "id",
  nameProperty: "name",
  iconKey: "icon",

  filterable: false,
  filter: "",
  filterPlaceholder: I18n.t("select_box.filter_placeholder"),
  filterIcon: "search",

  selectBoxRowComponent: "select-box/select-box-row",
  selectBoxFilterComponent: "select-box/select-box-filter",
  selectBoxHeaderComponent: "select-box/select-box-header",
  selectBoxCollectionComponent: "select-box/select-box-collection",

  collectionHeight: 200,
  verticalOffset: 0,
  horizontalOffset: 0,
  fullWidthOnMobile: false,

  castInteger: false,

  click(event) {
    event.stopPropagation();
  },

  filterFunction: function(content) {
    return (selectBox) => {
      const filter = selectBox.get("filter").toLowerCase();
      return _.filter(content, (c) => {
        return this.textForContent(c, selectBox.get("nameProperty"))
                   .toLowerCase()
                   .indexOf(filter) > -1;
      });
    };
  },

  @computed("nameProperty")
  titleForRow(nameProperty) {
    return (rowComponent) => {
      return this.textForContent(rowComponent.get("content"), nameProperty)
    };
  },

  @computed("valueAttribute")
  idForRow(valueAttribute) {
    return (rowComponent) => {
      return this.valueForContent(rowComponent.get("content"), valueAttribute);
    };
  },

  @computed
  shouldHighlightRow: function() {
    return (rowComponent) => {
      const id = this.valueForContent(rowComponent.get("content"));
      return id === this.get("highlightedValue");
    };
  },

  @computed("value", "valueAttribute")
  shouldSelectRow(value, valueAttribute) {
    return (rowComponent) => {
      const id = this.valueForContent(rowComponent.get("content"), valueAttribute);
      return id === value;
    };
  },

  textForContent(content, nameProperty) {
    nameProperty = nameProperty || this.get("nameProperty");

    switch (typeof content){
    case 'string':
      return content;
    default:
      return Ember.get(content, nameProperty);
    }
  },


  valueForContent(content, valueAttribute) {
    valueAttribute = valueAttribute || this.get("valueAttribute");

    switch (typeof content){
    case 'string':
      return this._castInteger(content);
    default:
      return this._castInteger(Ember.get(content, valueAttribute));
    }
  },

  @computed
  templateForRow() {
    return (rowComponent) => {
      let template = "";

      const icon = rowComponent.icon();
      if (icon) {
        template += icon;
      }

      const text = this.textForContent(rowComponent.get("content"));
      template += `<p class="text">${Handlebars.escapeExpression(text)}</p>`;

      return template;
    };
  },

  applyDirection() {
    this.$().removeClass("is-above is-below is-left-aligned is-right-aligned");
    let options = { left: "auto", bottom: "auto", left: "auto", top: "auto" };
    const headerHeight = this.$(".select-box-header").outerHeight(false);
    const filterHeight = this.$(".select-box-filter").outerHeight(false);
    const bodyHeight = this.$(".select-box-body").outerHeight(false);
    const windowWidth = $(window).width();
    const windowHeight = $(window).height();
    const boundingRect = this.$()[0].getBoundingClientRect();
    const offsetTop = boundingRect.top;

    if (this.get("fullWidthOnMobile") && windowWidth <= 420) {
      const margin = 10;
      const relativeLeft = this.$().offset().left - $(window).scrollLeft();
      options.left = margin - relativeLeft;
      options.width = windowWidth - margin * 2;
      options.maxWidth = options.minWidth = "unset";
    } else {
      const offsetLeft = boundingRect.left;
      const bodyWidth = this.$(".select-box-body").outerWidth(false);
      const hasRightSpace = (windowWidth - (this.get("horizontalOffset") + offsetLeft + filterHeight + bodyWidth) > 0);

      if (hasRightSpace) {
        this.$().addClass("is-left-aligned");
        options.left = this.get("horizontalOffset");
      } else {
        this.$().addClass("is-right-aligned");
        options.right = this.get("horizontalOffset");
      }
    }

    const componentHeight = this.get("verticalOffset") + bodyHeight + headerHeight;
    const hasBelowSpace = windowHeight - offsetTop - componentHeight > 0;
    if (hasBelowSpace) {
      this.$().addClass("is-below");
      options.top = headerHeight + this.get("verticalOffset");
    } else {
      this.$().addClass("is-above");
      options.bottom = headerHeight + this.get("verticalOffset");
    }

    this.$(".select-box-body").css(options);
  },

  init() {
    this._super();

    if ($(window).outerWidth(false) <= 420) {
      this.set("filterable", false);
    }

    this.setProperties({
      content: this.getWithDefault("content", []),
      componentId: this.elementId
    });
  },

  @on("willDestroyElement")
  _removeDocumentListeners: function() {
    $(document).off("click.select-box");
    $(window).off("resize.select-box");
  },

  @on("willDestroyElement")
  _unbindEvents() {
    this.$(".select-box-offscreen").off(
      "focusin.select-box",
      "focusout.select-box",
      "keydown.select-box"
    );
    this.$(".filter-query").off("focusin.select-box", "focusout.select-box");
  },

  @on("didRender")
  _configureSelectBoxDOM: function() {
    if (this.get("scrollableParent").length === 1) {
      this._removeFixedPosition();
    }

    const computedWidth = this.$().outerWidth(false);
    const computedHeight = this.$().outerHeight(false);

    this.$(".select-box-filter").css("height", computedHeight);

    if (this.get("expanded")) {
      if (this.get("scrollableParent").length === 1) {
        this._applyFixedPosition(computedWidth, computedHeight);
      }

      this.$(".select-box-collection").css("max-height", this.get("collectionHeight"));

      Ember.run.schedule("afterRender", () => {
        this.applyDirection();
        if (this.get("wrapper")) {
          this._positionSelectBoxWrapper();
        }
      });
    } else {
      if (this.get("wrapper")) {
        this.$(".select-box-wrapper").hide();
      }
    }

    if (Ember.isNone(this.get("none")) && Ember.isNone(this.get("value")) && !Ember.isEmpty(this.get("content"))) {
      this.set("value", this.valueForContent(this.get("content.0")));
    }
  },

  keyDown(event) {
    const keyCode = event.keyCode || event.which;

    if (this.get("expanded")) {
      if ((keyCode === 13 || keyCode === 9) && Ember.isPresent(this.get("highlightedValue"))) {
        event.preventDefault();
        this.send("onSelectRow", this.get("highlightedContent"));
      }

      if (keyCode === 9) {
        this.set("expanded", false);
      }

      if (keyCode === 27) {
        this.set("expanded", false);
        event.stopPropagation();
      }

      if (keyCode === 38) {
        event.preventDefault();
        const self = this;
        Ember.run.throttle(self, this._handleUpArrow, 50);
      }

      if (keyCode === 40) {
        event.preventDefault();
        const self = this;
        Ember.run.throttle(self, this._handleDownArrow, 50);
      }
    }
  },

  @on("didRender")
  _setupDocumentListeners: function() {
    $(document).off("click.select-box");

    $(document)
      .on("click.select-box", (event) => {
        if (this.isDestroying || this.isDestroyed) { return; }

        const $element = this.$();
        const $target = $(event.target);

        if (!$target.closest($element).length) {
          this.set("expanded", false);
        }
      });

    $(window).on("resize.select-box", () => this.set("expanded", false) );
  },

  @on("didInsertElement")
  _bindEvents() {
    this.$(".select-box-offscreen")
      .on("focusin.select-box", () => this.set("focused", true) )
      .on("focusout.select-box", () => this.set("focused", false) );

    this.$(".filter-query")
      .on("focusin.select-box", () => this.set("filterFocused", true) )
      .on("focusout.select-box", () => this.set("filterFocused", false) );

    this.$(".select-box-offscreen").on("keydown.select-box", (event) => {
      const keyCode = event.keyCode || event.which;

      if (keyCode === 13 || keyCode === 40) {
        this.setProperties({ expanded: true, focused: false });
        event.stopPropagation();
      }

      if (keyCode >= 65 && keyCode <= 90) {
        this.setProperties({ expanded: true, focused: false });
        Ember.run.schedule("afterRender", () => {
          this.$(".filter-query").focus().val(String.fromCharCode(keyCode));
        });
      }
    });
  },

  @observes("expanded")
  _expandedChanged() {
    if (this.get("expanded")) {
      this.setProperties({ highlightedValue: null, renderBody: true, focused: false });

      if (this.get("filterable")) {
        Ember.run.schedule("afterRender", () => this.$(".filter-query").focus());
      }
    };
  },

  @computed("value", "content.[]", "valueAttribute")
  selectedContent(value, contents, valueAttribute) {
    if (Ember.isNone(value)) {
      return null;
    }

    return contents.find((content) => {
      return this.valueForContent(content, valueAttribute) === value;
    });
  },

  @computed("highlightedValue", "content.[]", "valueAttribute")
  highlightedContent(highlightedValue, contents, valueAttribute) {
    if (Ember.isNone(highlightedValue)) {
      return null;
    }

    return contents.find((content) => {
      return this.valueForContent(content, valueAttribute) === highlightedValue;
    });
  },

  @computed("none")
  clearSelectionLabel(none) {
    if(Ember.isNone(none)) {
      return null;
    }

    switch (typeof none){
    case 'string':
      return I18n.t(none);
    default:
      return this.textForContent(none);
    }
  },

  @computed("headerText", "selectedContent", "nameProperty")
  selectedTitle(headerText, selectedContent, nameProperty) {
    if (Ember.isNone(selectedContent)) {
      return headerText;
    }

    return this.textForContent(selectedContent, nameProperty);
  },

  @computed("headerText", "dynamicHeaderText", "selectedContent", "none", "filteredContent")
  generatedHeadertext(headerText, dynamic, selectedContent, none, filteredContent) {
    if (dynamic && !Ember.isNone(selectedContent)) {
      return this.textForContent(selectedContent);
    }

    if (dynamic && Ember.isNone(selectedContent) && !Ember.isNone(none)) {
      switch (typeof none){
      case 'string':
        return I18n.t(none);
      default:
        return this.textForContent(none);
      }
    }

    if (dynamic && Ember.isNone(selectedContent) && !Ember.isNone(filteredContent)) {
      return this.textForContent(filteredContent[0]);
    }

    return headerText;
  },

  @computed("content.[]", "filter", "valueAttribute")
  filteredContent(content, filter, valueAttribute) {
    let filteredContent;

    if (Ember.isEmpty(filter)) {
      filteredContent = content;
    } else {
      filteredContent = this.filterFunction(content)(this);

      if (!Ember.isEmpty(filteredContent)) {
        this.set("highlightedValue", filteredContent[0][valueAttribute]);
      }
    }

    return filteredContent;
  },

  @computed("scrollableParentSelector")
  scrollableParent(scrollableParentSelector) {
    return this.$().parents(scrollableParentSelector).first();
  },

  actions: {
    onToggle() {
      this.toggleProperty("expanded");
    },

    onFilterChange(filter) {
      this.set("filter", filter);
    },

    onHoverRow(content) {
      const id = this.valueForContent(content);
      this.set("highlightedValue", id);
    },

    onSelectRow(content) {
      this.setProperties({
        value: this.valueForContent(content),
        expanded: false
      });
    },

    onClearSelection() {
      this.setProperties({ value: null, expanded: false });
    }
  },

  _positionSelectBoxWrapper() {
    const headerHeight = this.$(".select-box-header").outerHeight(false);

    this.$(".select-box-wrapper").css({
      width: this.$().width(),
      display: "block",
      height: headerHeight + this.$(".select-box-body").outerHeight(false)
    });
  },

  _castInteger(id) {
    if (this.get("castInteger") === true && Ember.isPresent(id)) {
      return parseInt(id, 10);
    }

    return id;
  },

  _applyFixedPosition(width, height) {
    const $placeholder = $(`<div class='select-box-fixed-placeholder-${this.get("componentId")}' style='vertical-align: middle; height: ${height}px; width: ${width}px; line-height: ${height}px;display:inline-block'></div>`);

    this.$()
      .before($placeholder)
      .css({
        width,
        position: "fixed",
        "margin-top": -this.get("scrollableParent").scrollTop(),
        "margin-left": -width
      });

    this.get("scrollableParent").on("scroll.select-box", () => this.set("expanded", false) );
  },

  _removeFixedPosition() {
    $(`.select-box-fixed-placeholder-${this.get("componentId")}`).remove();
    this.$().css({
      top: "auto",
      left: "auto",
      "margin-left": "auto",
      "margin-top": "auto",
      position: "relative"
    });

    this.get("scrollableParent").off("scroll.select-box");
  },

  _handleDownArrow() {
    this._handleArrow("down");
  },

  _handleUpArrow() {
    this._handleArrow("up");
  },

  _handleArrow(direction) {
    const content = this.get("filteredContent");
    const valueAttribute = this.get("valueAttribute");
    const selectedContent = content.findBy(valueAttribute, this.get("highlightedValue"));
    const currentIndex = content.indexOf(selectedContent);

    if (direction === "down") {
      if (currentIndex < 0) {
        this.set("highlightedValue", this._castInteger(Ember.get(content[0], valueAttribute)));
      } else if(currentIndex + 1 < content.length) {
        this.set("highlightedValue", this._castInteger(Ember.get(content[currentIndex + 1], valueAttribute)));
      }
    } else {
      if (currentIndex <= 0) {
        this.set("highlightedValue", this._castInteger(Ember.get(content[0], valueAttribute)));
      } else if(currentIndex - 1 < content.length) {
        this.set("highlightedValue", this._castInteger(Ember.get(content[currentIndex - 1], valueAttribute)));
      }
    }

    Ember.run.schedule("afterRender", () => {
      const $highlightedRow = this.$(".select-box-row.is-highlighted");

      if ($highlightedRow.length === 0) { return; }

      const $collection = this.$(".select-box-collection");
      const rowOffset = $highlightedRow.offset();
      const bodyOffset = $collection.offset();
      $collection.scrollTop(rowOffset.top - bodyOffset.top);
    });
  }
});
