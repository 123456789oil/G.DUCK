# frozen_string_literal: true

class FixCategoryLogoAndBackgroundUrls < ActiveRecord::Migration[4.2]
  def up
    return true if Discourse.asset_host.blank?

    DB.exec <<-SQL
      UPDATE categories
         SET logo_url = replace(logo_url, '#{Discourse.asset_host}', '')
           , logo_dark_url = replace(logo_dark_url, '#{Discourse.asset_host}', '')
           , background_url = replace(background_dark_url, '#{Discourse.asset_host}', '')
    SQL
  end

  def down
  end
end
