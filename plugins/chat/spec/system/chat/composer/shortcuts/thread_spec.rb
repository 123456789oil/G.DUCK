# frozen_string_literal: true

RSpec.describe "Chat | composer | shortcuts | thread", type: :system, js: true do
  fab!(:channel_1) { Fabricate(:chat_channel, threading_enabled: true) }
  fab!(:current_user) { Fabricate(:admin) }
  fab!(:message_1) { Fabricate(:chat_message, chat_channel: channel_1) }

  let(:chat_page) { PageObjects::Pages::Chat.new }
  let(:thread_page) { PageObjects::Pages::ChatThread.new }

  before do
    SiteSetting.enable_experimental_chat_threaded_discussions = true
    chat_system_bootstrap
    channel_1.add(current_user)
    sign_in(current_user)
  end

  describe "ArrowUp" do
    fab!(:thread_1) { Fabricate(:chat_message, user: current_user, in_reply_to: message_1).thread }
    let(:last_thread_message) { thread_1.replies.last }

    context "when there are editable messages" do
      before { Fabricate(:chat_message, user: current_user, thread: thread_1) }

      it "starts editing the last editable message" do
        chat_page.visit_thread(thread_1)

        thread_page.composer.edit_last_message_shortcut

        expect(thread_page.composer_message_details).to have_message(id: last_thread_message.id)
        expect(thread_page.composer.value).to eq(last_thread_message.message)
      end
    end

    context "when last message is staged" do
      it "does not edit a message" do
        chat_page.visit_thread(thread_1)
        page.driver.browser.network_conditions = { offline: true }
        thread_page.send_message(persisted: false, staged: true)
        thread_page.composer.edit_last_message_shortcut

        expect(thread_page.composer.message_details).to have_no_message
      ensure
        page.driver.browser.network_conditions = { offline: false }
      end
    end

    context "when last message is deleted" do
      before { last_thread_message.trash! }

      it "does not edit a message" do
        chat_page.visit_thread(thread_1)

        thread_page.composer.edit_last_message_shortcut

        expect(thread_page.composer.message_details).to have_no_message
      end
    end
  end
end
