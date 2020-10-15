# frozen_string_literal: true

module TopicTagsMixin
  def self.included(klass)
    klass.attributes :tags
  end

  def include_tags?
    scope.can_see_tags?(topic)
  end

  def tags
    # Calling method `pluck` or `order` along with `includes` causing N+1 queries
    tags = (SiteSetting.tags_sort_alphabetically ? topic.tags.sort_by(&:name) : topic.tags.sort_by(&:topic_count).reverse).map(&:name)
    if scope.is_staff?
      tags
    else
      tags - scope.hidden_tag_names
    end
  end

  def topic
    object.is_a?(Topic) ? object : object.topic
  end
end
