# frozen_string_literal: true
module PageObjects
  module Modals
    class TopicBulkActions < PageObjects::Modals::Base
      MODAL_SELECTOR = ".topic-bulk-actions-modal"

      def tag_selector
        Components::SelectKit.new(".tag-chooser")
      end

      def click_bulk_topics_confirm
        find("#bulk-topics-confirm").click
      end

      def click_silent
        find("#topic-bulk-action-options__silent").click
      end

      def fill_in_close_note(message)
        find("#bulk-close-note").set(message)
      end

      def has_category_badge?(category)
        within(MODAL_SELECTOR) { Components::CategoryBadge.new.find(category) }
      end

      def has_no_category_badge?(category)
        within(MODAL_SELECTOR) do
          has_no_css?(Components::CategoryBadge.new.category_selector(category))
        end
      end
    end
  end
end
