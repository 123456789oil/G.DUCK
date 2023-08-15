# frozen_string_literal: true

describe "Uploading files to S3", type: :system do
  fab!(:current_user) { Fabricate(:admin) }

  let(:modal) { PageObjects::Modals::Base.new }

  before do
    setup_s3_system_test
    sign_in(current_user)
  end

  describe "direct S3 uploads" do
    before { SiteSetting.enable_direct_s3_uploads = true }

    describe "single part uploads" do
      it "uploads custom avatars to S3" do
        visit "/my/preferences/account"

        find("#edit-avatar").click
        find("#uploaded-avatar").click
        attach_file(File.absolute_path(file_from_fixtures("logo.jpg"))) do
          find("#avatar-uploader").click
        end
        expect(page).to have_css(".avatar-uploader label[data-uploaded]")
        modal.click_primary_button
        expect(page).to have_css(
          "#user-avatar-uploads[data-custom-avatar-upload-id]",
          visible: false,
        )
        puts page.driver.browser.logs.get(:browser).map(&:message)
        expect(current_user.reload.uploaded_avatar_id).to eq(
          find("#user-avatar-uploads", visible: false)["data-custom-avatar-upload-id"].to_i,
        )
      end
    end

    describe "multipart uploads" do
      it "uploads a file in the post composer" do
      end
    end
  end
end
