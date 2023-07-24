import { action } from "@ember/object";
import { inject as service } from "@ember/service";
import Component from "@glimmer/component";

export default class DiscardDraftModal extends Component {
  @service modal;

  @action
  async discardDraft() {
    await this.args.model.onDestroyDraft();
    this.args.closeModal();
  }

  @action
  async saveDraftAndClose() {
    await this.args.model.onSaveDraft();
    this.args.closeModal();
  }
}
