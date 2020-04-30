# frozen_string_literal: true

require 'rails_helper'
require 'post_revisor'

describe PostRevisor do

  fab!(:topic) { Fabricate(:topic) }
  fab!(:newuser) { Fabricate(:newuser, last_seen_at: Date.today) }
  fab!(:user) { Fabricate(:user) }
  fab!(:admin) { Fabricate(:admin) }
  fab!(:moderator) { Fabricate(:moderator) }
  let(:post_args) { { user: newuser, topic: topic } }

  context 'TopicChanges' do
    let(:tc) {
      topic.reload
      PostRevisor::TopicChanges.new(topic, topic.user)
    }

    it 'provides a guardian' do
      expect(tc.guardian).to be_an_instance_of Guardian
    end

    it 'tracks changes properly' do
      expect(tc.diff).to eq({})

      # it remembers changes we tell it to
      tc.record_change('height', '180cm', '170cm')
      expect(tc.diff['height']).to eq(['180cm', '170cm'])

      # it works with arrays of values
      tc.record_change('colors', nil, ['red', 'blue'])
      expect(tc.diff['colors']).to eq([nil, ['red', 'blue']])

      # it does not record changes to the same val
      tc.record_change('wat', 'js', 'js')
      expect(tc.diff['wat']).to be_nil

      tc.record_change('tags', ['a', 'b'], ['a', 'b'])
      expect(tc.diff['tags']).to be_nil

    end
  end

  context 'editing category' do

    it 'does not revise category when no permission to create a topic in category' do
      category = Fabricate(:category)
      category.set_permissions(staff: :full)
      category.save!

      post = create_post
      old_id = post.topic.category_id

      post.revise(post.user, category_id: category.id)

      post.reload
      expect(post.topic.category_id).to eq(old_id)

      category.set_permissions(everyone: :full)
      category.save!

      post.revise(post.user, category_id: category.id)

      post.reload
      expect(post.topic.category_id).to eq(category.id)
    end

    it 'does not revise category when the destination category requires topic approval' do
      new_category = Fabricate(:category)
      new_category.custom_fields[Category::REQUIRE_TOPIC_APPROVAL] = true
      new_category.save!

      post = create_post
      old_category_id = post.topic.category_id

      post.revise(post.user, category_id: new_category.id)
      expect(post.reload.topic.category_id).to eq(old_category_id)

      new_category.custom_fields[Category::REQUIRE_TOPIC_APPROVAL] = false
      new_category.save!

      post.revise(post.user, category_id: new_category.id)
      expect(post.reload.topic.category_id).to eq(new_category.id)
    end
  end

  context 'revise wiki' do

    before do
      # There used to be a bug where wiki changes were considered posting "too similar"
      # so this is enabled and checked
      Discourse.redis.delete_prefixed('unique-post')
      SiteSetting.unique_posts_mins = 10
    end

    it 'allows the user to change it to a wiki' do
      pc = PostCreator.new(newuser, topic_id: topic.id, raw: 'this is a post that will become a wiki')
      post = pc.create
      expect(post.revise(post.user, wiki: true)).to be_truthy
      post.reload
      expect(post.wiki).to be_truthy
    end
  end

  context 'revise' do
    let(:post) { Fabricate(:post, post_args) }
    let(:first_version_at) { post.last_version_at }

    subject { PostRevisor.new(post) }

    describe 'with the same body' do
      it "doesn't change version" do
        expect {
          expect(subject.revise!(post.user, raw: post.raw)).to eq(false)
          post.reload
        }.not_to change(post, :version)
      end
    end

    describe 'with nil raw contents' do
      it "doesn't change version" do
        expect {
          expect(subject.revise!(post.user, raw: nil)).to eq(false)
          post.reload
        }.not_to change(post, :version)
      end
    end

    describe 'ninja editing' do
      it 'correctly applies edits' do
        SiteSetting.editing_grace_period = 1.minute

        subject.revise!(post.user, { raw: 'updated body' }, revised_at: post.updated_at + 10.seconds)
        post.reload

        expect(post.version).to eq(1)
        expect(post.public_version).to eq(1)
        expect(post.revisions.size).to eq(0)
        expect(post.last_version_at).to eq_time(first_version_at)
        expect(subject.category_changed).to be_blank
      end

      it "does create a new version if a large diff happens" do
        SiteSetting.editing_grace_period_max_diff = 10

        post = Fabricate(:post, raw: 'hello world')
        revisor = PostRevisor.new(post)
        revisor.revise!(post.user, { raw: 'hello world123456789' }, revised_at: post.updated_at + 1.second)

        post.reload

        expect(post.version).to eq(1)

        revisor = PostRevisor.new(post)
        revisor.revise!(post.user, { raw: 'hello world12345678901' }, revised_at: post.updated_at + 1.second)

        post.reload
        expect(post.version).to eq(2)

        expect(post.revisions.first.modifications["raw"][0]).to eq("hello world")
        expect(post.revisions.first.modifications["cooked"][0]).to eq("<p>hello world</p>")

        SiteSetting.editing_grace_period_max_diff_high_trust = 100

        post.user.update_columns(trust_level: 2)

        revisor = PostRevisor.new(post)
        revisor.revise!(post.user, { raw: 'hello world12345678901 123456789012' }, revised_at: post.updated_at + 1.second)

        post.reload
        expect(post.version).to eq(2)
        expect(post.revisions.count).to eq(1)

      end

      it "doesn't create a new version" do
        SiteSetting.editing_grace_period = 1.minute
        SiteSetting.editing_grace_period_max_diff = 100

        # making a revision
        subject.revise!(post.user, { raw: 'updated body' }, revised_at: post.updated_at + SiteSetting.editing_grace_period + 1.seconds)
        # "roll back"
        subject.revise!(post.user, { raw: 'Hello world' }, revised_at: post.updated_at + SiteSetting.editing_grace_period + 2.seconds)

        post.reload

        expect(post.version).to eq(1)
        expect(post.public_version).to eq(1)
        expect(post.revisions.size).to eq(0)
      end

      it "should bump the topic" do
        expect {
          subject.revise!(post.user, { raw: 'updated body' }, revised_at: post.updated_at + SiteSetting.editing_grace_period + 1.seconds)
        }.to change { post.topic.bumped_at }
      end

      it "should send muted and latest message" do
        TopicUser.create!(topic: post.topic, user: post.user, notification_level: 0)
        messages = MessageBus.track_publish("/latest") do
          subject.revise!(post.user, { raw: 'updated body' }, revised_at: post.updated_at + SiteSetting.editing_grace_period + 1.seconds)
        end

        muted_message = messages.find { |message| message.data["message_type"] == "muted" }
        latest_message = messages.find { |message| message.data["message_type"] == "latest" }

        expect(muted_message.data["topic_id"]).to eq(topic.id)
        expect(latest_message.data["topic_id"]).to eq(topic.id)
      end
    end

    describe 'edit reasons' do
      it "does create a new version if an edit reason is provided" do
        post = Fabricate(:post, raw: 'hello world')
        revisor = PostRevisor.new(post)
        revisor.revise!(post.user, { raw: 'hello world123456789', edit_reason: 'this is my reason' }, revised_at: post.updated_at + 1.second)
        post.reload
        expect(post.version).to eq(2)
        expect(post.revisions.count).to eq(1)
      end

      it "resets the edit_reason attribute in post model" do
        freeze_time
        SiteSetting.editing_grace_period = 5
        post = Fabricate(:post, raw: 'hello world')
        revisor = PostRevisor.new(post)
        revisor.revise!(post.user, { raw: 'hello world123456789', edit_reason: 'this is my reason' }, revised_at: post.updated_at + 1.second)
        post.reload
        expect(post.edit_reason).to eq('this is my reason')

        revisor.revise!(post.user, { raw: 'hello world4321' }, revised_at: post.updated_at + 7.seconds)
        post.reload
        expect(post.edit_reason).not_to be_present
      end

      it "does not create a new version if an edit reason is provided and its the same as the current edit reason" do
        post = Fabricate(:post, raw: 'hello world', edit_reason: 'this is my reason')
        revisor = PostRevisor.new(post)
        revisor.revise!(post.user, { raw: 'hello world123456789', edit_reason: 'this is my reason' }, revised_at: post.updated_at + 1.second)
        post.reload
        expect(post.version).to eq(1)
        expect(post.revisions.count).to eq(0)
      end

      it "does not clobber the existing edit reason for a revision if it is not provided in a subsequent revision" do
        post = Fabricate(:post, raw: 'hello world')
        revisor = PostRevisor.new(post)
        revisor.revise!(post.user, { raw: 'hello world123456789', edit_reason: 'this is my reason' }, revised_at: post.updated_at + 1.second)
        post.reload
        revisor.revise!(post.user, { raw: 'hello some other thing' }, revised_at: post.updated_at + 1.second)
        expect(post.revisions.first.modifications[:edit_reason]).to eq([nil, 'this is my reason'])
      end
    end

    describe 'hidden post' do
      it "correctly stores the modification value" do
        post.update(hidden: true, hidden_reason_id: Post.hidden_reasons[:flag_threshold_reached])
        revisor = PostRevisor.new(post)
        revisor.revise!(post.user, { raw: 'hello world' }, revised_at: post.updated_at + 11.minutes)
        expect(post.revisions.first.modifications.symbolize_keys).to eq(
          cooked: ["<p>Hello world</p>", "<p>hello world</p>"],
          raw: ["Hello world", "hello world"]
        )
      end
    end

    describe 'revision much later' do

      let!(:revised_at) { post.updated_at + 2.minutes }

      before do
        SiteSetting.editing_grace_period = 1.minute
        subject.revise!(post.user, { raw: 'updated body' }, revised_at: revised_at)
        post.reload
      end

      it "doesn't update a category" do
        expect(subject.category_changed).to be_blank
      end

      it 'updates the versions' do
        expect(post.version).to eq(2)
        expect(post.public_version).to eq(2)
      end

      it 'creates a new revision' do
        expect(post.revisions.size).to eq(1)
      end

      it "updates the last_version_at" do
        expect(post.last_version_at.to_i).to eq(revised_at.to_i)
      end

      describe "new edit window" do

        before do
          subject.revise!(post.user, { raw: 'yet another updated body' }, revised_at: revised_at)
          post.reload
        end

        it "doesn't create a new version if you do another" do
          expect(post.version).to eq(2)
          expect(post.public_version).to eq(2)
        end

        it "doesn't change last_version_at" do
          expect(post.last_version_at.to_i).to eq(revised_at.to_i)
        end

        it "doesn't update a category" do
          expect(subject.category_changed).to be_blank
        end

        context "after second window" do

          let!(:new_revised_at) { revised_at + 2.minutes }

          before do
            subject.revise!(post.user, { raw: 'yet another, another updated body' }, revised_at: new_revised_at)
            post.reload
          end

          it "does create a new version after the edit window" do
            expect(post.version).to eq(3)
            expect(post.public_version).to eq(3)
          end

          it "does create a new version after the edit window" do
            expect(post.last_version_at.to_i).to eq(new_revised_at.to_i)
          end
        end
      end
    end

    describe 'category topic' do

      let!(:category) do
        category = Fabricate(:category)
        category.update_column(:topic_id, topic.id)
        category
      end

      let(:new_description) { "this is my new description." }

      it "should have no description by default" do
        expect(category.description).to be_blank
      end

      context "one paragraph description" do
        before do
          subject.revise!(post.user, raw: new_description)
          category.reload
        end

        it "returns the changed category info" do
          expect(subject.category_changed).to eq(category)
        end

        it "updates the description of the category" do
          expect(category.description).to eq(new_description)
        end
      end

      context "multiple paragraph description" do
        before do
          subject.revise!(post.user, raw: "#{new_description}\n\nOther content goes here.")
          category.reload
        end

        it "returns the changed category info" do
          expect(subject.category_changed).to eq(category)
        end

        it "updates the description of the category" do
          expect(category.description).to eq(new_description)
        end
      end

      context "invalid description without paragraphs" do
        before do
          subject.revise!(post.user, raw: "# This is a title")
          category.reload
        end

        it "returns a error for the user" do
          expect(post.errors.present?).to eq(true)
          expect(post.errors.messages[:base].first).to be I18n.t("category.errors.description_incomplete")
        end

        it "doesn't update the description of the category" do
          expect(category.description).to eq(nil)
        end
      end

      context 'when updating back to the original paragraph' do
        before do
          category.update_column(:description, 'this is my description')
          subject.revise!(post.user, raw: Category.post_template)
          category.reload
        end

        it "puts the description back to nothing" do
          expect(category.description).to be_blank
        end

        it "returns the changed category info" do
          expect(subject.category_changed).to eq(category)
        end
      end

    end

    describe 'rate limiter' do
      fab!(:changed_by) { Fabricate(:coding_horror) }

      it "triggers a rate limiter" do
        EditRateLimiter.any_instance.expects(:performed!)
        subject.revise!(changed_by, raw: 'updated body')
      end
    end

    describe "admin editing a new user's post" do
      fab!(:changed_by) { Fabricate(:admin) }

      before do
        SiteSetting.newuser_max_images = 0
        url = "http://i.imgur.com/wfn7rgU.jpg"
        Oneboxer.stubs(:onebox).with(url, anything).returns("<img src='#{url}'>")
        subject.revise!(changed_by, raw: "So, post them here!\n#{url}")
      end

      it "allows an admin to insert images into a new user's post" do
        expect(post.errors).to be_blank
      end

      it "marks the admin as the last updater" do
        expect(post.last_editor_id).to eq(changed_by.id)
      end

    end

    describe "new user editing their own post" do
      before do
        SiteSetting.newuser_max_images = 0
        url = "http://i.imgur.com/FGg7Vzu.gif"
        Oneboxer.stubs(:cached_onebox).with(url, anything).returns("<img src='#{url}'>")
        subject.revise!(post.user, raw: "So, post them here!\n#{url}")
      end

      it "doesn't allow images to be inserted" do
        expect(post.errors).to be_present
      end

    end

    describe 'with a new body' do
      before do
        SiteSetting.editing_grace_period_max_diff = 1000
      end

      fab!(:changed_by) { Fabricate(:coding_horror) }
      let!(:result) { subject.revise!(changed_by, raw: "lets update the body. Здравствуйте") }

      it 'correctly updates raw' do
        expect(result).to eq(true)
        expect(post.raw).to eq("lets update the body. Здравствуйте")
        expect(post.invalidate_oneboxes).to eq(true)
        expect(post.version).to eq(2)
        expect(post.public_version).to eq(2)
        expect(post.revisions.size).to eq(1)
        expect(post.revisions.first.user_id).to eq(changed_by.id)

        # updates word count
        expect(post.word_count).to eq(5)
        post.topic.reload
        expect(post.topic.word_count).to eq(5)
      end

      context 'second poster posts again quickly' do

        it 'is a ninja edit, because the second poster posted again quickly' do
          SiteSetting.editing_grace_period = 1.minute
          subject.revise!(changed_by, { raw: 'yet another updated body' }, revised_at: post.updated_at + 10.seconds)
          post.reload
          expect(post.version).to eq(2)
          expect(post.public_version).to eq(2)
          expect(post.revisions.size).to eq(1)
        end
      end

      context 'passing skip_revision as true' do
        before do
          SiteSetting.editing_grace_period = 1.minute
          subject.revise!(changed_by, { raw: 'yet another updated body' }, revised_at: post.updated_at + 10.hours, skip_revision: true)
          post.reload
        end

        it 'does not create new revision ' do
          expect(post.version).to eq(2)
          expect(post.public_version).to eq(2)
          expect(post.revisions.size).to eq(1)
        end
      end
    end

    describe "topic excerpt" do
      it "topic excerpt is updated only if first post is revised" do
        revisor = PostRevisor.new(post)
        first_post = topic.posts.by_post_number.first
        expect {
          revisor.revise!(first_post.user, { raw: 'Edit the first post' }, revised_at: first_post.updated_at + 10.seconds)
          topic.reload
        }.to change { topic.excerpt }
        second_post = Fabricate(:post, post_args.merge(post_number: 2, topic_id: topic.id))
        expect {
          PostRevisor.new(second_post).revise!(second_post.user, raw: 'Edit the 2nd post')
          topic.reload
        }.to_not change { topic.excerpt }
      end
    end

    it "doesn't strip starting whitespaces" do
      subject.revise!(post.user, raw: "    <-- whitespaces -->    ")
      post.reload
      expect(post.raw).to eq("    <-- whitespaces -->")
    end

    context "#publish_changes" do
      let!(:post) { Fabricate(:post, topic: topic) }

      it "should publish topic changes to clients" do
        revisor = PostRevisor.new(topic.ordered_posts.first, topic)

        message = MessageBus.track_publish("/topic/#{topic.id}") do
          revisor.revise!(newuser, title: 'this is a test topic')
        end.first

        payload = message.data
        expect(payload[:reload_topic]).to eq(true)
      end
    end

    context "logging staff edits" do
      it "doesn't log when a regular user revises a post" do
        subject.revise!(
          post.user,
          raw: "lets totally update the body"
        )
        log = UserHistory.where(
          acting_user_id: post.user.id,
          action: UserHistory.actions[:post_edit]
        )
        expect(log).to be_blank
      end

      it "logs an edit when a staff member revises a post" do
        subject.revise!(
          moderator,
          raw: "lets totally update the body"
        )
        log = UserHistory.where(
          acting_user_id: moderator.id,
          action: UserHistory.actions[:post_edit]
        ).first
        expect(log).to be_present
        expect(log.details).to eq("Hello world\n\n---\n\nlets totally update the body")
      end

      it "doesn't log an edit when skip_staff_log is true" do
        subject.revise!(
          moderator,
          { raw: "lets totally update the body" },
          skip_staff_log: true
        )
        log = UserHistory.where(
          acting_user_id: moderator.id,
          action: UserHistory.actions[:post_edit]
        ).first
        expect(log).to be_blank
      end

      it "doesn't log an edit when a staff member edits their own post" do
        revisor = PostRevisor.new(
          Fabricate(:post, user: moderator)
        )
        revisor.revise!(
          moderator,
          raw: "my own edit to my own thing"
        )

        log = UserHistory.where(
          acting_user_id: moderator.id,
          action: UserHistory.actions[:post_edit]
        )
        expect(log).to be_blank
      end
    end

    context "staff_edit_locks_post" do

      context "disabled" do
        before do
          SiteSetting.staff_edit_locks_post = false
        end

        it "does not lock the post when revised" do
          result = subject.revise!(
            moderator,
            raw: "lets totally update the body"
          )
          expect(result).to eq(true)
          post.reload
          expect(post).not_to be_locked

        end
      end

      context "enabled" do

        before do
          SiteSetting.staff_edit_locks_post = true
        end

        it "locks the post when revised by staff" do
          result = subject.revise!(
            moderator,
            raw: "lets totally update the body"
          )
          expect(result).to eq(true)
          post.reload
          expect(post).to be_locked
        end

        it "doesn't lock the wiki posts" do
          post.wiki = true
          result = subject.revise!(
            moderator,
            raw: "some new raw content"
          )
          expect(result).to eq(true)
          post.reload
          expect(post).not_to be_locked
        end

        it "doesn't lock the post when the raw did not change" do
          result = subject.revise!(
            moderator,
            title: "New topic title, cool!"
          )
          expect(result).to eq(true)
          post.reload
          expect(post.topic.title).to eq("New topic title, cool!")
          expect(post).not_to be_locked
        end

        it "doesn't lock the post when revised by a regular user" do
          result = subject.revise!(
            user,
            raw: "lets totally update the body"
          )
          expect(result).to eq(true)
          post.reload
          expect(post).not_to be_locked
        end

        it "doesn't lock the post when revised by system user" do
          result = subject.revise!(
            Discourse.system_user,
            raw: "I usually replace hotlinked images"
          )
          expect(result).to eq(true)
          post.reload
          expect(post).not_to be_locked
        end

        it "doesn't lock a staff member's post" do
          staff_post = Fabricate(:post, user: moderator)
          revisor = PostRevisor.new(staff_post)

          result = revisor.revise!(
            moderator,
            raw: "lets totally update the body"
          )
          expect(result).to eq(true)
          staff_post.reload
          expect(staff_post).not_to be_locked
        end
      end
    end

    context "alerts" do

      fab!(:mentioned_user) { Fabricate(:user) }

      before do
        Jobs.run_immediately!
      end

      it "generates a notification for a mention" do
        expect {
          subject.revise!(user, raw: "Random user is mentioning @#{mentioned_user.username_lower}")
        }.to change { Notification.where(notification_type: Notification.types[:mentioned]).count }
      end

      it "never generates a notification for a mention when the System user revise a post" do
        expect {
          subject.revise!(Discourse.system_user, raw: "System user is mentioning @#{mentioned_user.username_lower}")
        }.not_to change { Notification.where(notification_type: Notification.types[:mentioned]).count }
      end

    end

    context "tagging" do
      context "tagging disabled" do
        before do
          SiteSetting.tagging_enabled = false
        end

        it "doesn't add the tags" do
          result = subject.revise!(user, raw: "lets totally update the body", tags: ['totally', 'update'])
          expect(result).to eq(true)
          post.reload
          expect(post.topic.tags.size).to eq(0)
        end
      end

      context "tagging enabled" do
        before do
          SiteSetting.tagging_enabled = true
        end

        context "can create tags" do
          before do
            SiteSetting.min_trust_to_create_tag = 0
            SiteSetting.min_trust_level_to_tag_topics = 0
          end

          it "can create all tags if none exist" do
            expect {
              @result = subject.revise!(user, raw: "lets totally update the body", tags: ['totally', 'update'])
            }.to change { Tag.count }.by(2)
            expect(@result).to eq(true)
            post.reload
            expect(post.topic.tags.map(&:name).sort).to eq(['totally', 'update'])
          end

          it "creates missing tags if some exist" do
            Fabricate(:tag, name: 'totally')
            expect {
              @result = subject.revise!(user, raw: "lets totally update the body", tags: ['totally', 'update'])
            }.to change { Tag.count }.by(1)
            expect(@result).to eq(true)
            post.reload
            expect(post.topic.tags.map(&:name).sort).to eq(['totally', 'update'])
          end

          it "can remove all tags" do
            topic.tags = [Fabricate(:tag, name: "super"), Fabricate(:tag, name: "stuff")]
            result = subject.revise!(user, raw: "lets totally update the body", tags: [])
            expect(result).to eq(true)
            post.reload
            expect(post.topic.tags.size).to eq(0)
          end

          it "can't add staff-only tags" do
            create_staff_tags(['important'])
            result = subject.revise!(user, raw: "lets totally update the body", tags: ['important', 'stuff'])
            expect(result).to eq(false)
            expect(post.topic.errors.present?).to eq(true)
          end

          it "staff can add staff-only tags" do
            create_staff_tags(['important'])
            result = subject.revise!(admin, raw: "lets totally update the body", tags: ['important', 'stuff'])
            expect(result).to eq(true)
            post.reload
            expect(post.topic.tags.map(&:name).sort).to eq(['important', 'stuff'])
          end

          context "with staff-only tags" do
            before do
              create_staff_tags(['important'])
              topic = post.topic
              topic.tags = [Fabricate(:tag, name: "super"), Tag.where(name: "important").first, Fabricate(:tag, name: "stuff")]
            end

            it "staff-only tags can't be removed" do
              result = subject.revise!(user, raw: "lets totally update the body", tags: ['stuff'])
              expect(result).to eq(false)
              expect(post.topic.errors.present?).to eq(true)
              post.reload
              expect(post.topic.tags.map(&:name).sort).to eq(['important', 'stuff', 'super'])
            end

            it "can't remove all tags if some are staff-only" do
              result = subject.revise!(user, raw: "lets totally update the body", tags: [])
              expect(result).to eq(false)
              expect(post.topic.errors.present?).to eq(true)
              post.reload
              expect(post.topic.tags.map(&:name).sort).to eq(['important', 'stuff', 'super'])
            end

            it "staff-only tags can be removed by staff" do
              result = subject.revise!(admin, raw: "lets totally update the body", tags: ['stuff'])
              expect(result).to eq(true)
              post.reload
              expect(post.topic.tags.map(&:name)).to eq(['stuff'])
            end

            it "staff can remove all tags" do
              result = subject.revise!(admin, raw: "lets totally update the body", tags: [])
              expect(result).to eq(true)
              post.reload
              expect(post.topic.tags.size).to eq(0)
            end
          end

          context "hidden tags" do
            let(:bumped_at) { 1.day.ago }

            before do
              topic.update!(bumped_at: bumped_at)
              create_hidden_tags(['important', 'secret'])
              topic = post.topic
              topic.tags = [Fabricate(:tag, name: "super"), Tag.where(name: "important").first, Fabricate(:tag, name: "stuff")]
            end

            it "doesn't bump topic if only staff-only tags are added" do
              expect {
                result = subject.revise!(Fabricate(:admin), raw: post.raw, tags: topic.tags.map(&:name) + ['secret'])
                expect(result).to eq(true)
              }.to_not change { topic.reload.bumped_at }
            end

            it "doesn't bump topic if only staff-only tags are removed" do
              expect {
                result = subject.revise!(Fabricate(:admin), raw: post.raw, tags: topic.tags.map(&:name) - ['important', 'secret'])
                expect(result).to eq(true)
              }.to_not change { topic.reload.bumped_at }
            end

            it "doesn't bump topic if only staff-only tags are removed and there are no tags left" do
              topic.tags = Tag.where(name: ['important', 'secret']).to_a
              expect {
                result = subject.revise!(Fabricate(:admin), raw: post.raw, tags: [])
                expect(result).to eq(true)
              }.to_not change { topic.reload.bumped_at }
            end

            it "doesn't bump topic if empty string is given" do
              topic.tags = Tag.where(name: ['important', 'secret']).to_a
              expect {
                result = subject.revise!(Fabricate(:admin), raw: post.raw, tags: [""])
                expect(result).to eq(true)
              }.to_not change { topic.reload.bumped_at }
            end

            it "should bump topic if non staff-only tags are added" do
              expect {
                result = subject.revise!(Fabricate(:admin), raw: post.raw, tags: topic.tags.map(&:name) + [Fabricate(:tag).name])
                expect(result).to eq(true)
              }.to change { topic.reload.bumped_at }
            end

            it "creates a hidden revision" do
              subject.revise!(Fabricate(:admin), raw: post.raw, tags: topic.tags.map(&:name) + ['secret'])
              expect(post.reload.revisions.first.hidden).to eq(true)
            end

            it "doesn't notify topic owner about hidden tags" do
              PostActionNotifier.enable
              Jobs.run_immediately!
              expect {
                subject.revise!(Fabricate(:admin), raw: post.raw, tags: topic.tags.map(&:name) + ['secret'])
              }.not_to change { Notification.where(notification_type: Notification.types[:edited]).count }
            end
          end

          context "required tag group" do
            fab!(:tag1) { Fabricate(:tag) }
            fab!(:tag2) { Fabricate(:tag) }
            fab!(:tag3) { Fabricate(:tag) }
            fab!(:tag_group) { Fabricate(:tag_group, tags: [tag1, tag2]) }
            fab!(:category) { Fabricate(:category, name: "beta", required_tag_group: tag_group, min_tags_from_required_group: 1) }

            before do
              post.topic.update(category: category)
            end

            it "doesn't allow removing all tags from the group" do
              post.topic.tags = [tag1, tag2]
              result = subject.revise!(user, raw: "lets totally update the body", tags: [])
              expect(result).to eq(false)
            end

            it "allows removing some tags" do
              post.topic.tags = [tag1, tag2, tag3]
              result = subject.revise!(user, raw: "lets totally update the body", tags: [tag1.name])
              expect(result).to eq(true)
              expect(post.reload.topic.tags.map(&:name)).to eq([tag1.name])
            end

            it "allows admins to remove the tags" do
              post.topic.tags = [tag1, tag2, tag3]
              result = subject.revise!(admin, raw: "lets totally update the body", tags: [])
              expect(result).to eq(true)
              expect(post.reload.topic.tags.size).to eq(0)
            end
          end
        end

        context "cannot create tags" do
          before do
            SiteSetting.min_trust_to_create_tag = 4
            SiteSetting.min_trust_level_to_tag_topics = 0
          end

          it "only uses existing tags" do
            Fabricate(:tag, name: 'totally')
            expect {
              @result = subject.revise!(user, raw: "lets totally update the body", tags: ['totally', 'update'])
            }.to_not change { Tag.count }
            expect(@result).to eq(true)
            post.reload
            expect(post.topic.tags.map(&:name)).to eq(['totally'])
          end
        end
      end
    end
  end
end
