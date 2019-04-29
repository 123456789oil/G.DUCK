module Email

  class Processor
    attr_reader :receiver

    def initialize(mail, retry_on_rate_limit = true)
      @mail = mail
      @retry_on_rate_limit = retry_on_rate_limit
    end

    def self.process!(mail, retry_on_rate_limit = true)
      Email::Processor.new(mail, retry_on_rate_limit).process!
    end

    def process!
      begin
        @receiver = Email::Receiver.new(@mail)
        @receiver.process!
      rescue RateLimiter::LimitExceeded
        @retry_on_rate_limit ? Jobs.enqueue(:process_email, mail: @mail) : raise
      rescue => e
        return handle_bounce(e) if @receiver.is_bounce?

        log_email_process_failure(@mail, e)
        incoming_email = @receiver.try(:incoming_email)
        rejection_message = handle_failure(@mail, e)
        if rejection_message.present?
          set_incoming_email_rejection_message(incoming_email, rejection_message.body.to_s)
        end
      end
    end

    private

    def handle_bounce(e)
      # never reply to bounced emails
      log_email_process_failure(@mail, e)
      set_incoming_email_rejection_message(@receiver.incoming_email, I18n.t("emails.incoming.errors.bounced_email_error"))
    end

    def handle_failure(mail_string, e)
      message_template = case e
                         when Email::Receiver::NoSenderDetectedError       then return nil
                         when Email::Receiver::FromReplyByAddressError     then return nil
                         when Email::Receiver::EmptyEmailError             then :email_reject_empty
                         when Email::Receiver::NoBodyDetectedError         then :email_reject_empty
                         when Email::Receiver::UserNotFoundError           then :email_reject_user_not_found
                         when Email::Receiver::ScreenedEmailError          then :email_reject_screened_email
                         when Email::Receiver::EmailNotAllowed             then :email_reject_not_allowed_email
                         when Email::Receiver::AutoGeneratedEmailError     then :email_reject_auto_generated
                         when Email::Receiver::InactiveUserError           then :email_reject_inactive_user
                         when Email::Receiver::SilencedUserError           then :email_reject_silenced_user
                         when Email::Receiver::BadDestinationAddress       then :email_reject_bad_destination_address
                         when Email::Receiver::StrangersNotAllowedError    then :email_reject_strangers_not_allowed
                         when Email::Receiver::InsufficientTrustLevelError then :email_reject_insufficient_trust_level
                         when Email::Receiver::ReplyUserNotMatchingError   then :email_reject_reply_user_not_matching
                         when Email::Receiver::TopicNotFoundError          then :email_reject_topic_not_found
                         when Email::Receiver::TopicClosedError            then :email_reject_topic_closed
                         when Email::Receiver::InvalidPost                 then :email_reject_invalid_post
                         when Email::Receiver::TooShortPost                then :email_reject_post_too_short
                         when Email::Receiver::UnsubscribeNotAllowed       then :email_reject_invalid_post
                         when ActiveRecord::Rollback                       then :email_reject_invalid_post
                         when Email::Receiver::InvalidPostAction           then :email_reject_invalid_post_action
                         when Discourse::InvalidAccess                     then :email_reject_invalid_access
                         when Email::Receiver::OldDestinationError         then :email_reject_old_destination
                         else                                                   :email_reject_unrecognized_error
      end

      template_args = {}
      client_message = nil

      # there might be more information available in the exception
      if message_template == :email_reject_invalid_post && e.message.size > 6
        message_template = :email_reject_invalid_post_specified
        template_args[:post_error] = e.message
      end

      if message_template == :email_reject_post_too_short
        template_args[:count] = SiteSetting.min_post_length
      end

      if message_template == :email_reject_unrecognized_error
        msg  = "Unrecognized error type (#{e.class}: #{e.message}) when processing incoming email"
        msg += "\n\nBacktrace:\n#{e.backtrace.map { |l| "  #{l}" }.join("\n")}"
        msg += "\n\nMail:\n#{mail_string}"

        Rails.logger.error(msg)
      end

      if message_template == :email_reject_old_destination
        template_args[:short_url] = e.message
        template_args[:number_of_days] = SiteSetting.disallow_reply_by_email_after_days
      end

      if message_template
        # inform the user about the rejection
        message = Mail::Message.new(mail_string)
        template_args[:former_title] = message.subject
        template_args[:destination] = message.to
        template_args[:site_name] = SiteSetting.title

        client_message = RejectionMailer.send_rejection(message_template, message.from, template_args)

        # only send one rejection email per day to the same email address
        if can_send_rejection_email?(message.from, message_template)
          Email::Sender.new(client_message, message_template).send
        end
      end

      client_message
    end

    def can_send_rejection_email?(email, type)
      return false if @receiver.sent_to_mailinglist_mirror?
      return true if type == :email_reject_unrecognized_error

      key = "rejection_email:#{email}:#{type}:#{Date.today}"

      if $redis.setnx(key, "1")
        $redis.expire(key, 25.hours)
        true
      else
        false
      end
    end

    def set_incoming_email_rejection_message(incoming_email, message)
      incoming_email.update!(rejection_message: message) if incoming_email
    end

    def log_email_process_failure(mail_string, exception)
      if SiteSetting.log_mail_processing_failures
        Rails.logger.warn("Email can not be processed: #{exception}\n\n#{mail_string}")
      end
    end

  end

end
