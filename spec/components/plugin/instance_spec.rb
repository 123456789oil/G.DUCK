require 'rails_helper'
require_dependency 'plugin/instance'

describe Plugin::Instance do

  after do
    DiscoursePluginRegistry.reset!
  end

  context "find_all" do
    it "can find plugins correctly" do
      plugins = Plugin::Instance.find_all("#{Rails.root}/spec/fixtures/plugins")
      expect(plugins.count).to eq(1)
      plugin = plugins[0]

      expect(plugin.name).to eq("plugin-name")
      expect(plugin.path).to eq("#{Rails.root}/spec/fixtures/plugins/my_plugin/plugin.rb")
    end

    it "does not blow up on missing directory" do
      plugins = Plugin::Instance.find_all("#{Rails.root}/frank_zappa")
      expect(plugins.count).to eq(0)
    end
  end

  context "enabling/disabling" do

    it "is enabled by default" do
      expect(Plugin::Instance.new.enabled?).to eq(true)
    end

    context "with a plugin that extends things" do

      class Trout; end
      class TroutSerializer < ApplicationSerializer; end

      class TroutPlugin < Plugin::Instance
        attr_accessor :enabled
        def enabled?; @enabled; end
      end

      before do
        @plugin = TroutPlugin.new
        @trout = Trout.new

        # New method
        @plugin.add_to_class(:trout, :status?) { "evil" }

        # DiscourseEvent
        @hello_count = 0
        @plugin.on(:hello) { @hello_count += 1 }

        # Serializer
        @plugin.add_to_serializer(:trout, :scales) { 1024 }
        @serializer = TroutSerializer.new(@trout)
      end

      after do
        DiscourseEvent.clear
      end

      it "checks enabled/disabled functionality for extensions" do

        # with an enabled plugin
        @plugin.enabled = true
        expect(@trout.status?).to eq("evil")
        DiscourseEvent.trigger(:hello)
        expect(@hello_count).to eq(1)
        expect(@serializer.scales).to eq(1024)
        expect(@serializer.include_scales?).to eq(true)

        # When a plugin is disabled
        @plugin.enabled = false
        expect(@trout.status?).to eq(nil)
        DiscourseEvent.trigger(:hello)
        expect(@hello_count).to eq(1)
        expect(@serializer.scales).to eq(1024)
        expect(@serializer.include_scales?).to eq(false)

      end
    end
  end

  context "register asset" do
    it "populates the DiscoursePluginRegistry" do
      plugin = Plugin::Instance.new nil, "/tmp/test.rb"
      plugin.register_asset("test.css")
      plugin.register_asset("test2.css")

      plugin.send :register_assets!

      expect(DiscoursePluginRegistry.mobile_stylesheets.count).to eq(0)
      expect(DiscoursePluginRegistry.stylesheets.count).to eq(2)
    end
  end

  context "activate!" do
    it "can activate plugins correctly" do
      plugin = Plugin::Instance.new
      plugin.path = "#{Rails.root}/spec/fixtures/plugins/my_plugin/plugin.rb"
      junk_file = "#{plugin.auto_generated_path}/junk"

      plugin.ensure_directory(junk_file)
      File.open("#{plugin.auto_generated_path}/junk", "w") {|f| f.write("junk")}
      plugin.activate!

      expect(plugin.auth_providers.count).to eq(1)
      auth_provider = plugin.auth_providers[0]
      expect(auth_provider.authenticator.name).to eq('ubuntu')

      # calls ensure_assets! make sure they are there
      expect(plugin.assets.count).to eq(1)
      plugin.assets.each do |a, opts|
        expect(File.exists?(a)).to eq(true)
      end

      # ensure it cleans up all crap in autogenerated directory
      expect(File.exists?(junk_file)).to eq(false)
    end

    it "finds all the custom assets" do
      plugin = Plugin::Instance.new
      plugin.path = "#{Rails.root}/spec/fixtures/plugins/my_plugin/plugin.rb"

      plugin.register_asset("test.css")
      plugin.register_asset("test2.scss")
      plugin.register_asset("mobile.css", :mobile)
      plugin.register_asset("desktop.css", :desktop)
      plugin.register_asset("desktop2.css", :desktop)

      plugin.register_asset("variables1.scss", :variables)
      plugin.register_asset("variables2.scss", :variables)

      plugin.register_asset("code.js")

      plugin.register_asset("server_side.js", :server_side)

      plugin.register_asset("my_admin.js", :admin)
      plugin.register_asset("my_admin2.js", :admin)

      plugin.activate!

      expect(DiscoursePluginRegistry.javascripts.count).to eq(3)
      expect(DiscoursePluginRegistry.admin_javascripts.count).to eq(2)
      expect(DiscoursePluginRegistry.server_side_javascripts.count).to eq(1)
      expect(DiscoursePluginRegistry.desktop_stylesheets.count).to eq(2)
      expect(DiscoursePluginRegistry.sass_variables.count).to eq(2)
      expect(DiscoursePluginRegistry.stylesheets.count).to eq(2)
      expect(DiscoursePluginRegistry.mobile_stylesheets.count).to eq(1)
    end
  end

  context "serialized_current_user_fields" do
    it "correctly serializes custom user fields" do
      DiscoursePluginRegistry.serialized_current_user_fields << "has_car"
      user = Fabricate(:user)
      user.custom_fields["has_car"] = "true"
      user.save!

      payload = JSON.parse(CurrentUserSerializer.new(user, scope: Guardian.new(user)).to_json)
      expect(payload["current_user"]["custom_fields"]["has_car"]).to eq("true")
    end
  end

  context "register_color_scheme" do
    it "can add a color scheme for the first time" do
      plugin = Plugin::Instance.new nil, "/tmp/test.rb"
      expect {
        plugin.register_color_scheme("Purple", {primary: 'EEE0E5'})
        plugin.notify_after_initialize
      }.to change { ColorScheme.count }.by(1)
      expect(ColorScheme.where(name: "Purple")).to be_present
    end

    it "doesn't add the same color scheme twice" do
      Fabricate(:color_scheme, name: "Halloween")
      plugin = Plugin::Instance.new nil, "/tmp/test.rb"
      expect {
        plugin.register_color_scheme("Halloween", {primary: 'EEE0E5'})
        plugin.notify_after_initialize
      }.to_not change { ColorScheme.count }
    end
  end

end
