# The guardian is responsible for confirming access to various site resources and operations
class Guardian

  class NullUser
    def blank?; true; end
    def admin?; false; end
    def staff?; false; end
    def approved?; false; end
    def secure_category_ids; []; end
    def has_trust_level?(level); false; end
  end

  def initialize(user=nil)
    @user = user.presence || NullUser.new
  end

  def user
    @user.presence
  end
  alias :current_user :user

  def is_admin?
    @user.admin?
  end

  def is_staff?
    @user.staff?
  end

  # Can the user see the object?
  def can_see?(obj)
    return false if obj.blank?

    see_method = :"can_see_#{obj.class.name.underscore}?"
    return send(see_method, obj) if respond_to?(see_method)

    return true
  end

  # Can the user edit the obj
  def can_edit?(obj)
    return false unless have_both?(obj, @user)

    edit_method = :"can_edit_#{obj.class.name.underscore}?"
    return send(edit_method, obj) if respond_to?(edit_method)

    true
  end

  # Can we delete the object
  def can_delete?(obj)
    return false unless have_both?(obj, @user)

    delete_method = :"can_delete_#{obj.class.name.underscore}?"
    return send(delete_method, obj) if respond_to?(delete_method)

    true
  end

  def can_moderate?(obj)
    have_both?(obj, @user) && is_staff?
  end
  alias :can_move_posts? :can_moderate?
  alias :can_see_flags? :can_moderate?
  alias :can_send_activation_email? :can_moderate?

  # Can the user create a topic in the forum
  def can_create?(klass, parent=nil)
    return false unless have_both?(klass, @user)

    # If no parent is provided, we look for a can_i_create_klass?
    # custom method.
    #
    # If a parent is provided, we look for a method called
    # can_i_create_klass_on_parent?
    target = klass.name.underscore
    if parent.present?
      return false unless can_see?(parent)
      target << "_on_#{parent.class.name.underscore}"
    end
    create_method = :"can_create_#{target}?"

    return send(create_method, parent) if respond_to?(create_method)

    true
  end

  # Can we impersonate this user?
  def can_impersonate?(target)
    have_both?(target, @user) &&

    # You must be an admin to impersonate
    is_admin?  &&

    # You may not impersonate other admins
    not(target.admin?)

    # Additionally, you may not impersonate yourself;
    # but the two tests for different admin statuses
    # make it impossible to be the same user.
  end

  # Can we approve it?
  def can_approve?(target)
    have_both?(target, @user) && not(target.approved?) && is_staff?
  end
  alias :can_activate? :can_approve?

  def can_ban?(user)
    user.present? && is_admin? && not(user.admin?)
  end
  alias :can_deactivate? :can_ban?

  def can_clear_flags?(post)
    have_both?(@user, post) && is_staff?
  end

  def can_revoke_admin?(admin)
    can_administer_user?(admin) && admin.admin?
  end

  def can_grant_admin?(user)
    can_administer_user?(user) && not(user.admin?)
  end

  def can_revoke_moderation?(moderator)
    can_administer?(moderator) && moderator.moderator?
  end

  def can_grant_moderation?(user)
    can_administer?(user) && not(user.moderator?)
  end

  def can_delete_user?(user_to_delete)
    can_administer?(user_to_delete) && user_to_delete.post_count <= 0
  end

  # Can we see who acted on a post in a particular way?
  def can_see_post_actors?(topic, post_action_type_id)
    return false unless topic

    type_symbol = PostActionType.types[post_action_type_id]
    return false if type_symbol == :bookmark
    return can_see_flags?(topic) if PostActionType.is_flag?(type_symbol)

    if type_symbol == :vote
      # We can see votes if the topic allows for public voting
      return false if topic.has_meta_data_boolean?(:private_poll)
    end

    true
  end

  # Support sites that have to approve users
  def can_access_forum?
    return true unless SiteSetting.must_approve_users?
    return false unless @user

    # Staff can't lock themselves out of a site
    return true if is_staff?

    @user.approved?
  end

  def can_see_pending_invites_from?(user)
    have_both?(user, @user) && is_me?(user)
  end

  # For now, can_invite_to is basically can_see?
  def can_invite_to?(object)
    @user.present? && can_see?(object) &&
    not(SiteSetting.must_approve_users?) &&
    (@user.has_trust_level?(:regular) || is_staff?)
  end

  def can_see_deleted_posts?
    is_staff?
  end

  def can_see_private_messages?(user_id)
    is_staff? || (@user.present? && @user.id == user_id)
  end

  def can_delete_all_posts?(user)
    is_staff? && user.created_at >= 7.days.ago
  end

  # Support for ensure_{blah}! methods.
  def method_missing(method, *args, &block)
    if method.to_s =~ /^ensure_(.*)\!$/
      can_method = :"#{Regexp.last_match[1]}?"

      if respond_to?(can_method)
        raise Discourse::InvalidAccess.new("#{can_method} failed") unless send(can_method, *args, &block)
        return
      end
    end

    super.method_missing(method, *args, &block)
  end

  # Make sure we can see the object. Will raise a NotFound if it's nil
  def ensure_can_see!(obj)
    raise Discourse::InvalidAccess.new("Can't see #{obj}") unless can_see?(obj)
  end

  # Creating Methods
  def can_create_category?(parent)
    is_staff?
  end

  def can_create_post_on_topic?(topic)
    is_staff? || not(topic.closed? || topic.archived?)
  end

  # Editing Methods
  def can_edit_category?(category)
    is_staff?
  end

  def can_edit_post?(post)
    is_staff? || (not(post.topic.archived?) && is_my_own?(post))
  end

  def can_edit_user?(user)
    is_me?(user) || is_staff?
  end

  def can_edit_topic?(topic)
    is_staff? || is_my_own?(topic)
  end

  # Deleting Methods
  def can_delete_post?(post)
    # Can't delete the first post
    return false if post.post_number == 1

    # You can delete your own posts
    return !post.user_deleted? if is_my_own?(post)

    is_staff?
  end

  # Recovery Method
  def can_recover_post?(post)
    is_staff?
  end

  def can_delete_category?(category)
    is_staff? && category.topic_count == 0
  end

  def can_delete_topic?(topic)
    is_staff? && not(Category.exists?(topic_id: topic.id))
  end

  def can_delete_post_action?(post_action)

    # You can only undo your own actions
    is_my_own?(post_action) && not(post_action.is_private_message?) &&

    # Make sure they want to delete it within the window
    post_action.created_at > SiteSetting.post_undo_action_window_mins.minutes.ago
  end

  def can_send_private_message?(target)
    (User === target || Group === target) &&
    @user.present? &&

    # Can't send message to yourself
    is_not_me?(target) &&

    # Have to be a basic level at least
    @user.has_trust_level?(:basic) &&

    SiteSetting.enable_private_messages
  end

  def can_reply_as_new_topic?(topic)
    have_both?(@user, topic) && not(topic.private_message?) && @user.has_trust_level?(:basic)
  end

  def can_see_topic?(topic)
    return false unless topic

    return true if is_staff?
    return false if topic.deleted_at

    if topic.category && topic.category.secure
      return false unless can_see_category?(topic.category)
    end

    if topic.private_message?
      return false unless @user.present?
      return true if topic.all_allowed_users.where(id: @user.id).exists?
      return is_admin?
    end
    true
  end

  def can_see_post?(post)
    post.present? && (is_staff? || (!post.deleted_at.present? && can_see_topic?(post.topic)))
  end

  def can_see_category?(category)
    not(category.secure) || secure_category_ids.include?(category.id)
  end

  def can_vote?(post, opts={})
    post_can_act?(post,:vote, opts)
  end

  # Can the user act on the post in a particular way.
  #  taken_actions = the list of actions the user has already taken
  def post_can_act?(post, action_key, opts={})

    taken = opts[:taken_actions].try(:keys).to_a
    is_flag = PostActionType.is_flag?(action_key)
    already_taken_this_action = taken.any? && taken.include?(PostActionType.types[action_key])
    already_did_flagging      = taken.any? && (taken & PostActionType.flag_types.values).any?

    if  have_both?(@user, post)
      # we always allow flagging - NOTE: this does not seem true, see specs. (MVH)
      (is_flag && @user.has_trust_level?(:basic) && not(already_did_flagging)) ||

      # not a flagging action, and haven't done it already
      not(is_flag || already_taken_this_action) &&

      # nothing except flagging on archived posts
      not(post.topic.archived?) &&

      # don't like your own stuff
      not(action_key == :like && is_my_own?(post)) &&

      # no voting more than once on single vote topics
      not(action_key == :vote && opts[:voted_in_topic] && post.topic.has_meta_data_boolean?(:single_vote))
    end
  end

  def secure_category_ids
    @secure_category_ids ||= @user.secure_category_ids
  end

  private

  def is_my_own?(obj)
    @user.present? && begin
      (obj.user == @user if obj.respond_to? :user) ||
      (obj.user_id == @user.id if obj.respond_to? :user_id)
    end
  end

  def is_me?(other)
    @user.present? && User === other && (@user == other || @user.id == other.id)
  end

  def is_not_me?(other)
    @user.blank? || !is_me?(other)
  end

  def have_all?(*objs)
    objs.all?{ |obj| obj.present? }
  end
  alias :have_both? :have_all?

  def can_administer?(obj)
    is_admin? && obj.present?
  end

  def can_administer_user?(other_user)
    can_administer?(other_user) && is_not_me?(other_user)
  end

end
