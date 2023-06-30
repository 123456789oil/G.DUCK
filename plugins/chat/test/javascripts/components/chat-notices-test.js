import ChatChannel from "discourse/plugins/chat/discourse/models/chat-channel";
import { setupRenderingTest } from "discourse/tests/helpers/component-test";
import hbs from "htmlbars-inline-precompile";
import { query, queryAll } from "discourse/tests/helpers/qunit-helpers";
import { module, test } from "qunit";
import { click, render } from "@ember/test-helpers";

module("Discourse Chat | Component | chat-notice", function (hooks) {
  setupRenderingTest(hooks);

  test("displays all notices for a channel", async function (assert) {
    this.channel = ChatChannel.create({ id: 12, chatable_type: "Category" });
    this.manager = this.container.lookup(
      "service:chatChannelPaneSubscriptionsManager"
    );
    this.manager.handleNotice({ chat_channel_id: 12, text_content: "hello" });
    this.manager.handleNotice({ chat_channel_id: 12, text_content: "goodbye" });
    this.manager.handleNotice({ chat_channel_id: 13, text_content: "N/A" });

    await render(hbs`<ChatNotices @channel={{this.channel}} />`);

    const notices = queryAll(".chat-notices .chat-notices__notice");

    assert.strictEqual(notices.length, 2, "Two notices are rendered");

    assert.true(notices[0].innerText.includes("hello"));
    assert.true(notices[1].innerText.includes("goodbye"));
  });

  test("Notices can be cleared", async function (assert) {
    this.channel = ChatChannel.create({ id: 12, chatable_type: "Category" });
    this.manager = this.container.lookup(
      "service:chatChannelPaneSubscriptionsManager"
    );
    this.manager.handleNotice({ chat_channel_id: 12, text_content: "hello" });

    await render(hbs`<ChatNotices @channel={{this.channel}} />`);

    assert.strictEqual(
      queryAll(".chat-notices .chat-notices__notice").length,
      1,
      "Notice is present"
    );

    await click(query(".chat-notices__notice__clear"), "Clear the notice");

    assert.strictEqual(
      queryAll(".chat-notices .chat-notices__notice").length,
      0,
      "Notice was cleared"
    );
  });
});
