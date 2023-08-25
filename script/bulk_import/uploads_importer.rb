# frozen_string_literal: true
puts "Loading application..."
require_relative "../../config/environment"

require "etc"
require "sqlite3"

module BulkImport
  class UploadsImporter
    TRANSACTION_SIZE = 1000
    QUEUE_SIZE = 1000

    def initialize(settings_path)
      @settings = YAML.load_file(settings_path, symbolize_names: true)

      @source_db = create_connection(@settings[:source_db_path])
      @output_db = create_connection(@settings[:output_db_path])
      @root_path = @settings[:root_path]

      initialize_output_db
      configure_site_settings
    end

    def run
      queue = SizedQueue.new(QUEUE_SIZE)
      consumer_threads = []

      existing_ids = Set.new
      query("SELECT id FROM uploads", @output_db).each { |row| existing_ids << row["id"] }
      max_count = @source_db.get_first_value("SELECT COUNT(*) FROM uploads")

      puts "Found #{existing_ids.size} existing uploads, #{max_count} total"
      max_count -= existing_ids.size

      producer_thread =
        Thread.new do
          query("SELECT * FROM uploads", @source_db).each do |row|
            queue << row unless existing_ids.include?(row["id"])
          end
        end

      status_queue = SizedQueue.new(QUEUE_SIZE)
      status_thread =
        Thread.new do
          error_count = 0
          current_count = 0

          while !(params = status_queue.pop).nil?
            begin
              error_count += 1 if params[:upload].nil?

              @output_db.execute(<<~SQL, params)
                INSERT INTO uploads (id, upload)
                VALUES (:id, :upload)
              SQL
            rescue StandardError
              puts "Failed to insert upload: #{params}"
              error_count += 1
            end

            current_count += 1

            print "\r%7d / %7d (%d errors)" % [current_count, max_count, error_count]
          end
        end

      (Etc.nprocessors * @settings[:thread_count_factor]).to_i.times do
        consumer_threads << Thread.new do
          while (row = queue.pop)
            begin
              path = File.join(@root_path, row["relative_path"], row["filename"])
              next unless File.exist?(path)

              copy_to_tempfile(path) do |file|
                retry_count = 0

                loop do
                  upload =
                    begin
                      UploadCreator.new(file, row["filename"], type: row["type"]).create_for(
                        Discourse::SYSTEM_USER_ID,
                      )
                    rescue StandardError
                      nil
                    end

                  upload_okay = upload.present? && upload.persisted? && upload.errors.blank?

                  if upload_okay
                    status_queue << { id: row["id"], upload: upload.attributes.to_json }
                    break
                  elsif retry_count >= 3
                    status_queue << { id: row["id"], upload: nil }
                    break
                  end

                  retry_count += 1
                end
              end
            rescue StandardError => e
              status_queue << { id: row["id"], upload: nil }
            end
          end
        end
      end

      producer_thread.join
      queue.close
      consumer_threads.each(&:join)
      status_queue.close
      status_thread.join
    ensure
      close
    end

    private

    def create_connection(path)
      sqlite = SQLite3::Database.new(path, results_as_hash: true)
      sqlite.busy_timeout = 60_000 # 60 seconds
      sqlite.journal_mode = "WAL"
      sqlite.synchronous = "off"
      sqlite
    end

    def query(sql, db)
      db.prepare(sql).execute
    end

    def initialize_output_db
      @statement_counter = 0

      @output_db.execute(<<~SQL)
        CREATE TABLE IF NOT EXISTS uploads (
          id TEXT PRIMARY KEY,
          upload JSON_TEXT
        )
      SQL
    end

    def insert(sql, bind_vars = [])
      @output_db.transaction if @statement_counter == 0
      @output_db.execute(sql, bind_vars)

      if (@statement_counter += 1) > TRANSACTION_SIZE
        @output_db.commit
        @statement_counter = 0
      end
    end

    def close
      @source_db.close if @source_db

      if @output_db
        @output_db.commit if @output_db.transaction_active?
        @output_db.close
      end
    end

    def copy_to_tempfile(source_path)
      extension = File.extname(source_path)

      Tempfile.open(["discourse-upload", extension]) do |tmpfile|
        File.open(source_path, "rb") { |source_stream| IO.copy_stream(source_stream, tmpfile) }
        tmpfile.rewind
        yield(tmpfile)
        tmpfile
      end
    end

    def format_datetime(value)
      value ? value.utc.iso8601 : nil
    end

    def format_boolean(value)
      return nil if value.nil?
      value ? 1 : 0
    end

    def configure_site_settings
      SiteSetting.authorized_extensions = @settings[:authorized_extensions]
      SiteSetting.max_attachment_size_kb = @settings[:max_attachment_size_kb]
      SiteSetting.max_image_size_kb = @settings[:max_image_size_kb]

      if @settings[:enable_s3_uploads]
        SiteSetting.s3_access_key_id = @settings[:s3_access_key_id]
        SiteSetting.s3_secret_access_key = @settings[:s3_secret_access_key]
        SiteSetting.s3_upload_bucket = @settings[:s3_upload_bucket]
        SiteSetting.s3_region = @settings[:s3_region]
        SiteSetting.s3_cdn_url = @settings[:s3_cdn_url]
        SiteSetting.enable_s3_uploads = true

        raise "Failed to enable S3 uploads" if SiteSetting.enable_s3_uploads != true

        Tempfile.open("discourse-s3-test") do |tmpfile|
          upload =
            UploadCreator.new(tmpfile, "discourse-s3-test").create_for(Discourse::SYSTEM_USER_ID)

          unless upload.present? && upload.persisted? && upload.errors.blank? &&
                   upload.url.start_with?("//")
            raise "Failed to upload to S3"
          end

          upload.destroy
        end
      end
    end
  end
end

# bundle exec ruby script/bulk_import/uploads_importer.rb /path/to/settings.yml
BulkImport::UploadsImporter.new(ARGV.first).run
