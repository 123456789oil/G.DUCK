# frozen_string_literal: true

module PostProcessorMixin

  def post_process_oneboxes
    limit = SiteSetting.max_oneboxes_per_post
    oneboxes = {}
    inlineOneboxes = {}

    Oneboxer.apply(@doc, extra_paths: [".inline-onebox-loading"]) do |url, element|
      is_onebox = element["class"] == Oneboxer::ONEBOX_CSS_CLASS
      map = is_onebox ? oneboxes : inlineOneboxes
      skip_onebox = limit <= 0 && !map[url]

      if skip_onebox
        if is_onebox
          element.remove_class('onebox')
        else
          remove_inline_onebox_loading_class(element)
        end

        next
      end

      limit -= 1
      map[url] = true

      if is_onebox
        onebox = Oneboxer.onebox(url,
          invalidate_oneboxes: !!@opts[:invalidate_oneboxes],
          user_id: @post&.user_id,
          category_id: @post&.topic&.category_id
        )

        @has_oneboxes = true if onebox.present?
        onebox
      else
        process_inline_onebox(element)
        false
      end
    end

    oneboxed_images.each do |img|
      next if img["src"].blank?

      src = img["src"].sub(/^https?:/i, "")
      parent = img.parent
      img_classes = (img["class"] || "").split(" ")
      link_classes = ((parent&.name == "a" && parent["class"]) || "").split(" ")

      if img_classes.include?("onebox") || link_classes.include?("onebox")
        next if add_image_placeholder!(img)
      elsif large_images.include?(src) || broken_images.include?(src)
        img.remove
        next
      end

      upload_id = downloaded_images[src]
      upload = Upload.find_by_id(upload_id) if upload_id

      if upload.present?
        img["src"] = UrlHelper.cook_url(upload.url, secure: @post&.with_secure_media?)
      end

      # make sure we grab dimensions for oneboxed images
      # and wrap in a div
      limit_size!(img)

      next if img["class"]&.include?('onebox-avatar')

      parent = parent&.parent if parent&.name == "a"
      parent_class = parent && parent["class"]
      width = img["width"].to_i
      height = img["height"].to_i

      if parent_class&.include?("onebox-body") && width > 0 && height > 0
        # special instruction for width == height, assume we are dealing with an avatar
        if (img["width"].to_i == img["height"].to_i)
          found = false
          parent = img
          while parent = parent.parent
            if parent["class"] && parent["class"].include?("allowlistedgeneric")
              found = true
              break
            end
          end

          if found
            img["class"] = img["class"].to_s + " onebox-avatar"
            next
          end
        end

        if width < 64 && height < 64
          img["class"] = img["class"].to_s + " onebox-full-image"
        else
          img.delete('width')
          img.delete('height')
          new_parent = img.add_next_sibling("<div class='aspect-image' style='--aspect-ratio:#{width}/#{height};'/>")
          new_parent.first.add_child(img)
        end
      elsif (parent_class&.include?("instagram-images") || parent_class&.include?("tweet-images") || parent_class&.include?("scale-images")) && width > 0 && height > 0
        img.remove_attribute("width")
        img.remove_attribute("height")
        parent["class"] = "aspect-image-full-size"
        parent["style"] = "--aspect-ratio:#{width}/#{height};"
      end
    end

    if @omit_nofollow || !SiteSetting.add_rel_nofollow_to_user_content
      @doc.css(".onebox-body a[rel], .onebox a[rel]").each do |a|
        rel_values = a['rel'].split(' ').map(&:downcase)
        rel_values.delete('nofollow')
        rel_values.delete('ugc')
        if rel_values.blank?
          a.remove_attribute("rel")
        else
          a["rel"] = rel_values.join(' ')
        end
      end
    end
  end

  def add_image_placeholder!(img)
    src = img["src"].sub(/^https?:/i, "")

    if large_images.include?(src)
      return add_large_image_placeholder!(img)
    elsif broken_images.include?(src)
      return add_broken_image_placeholder!(img)
    end

    false
  end

  def add_large_image_placeholder!(img)
    url = img["src"]

    is_hyperlinked = is_a_hyperlink?(img)

    placeholder = create_node("div", "large-image-placeholder")
    img.add_next_sibling(placeholder)
    placeholder.add_child(img)

    a = create_link_node(nil, url, true)
    img.add_next_sibling(a)

    span = create_span_node("url", url)
    a.add_child(span)
    span.add_previous_sibling(create_icon_node("far-image"))
    span.add_next_sibling(
      create_span_node(
        "help",
        I18n.t(
          "upload.placeholders.too_large_humanized",
          max_size: ActiveSupport::NumberHelper.number_to_human_size(SiteSetting.max_image_size_kb.kilobytes)
        )
      )
    )

    # Only if the image is already linked
    if is_hyperlinked
      parent = placeholder.parent
      parent.add_next_sibling(placeholder)

      if parent.name == 'a' && parent["href"].present?
        if url == parent["href"]
          parent.remove
        else
          parent["class"] = "link"
          a.add_previous_sibling(parent)

          lspan = create_span_node("url", parent["href"])
          parent.add_child(lspan)
          lspan.add_previous_sibling(create_icon_node("link"))
        end
      end
    end

    img.remove
    true
  end

  def add_broken_image_placeholder!(img)
    img.name = "span"
    img.set_attribute("class", "broken-image")
    img.set_attribute("title", I18n.t("post.image_placeholder.broken"))
    img << "<svg class=\"fa d-icon d-icon-unlink svg-icon\" aria-hidden=\"true\"><use xlink:href=\"#unlink\"></use></svg>"
    img.remove_attribute("src")
    img.remove_attribute("width")
    img.remove_attribute("height")
    true
  end

  def large_images
    @large_images ||= @post&.custom_fields[Post::LARGE_IMAGES].presence || []
  end

  def broken_images
    @broken_images ||= @post&.custom_fields[Post::BROKEN_IMAGES].presence || []
  end

  def downloaded_images
    @downloaded_images ||= @post&.downloaded_images || []
  end

  def is_a_hyperlink?(img)
    parent = img.parent
    while parent
      return true if parent.name == "a"
      parent = parent.parent if parent.respond_to?(:parent)
    end
    false
  end

  def process_inline_onebox(element)
    inline_onebox = InlineOneboxer.lookup(
      element.attributes["href"].value,
      invalidate: !!@opts[:invalidate_oneboxes],
      user_id: @post&.user_id,
      category_id: @post&.topic&.category_id
    )

    if title = inline_onebox&.dig(:title)
      element.children = CGI.escapeHTML(title)
      element.add_class("inline-onebox")
    end

    remove_inline_onebox_loading_class(element)
  end

  def remove_inline_onebox_loading_class(element)
    element.remove_class("inline-onebox-loading")
  end

  def dirty?
    @previous_cooked != html
  end

  def html
    @doc.try(:to_html)
  end

  def create_link_node(klass, url, external = false)
    a = create_node("a", klass)
    a["href"] = url
    if external
      a["target"] = "_blank"
      a["rel"] = "nofollow noopener"
    end
    a
  end

  def create_icon_node(klass)
    icon = create_node("svg", "fa d-icon d-icon-#{klass} svg-icon")
    icon.set_attribute("aria-hidden", "true")
    icon << "<use xlink:href=\"##{klass}\"></use>"
  end

  def create_node(tag_name, klass)
    node = Nokogiri::XML::Node.new(tag_name, @doc)
    node["class"] = klass if klass.present?
    node
  end

  def create_span_node(klass, content = nil)
    span = create_node("span", klass)
    span.content = content if content
    span
  end
end
