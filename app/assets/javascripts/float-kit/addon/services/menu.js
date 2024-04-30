import { tracked } from "@glimmer/tracking";
import { getOwner } from "@ember/application";
import { action } from "@ember/object";
import { next } from "@ember/runloop";
import Service from "@ember/service";
import { TrackedArray } from "@ember-compat/tracked-built-ins";
import DMenuInstance from "float-kit/lib/d-menu-instance";

export default class Menu extends Service {
  @tracked registeredMenus = new TrackedArray();

  /**
   * Render a menu
   *
   * @param {Element | DMenuInstance}
   *  - trigger - the element that triggered the menu, can also be an object implementing `getBoundingClientRect`
   *  - menu - an instance of a menu
   * @param {Object} [options] - options
   * @param {String | Element | Component} [options.content] - Specifies the content of the menu
   * @param {Integer} [options.maxWidth] - Specifies the maximum width of the content
   * @param {Object} [options.data] - An object which will be passed as the `@data` argument when content is a `Component`
   * @param {Boolean} [options.arrow] - Determines if the menu has an arrow
   * @param {Boolean} [options.offset] - Displaces the content from its reference trigger in pixels
   * @param {String} [options.identifier] - Add a data-identifier attribute to the trigger and the content
   * @param {Boolean} [options.inline] - Improves positioning for trigger that spans over multiple lines
   *
   * @returns {Promise<DMenuInstance>}
   */
  @action
  async show() {
    let instance;

    if (arguments[0] instanceof DMenuInstance) {
      instance = arguments[0];

      if (instance.expanded) {
        return;
      }
    } else {
      instance = this.registeredMenus.find(
        (registeredMenu) => registeredMenu.trigger === arguments[0]
      );
      if (!instance) {
        instance = new DMenuInstance(
          getOwner(this),
          arguments[0],
          arguments[1]
        );
        instance.detachedTrigger = true;
      }
    }

    if (instance.options.identifier) {
      this.registeredMenus.forEach((menu) => {
        if (menu.options.identifier === instance.options.identifier) {
          this.close(menu);
        }
      });
    }

    if (!this.registeredMenus.includes(instance)) {
      this.registeredMenus.push(instance);
    } else if (instance.expanded) {
      this.close(instance);
      return;
    }

    instance.expanded = true;

    return instance;
  }

  /**
   * Closes the active menu
   * @param {DMenuInstance} [menu] - the menu to close, if not provider will close any active menu
   */
  @action
  close(menu) {
    menu.expanded = false;

    next(() => {
      this.registeredMenus = new TrackedArray(
        this.registeredMenus.filter(
          (registeredMenu) => menu.id !== registeredMenu.id
        )
      );
    });
  }

  /**
   * Register event listeners on a trigger to show a menu
   *
   * @param {Element} trigger - the element that triggered the menu, can also be an object implementing `getBoundingClientRect`
   * @param {Object} [options] - @see `show`
   *
   * @returns {DMenuInstance} An instance of the menu
   */
  @action
  register(trigger, options = {}) {
    const instance = new DMenuInstance(getOwner(this), trigger, {
      ...options,
      listeners: true,
    });
    instance.detachedTrigger = true;
    return instance;
  }
}
