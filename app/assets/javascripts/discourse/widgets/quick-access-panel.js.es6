import { h } from "virtual-dom";

import { createWidget } from "discourse/widgets/widget";
import { headerHeight } from "discourse/components/site-header";

const AVERAGE_ITEM_HEIGHT = 55;

/**
 * This tries to enforce a consistent flow of fetching, caching, refreshing,
 * and rendering for "quick access items".
 *
 * There are parts to introducing a new quick access panel:
 * 1. A user menu link that sends a `quickAccess` action, with a unique `type`.
 * 2. A `quick-access-${type}` widget, extended from `quick-access-panel`.
 */
export default createWidget("quick-access-panel", {
  tagName: "div.quick-access-panel",
  emptyStatePlaceholderItemKey: "",

  buildKey: () => {
    throw Error('Cannot attach abstract widget "quick-access-panel".');
  },

  markReadRequest() {
    return Ember.RSVP.Promise.resolve();
  },

  hasUnread() {
    return false;
  },

  showAllHref() {
    return "";
  },

  hasMore() {
    return this.state.items.length >= this.estimateItemLimit();
  },

  findStaleItems() {
    return [];
  },

  findNewItems() {
    return Ember.RSVP.Promise.resolve([]);
  },

  newItemsLoaded() {},

  itemHtml(item) {}, // eslint-disable-line no-unused-vars

  emptyStatePlaceholderItem() {
    if (this.emptyStatePlaceholderItemKey) {
      return h("li.read", I18n.t(this.emptyStatePlaceholderItemKey));
    } else {
      return "";
    }
  },

  defaultState() {
    return { items: [], loading: false, loaded: false };
  },

  markRead() {
    return this.markReadRequest().then(() => {
      this.refreshNotifications(this.state);
    });
  },

  estimateItemLimit() {
    // Estimate (poorly) the amount of notifications to return.
    let limit = Math.round(
      ($(window).height() - headerHeight()) / AVERAGE_ITEM_HEIGHT
    );

    // We REALLY don't want to be asking for negative counts of notifications
    // less than 5 is also not that useful.
    if (limit < 5) {
      limit = 5;
    } else if (limit > 40) {
      limit = 40;
    }

    return limit;
  },

  refreshNotifications(state) {
    if (this.loading) {
      return;
    }

    const staleItems = this.findStaleItems();

    if (staleItems.length > 0) {
      state.items = staleItems;
    } else {
      state.loading = true;
    }

    this.findNewItems()
      .then(items => (state.items = items))
      .catch(() => (state.items = []))
      .finally(() => {
        state.loading = false;
        state.loaded = true;
        this.newItemsLoaded();
        this.sendWidgetAction("itemsLoaded", {
          hasUnread: this.hasUnread(),
          markRead: () => this.markRead()
        });
        this.scheduleRerender();
      });
  },

  html(attrs, state) {
    if (!state.loaded) {
      this.refreshNotifications(state);
    }

    if (state.loading) {
      return [h("div.spinner-container", h("div.spinner"))];
    }

    const items = state.items.length
      ? state.items.map(this.itemHtml.bind(this))
      : [this.emptyStatePlaceholderItem()];

    if (this.hasMore()) {
      items.push(
        h(
          "li.read.last.show-all",
          this.attach("link", {
            title: "view_all",
            icon: "chevron-down",
            href: this.showAllHref()
          })
        )
      );
    }

    return [h("ul", items)];
  }
});
