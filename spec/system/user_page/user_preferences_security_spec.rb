# frozen_string_literal: true

describe "User preferences for Security", type: :system do
  fab!(:password) { "kungfukenny" }
  fab!(:email) { "email@user.com" }
  fab!(:user) { Fabricate(:user, email: email, password: password) }
  let(:user_preferences_security_page) { PageObjects::Pages::UserPreferencesSecurity.new }
  let(:user_menu) { PageObjects::Components::UserMenu.new }

  before do
    user.activate
    sign_in(user)
  end

  describe "Security keys" do
    it "adds a 2FA security key and logs in with it" do
      # system specs run on their own host + port
      DiscourseWebauthn.stubs(:origin).returns(current_host + ":" + Capybara.server_port.to_s)

      # simulate browser credential authorization
      options = ::Selenium::WebDriver::VirtualAuthenticatorOptions.new
      authenticator = page.driver.browser.add_virtual_authenticator(options)

      user_preferences_security_page.visit(user)
      user_preferences_security_page.visit_second_factor(password)

      find(".security-key .new-security-key").click
      expect(user_preferences_security_page).to have_css("input#security-key-name")

      find(".modal-body input#security-key-name").fill_in(with: "First Key")
      find(".add-security-key").click

      expect(user_preferences_security_page).to have_css(".security-key .second-factor-item")

      user_menu.sign_out

      # login flow
      find(".d-header .login-button").click
      find("input#login-account-name").fill_in(with: user.username)
      find("input#login-account-password").fill_in(with: password)

      find(".modal-footer .btn-primary").click
      find("#security-key .btn-primary").click

      expect(page).to have_css(".header-dropdown-toggle.current-user")

      # cleanup
      authenticator.remove!
    end
  end

  describe "Passkeys" do
    before { SiteSetting.experimental_passkeys = true }

    it "adds a passkey to user account" do
      # system specs run on their own host + port
      DiscourseWebauthn.stubs(:origin).returns(current_host + ":" + Capybara.server_port.to_s)

      # simulate browser credentials
      options =
        ::Selenium::WebDriver::VirtualAuthenticatorOptions.new(
          user_verification: true,
          user_verified: true,
        )
      authenticator = page.driver.browser.add_virtual_authenticator(options)

      user_preferences_security_page.visit(user)

      find(".pref-passkeys__add .btn").click
      expect(user_preferences_security_page).to have_css("input#password")

      find(".dialog-body input#password").fill_in(with: password)
      find(".confirm-session .btn-primary").click

      expect(user_preferences_security_page).to have_css(".rename-passkey__form")

      find(".dialog-header .btn").click

      expect(user_preferences_security_page).to have_css(".pref-passkeys__rows .row")

      find(".passkey-options-dropdown .select-kit-header").click
      find(".passkey-options-dropdown li[data-name='Delete']").click

      # confirm deletion screen shown without requiring password confirmation
      # since this was already done when adding the passkey
      find(".dialog-footer .btn-danger").click

      expect(user_preferences_security_page).not_to have_css(".pref-passkeys__rows .row")

      # ideally we should test a login flow with passkey here
      # but I haven't figured out how to make it work with Selenium's virtual authenticator

      # clear simulated credentials
      authenticator.remove!
    end
  end
end
