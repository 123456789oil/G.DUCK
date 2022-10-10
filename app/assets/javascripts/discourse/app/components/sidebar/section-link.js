import Component from "@glimmer/component";
import { htmlSafe } from "@ember/template";

export default class SectionLink extends Component {
  willDestroy() {
    if (this.args.willDestroy) {
      this.args.willDestroy();
    }
  }

  get shouldDisplay() {
    if (this.args.shouldDisplay === undefined) {
      return true;
    }

    return this.args.shouldDisplay;
  }

  get classNames() {
    let classNames = [
      "sidebar-section-link",
      `sidebar-section-link-${this.args.linkName}`,
      "sidebar-row",
    ];

    if (this.args.class) {
      classNames.push(this.args.class);
    }

    return classNames.join(" ");
  }

  get models() {
    if (this.args.model) {
      return [this.args.model];
    }

    if (this.args.models) {
      return this.args.models;
    }

    return [];
  }

  get prefixColorCSS() {
    const color = this.args.prefixColor;

    if (!color || !color.match(/^\w{6}$/)) {
      return htmlSafe("");
    }

    return htmlSafe("color: #" + color);
  }

  get prefixCSS() {
    return this.args.prefixCSS;
  }
}
