import { hbs } from "ember-cli-htmlbars";
import RenderGlimmer from "discourse/widgets/render-glimmer";
import { createWidget } from "discourse/widgets/widget";

export default createWidget("chat-header-icon", {
  tagName: "li.header-dropdown-toggle.chat-header-icon",

  services: ["chat"],

  html() {
    if (!this.chat.userCanChat) {
      return;
    }

    return [
      new RenderGlimmer(
        this,
        "div.widget-component-connector",
        hbs`<Chat::Header::Icon />`,
      ),
    ];
  },
});
