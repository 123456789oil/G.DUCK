import I18n from "I18n";
import { computed } from "@ember/object";

let _topicFooterButtons = {};

export function registerTopicFooterButton(button) {
  if (!button.id) {
    throw new Error(`Attempted to register a topic button with no id.`);
  }

  if (_topicFooterButtons[button.id]) {
    return;
  }

  const defaultButton = {
    type: "inline-button",

    // id of the button, required
    id: null,

    // icon displayed on the button
    icon: null,

    // local key path for title attribute
    title: null,
    translatedTitle: null,

    // local key path for label
    label: null,
    translatedLabel: null,

    // local key path for aria label
    ariaLabel: null,
    translatedAriaLabel: null,

    // is this button displayed in the mobile dropdown or as an inline button ?
    dropdown: false,

    // css class appended to the button
    classNames: [],

    // discourseComputed properties which should force a button state refresh
    // eg: ["topic.bookmarked", "topic.category_id"]
    dependentKeys: [],

    // should we display this button ?
    displayed: true,

    // is this button disabled ?
    disabled: false,

    // display order, higher comes first
    priority: 0,
  };

  const normalizedButton = Object.assign(defaultButton, button);

  if (
    !normalizedButton.icon &&
    !normalizedButton.title &&
    !normalizedButton.translatedTitle
  ) {
    throw new Error(
      `Attempted to register a topic button: ${button.id} with no icon or title.`
    );
  }

  _topicFooterButtons[normalizedButton.id] = normalizedButton;
}

export function getTopicFooterButtons() {
  const dependentKeys = [].concat(
    ...Object.values(_topicFooterButtons)
      .map((tfb) => tfb.dependentKeys)
      .filter((x) => x)
  );

  return computed(...dependentKeys, {
    get() {
      const _isFunction = (descriptor) =>
        descriptor && typeof descriptor === "function";

      const _compute = (button, property) => {
        const field = button[property];

        if (_isFunction(field)) {
          return field.apply(this);
        }

        return field;
      };

      return Object.values(_topicFooterButtons)
        .filter((button) => _compute(button, "displayed"))
        .map((button) => {
          const discourseComputedButon = {};

          discourseComputedButon.id = button.id;
          discourseComputedButon.type = button.type;

          const label = _compute(button, "label");
          discourseComputedButon.label = label
            ? I18n.t(label)
            : _compute(button, "translatedLabel");

          const ariaLabel = _compute(button, "ariaLabel");
          if (ariaLabel) {
            discourseComputedButon.ariaLabel = I18n.t(ariaLabel);
          } else {
            const translatedAriaLabel = _compute(button, "translatedAriaLabel");
            discourseComputedButon.ariaLabel =
              translatedAriaLabel || discourseComputedButon.label;
          }

          const title = _compute(button, "title");
          discourseComputedButon.title = title
            ? I18n.t(title)
            : _compute(button, "translatedTitle");

          discourseComputedButon.classNames = (
            _compute(button, "classNames") || []
          ).join(" ");

          discourseComputedButon.icon = _compute(button, "icon");
          discourseComputedButon.disabled = _compute(button, "disabled");
          discourseComputedButon.dropdown = _compute(button, "dropdown");
          discourseComputedButon.priority = _compute(button, "priority");

          if (_isFunction(button.action)) {
            discourseComputedButon.action = () => button.action.apply(this);
          } else {
            const actionName = button.action;
            discourseComputedButon.action = () => this[actionName]();
          }

          return discourseComputedButon;
        });
    },
  });
}

export function clearTopicFooterButtons() {
  _topicFooterButtons = [];
}
