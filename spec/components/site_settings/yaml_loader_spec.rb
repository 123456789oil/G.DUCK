require 'rails_helper'
require 'site_settings/yaml_loader'

describe SiteSettings::YamlLoader do

  class Receiver
    attr_reader :settings, :client_settings, :categories

    def load_yaml(file_arg)
      SiteSettings::YamlLoader.new(file_arg).load do |category, name, default, opts|
        if opts.delete(:client)
          client_setting(category, name, default, opts)
        else
          setting(category, name, default, opts)
        end
      end
    end

    def setting(category, name, default = nil, opts = {})
      @settings ||= []
      @settings << name
      @categories ||= []
      @categories << category
      @categories.uniq!
    end

    def client_setting(category, name, default = nil)
      @client_settings ||= []
      @client_settings << name
      setting(category, name, default)
    end
  end

  let!(:receiver)   { Receiver.new }
  let(:simple)      { "#{Rails.root}/spec/fixtures/site_settings/simple.yml" }
  let(:client)      { "#{Rails.root}/spec/fixtures/site_settings/client.yml" }
  let(:enum)        { "#{Rails.root}/spec/fixtures/site_settings/enum.yml" }
  let(:enum_client) { "#{Rails.root}/spec/fixtures/site_settings/enum_client.yml" }
  let(:deprecated_env) { "#{Rails.root}/spec/fixtures/site_settings/deprecated_env.yml" }

  it "loads simple settings" do
    receiver.expects(:setting).with('category1', 'title', 'My Site', {}).once
    receiver.expects(:setting).with('category1', 'contact_email', 'webmaster@example.com', {}).once
    receiver.expects(:setting).with('category2', 'editing_grace_period', true, {}).once
    receiver.expects(:setting).with('category3', 'reply_by_email_address', '', {}).once
    receiver.load_yaml(simple)
  end

  it 'can take a File argument' do
    receiver.expects(:setting).at_least_once
    receiver.load_yaml(File.new(simple))
  end

  it "maintains order of categories" do
    receiver.load_yaml(simple)
    expect(receiver.categories).to eq(['category1', 'category2', 'category3'])
  end

  it "can load client settings" do
    receiver.expects(:client_setting).with('category1', 'title', 'Discourse', {})
    receiver.expects(:client_setting).with('category2', 'tos_url', '', {})
    receiver.expects(:client_setting).with('category2', 'must_approve_users', false, {})
    receiver.load_yaml(client)
  end

  it "can load enum settings" do
    receiver.expects(:setting).with('email', 'default_email_digest_frequency', 7, enum: 'DigestEmailSiteSetting')
    receiver.load_yaml(enum)
  end

  it "can load enum client settings" do
    receiver.expects(:client_setting).with do |category, name, default, opts|
      category == ('basics') && name == ('default_locale') && default == ('en') && opts[:enum] == ('LocaleSiteSetting')
    end
    receiver.load_yaml(enum_client)
  end

  it "raises deprecation when load settings based on environment" do
    expect { receiver.load_yaml(deprecated_env) }.to raise_error(Discourse::Deprecation)
  end
end
