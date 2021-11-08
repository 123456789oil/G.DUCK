# frozen_string_literal: true

class ::OmniAuth::Strategies::DiscourseGoogleOauth2 < OmniAuth::Strategies::GoogleOauth2
  GROUPS_SCOPE ||= "admin.directory.group.readonly"
  GROUPS_DOMAIN ||= "admin.googleapis.com"
  GROUPS_PATH ||= "/admin/directory/v1/groups"

  def extra
    hash = {}
    hash[:raw_info] = raw_info
    hash[:raw_groups] = raw_groups if options[:request_groups]
    hash
  end

  def raw_groups
    @raw_groups ||= begin
      groups = []
      page_token = nil
      groups_url = "https://#{GROUPS_DOMAIN}#{GROUPS_PATH}"

      loop do
        params = {
          userKey: uid
        }
        params[:pageToken] = page_token if page_token
        params[:domain] = options[:hd] if options[:hd]

        response = access_token.get(groups_url, params: params).parsed
        groups.push(*response['groups'])

        page_token = response['nextPageToken']
        break if page_token.nil?
      end

      groups
    end
  end
end
