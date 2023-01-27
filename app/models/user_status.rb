# frozen_string_literal: true

class UserStatus < ActiveRecord::Base
  belongs_to :user

  validates :description, length: { maximum: 100 }

  validate :ends_at_greater_than_set_at,
           if: Proc.new { |t| t.will_save_change_to_set_at? || t.will_save_change_to_ends_at? }

  def expired?
    ends_at && ends_at < Time.zone.now
  end

  def ends_at_greater_than_set_at
    if ends_at && set_at > ends_at
      errors.add(:ends_at, I18n.t("user_status.errors.ends_at_should_be_greater_than_set_at"))
    end
  end
end

# == Schema Information
#
# Table name: user_statuses
#
#  user_id     :integer          not null, primary key
#  emoji       :string           not null
#  description :string           not null
#  set_at      :datetime         not null
#  ends_at     :datetime
#
