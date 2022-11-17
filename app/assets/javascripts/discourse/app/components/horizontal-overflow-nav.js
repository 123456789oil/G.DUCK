import Component from "@glimmer/component";
import { action } from "@ember/object";
import { bind } from "discourse-common/utils/decorators";
import { inject as service } from "@ember/service";
import { tracked } from "@glimmer/tracking";
import discourseLater from "discourse-common/lib/later";
import { cancel } from "@ember/runloop";
export default class HorizontalOverflowNav extends Component {
  @service site;
  @tracked hasScroll;
  @tracked hideRightScroll = false;
  @tracked hideLeftScroll = true;
  scrollInterval;

  @bind
  scrollToActive(element) {
    const activeElement = element.querySelector("a.active");

    activeElement?.scrollIntoView({
      block: "nearest",
      inline: "center",
    });
  }

  @bind
  checkScroll(event) {
    if (this.site.mobileView) {
      return;
    }

    this.watchScroll(event);
    return (this.hasScroll =
      event.target.scrollWidth > event.target.offsetWidth);
  }

  @bind
  stopScroll() {
    cancel(this.scrollInterval);
  }

  @bind
  watchScroll(event) {
    if (this.site.mobileView) {
      return;
    }

    if (
      event.target.offsetWidth + event.target.scrollLeft ===
      event.target.scrollWidth
    ) {
      this.hideRightScroll = true;
      cancel(this.scrollInterval);
    } else {
      this.hideRightScroll = false;
    }

    if (event.target.scrollLeft === 0) {
      this.hideLeftScroll = true;
      cancel(this.scrollInterval);
    } else {
      this.hideLeftScroll = false;
    }
  }

  @bind
  scrollDrag(event) {
    if (this.site.mobileView) {
      return;
    }

    event.preventDefault();

    const navPills = event.target.closest(".nav-pills");

    const position = {
      left: navPills.scrollLeft, // current scroll
      x: event.clientX, // mouse position
    };

    const mouseDragScroll = function (e) {
      let mouseChange = e.clientX - position.x;
      navPills.scrollLeft = position.left - mouseChange;

      navPills.querySelectorAll("a").forEach((a) => {
        a.style.cursor = "grabbing";
      });
    };

    const removeDragScroll = function () {
      document.removeEventListener("mousemove", mouseDragScroll);

      navPills.querySelectorAll("a").forEach((a) => {
        a.style.cursor = "pointer";
      });
    };

    document.addEventListener("mousemove", mouseDragScroll, { once: true });
    document.addEventListener("mouseup", removeDragScroll, { once: true });
  }

  @action
  horizScroll(event) {
    let scrollSpeed = 175;
    let siblingTarget = event.target.previousElementSibling;

    if (event.target.dataset.direction === "left") {
      scrollSpeed = scrollSpeed * -1;
      siblingTarget = event.target.nextElementSibling;
    }

    this.scrollInterval = discourseLater(() => {
      siblingTarget.scrollLeft += scrollSpeed;
      this.horizScroll(event);
    }, 50);
  }
}
