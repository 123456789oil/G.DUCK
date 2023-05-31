# frozen_string_literal: true

RSpec.describe PostGuardian do
  fab!(:user) { Fabricate(:user) }
  fab!(:anon) { Fabricate(:anonymous) }
  fab!(:admin) { Fabricate(:admin) }
  fab!(:moderator) { Fabricate(:moderator) }
  fab!(:group) { Fabricate(:group) }
  fab!(:group_user) { Fabricate(:group_user, group: group, user: user) }
  fab!(:category) { Fabricate(:category) }
  fab!(:topic) { Fabricate(:topic, category: category) }
  fab!(:hidden_post) { Fabricate(:post, topic: topic, hidden: true) }

  describe "#can_see_hidden_post?" do
    context "when the hidden_post_visible_groups contains everyone" do
      before { SiteSetting.hidden_post_visible_groups = "#{Group::AUTO_GROUPS[:everyone]}" }

      it "returns true for everyone" do
        expect(Guardian.new(anon).can_see_hidden_post?(hidden_post)).to eq(true)
        expect(Guardian.new(user).can_see_hidden_post?(hidden_post)).to eq(true)
        expect(Guardian.new(admin).can_see_hidden_post?(hidden_post)).to eq(true)
        expect(Guardian.new(moderator).can_see_hidden_post?(hidden_post)).to eq(true)
      end
    end

    context "when the post is a created by the user" do
      fab!(:hidden_post) { Fabricate(:post, topic: topic, hidden: true, user: user) }

      before { SiteSetting.hidden_post_visible_groups = "" }

      it "returns true for the author" do
        SiteSetting.hidden_post_visible_groups = ""
        expect(Guardian.new(user).can_see_hidden_post?(hidden_post)).to eq(true)
      end
    end

    context "when the post is a created by another user" do
      before { SiteSetting.hidden_post_visible_groups = "14|#{group.id}" }

      it "returns true for staff users" do
        expect(Guardian.new(admin).can_see_hidden_post?(hidden_post)).to eq(true)
        expect(Guardian.new(moderator).can_see_hidden_post?(hidden_post)).to eq(true)
      end

      it "returns false for anonymous users" do
        expect(Guardian.new(anon).can_see_hidden_post?(hidden_post)).to eq(false)
      end

      it "returns true if the user is in hidden_post_visible_groups" do
        expect(Guardian.new(user).can_see_hidden_post?(hidden_post)).to eq(true)
      end

      it "returns false if the user is not in hidden_post_visible_groups" do
        expect(Guardian.new.can_see_hidden_post?(hidden_post)).to eq(false)
      end
    end
  end
end
