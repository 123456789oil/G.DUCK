# frozen_string_literal: true

describe "Bookmarking posts and topics", type: :system do
  fab!(:topic) { Fabricate(:topic) }
  fab!(:current_user) { Fabricate(:user) }
  fab!(:post) { Fabricate(:post, topic: topic, raw: "This is some post to bookmark") }
  fab!(:post2) { Fabricate(:post, topic: topic, raw: "Some interesting post content") }

  let(:timezone) { "Australia/Brisbane" }
  let(:topic_page) { PageObjects::Pages::Topic.new }
  let(:bookmark_modal) { PageObjects::Modals::Bookmark.new }

  before do
    current_user.user_option.update!(timezone: timezone)
    sign_in(current_user)
  end

  def visit_topic_and_open_bookmark_modal(post)
    topic_page.visit_topic(topic)
    topic_page.expand_post_actions(post)
    topic_page.click_post_action_button(post, :bookmark)
  end

  it "allows the user to create bookmarks with and without reminders" do
    visit_topic_and_open_bookmark_modal(post)

    bookmark_modal.fill_name("something important")
    bookmark_modal.save

    expect(topic_page).to have_post_bookmarked(post)
    bookmark = Bookmark.find_by(bookmarkable: post, user: current_user)
    expect(bookmark.name).to eq("something important")
    expect(bookmark.reminder_at).to eq(nil)

    visit_topic_and_open_bookmark_modal(post2)

    bookmark_modal.select_preset_reminder(:tomorrow)
    expect(topic_page).to have_post_bookmarked(post2)
    bookmark = Bookmark.find_by(bookmarkable: post2, user: current_user)
    expect(bookmark.reminder_at).not_to eq(nil)
    expect(bookmark.reminder_set_at).not_to eq(nil)
  end

  it "does not create a bookmark if the modal is closed with the cancel button" do
    visit_topic_and_open_bookmark_modal(post)

    bookmark_modal.fill_name("something important")
    bookmark_modal.cancel

    expect(topic_page).to have_no_post_bookmarked(post)
    expect(Bookmark.exists?(bookmarkable: post, user: current_user)).to eq(false)
  end

  it "creates a bookmark if the modal is closed by clicking outside the modal window" do
    visit_topic_and_open_bookmark_modal(post)

    bookmark_modal.fill_name("something important")
    bookmark_modal.click_outside

    expect(topic_page).to have_post_bookmarked(post)
  end

  it "allows the topic to be bookmarked" do
    topic_page.visit_topic(topic)
    topic_page.click_topic_footer_button(:bookmark)

    bookmark_modal.fill_name("something important")
    bookmark_modal.save

    expect(topic_page).to have_topic_bookmarked
    bookmark =
      try_until_success do
        expect(Bookmark.exists?(bookmarkable: topic, user: current_user)).to eq(true)
      end
    expect(bookmark).not_to eq(nil)
  end

  it "allows choosing a different auto_delete_preference to the user preference and remembers it when reopening the modal" do
    current_user.user_option.update!(
      bookmark_auto_delete_preference: Bookmark.auto_delete_preferences[:on_owner_reply],
    )
    visit_topic_and_open_bookmark_modal(post2)
    bookmark_modal.open_options_panel
    expect(bookmark_modal).to have_auto_delete_preference(
      Bookmark.auto_delete_preferences[:on_owner_reply],
    )
    bookmark_modal.select_auto_delete_preference(Bookmark.auto_delete_preferences[:clear_reminder])
    bookmark_modal.save
    expect(topic_page).to have_post_bookmarked(post2)
    topic_page.click_post_action_button(post2, :bookmark)
    expect(bookmark_modal).to have_open_options_panel
    expect(bookmark_modal).to have_auto_delete_preference(
      Bookmark.auto_delete_preferences[:clear_reminder],
    )
  end

  context "for existing bookmarks" do
    fab!(:bookmark) do
      Fabricate(
        :bookmark,
        bookmarkable: post2,
        user: current_user,
        name: "test name",
        reminder_at: 10.days.from_now,
      )
    end

    it "prefills the name of the bookmark and the custom reminder date and time" do
      topic_page.visit_topic(topic)
      topic_page.click_post_action_button(post2, :bookmark)
      expect(bookmark_modal).to have_open_options_panel
      expect(bookmark_modal.name.value).to eq("test name")
      expect(bookmark_modal.existing_reminder_alert).to have_content(
        bookmark_modal.existing_reminder_alert_message(bookmark),
      )
      expect(bookmark_modal.custom_date_picker.value).to eq(
        bookmark.reminder_at_in_zone(timezone).strftime("%Y-%m-%d"),
      )
      expect(bookmark_modal.custom_time_picker.value).to eq(
        bookmark.reminder_at_in_zone(timezone).strftime("%H:%M"),
      )
      expect(bookmark_modal).to have_active_preset("custom")
    end

    it "can delete the bookmark" do
      topic_page.visit_topic(topic)
      topic_page.click_post_action_button(post2, :bookmark)
      bookmark_modal.delete
      bookmark_modal.confirm_delete
      expect(topic_page).to have_no_post_bookmarked(post2)
    end
  end

  context "when the user has a bookmark auto_delete_preference" do
    before do
      current_user.user_option.update!(
        bookmark_auto_delete_preference: Bookmark.auto_delete_preferences[:on_owner_reply],
      )
    end

    it "is respected when the user creates a new bookmark" do
      visit_topic_and_open_bookmark_modal(post)

      bookmark_modal.save
      expect(topic_page).to have_post_bookmarked(post)

      bookmark = Bookmark.find_by(bookmarkable: post, user: current_user)
      expect(bookmark.auto_delete_preference).to eq(
        Bookmark.auto_delete_preferences[:on_owner_reply],
      )
    end

    it "allows the user to choose a different auto delete preference for a bookmark" do
      visit_topic_and_open_bookmark_modal(post)

      bookmark_modal.save
      expect(topic_page).to have_post_bookmarked(post)

      bookmark = Bookmark.find_by(bookmarkable: post, user: current_user)
      expect(bookmark.auto_delete_preference).to eq(
        Bookmark.auto_delete_preferences[:on_owner_reply],
      )
    end
  end
end
