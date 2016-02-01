require_dependency "new_post_manager"
require_dependency "post_action_creator"
require_dependency "email/html_cleaner"

module Email

  class Receiver
    include ActionView::Helpers::NumberHelper

    class ProcessingError             < StandardError; end
    class EmptyEmailError             < ProcessingError; end
    class NoMessageIdError            < ProcessingError; end
    class AutoGeneratedEmailError     < ProcessingError; end
    class NoBodyDetectedError         < ProcessingError; end
    class InactiveUserError           < ProcessingError; end
    class BadDestinationAddress       < ProcessingError; end
    class StrangersNotAllowedError    < ProcessingError; end
    class InsufficientTrustLevelError < ProcessingError; end
    class ReplyUserNotMatchingError   < ProcessingError; end
    class TopicNotFoundError          < ProcessingError; end
    class TopicClosedError            < ProcessingError; end
    class InvalidPost                 < ProcessingError; end
    class InvalidPostAction           < ProcessingError; end

    def initialize(mail_string)
      raise EmptyEmailError if mail_string.blank?
      @raw_email = mail_string
      @mail = Mail.new(@raw_email)
      raise NoMessageIdError if @mail.message_id.blank?
    end

    def process
      @incoming_email = find_or_create_incoming_email
      process_internal
    rescue => e
      @incoming_email.update_columns(error: e.to_s)
      raise
    end

    def find_or_create_incoming_email
      IncomingEmail.find_or_create_by(message_id: @mail.message_id) do |incoming_email|
        incoming_email.raw = @raw_email
        incoming_email.subject = @mail.subject
        incoming_email.from_address = @mail.from.first.downcase
        incoming_email.to_addresses = @mail.to.map(&:downcase).join(";") if @mail.to.present?
        incoming_email.cc_addresses = @mail.cc.map(&:downcase).join(";") if @mail.cc.present?
      end
    end

    def process_internal
      raise AutoGeneratedEmailError if is_auto_generated?

      body = select_body || ""

      raise NoBodyDetectedError if body.blank? && !@mail.has_attachments?

      user = find_or_create_user(from)

      @incoming_email.update_columns(user_id: user.id)

      raise InactiveUserError if !user.active && !user.staged

      if action = subscription_action_for(body, @mail.subject)
        message = SubscriptionMailer.send(action, user)
        Email::Sender.new(message, :subscription).send
      elsif post = find_related_post
        create_reply(user: user, raw: body, post: post, topic: post.topic)
      else
        destination = destinations.first

        raise BadDestinationAddress if destination.blank?

        case destination[:type]
        when :group
          group = destination[:obj]
          create_topic(user: user, raw: body, title: @mail.subject, archetype: Archetype.private_message, target_group_names: [group.name], skip_validations: true)
        when :category
          category = destination[:obj]

          raise StrangersNotAllowedError    if user.staged? && !category.email_in_allow_strangers
          raise InsufficientTrustLevelError if !user.has_trust_level?(SiteSetting.email_in_min_trust)

          create_topic(user: user, raw: body, title: @mail.subject, category: category.id)
        when :reply
          email_log = destination[:obj]

          raise ReplyUserNotMatchingError if email_log.user_id != user.id

          create_reply(user: user, raw: body, post: email_log.post, topic: email_log.post.topic)
        end
      end
    end

    def is_auto_generated?
      @mail[:precedence].to_s[/list|junk|bulk|auto_reply/] ||
      @mail.header.to_s[/auto-(submitted|replied|generated)/]
    end

    def select_body
      text = nil
      html = nil

      if @mail.multipart?
        text = fix_charset(@mail.text_part)
        html = fix_charset(@mail.html_part)
      elsif @mail.content_type.to_s["text/html"]
        html = fix_charset(@mail)
      else
        text = fix_charset(@mail)
      end

      # prefer text over html
      text = trim_discourse_markers(text) if text.present?
      text = EmailReplyTrimmer.trim(text) if text.present?
      return text if text.present?

      # clean the html if that's all we've got
      html = Email::HtmlCleaner.new(html).output_html if html.present?
      html = trim_discourse_markers(html) if html.present?
      html = EmailReplyTrimmer.trim(html) if html.present?
      return html if html.present?
    end

    def fix_charset(mail_part)
      return nil if mail_part.blank? || mail_part.body.blank?

      string = mail_part.body.decoded rescue nil

      return nil if string.blank?

      # 1) use the charset provided
      if mail_part.charset.present?
        fixed = try_to_encode(string, mail_part.charset)
        return fixed if fixed.present?
      end

      # 2) default to UTF-8
      try_to_encode(string, "UTF-8")
    end

    def try_to_encode(string, encoding)
      string.encode("UTF-8", encoding)
    rescue Encoding::InvalidByteSequenceError, Encoding::UndefinedConversionError
      nil
    end

    def previous_replies_regex
      @previous_replies_regex ||= /^---\n\*#{I18n.t("user_notifications.previous_discussion")}\*\n/im
    end

    def trim_discourse_markers(reply)
      reply.split(previous_replies_regex)[0]
    end

    def from
      @from ||= @mail[:from].address_list.addresses.first
    end

    def find_or_create_user(address_field)
      # decode the address field
      address_field.decoded
      # extract email and name
      email = address_field.address.downcase
      name = address_field.display_name.try(:to_s)
      username = UserNameSuggester.sanitize_username(name) if name.present?

      User.find_or_create_by(email: email) do |user|
        user.username = UserNameSuggester.suggest(username.presence || email)
        user.name = name.presence || User.suggest_name(email)
        user.staged = true
      end
    end

    def destinations
      [  @mail.destinations,
        [@mail[:x_forwarded_to]].flatten.compact.map(&:decoded),
        [@mail[:delivered_to]].flatten.compact.map(&:decoded),
      ].flatten
       .select(&:present?)
       .uniq
       .lazy
       .map { |d| check_address(d) }
       .drop_while(&:blank?)
    end

    def check_address(address)
      # only check for a group/category when 'email_in' is enabled
      if SiteSetting.email_in
        group = Group.find_by_email(address)
        return { type: :group, obj: group } if group

        category = Category.find_by_email(address)
        return { type: :category, obj: category } if category
      end

      # reply
      match = reply_by_email_address_regex.match(address)
      if match && match[1].present?
        email_log = EmailLog.for(match[1])
        return { type: :reply, obj: email_log } if email_log
      end
    end

    def reply_by_email_address_regex
      @reply_by_email_address_regex ||= Regexp.new Regexp.escape(SiteSetting.reply_by_email_address)
                                                         .gsub(Regexp.escape("%{reply_key}"), "([[:xdigit:]]{32})")
    end

    def group_incoming_emails_regex
      @group_incoming_emails_regex ||= Regexp.union Group.pluck(:incoming_email).select(&:present?).uniq
    end

    def category_email_in_regex
      @category_email_in_regex ||= Regexp.union Category.pluck(:email_in).select(&:present?).uniq
    end

    def find_related_post
      message_ids = [@mail.in_reply_to, extract_references]
      message_ids.flatten!
      message_ids.select!(&:present?)
      message_ids.uniq!
      return if message_ids.empty?

      Post.where(id: IncomingEmail.where(message_id: message_ids).select(:post_id))
          .order(created_at: :desc)
          .first
    end

    def extract_references
      if Array === @mail.references
        @mail.references
      elsif @mail.references.present?
        @mail.references.split(/[\s,]/).map { |r| r.sub(/^</, "").sub(/>$/, "") }
      end
    end

    def likes
      @likes ||= Set.new ["+1", I18n.t('post_action_types.like.title').downcase]
    end

    def subscription_action_for(body, subject)
      return unless SiteSetting.unsubscribe_via_email
      if ([subject, body].compact.map(&:to_s).map(&:downcase) & ['unsubscribe']).any?
        :confirm_unsubscribe
      end
    end

    def post_action_for(body)
      if likes.include?(body.strip.downcase)
        PostActionType.types[:like]
      end
    end

    def create_topic(options={})
      create_post_with_attachments(options)
    end

    def create_reply(options={})
      raise TopicNotFoundError if options[:topic].nil? || options[:topic].trashed?
      raise TopicClosedError   if options[:topic].closed?

      if post_action_type = post_action_for(options[:raw])
        create_post_action(options[:user], options[:post], post_action_type)
      else
        options[:topic_id] = options[:post].try(:topic_id)
        options[:reply_to_post_number] = options[:post].try(:post_number)
        create_post_with_attachments(options)
      end
    end

    def create_post_action(user, post, type)
      PostActionCreator.new(user, post).perform(type)
    rescue PostAction::AlreadyActed
      # it's cool, don't care
    rescue Discourse::InvalidAccess => e
      raise InvalidPostAction.new(e)
    end

    def create_post_with_attachments(options={})
      # deal with attachments
      @mail.attachments.each do |attachment|
        tmp = Tempfile.new("discourse-email-attachment")
        begin
          # read attachment
          File.open(tmp.path, "w+b") { |f| f.write attachment.body.decoded }
          # create the upload for the user
          upload = Upload.create_for(options[:user].id, tmp, attachment.filename, tmp.size)
          if upload && upload.errors.empty?
            # try to inline images
            if attachment.content_type.start_with?("image/") && options[:raw][/\[image: .+ \d+\]/]
              options[:raw].sub!(/\[image: .+ \d+\]/, attachment_markdown(upload))
            else
              options[:raw] << "\n#{attachment_markdown(upload)}\n"
            end
          end
        ensure
          tmp.try(:close!) rescue nil
        end
      end

      post_options = {
        cooking_options: { traditional_markdown_linebreaks: true },
      }.merge(options)

      create_post(post_options)
    end

    def attachment_markdown(upload)
      if FileHelper.is_image?(upload.original_filename)
        "<img src='#{upload.url}' width='#{upload.width}' height='#{upload.height}'>"
      else
        "<a class='attachment' href='#{upload.url}'>#{upload.original_filename}</a> (#{number_to_human_size(upload.filesize)})"
      end
    end

    def create_post(options={})
      options[:via_email] = true
      options[:raw_email] = @raw_email

      # ensure posts aren't created in the future
      options[:created_at] = [@mail.date, DateTime.now].min

      manager = NewPostManager.new(options[:user], options)
      result = manager.perform

      raise InvalidPost, result.errors.full_messages.join("\n") if result.errors.any?

      if result.post
        @incoming_email.update_columns(topic_id: result.post.topic_id, post_id: result.post.id)
        if result.post.topic && result.post.topic.private_message?
          add_other_addresses(result.post.topic, options[:user])
        end
      end
    end

    def add_other_addresses(topic, sender)
      %i(to cc bcc).each do |d|
        if @mail[d] && @mail[d].address_list && @mail[d].address_list.addresses
          @mail[d].address_list.addresses.each do |address_field|
            begin
              email = address_field.address.downcase
              if should_invite?(email)
                user = find_or_create_user(address_field)
                if can_invite?(topic, user)
                  topic.topic_allowed_users.create!(user_id: user.id)
                  topic.add_small_action(sender, "invited_user", user.username)
                end
              end
            rescue ActiveRecord::RecordInvalid
              # don't care if user already allowed
            end
          end
        end
      end
    end

    def should_invite?(email)
      email !~ reply_by_email_address_regex &&
      email !~ group_incoming_emails_regex &&
      email !~ category_email_in_regex
    end

    def can_invite?(topic, user)
      !topic.topic_allowed_users.where(user_id: user.id).exists? &&
      !topic.topic_allowed_groups.where("group_id IN (SELECT group_id FROM group_users WHERE user_id = ?)", user.id).exists?
    end

  end

end
