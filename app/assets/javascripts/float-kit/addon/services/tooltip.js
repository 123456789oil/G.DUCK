import { tracked } from "@glimmer/tracking";
import { getOwner } from "@ember/application";
import { action } from "@ember/object";
import { next } from "@ember/runloop";
import Service from "@ember/service";
import { TrackedArray } from "@ember-compat/tracked-built-ins";
import DTooltipInstance from "float-kit/lib/d-tooltip-instance";

export default class Tooltip extends Service {
  @tracked registeredTooltips = new TrackedArray();

  /**
   * Render a tooltip
   *
   * @param {Element | DTooltipInstance}
   *  - trigger - the element that triggered the tooltip, can also be an object implementing `getBoundingClientRect`
   *  - tooltip - an instance of a tooltip
   * @param {Object} [options] - options, if trigger given as first argument
   * @param {String | Element | Component} [options.content] - Specifies the content of the tooltip
   * @param {Integer} [options.maxWidth] - Specifies the maximum width of the content
   * @param {Object} [options.data] - An object which will be passed as the `@data` argument when content is a `Component`
   * @param {Boolean} [options.arrow] - Determines if the tooltip has an arrow
   * @param {Boolean} [options.offset] - Displaces the content from its reference trigger in pixels
   * @param {String} [options.identifier] - Add a data-identifier attribute to the trigger and the content
   * @param {Boolean} [options.inline] - Improves positioning for trigger that spans over multiple lines
   *
   * @returns {Promise<DTooltipInstance>}
   */
  @action
  async show() {
    let instance;

    if (arguments[0] instanceof DTooltipInstance) {
      instance = arguments[0];

      if (instance.expanded) {
        return;
      }
    } else {
      instance = this.registeredTooltips.find(
        (registeredTooltips) => registeredTooltips.trigger === arguments[0]
      );
      if (!instance) {
        instance = new DTooltipInstance(
          getOwner(this),
          arguments[0],
          arguments[1]
        );
        instance.detachedTrigger = true;
      }
    }

    if (!this.registeredTooltips.includes(instance)) {
      this.registeredTooltips.push(instance);
    }

    instance.expanded = true;

    return instance;
  }

  /**
   * Closes the active tooltip
   * @param {DTooltipInstance} [tooltip] - the tooltip to close, if not provider will close any active tooltip
   */
  @action
  async close(tooltip) {
    tooltip.expanded = false;

    next(() => {
      this.registeredTooltips = new TrackedArray(
        this.registeredTooltips.filter(
          (registeredTooltips) => tooltip.id !== registeredTooltips.id
        )
      );
    });
  }

  /**
   * Register event listeners on a trigger to show a tooltip
   *
   * @param {Element} trigger - the element that triggered the tooltip, can also be an object implementing `getBoundingClientRect`
   * @param {Object} [options] - @see `show`
   *
   * @returns {DTooltipInstance} An instance of the tooltip
   */
  @action
  register(trigger, options = {}) {
    return new DTooltipInstance(getOwner(this), trigger, {
      ...options,
      listeners: true,
    });
  }
}
