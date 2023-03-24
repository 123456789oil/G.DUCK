import ChatMessageReaction from "discourse/plugins/chat/discourse/models/chat-message-reaction";
import { isTesting } from "discourse-common/config/environment";
import Component from "@glimmer/component";
import I18n from "I18n";
import optionalService from "discourse/lib/optional-service";
import { action } from "@ember/object";
import { ajax } from "discourse/lib/ajax";
import { cancel, schedule } from "@ember/runloop";
import { inject as service } from "@ember/service";
import discourseLater from "discourse-common/lib/later";
import isZoomed from "discourse/plugins/chat/discourse/lib/zoom-check";
import { tracked } from "@glimmer/tracking";
import { getOwner } from "discourse-common/lib/get-owner";

let _chatMessageDecorators = [];

export function addChatMessageDecorator(decorator) {
  _chatMessageDecorators.push(decorator);
}

export function resetChatMessageDecorators() {
  _chatMessageDecorators = [];
}

export const MENTION_KEYWORDS = ["here", "all"];
const THREAD_CONTEXT = "thread";

export default class ChatMessage extends Component {
  @service site;
  @service dialog;
  @service currentUser;
  @service appEvents;
  @service chat;
  @service chatEmojiReactionStore;
  @service chatEmojiPickerManager;
  @service chatChannelsManager;
  @service router;

  @tracked chatMessageActionsMobileAnchor = null;
  @tracked chatMessageActionsDesktopAnchor = null;

  @optionalService adminTools;

  cachedFavoritesReactions = null;
  reacting = false;

  constructor() {
    super(...arguments);

    this.cachedFavoritesReactions = this.chatEmojiReactionStore.favorites;
  }

  get deletedAndCollapsed() {
    return this.args.message?.deletedAt && this.collapsed;
  }

  get hiddenAndCollapsed() {
    return this.args.message?.hidden && this.collapsed;
  }

  get collapsed() {
    return !this.args.message?.expanded;
  }

  @action
  setMessageActionsAnchors() {
    schedule("afterRender", () => {
      const { desktopAnchor, mobileAnchor } =
        this.args.livePanel.messageActionsAnchors();
      this.chatMessageActionsDesktopAnchor = desktopAnchor;
      this.chatMessageActionsMobileAnchor = mobileAnchor;
    });
  }

  @action
  teardownChatMessage() {
    cancel(this._invitationSentTimer);
  }

  @action
  decorateCookedMessage() {
    schedule("afterRender", () => {
      if (!this.messageContainer) {
        return;
      }

      _chatMessageDecorators.forEach((decorator) => {
        decorator.call(this, this.messageContainer, this.args.channel);
      });
    });
  }

  get messageContainer() {
    const id = this.args.message?.id;
    if (id) {
      return document.querySelector(`.chat-message-container[data-id='${id}']`);
    }
  }

  get showActions() {
    return (
      this.chat.userCanInteractWithChat &&
      !this.args.message?.staged &&
      this.args.isHovered
    );
  }

  get secondaryButtons() {
    const buttons = [];

    buttons.push({
      id: "copyLink",
      name: I18n.t("chat.copy_link"),
      icon: "link",
    });

    if (this.showEditButton) {
      buttons.push({
        id: "edit",
        name: I18n.t("chat.edit"),
        icon: "pencil-alt",
      });
    }

    if (!this.args.livePanel.selectingMessages) {
      buttons.push({
        id: "select",
        name: I18n.t("chat.select"),
        icon: "tasks",
      });
    }

    if (this.canFlagMessage) {
      buttons.push({
        id: "flag",
        name: I18n.t("chat.flag"),
        icon: "flag",
      });
    }

    if (this.showDeleteButton) {
      buttons.push({
        id: "delete",
        name: I18n.t("chat.delete"),
        icon: "trash-alt",
      });
    }

    if (this.showRestoreButton) {
      buttons.push({
        id: "restore",
        name: I18n.t("chat.restore"),
        icon: "undo",
      });
    }

    if (this.showRebakeButton) {
      buttons.push({
        id: "rebake",
        name: I18n.t("chat.rebake_message"),
        icon: "sync-alt",
      });
    }

    if (this.hasThread) {
      buttons.push({
        id: "openThread",
        name: I18n.t("chat.threads.open"),
        icon: "puzzle-piece",
      });
    }

    return buttons;
  }

