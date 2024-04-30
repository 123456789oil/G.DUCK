import { tracked } from "@glimmer/tracking";
import { setOwner } from "@ember/application";
import { action } from "@ember/object";
import { guidFor } from "@ember/object/internals";
import { service } from "@ember/service";
import { MENU } from "float-kit/lib/constants";
import FloatKitInstance from "float-kit/lib/float-kit-instance";

export default class DMenuInstance extends FloatKitInstance {
  @service menu;
  @service site;
  @service modal;

  /**
   * Indicates whether the menu is expanded or not.
   * @property {boolean} expanded - Tracks the state of menu expansion, initially set to false.
   */
  @tracked expanded = false;

  /**
   * Specifies whether the trigger for opening/closing the menu is detached from the menu itself.
   * This is the case when a menu is trigger programmaticaly instead of through the <DMenu /> component.
   * @property {boolean} detachedTrigger - Tracks whether the trigger is detached, initially set to false.
   */
  @tracked detachedTrigger = false;

  portalOutletElement = document.querySelector("#d-menu-portals");

  constructor(owner, trigger, options = {}) {
    super(...arguments);

    setOwner(this, owner);
    this.options = { ...MENU.options, ...options };
    this.id = trigger.id || guidFor(trigger);
    this.trigger = trigger;
    this.setupListeners();
  }

  @action
  close() {
    if (this.site.mobileView && this.options.modalForMobile) {
      this.modal.close();
    }

    this.menu.close(this);

    super.close(...arguments);
  }

  @action
  show() {
    this.menu.show(this);

    super.show(...arguments);
  }

  @action
  onMouseMove(event) {
    if (this.trigger.contains(event.target) && this.expanded) {
      return;
    }

    this.onTrigger(event);
  }

  @action
  onClick(event) {
    if (this.expanded && this.untriggers.includes("click")) {
      this.onUntrigger(event);
      return;
    }

    this.onTrigger(event);
  }

  @action
  onMouseLeave(event) {
    if (this.untriggers.includes("hover")) {
      this.onUntrigger(event);
    }
  }

  @action
  async onTrigger() {
    this.options.beforeTrigger?.(this);
    await this.show();
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
