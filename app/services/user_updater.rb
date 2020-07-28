# frozen_string_literal: true

class UserUpdater

  CATEGORY_IDS = {
    watched_first_post_category_ids: :watching_first_post,
    watched_category_ids: :watching,
    tracked_category_ids: :tracking,
    muted_category_ids: :muted
  }

  TAG_NAMES = {
    watching_first_post_tags: :watching_first_post,
    watched_tags: :watching,
    tracked_tags: :tracking,
    muted_tags: :muted
  }

  OPTION_ATTR = [
    :mailing_list_mode,
    :mailing_list_mode_frequency,
    :email_digests,
    :email_level,
    :email_messages_level,
    :external_links_in_new_tab,
    :enable_quoting,
    :enable_defer,
    :dynamic_favicon,
    :automatically_unpin_topics,
    :digest_after_minutes,
    :new_topic_duration_minutes,
    :auto_track_topics_after_msecs,
    :notification_level_when_replying,
    :email_previous_replies,
    :email_in_reply_to,
    :like_notification_frequency,
    :include_tl0_in_digests,
    :theme_ids,
    :allow_private_messages,
    :homepage_id,
    :hide_profile_and_presence,
    :text_size,
    :title_count_mode,
    :timezone
  ]

  def initialize(actor, user)
    @user = user
    @guardian = Guardian.new(actor)
    @actor = actor
  end

  def update(attributes = {})
    user_profile = user.user_profile
    user_profile.dismissed_banner_key = attributes[:dismissed_banner_key] if attributes[:dismissed_banner_key].present?
    unless SiteSetting.enable_sso && SiteSetting.sso_overrides_bio
      user_profile.bio_raw = attributes.fetch(:bio_raw) { user_profile.bio_raw }
    end

    unless SiteSetting.enable_sso && SiteSetting.sso_overrides_location
      user_profile.location = attributes.fetch(:location) { user_profile.location }
    end

    unless SiteSetting.enable_sso && SiteSetting.sso_overrides_website
      user_profile.website = format_url(attributes.fetch(:website) { user_profile.website })
    end

    if attributes[:profile_background_upload_url] == "" || !user.has_trust_level?(SiteSetting.min_trust_level_to_allow_profile_background.to_i)
      user_profile.profile_background_upload_id = nil
    elsif upload = Upload.get_from_url(attributes[:profile_background_upload_url])
      user_profile.profile_background_upload_id = upload.id
    end

    if attributes[:card_background_upload_url] == "" || !user.has_trust_level?(SiteSetting.min_trust_level_to_allow_user_card_background.to_i)
      user_profile.card_background_upload_id = nil
    elsif upload = Upload.get_from_url(attributes[:card_background_upload_url])
      user_profile.card_background_upload_id = upload.id
    end

    old_user_name = user.name.present? ? user.name : ""
    user.name = attributes.fetch(:name) { user.name }

    user.locale = attributes.fetch(:locale) { user.locale }
    user.date_of_birth = attributes.fetch(:date_of_birth) { user.date_of_birth }

    if attributes[:title] &&
      attributes[:title] != user.title &&
      guardian.can_grant_title?(user, attributes[:title])
      user.title = attributes[:title]
    end

    if SiteSetting.user_selected_primary_groups &&
      attributes[:primary_group_id] &&
      attributes[:primary_group_id] != user.primary_group_id &&
      guardian.can_use_primary_group?(user, attributes[:primary_group_id])

      user.primary_group_id = attributes[:primary_group_id]
    elsif SiteSetting.user_selected_primary_groups &&
      attributes[:primary_group_id] &&
      attributes[:primary_group_id].blank?

      user.primary_group_id = nil
    end

    CATEGORY_IDS.each do |attribute, level|
      if ids = attributes[attribute]
        CategoryUser.batch_set(user, level, ids)
      end
    end

    TAG_NAMES.each do |attribute, level|
      if attributes.has_key?(attribute)
        TagUser.batch_set(user, level, attributes[attribute]&.split(',') || [])
      end
    end

    save_options = false

    # special handling for theme_id cause we need to bump a sequence number
    if attributes.key?(:theme_ids)
      user_guardian = Guardian.new(user)
      attributes[:theme_ids].reject!(&:blank?)
      attributes[:theme_ids].map!(&:to_i)
      if user_guardian.allow_themes?(attributes[:theme_ids])
        user.user_option.theme_key_seq += 1 if user.user_option.theme_ids != attributes[:theme_ids]
      else
        attributes.delete(:theme_ids)
      end
    end

    if attributes.key?(:text_size)
      user.user_option.text_size_seq += 1 if user.user_option.text_size.to_s != attributes[:text_size]
    end

    OPTION_ATTR.each do |attribute|
      if attributes.key?(attribute)
        save_options = true

        if [true, false].include?(user.user_option.public_send(attribute))
          val = attributes[attribute].to_s == 'true'
          user.user_option.public_send("#{attribute}=", val)
        else
          user.user_option.public_send("#{attribute}=", attributes[attribute])
        end
      end
    end

    # automatically disable digests when mailing_list_mode is enabled
    user.user_option.email_digests = false if user.user_option.mailing_list_mode

    fields = attributes[:custom_fields]
    if fields.present?
      user.custom_fields = user.custom_fields.merge(fields)
    end

    saved = nil

    User.transaction do
      if attributes.key?(:muted_usernames)
        update_muted_users(attributes[:muted_usernames])
      end

      if attributes.key?(:ignored_usernames)
        update_ignored_users(attributes[:ignored_usernames])
      end

      name_changed = user.name_changed?
      if (saved = (!save_options || user.user_option.save) && user_profile.save && user.save) &&
         (name_changed && old_user_name.casecmp(attributes.fetch(:name)) != 0)

        StaffActionLogger.new(@actor).log_name_change(
          user.id,
          old_user_name,
          attributes.fetch(:name) { '' }
        )
      end
    rescue Addressable::URI::InvalidURIError => e
      # Prevent 500 for crazy url input
      return saved
    end

    DiscourseEvent.trigger(:user_updated, user) if saved
    saved
  end

  def update_muted_users(usernames)
    usernames ||= ""
    desired_usernames = usernames.split(",").reject { |username| user.username == username }
    desired_ids = User.where(username: desired_usernames).pluck(:id)
    if desired_ids.empty?
      MutedUser.where(user_id: user.id).destroy_all
    else
      MutedUser.where('user_id = ? AND muted_user_id not in (?)', user.id, desired_ids).destroy_all

      # SQL is easier here than figuring out how to do the same in AR
      DB.exec(<<~SQL, now: Time.now, user_id: user.id, desired_ids: desired_ids)
        INSERT into muted_users(user_id, muted_user_id, created_at, updated_at)
        SELECT :user_id, id, :now, :now
        FROM users
        WHERE id in (:desired_ids)
        ON CONFLICT DO NOTHING
      SQL
    end
  end

  def update_ignored_users(usernames)
    return unless guardian.can_ignore_users?

    usernames ||= ""
    desired_usernames = usernames.split(",").reject { |username| user.username == username }
    desired_ids = User.where(username: desired_usernames).where(admin: false, moderator: false).pluck(:id)
    if desired_ids.empty?
      IgnoredUser.where(user_id: user.id).destroy_all
    else
      IgnoredUser.where('user_id = ? AND ignored_user_id not in (?)', user.id, desired_ids).destroy_all

      # SQL is easier here than figuring out how to do the same in AR
      DB.exec(<<~SQL, now: Time.now, user_id: user.id, desired_ids: desired_ids)
        INSERT into ignored_users(user_id, ignored_user_id, created_at, updated_at)
        SELECT :user_id, id, :now, :now
        FROM users
        WHERE id in (:desired_ids)
        ON CONFLICT DO NOTHING
      SQL
    end
  end

  private

  attr_reader :user, :guardian

  def format_url(website)
    return nil if website.blank?
    website =~ /^http/ ? website : "http://#{website}"
  end
end
