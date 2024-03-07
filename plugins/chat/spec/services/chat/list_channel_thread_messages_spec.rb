# frozen_string_literal: true

RSpec.describe Chat::ListChannelThreadMessages do
  subject(:result) { described_class.call(params) }

  fab!(:user)
  fab!(:thread) do
    Fabricate(:chat_thread, channel: Fabricate(:chat_channel, threading_enabled: true))
  end

  let(:guardian) { Guardian.new(user) }
  let(:thread_id) { thread.id }
  let(:optional_params) { {} }
  let(:params) { { guardian: guardian, thread_id: thread_id }.merge(optional_params) }

  before { thread.channel.add(user) }

  context "when contract" do
    context "when thread_id is not present" do
      let(:thread_id) { nil }

      it { is_expected.to fail_a_contract }
    end
  end

  context "when fetch_thread" do
    context "when thread doesn’t exist" do
      let(:thread_id) { -1 }

      it { is_expected.to fail_to_find_a_model(:thread) }
    end

    context "when thread exists" do
      it "finds the correct channel" do
        expect(result.thread).to eq(thread)
      end
    end
  end

  context "when ensure_thread_enabled?" do
    context "when channel threading is disabled" do
      before { thread.channel.update!(threading_enabled: false) }

      it { is_expected.to fail_a_policy(:ensure_thread_enabled) }

      context "when the thread is forced" do
        before { thread.update!(force: true) }

        it { is_expected.to be_a_success }
      end
    end

    context "when channel and site setting are enabling threading" do
      before { thread.channel.update!(threading_enabled: true) }

      it { is_expected.to be_a_success }
    end
  end

  context "when can_view_thread" do
    context "when channel is private" do
      fab!(:thread) do
        Fabricate(
          :chat_thread,
          channel: Fabricate(:private_category_channel, threading_enabled: true),
        )
      end

      it { is_expected.to fail_a_policy(:can_view_thread) }
    end
  end

  context "when determine_target_message_id" do
    context "when fetch_from_last_read is true" do
      let(:optional_params) { { fetch_from_last_read: true } }

      before do
        thread.add(user)
        thread.membership_for(guardian.user).update!(last_read_message_id: 1)
      end

      it "sets target_message_id to last_read_message_id" do
        expect(result.target_message_id).to eq(1)
      end
    end
  end

  context "when target_message_exists" do
    context "when no target_message_id is given" do
      it { is_expected.to be_a_success }
    end

    context "when target message is not found" do
      let(:optional_params) { { target_message_id: -1 } }

      it { is_expected.to fail_a_policy(:target_message_exists) }
    end

    context "when target message is found" do
      fab!(:target_message) do
        Fabricate(:chat_message, chat_channel: thread.channel, thread: thread)
      end
      let(:optional_params) { { target_message_id: target_message.id } }

      it { is_expected.to be_a_success }
    end

    context "when target message is trashed" do
      fab!(:target_message) do
        Fabricate(:chat_message, chat_channel: thread.channel, thread: thread)
      end
      let(:optional_params) { { target_message_id: target_message.id } }

      before { target_message.trash! }

      context "when user is regular" do
        it { is_expected.to fail_a_policy(:target_message_exists) }
      end

      context "when user is the message creator" do
        fab!(:target_message) do
          Fabricate(:chat_message, chat_channel: thread.channel, thread: thread, user: user)
        end

        it { is_expected.to be_a_success }
      end

      context "when user is admin" do
        fab!(:user) { Fabricate(:admin) }

        it { is_expected.to be_a_success }
      end
    end
  end

  context "when fetch_messages" do
    context "with not params" do
      fab!(:messages) do
        Fabricate.times(20, :chat_message, chat_channel: thread.channel, thread: thread)
      end

      it "returns messages" do
        expect(result.can_load_more_past).to eq(false)
        expect(result.can_load_more_future).to eq(false)
        expect(result.messages).to contain_exactly(thread.original_message, *messages)
      end
    end

    context "when target_date is provided" do
      fab!(:past_message) do
        Fabricate(
          :chat_message,
          chat_channel: thread.channel,
          thread: thread,
          created_at: 1.days.from_now,
        )
      end
      fab!(:future_message) do
        Fabricate(
          :chat_message,
          chat_channel: thread.channel,
          thread: thread,
          created_at: 3.days.from_now,
        )
      end

      let(:optional_params) { { target_date: 2.days.ago } }

      it "includes past and future messages" do
        expect(result.messages).to eq([thread.original_message, past_message, future_message])
      end
    end
  end
end