  get messageCapabilities() {
    return {
      canReact: this.canReact,
      canReply: this.canReply,
      canBookmark: this.showBookmarkButton,
      hasThread: this.canReply && this.hasThread,
    };
  }

  get hasThread() {
    return (
      this.args.channel?.get("threading_enabled") && this.args.message?.threadId
    );
  }

  get show() {
    return (
      !this.args.message?.deletedAt ||
      this.currentUser.id === this.args.message?.user?.id ||
      this.currentUser.staff ||
      this.args.channel?.canModerate
    );
  }

  @action
  handleTouchStart() {
    // if zoomed don't track long press
    if (isZoomed()) {
      return;
    }

    if (!this.args.isHovered) {
      // when testing this must be triggered immediately because there
      // is no concept of "long press" there, the Ember `tap` test helper
      // does send the touchstart/touchend events but immediately, see
      // https://github.com/emberjs/ember-test-helpers/blob/master/API.md#tap
      if (isTesting()) {
        this._handleLongPress();
      }

      this._isPressingHandler = discourseLater(this._handleLongPress, 500);
    }
  }

  @action
  handleTouchMove() {
    if (!this.args.isHovered) {
      cancel(this._isPressingHandler);
    }
  }

  @action
  handleTouchEnd() {
    cancel(this._isPressingHandler);
  }

  @action
  _handleLongPress() {
    if (isZoomed()) {
      // if zoomed don't handle long press
      return;
    }

    document.activeElement.blur();
    document.querySelector(".chat-composer-input")?.blur();

    this.args.livePanel.hoverMessage?.(this.args.message);
  }

  get hideUserInfo() {
    const message = this.args.message;
    const previousMessage = message?.previousMessage;

    if (!previousMessage) {
      return false;
    }

    // this is a micro optimization to avoid layout changes when we load more messages
    if (message?.firstOfResults) {
      return false;
    }

    return (
      !message?.chatWebhookEvent &&
      (!message?.inReplyTo ||
        message?.inReplyTo?.user?.id !== message?.user?.id) &&
      !message?.previousMessage?.deletedAt &&
      Math.abs(
        new Date(message?.createdAt) - new Date(previousMessage?.createdAt)
      ) < 300000 && // If the time between messages is over 5 minutes, break.
      message?.user?.id === message?.previousMessage?.user?.id
    );
  }

  get hideReplyToInfo() {
    return (
      this.args.context === THREAD_CONTEXT ||
      this.args.message?.inReplyTo?.id ===
        this.args.message?.previousMessage?.id
    );
  }

  get showEditButton() {
    return (
      !this.args.message?.deletedAt &&
      this.currentUser?.id === this.args.message?.user?.id &&
      this.args.channel?.canModifyMessages?.(this.currentUser)
    );
  }

  get canFlagMessage() {
    return (
      this.currentUser?.id !== this.args.message?.user?.id &&
      !this.args.channel?.isDirectMessageChannel &&
      this.args.message?.userFlagStatus === undefined &&
      this.args.channel?.canFlag &&
      !this.args.message?.chatWebhookEvent &&
      !this.args.message?.deletedAt
    );
  }

  get canManageDeletion() {
    return this.currentUser?.id === this.args.message.user.id
      ? this.args.channel?.canDeleteSelf
      : this.args.channel?.canDeleteOthers;
  }

  get canReply() {
    return (
      !this.args.message?.deletedAt &&
      this.args.channel?.canModifyMessages?.(this.currentUser)
    );
  }

