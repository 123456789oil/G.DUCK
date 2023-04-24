# frozen_string_literal: true

class InsertCommunityToSidebarSections < ActiveRecord::Migration[7.0]
  def up
    result = DB.query <<~SQL
    INSERT INTO sidebar_sections(user_id, title, public, system, created_at, updated_at)
      VALUES (-1, 'Community', true, true, now(), now())
      RETURNING sidebar_sections.id
    SQL

    community_section_id = result.last&.id

    result = DB.query <<~SQL
      INSERT INTO sidebar_urls(name, value, icon, external, segment, created_at, updated_at)
      VALUES
        ('Everything', '/latest', 'layer-group', false, 'primary', now(), now()),
        ('My Posts', '/my/activity', 'user', false, 'primary', now(), now()),
        ('Review', '/review', 'flag', false, 'primary', now(), now()),
        ('Admin', '/admin', 'wrench', false, 'primary', now(), now()),
        ('Users', '/u', 'users', false, 'secondary', now(), now()),
        ('Info', '/about', 'info-circle', false, 'secondary', now(), now()),
        ('Faq', '/faq', 'question-circle', false, 'secondary', now(), now()),
        ('Groups', '/g', 'user-friends', false, 'secondary', now(), now()),
        ('Badges', '/badges', 'certificate', false, 'secondary', now(), now())
      RETURNING sidebar_urls.id
    SQL

    sidebar_section_links =
      result.map.with_index do |url, index|
        "(-1, #{url.id}, 'SidebarUrl', #{community_section_id}, #{index},  now(), now())"
      end

    result = DB.query <<~SQL
      INSERT INTO sidebar_section_links(user_id, linkable_id, linkable_type, sidebar_section_id, position, created_at, updated_at)
      VALUES #{sidebar_section_links.join(",")}
    SQL
  end

  def down
    result = DB.query <<~SQL
      DELETE FROM sidebar_sections
      WHERE user_id = -1
      AND title = 'community'
      AND public IS TRUE
      AND system IS TRUE
      RETURNING sidebar_sections.id
    SQL
    community_section_id = result.last&.id

    return true if !community_section_id

    result = DB.query <<~SQL
      DELETE FROM sidebar_section_links
      WHERE sidebar_section_id = #{community_section_id}
        RETURNING sidebar_section_links.linkable_id
    SQL
    sidebar_url_ids = result.map(&:linkable_id)

    DB.query <<~SQL
      DELETE FROM sidebar_urls
      WHERE id IN (#{sidebar_url_ids.join(",")})
    SQL
  end
end
