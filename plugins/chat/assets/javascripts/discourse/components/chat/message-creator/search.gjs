import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";
import { inject as service } from "@ember/service";
import DButton from "discourse/components/d-button";
import { popupAjaxError } from "discourse/lib/ajax-error";
import { INPUT_DELAY } from "discourse-common/config/environment";
import discourseDebounce from "discourse-common/lib/debounce";
import { MODES } from "./constants";
import ChatablesLoader from "./lib/chatables-loader";
import List from "./list";
import ListHandler from "./list-handler";
import SearchInput from "./search-input";

export default class ChatMessageCreatorSearch extends Component {
  @service chat;
  @service router;

  @tracked chatables = [];
  @tracked highlightedChatable;

  get items() {
    return [
      {
        identifier: "new-group",
        type: "action",
        label: "New group chat",
        enabled: true,
        icon: "users",
      },
      ...this.chatables,
    ];
  }

  @action
  prefillAddMembers(item) {
    this.args.onChangeMode(MODES.new_group, [item]);
  }

  @action
  highlightChatable(chatable) {
    this.highlightedChatable = chatable;
  }

  @action
  async selectChatable(item) {
    switch (item.type) {
      case "action":
        this.args.onChangeMode(MODES.new_group);
        break;
      case "user":
        await this.startOneToOneChannel(item.model.username);
        break;
      default:
        this.router.transitionTo("chat.channel", ...item.model.routeModels);
        this.args.close();
        break;
    }
  }

  @action
  onFilter(event) {
    this.searchHandler = discourseDebounce(
      this,
      this.fetch,
      event.target.value,
      INPUT_DELAY
    );
  }

  @action
  async fetch(term) {
    const loader = new ChatablesLoader(this);
    this.chatables = await loader.search(term);

    this.highlightedChatable = this.items[0];
  }

  async startOneToOneChannel(username) {
    try {
      const channel = await this.chat.upsertDmChannelForUsernames([username]);

      if (!channel) {
        return;
      }

      this.args.close?.();
      this.router.transitionTo("chat.channel", ...channel.routeModels);
    } catch (error) {
      popupAjaxError(error);
    }
  }

  <template>
    <ListHandler
      @items={{this.items}}
      @highlightedItem={{this.highlightedChatable}}
      @onHighlight={{this.highlightChatable}}
      @onSelect={{this.selectChatable}}
      @onShifSelect={{this.prefillAddMembers}}
    >
      <div class="chat-message-creator__search-container">
        <div class="chat-message-creator__search">
          <div class="chat-message-creator__section">
            <SearchInput @onFilter={{this.onFilter}} />

            <DButton
              class="btn-flat chat-message-creator__search-input__cancel-button"
              @icon="times"
              @action={{@close}}
            />
          </div>

          <List
            @items={{this.items}}
            @highlightedItem={{this.highlightedChatable}}
            @onSelect={{this.selectChatable}}
            @onHighlight={{this.highlightChatable}}
            @onShiftSelect={{this.prefillAddMembers}}
          />
        </div>
      </div>
    </ListHandler>
  </template>
}
