require 'csv'
require_dependency 'system_message'

module Jobs

  class ExportCsvFile < Jobs::Base
    sidekiq_options retry: false
    attr_accessor :current_user

    def initialize
      @file_name = ""
    end

    def execute(args)
      entity = args[:entity]
      @current_user = User.find_by(id: args[:user_id])

      raise Discourse::InvalidParameters.new(:entity) if entity.blank?

      case entity
        when 'user'
          query = ::AdminUserIndexQuery.new
          user_data = query.find_users_query.to_a

          data = Hash.new do |hash, key|
            hash[key] = {}
          end

          user_data.each do |user|
            id = user['id']
            email = user['email']
            data[id] = email
          end
          data = data.to_a
      end

      if data && data.length > 0
        set_file_path
        write_csv_file(data)
      end

      notify_user
    end

    private

      def set_file_path
        @file_name = "export_#{SecureRandom.hex(4)}.csv"
        # ensure directory exists
        dir = File.dirname("#{ExportCsv.base_directory}/#{@file_name}")
        FileUtils.mkdir_p(dir) unless Dir.exists?(dir)
      end

      def write_csv_file(data)
        # write to CSV file
        CSV.open(File.expand_path("#{ExportCsv.base_directory}/#{@file_name}", __FILE__), "w") do |csv|
          data.each do |value|
            csv << [value[1]]
          end
        end
      end

      def notify_user
        if @current_user
          if @file_name != "" && File.exists?("#{ExportCsv.base_directory}/#{@file_name}")
            SystemMessage.create_from_system_user(@current_user, :csv_export_succeeded, download_link: "#{Discourse.base_url}/admin/export_csv/#{@file_name}/download", file_name: @file_name)
          else
            SystemMessage.create_from_system_user(@current_user, :csv_export_failed)
          end
        end
      end

  end

end
