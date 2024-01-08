import Component from "@glimmer/component";
import { inject as service } from "@ember/service";
import { htmlSafe } from "@ember/template";
import replaceEmoji from "discourse/helpers/replace-emoji";
import i18n from "discourse-common/helpers/i18n";
import I18n from "discourse-i18n";
import Navbar from "discourse/plugins/chat/discourse/components/chat/navbar";

export default class ChatThreadListHeader extends Component {
  @service router;
  @service site;
  @service chat;
  @service chatHistory;

  threadListTitle = I18n.t("chat.threads.list");

  get title() {
    let title = replaceEmoji(this.threadListTitle);

    if (this.site.mobileView) {
      title += " - " + replaceEmoji(this.args.channel.title);
    }

    return htmlSafe(title);
  }

  get backButton() {
    const link = {
      models: this.chat.activeChannel?.routeModels,
    };

    if (this.chatHistory.previousRoute?.name === "chat.channel.threads") {
      link.title = I18n.t("chat.return_to_threads_list");
      link.route = "chat.channel.threads";
    } else if (this.chatHistory.previousRoute?.name === "chat.threads") {
      link.title = I18n.t("chat.my_threads.title");
      link.route = "chat.threads";
      link.models = [];
    } else {
      link.title = I18n.t("chat.return_to_channel");
      link.route = "chat.channel";
    }

    return link;
  }

  <template>
    <Navbar as |navbar|>
      {{#if this.site.mobileView}}
        <navbar.BackButton
          @route={{backButton.route}}
          @routeModels={{backButton.models}}
          @title={{i18n backButton.title}}
        />
      {{/if}}

      <navbar.Title @title={{this.title}} @icon="discourse-threads" />

      <navbar.Actions as |action|>
        <action.CloseThreadsButton @channel={{@channel}} />
      </navbar.Actions>
    </Navbar>
  </template>
}
