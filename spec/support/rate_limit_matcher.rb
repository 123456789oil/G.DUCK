# frozen_string_literal: true

RSpec::Matchers.define :rate_limit do |attribute|
  match do |model|
    model.class.include? RateLimiter::OnCreateRecord
  end
end
