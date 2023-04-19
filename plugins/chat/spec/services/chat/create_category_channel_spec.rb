# frozen_string_literal: true

RSpec.describe Chat::CreateCategoryChannel do
  describe Chat::CreateCategoryChannel::Contract, type: :model do
    it { is_expected.to validate_presence_of :category_id }
    it { is_expected.to validate_length_of(:name).is_at_most(SiteSetting.max_topic_title_length) }
  end

  describe ".call" do
    subject(:result) { described_class.call(params) }

    fab!(:current_user) { Fabricate(:admin) }
    fab!(:category) { Fabricate(:category) }
    let(:category_id) { category.id }

    let(:guardian) { Guardian.new(current_user) }
    let(:params) { { guardian: guardian, category_id: category_id, name: "cool channel" } }

    context "when the current user cannot make a channel" do
      fab!(:current_user) { Fabricate(:user) }
      it { is_expected.to fail_a_policy(:can_create_channel) }
    end

    context "when the current user can make a channel" do
      context "when there is already a channel for the category with the same name" do
        fab!(:old_channel) { Fabricate(:chat_channel, chatable: category, name: "old channel") }
        let(:params) { { guardian: guardian, category_id: category_id, name: "old channel" } }

        it { is_expected.to fail_a_policy(:category_channel_does_not_exist) }
      end

      context "when the category does not exist" do
        before { category.destroy! }

        it { is_expected.to fail_to_find_a_model(:category) }
      end

      context "when all steps pass" do
        it "creates the channel" do
          expect { result }.to change { Chat::Channel.count }.by(1)
          expect(result.channel.chatable).to eq(category)
          expect(result.channel.name).to eq("cool channel")
          expect(result.channel.slug).to eq("cool-channel")
        end

        it "creates a membership for the user" do
          expect { result }.to change { Chat::UserChatChannelMembership.count }.by(1)
          expect(result.membership.user).to eq(current_user)
          expect(result.membership.chat_channel).to eq(result.channel)
          expect(result.membership.following).to eq(true)
        end

        it "does not enforce automatic memberships" do
          Chat::ChannelMembershipManager
            .any_instance
            .expects(:enforce_automatic_channel_memberships)
            .never
          result
        end

        context "if auto_join_users is true" do
          let(:params) { { guardian: guardian, category_id: category_id, auto_join_users: "true" } }

          it "enforces automatic memberships" do
            Chat::ChannelMembershipManager
              .any_instance
              .expects(:enforce_automatic_channel_memberships)
              .once
            result
          end
        end
      end
    end
  end
end
