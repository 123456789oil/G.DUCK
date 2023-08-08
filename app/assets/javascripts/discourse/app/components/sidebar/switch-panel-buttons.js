import Component from "@glimmer/component";
import { inject as service } from "@ember/service";
import { action } from "@ember/object";
import { tracked } from "@glimmer/tracking";

export default class SwitchPanelButtons extends Component {
  @service router;
  @service sidebarState;
  @tracked isSwitching = false;

  @action
  switchPanel(panel) {
    this.isSwitching = true;
    this.sidebarState.currentPanel.lastKnownURL = this.router.currentURL;
    this.sidebarState.setPanel(panel.key);

    const url = panel.lastKnownURL || panel.switchButtonDefaultUrl;
    const destination = url === "/" ? "discovery.latest" : url;
    this.router
      .transitionTo(destination)
      .then(() => (this.isSwitching = false));
  }
}
