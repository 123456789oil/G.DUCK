# frozen_string_literal: true

require "onebox_helper"

describe Onebox::Engine::JSON do
  before(:all) do
    @link = "http://stackoverflow.com"
    fake(@link, response("stackexchange-question"))
  end

  describe "#raw" do
    class OneboxEngineJSON
      include Onebox::Engine
      include Onebox::Engine::JSON

      def initialize(link)
        @url = link
        @options = {}
      end
    end

    it "returns a hash" do
      object = OneboxEngineJSON.new(@link).send(:raw)
      expect(object).to be_a(Hash)
    end
  end
end
