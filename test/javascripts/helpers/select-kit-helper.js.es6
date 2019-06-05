function checkSelectKitIsNotExpanded(selector) {
  if (find(selector).hasClass("is-expanded")) {
    // eslint-disable-next-line no-console
    console.warn("You expected select-kit to be collapsed but it is expanded.");
  }
}

function checkSelectKitIsNotCollapsed(selector) {
  if (!find(selector).hasClass("is-expanded")) {
    // eslint-disable-next-line no-console
    console.warn("You expected select-kit to be expanded but it is collapsed.");
  }
}

async function expandSelectKit(selector) {
  checkSelectKitIsNotExpanded(selector);
  return await click(`${selector} .select-kit-header`);
}

async function collapseSelectKit(selector) {
  checkSelectKitIsNotCollapsed(selector);
  return await click(`${selector} .select-kit-header`);
}

async function selectKitFillInFilter(filter, selector) {
  checkSelectKitIsNotCollapsed(selector);
  await fillIn(`${selector} .filter-input`, filter);
}

async function selectKitSelectRowByValue(value, selector) {
  checkSelectKitIsNotCollapsed(selector);
  await click(`${selector} .select-kit-row[data-value='${value}']`);
}

async function selectKitSelectRowByName(name, selector) {
  checkSelectKitIsNotCollapsed(selector);
  await click(`${selector} .select-kit-row[data-name='${name}']`);
}

async function selectKitSelectNoneRow(selector) {
  checkSelectKitIsNotCollapsed(selector);
  await click(`${selector} .select-kit-row.none`);
}

async function selectKitSelectRowByIndex(index, selector) {
  checkSelectKitIsNotCollapsed(selector);
  await click(find(`${selector} .select-kit-row`).eq(index));
}

async function createEvent(element, keyCode, selector, options) {
  element = element || ".filter-input";
  options = options || {};

  const type = options.type || "keydown";
  const event = jQuery.Event(type);
  event.keyCode = keyCode;

  if (options && options.metaKey) event.metaKey = true;

  await find(selector)
    .find(element)
    .trigger(event);
}

async function keyboardHelper(value, target, selector) {
  switch (value) {
    case "enter":
      return await createEvent(target, 13, selector);
    case "backspace":
      return await createEvent(target, 8, selector);
    case "selectAll":
      return await createEvent(target, 65, selector, { metaKey: true });
    case "escape":
      return await createEvent(target, 27, selector);
    case "down":
      return await createEvent(target, 40, selector);
    case "up":
      return await createEvent(target, 38, selector);
    case "tab":
      return await createEvent(target, 9, selector);
  }
}

function rowHelper(row) {
  return {
    name() {
      return row.attr("data-name");
    },
    icon() {
      return row.find(".d-icon");
    },
    title() {
      return row.attr("title");
    },
    value() {
      return row.attr("data-value");
    },
    exists() {
      return exists(row);
    },
    el() {
      return row;
    }
  };
}

function headerHelper(header) {
  return {
    value() {
      return header.attr("data-value");
    },
    name() {
      return header.attr("data-name");
    },
    label() {
      return header.text().trim();
    },
    icon() {
      return header.find(".icon");
    },
    title() {
      return header.attr("title");
    },
    el() {
      return header;
    }
  };
}

function filterHelper(filter) {
  return {
    icon() {
      return filter.find(".d-icon");
    },
    exists() {
      return exists(filter);
    },
    el() {
      return filter;
    }
  };
}

export default function selectKit(selector) {
  selector = selector || ".select-kit";

  return {
    async expand() {
      await expandSelectKit(selector);
    },

    async collapse() {
      await collapseSelectKit(selector);
    },

    async selectRowByIndex(index) {
      await selectKitSelectRowByIndex(index, selector);
    },

    async selectRowByValue(value) {
      await selectKitSelectRowByValue(value, selector);
    },

    async selectKitSelectRowByName(name) {
      await selectKitSelectRowByName(name, selector);
    },

    async selectRowByName(name) {
      await selectKitSelectRowByValue(name, selector);
    },

    async selectNoneRow() {
      await selectKitSelectNoneRow(selector);
    },

    async fillInFilter(filter) {
      await selectKitFillInFilter(filter, selector);
    },

    async keyboard(value, target) {
      return keyboardHelper(value, target, selector);
    },

    isExpanded() {
      return find(selector).hasClass("is-expanded");
    },

    isFocused() {
      return find(selector).hasClass("is-focused");
    },

    isHidden() {
      return find(selector).hasClass("is-hidden");
    },

    header() {
      return headerHelper(find(selector).find(".select-kit-header"));
    },

    filter() {
      return filterHelper(find(selector).find(".select-kit-filter"));
    },

    rows() {
      return find(selector).find(".select-kit-row");
    },

    rowByValue(value) {
      return rowHelper(
        find(selector).find('.select-kit-row[data-value="' + value + '"]')
      );
    },

    rowByName(name) {
      return rowHelper(
        find(selector).find('.select-kit-row[data-name="' + name + '"]')
      );
    },

    rowByIndex(index) {
      return rowHelper(
        find(selector).find(".select-kit-row:eq(" + index + ")")
      );
    },

    el() {
      return find(selector);
    },

    noneRow() {
      return rowHelper(find(selector).find(".select-kit-row.none"));
    },

    validationMessage() {
      const validationMessage = find(selector).find(".validation-message");

      if (validationMessage.length) {
        return validationMessage.html().trim();
      } else {
        return null;
      }
    },

    selectedRow() {
      return rowHelper(find(selector).find(".select-kit-row.is-selected"));
    },

    highlightedRow() {
      return rowHelper(find(selector).find(".select-kit-row.is-highlighted"));
    },

    exists() {
      return exists(selector);
    }
  };
}
