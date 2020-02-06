# frozen_string_literal: true

require 'rails_helper'
require 'discourse_js_processor'

describe DiscourseJsProcessor do

  describe 'should_transpile?' do
    it "returns false for empty strings" do
      expect(DiscourseJsProcessor.should_transpile?(nil)).to eq(false)
      expect(DiscourseJsProcessor.should_transpile?('')).to eq(false)
    end

    it "returns false for a regular js file" do
      expect(DiscourseJsProcessor.should_transpile?("file.js")).to eq(false)
    end

    it "returns true for deprecated .es6 files" do
      expect(DiscourseJsProcessor.should_transpile?("file.es6")).to eq(true)
      expect(DiscourseJsProcessor.should_transpile?("file.js.es6")).to eq(true)
      expect(DiscourseJsProcessor.should_transpile?("file.js.no-module.es6")).to eq(true)
      expect(DiscourseJsProcessor.should_transpile?("file.no-module.js.es6")).to eq(true)
      expect(DiscourseJsProcessor.should_transpile?("file.js.es6.erb")).to eq(true)
    end
  end

  describe "skip_module?" do
    it "returns false for empty strings" do
      expect(DiscourseJsProcessor.skip_module?(nil)).to eq(false)
      expect(DiscourseJsProcessor.skip_module?('')).to eq(false)
    end

    it "returns false for a regular js file" do
      expect(DiscourseJsProcessor.skip_module?("file.js")).to eq(false)
    end

    it "returns true for files with no-module" do
      expect(DiscourseJsProcessor.skip_module?("file.js")).to eq(false)
    end
  end
end