  get canReact() {
    return (
      !this.args.message?.deletedAt &&
      this.args.channel?.canModifyMessages?.(this.currentUser)
    );
  }

  get showDeleteButton() {
    return (
      this.canManageDeletion &&
      !this.args.message?.deletedAt &&
      this.args.channel?.canModifyMessages?.(this.currentUser)
    );
  }

  get showRestoreButton() {
    return (
      this.canManageDeletion &&
      this.args.message?.deletedAt &&
      this.args.channel?.canModifyMessages?.(this.currentUser)
    );
  }

  get showBookmarkButton() {
    return this.args.channel?.canModifyMessages?.(this.currentUser);
  }

  get showRebakeButton() {
    return (
      this.currentUser?.staff &&
      this.args.channel?.canModifyMessages?.(this.currentUser)
    );
  }

  get mentionWarning() {
    return this.args.message.mentionWarning;
  }

  get mentionedCannotSeeText() {
    return this._findTranslatedWarning(
      "chat.mention_warning.cannot_see",
      "chat.mention_warning.cannot_see_multiple",
      {
        username: this.mentionWarning?.cannot_see?.[0]?.username,
        count: this.mentionWarning?.cannot_see?.length,
      }
    );
  }

  get mentionedWithoutMembershipText() {
    return this._findTranslatedWarning(
      "chat.mention_warning.without_membership",
      "chat.mention_warning.without_membership_multiple",
      {
        username: this.mentionWarning?.without_membership?.[0]?.username,
        count: this.mentionWarning?.without_membership?.length,
      }
    );
  }

  get groupsWithDisabledMentions() {
    return this._findTranslatedWarning(
      "chat.mention_warning.group_mentions_disabled",
      "chat.mention_warning.group_mentions_disabled_multiple",
      {
        group_name: this.mentionWarning?.group_mentions_disabled?.[0],
        count: this.mentionWarning?.group_mentions_disabled?.length,
      }
    );
  }

  get groupsWithTooManyMembers() {
    return this._findTranslatedWarning(
      "chat.mention_warning.too_many_members",
      "chat.mention_warning.too_many_members_multiple",
      {
        group_name: this.mentionWarning.groups_with_too_many_members?.[0],
        count: this.mentionWarning.groups_with_too_many_members?.length,
      }
    );
  }

  _findTranslatedWarning(oneKey, multipleKey, args) {
    const translationKey = args.count === 1 ? oneKey : multipleKey;
    args.count--;
    return I18n.t(translationKey, args);
  }

  @action
  inviteMentioned() {
    const userIds = this.mentionWarning.without_membership.mapBy("id");

    ajax(`/chat/${this.args.message.channelId}/invite`, {
      method: "PUT",
      data: { user_ids: userIds, chat_message_id: this.args.message.id },
    }).then(() => {
      this.args.message.mentionWarning.set("invitationSent", true);
      this._invitationSentTimer = discourseLater(() => {
        this.dismissMentionWarning();
      }, 3000);
    });

    return false;
  }

  @action
  dismissMentionWarning() {
    this.args.message.mentionWarning = null;
  }

  get capabilities() {
    return getOwner(this).lookup("capabilities:main");
  }

  @action
  expand() {
    this.args.message.expanded = true;
  }

  @action
  toggleChecked(event) {
    if (event.shiftKey) {
      this.args.messageActionsHandler.bulkSelect(
        this.args.message,
        event.target.checked
      );
    }

    this.args.messageActionsHandler.bulkSelect(
      this.args.message,
      event.target.checked
    );
  }

  get emojiReactions() {
    let favorites = this.cachedFavoritesReactions;

    // may be a {} if no defaults defined in some production builds
    if (!favorites || !favorites.slice) {
      return [];
    }

    return favorites.slice(0, 3).map((emoji) => {
      return (
        this.args.message.reactions.find(
          (reaction) => reaction.emoji === emoji
        ) ||
        ChatMessageReaction.create({
          emoji,
        })
      );
    });
  }
}
