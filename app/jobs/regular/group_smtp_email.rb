# frozen_string_literal: true

require_dependency 'email/sender'

module Jobs
  class GroupSmtpEmail < ::Jobs::Base
    include Skippable

    sidekiq_options queue: 'critical'

    def execute(args)
      return if quit_email_early?

      group = Group.find_by(id: args[:group_id])
      return if group.blank?

      post = Post.find_by(id: args[:post_id])
      email = args[:email]
      cc_addresses = args[:cc_emails]
      recipient_user = User.find_by_email(email, primary: true)

      if post.blank?
        return skip(email, nil, recipient_user, :group_smtp_post_deleted)
      end

      if !Topic.exists?(id: post.topic_id)
        return skip(email, post, recipient_user, :group_smtp_topic_deleted)
      end

      if !group.smtp_enabled
        return skip(email, post, recipient_user, :group_smtp_disabled_for_group)
      end

      # There is a rare race condition causing the Imap::Sync class to create
      # an incoming email and associated post/topic, which then kicks off
      # the PostAlerter to notify others in the PM about a reply in the topic,
      # but for the OP which is not necessary (because the person emailing the
      # IMAP inbox already knows about the OP)
      #
      # Basically, we should never be sending this notification for the first
      # post in a topic.
      if post.is_first_post?
        ImapSyncLog.warn("Aborting SMTP email for post #{post.id} in topic #{post.topic_id} to #{email}, the post is the OP and should not send an email.", group)
        return
      end

      ImapSyncLog.debug("Sending SMTP email for post #{post.id} in topic #{post.topic_id} to #{email}.", group)

      # The EmailLog record created by the sender will have the raw email
      # stored, the group smtp ID, and any cc addresses recorded for later
      # cross referencing.
      message = GroupSmtpMailer.send_mail(group, email, post, cc_addresses)
      Email::Sender.new(message, :group_smtp, recipient_user).send

      # Create an incoming email record to avoid importing again from IMAP
      # server. While this may not be technically required if IMAP is not
      # currently enabled for the group, it will help a lot with the initial
      # sync if it is turned on at a later date.
      IncomingEmail.create!(
        user_id: post.user_id,
        topic_id: post.topic_id,
        post_id: post.id,
        raw: message.to_s,
        subject: message.subject,
        message_id: message.message_id,
        to_addresses: message.to,
        cc_addresses: message.cc,
        from_address: message.from,
        created_via: IncomingEmail.created_via_types[:group_smtp]
      )
    end

    def quit_email_early?
      SiteSetting.disable_emails == 'yes' || !SiteSetting.enable_smtp
    end

    def skip(email, post, recipient_user, reason)
      create_skipped_email_log(
        email_type: :group_smtp,
        to_address: email,
        user_id: recipient_user&.id,
        post_id: post&.id,
        reason_type: SkippedEmailLog.reason_types[reason]
      )
    end
  end
end
