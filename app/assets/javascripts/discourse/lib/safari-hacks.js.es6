import debounce from "discourse/lib/debounce";
import { isAppleDevice, safariHacksDisabled } from "discourse/lib/utilities";

// we can't tell what the actual visible window height is
// because we cannot account for the height of the mobile keyboard
// and any other mobile autocomplete UI that may appear
// so let's be conservative here rather than trying to max out every
// available pixel of height for the editor
function calcHeight() {
  // estimate 270 px for keyboard
  let withoutKeyboard = window.innerHeight - 270;
  const min = 270;

  // iPhone shrinks header and removes footer controls ( back / forward nav )
  // at 39px we are at the largest viewport
  const portrait = window.innerHeight > window.innerWidth;
  const smallViewport =
    (portrait ? window.screen.height : window.screen.width) -
      window.innerHeight >
    40;

  if (portrait) {
    // iPhone SE, it is super small so just
    // have a bit of crop
    if (window.screen.height === 568) {
      withoutKeyboard = 270;
    }

    // iPhone 6/7/8
    if (window.screen.height === 667) {
      withoutKeyboard = smallViewport ? 295 : 325;
    }

    // iPhone 6/7/8 plus
    if (window.screen.height === 736) {
      withoutKeyboard = smallViewport ? 353 : 383;
    }

    // iPhone X
    if (window.screen.height === 812) {
      withoutKeyboard = smallViewport ? 340 : 370;
    }

    // iPad can use innerHeight cause it renders nothing in the footer
    if (window.innerHeight > 920) {
      withoutKeyboard -= 45;
    }
  } else {
    // landscape
    // iPad, we have a bigger keyboard
    if (window.innerHeight > 665) {
      withoutKeyboard -= 128;
    }
  }

  // iPad portrait also has a bigger keyboard
  return Math.max(withoutKeyboard, min);
}

let workaroundActive = false;
let composingTopic = false;

export function isWorkaroundActive() {
  return workaroundActive;
}

// per http://stackoverflow.com/questions/29001977/safari-in-ios8-is-scrolling-screen-when-fixed-elements-get-focus/29064810
function positioningWorkaround(fixedElement) {
  if (!isAppleDevice() || safariHacksDisabled()) {
    return;
  }

  const oldHeight = fixedElement.style.height;
  const $window = $(window);

  let done = false;
  let originalScrollTop = 0;

  positioningWorkaround.blur = function(evt) {
    if (workaroundActive) {
      done = true;

      document.getElementById("main-outlet").style.display = "block";
      document.querySelector("header").style.display = "block";

      fixedElement.style.position = "";
      fixedElement.style.top = "";
      fixedElement.style.height = oldHeight;

      Ember.run.later(
        () => fixedElement.classList.remove("no-transition"),
        500
      );

      $window.scrollTop(originalScrollTop);

      if (evt) {
        evt.target.removeEventListener("blur", blurred);
      }

      workaroundActive = false;
    }
  };

  const blurredNow = function(evt) {
    if (
      !done &&
      $(document.activeElement)
        .parents()
        .toArray()
        .indexOf(fixedElement) > -1
    ) {
      // something in focus so skip
      return;
    }

    positioningWorkaround.blur(evt);
  };

  const blurred = debounce(blurredNow, 250);

  const positioningHack = function(evt) {
    done = false;

    // we need this, otherwise changing focus means we never clear
    this.addEventListener("blur", blurred);

    if (fixedElement.style.top === "0px") {
      if (this !== document.activeElement) {
        evt.preventDefault();
        this.focus();
      }
      return;
    }

    originalScrollTop = $window.scrollTop();

    // take care of body

    document.getElementById("main-outlet").style.display = "none";
    document.querySelector("header").style.display = "none";

    $window.scrollTop(0);

    let i = 20;
    let interval = setInterval(() => {
      $window.scrollTop(0);
      if (i-- === 0) clearInterval(interval);
    }, 10);

    fixedElement.style.top = "0px";

    composingTopic =
      document.querySelector("#reply-control .category-chooser") !== null;

    const height = calcHeight(composingTopic);
    fixedElement.style.height = height + "px";
    fixedElement.classList.add("no-transition");

    evt.preventDefault();
    this.focus();
    workaroundActive = true;
  };

  function attachTouchStart(elem, fn) {
    if (!elem.getAttribute("listening")) {
      elem.addEventListener("touchstart", fn);
      elem.setAttribute("data-listening", true);
    }
  }

  const checkForInputs = debounce(function() {
    fixedElement
      .querySelectorAll(
        "button:not(.hide-preview),a:not(.mobile-file-upload):not(.toggle-toolbar)"
      )
      .forEach(node => {
        const $node = $(node);
        if (
          $node.parents(".emoji-picker").length > 0 ||
          $node.parents(".autocomplete").length > 0 ||
          $node.parents(".d-editor-button-bar").length > 0
        ) {
          return;
        }

        attachTouchStart(node, evt => {
          done = true;
          document.activeElement && document.activeElement.blur();
          evt.preventDefault();
          this.click();
        });
      });

    fixedElement
      .querySelectorAll("input[type=text],textarea")
      .forEach(node => attachTouchStart(node, positioningHack));
  }, 100);

  const config = {
    childList: true,
    subtree: true,
    attributes: false,
    characterData: false
  };
  const observer = new MutationObserver(checkForInputs);
  observer.observe(fixedElement, config);
}

export default positioningWorkaround;
