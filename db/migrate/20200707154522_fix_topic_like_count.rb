# frozen_string_literal: true

class FixTopicLikeCount < ActiveRecord::Migration[6.0]
  def up
    DB.exec(<<~SQL, whisper: Post.types[:whisper])
      UPDATE topics SET like_count = tbl.like_count
      FROM (
        SELECT topic_id, SUM(like_count) like_count
        FROM posts
        WHERE deleted_at IS NULL AND post_type != :whisper
        GROUP BY topic_id
      ) AS tbl
      WHERE topics.id = tbl.topic_id
    SQL
  end

  def down
    raise ActiveRecord::IrreversibleMigration
  end
end
