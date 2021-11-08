# frozen_string_literal: true

require 'rails_helper'

describe CurrentUser do
  it "allows us to lookup a user from our environment" do
    user = Fabricate(:user, active: true)
    token = UserAuthToken.generate!(user_id: user.id)

    cookie = DiscourseAuthCookie.new(
      token: token.unhashed_auth_token,
      user_id: user.id,
      trust_level: user.trust_level,
      valid_till: 5.minutes.from_now
    ).serialize

    env = Rack::MockRequest.env_for("/test", "HTTP_COOKIE" => "_t=#{cookie};")
    expect(CurrentUser.lookup_from_env(env)).to eq(user)
  end

end
