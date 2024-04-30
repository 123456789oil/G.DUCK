import { tracked } from "@glimmer/tracking";
import { setOwner } from "@ember/application";
import { action } from "@ember/object";
import { guidFor } from "@ember/object/internals";
import { service } from "@ember/service";
import { TOOLTIP } from "float-kit/lib/constants";
import FloatKitInstance from "float-kit/lib/float-kit-instance";

export default class DTooltipInstance extends FloatKitInstance {
  @service tooltip;

  /**
   * Indicates whether the tooltip is expanded or not.
   * @property {boolean} expanded - Tracks the state of tooltip expansion, initially set to false.
   */
  @tracked expanded = false;

  /**
   * Specifies whether the trigger for opening/closing the tooltip is detached from the tooltip itself.
   * This is the case when a tooltip is trigger programmaticaly instead of through the <DTooltip /> component.
   * @property {boolean} detachedTrigger - Tracks whether the trigger is detached, initially set to false.
   */
  @tracked detachedTrigger = false;

  portalOutletElement = document.querySelector("#d-tooltip-portals");

  constructor(owner, trigger, options = {}) {
    super(...arguments);

    setOwner(this, owner);
    this.options = { ...TOOLTIP.options, ...options };
    this.id = trigger.id || guidFor(trigger);
    this.trigger = trigger;
    this.setupListeners();
  }

  @action
  show() {
    this.tooltip.show(this);

    super.show(...arguments);
  }

  @action
  async close() {
    await this.tooltip.close(this);

    super.close(...arguments);
  }

  @action
  onMouseMove(event) {
    if (this.trigger.contains(event.target) && this.expanded) {
      return;
    }

    this.onTrigger(event);
  }

  @action
  async onClick(event) {
    if (this.expanded && this.untriggers.includes("click")) {
      await this.onUntrigger(event);
      return;
    }

    this.onTrigger(event);
  }

  @action
  async onMouseLeave(event) {
    if (this.untriggers.includes("hover")) {
      await this.onUntrigger(event);
    }
  }

  @action
  onTrigger() {
    this.options.beforeTrigger?.(this);
    this.show();
  }

  @action
  async onUntrigger() {
    await this.close();
  }

  @action
  async destroy() {
    await this.close();
    this.tearDownListeners();
  }
}
