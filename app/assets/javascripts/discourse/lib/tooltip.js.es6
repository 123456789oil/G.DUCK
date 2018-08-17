import { escapeExpression } from "discourse/lib/utilities";

const fadeSpeed = 300;
const tooltipID = "#discourse-tooltip";

export function showTooltip() {
  const $this = $(this);
  const $parent = $this.offsetParent();
  const content = escapeExpression($this.attr("data-tooltip"));
  const retina =
    window.devicePixelRatio && window.devicePixelRatio > 1
      ? "class='retina'"
      : "";

  let pos = $this.offset();
  const delta = $parent.offset();
  pos.top -= delta.top;
  pos.left -= delta.left;

  hideTooltip(tooltipID);

  $(this).after(`
    <div id="discourse-tooltip" ${retina}>
      <div class="tooltip-pointer"></div>
      <div class="tooltip-content">${content}</div>
    </div>
  `);

  $(window).on("click.discourse", event => {
    if ($(event.target).closest(tooltipID).length === 0) {
      $(tooltipID).remove();
      $(window).off("click.discourse");
    }
    return true;
  });

  const $tooltip = $(tooltipID);
  $tooltip.css({ top: 0, left: 0 });

  let left = pos.left - $tooltip.width() / 2 + $this.width() / 2;
  if (left < 0) {
    $tooltip.find(".tooltip-pointer").css({
      "margin-left": left * 2 + "px"
    });
    left = 0;
  }

  // also do a right margin fix
  const parentWidth = $parent.width();
  if (left + $tooltip.width() > parentWidth) {
    let oldLeft = left;
    left = parentWidth - $tooltip.width();

    $tooltip.find(".tooltip-pointer").css({
      "margin-left": (oldLeft - left) * 2 + "px"
    });
  }

  $tooltip.css({
    top: pos.top + 5 + "px",
    left: left + "px"
  });

  $tooltip.fadeIn(fadeSpeed);

  return false;
}

export function hideTooltip() {
  $(tooltipID)
    .fadeOut(fadeSpeed)
    .remove();
}

export function registerTooltip(jqueryContext) {
  if (jqueryContext.length) {
    jqueryContext.off("click").on("click", showTooltip);
  }
}

export function registerHoverTooltip(jqueryContext) {
  if (jqueryContext.length) {
    jqueryContext
      .off("mouseenter mouseleave click")
      .on("mouseenter click", showTooltip)
      .on("mouseleave", hideTooltip);
  }
}

export function unregisterTooltip(jqueryContext) {
  if (jqueryContext.length) {
    jqueryContext.off("click");
  }
}

export function unregisterHoverTooltip(jqueryContext) {
  if (jqueryContext.length) {
    jqueryContext.off("mouseenter mouseleave click");
  }
}
