import { acceptance, queryAll } from "discourse/tests/helpers/qunit-helpers";
import { click, fillIn, visit } from "@ember/test-helpers";
import I18n from "I18n";
import { test } from "qunit";

function pretender(server, helper) {
  server.post("/uploads/lookup-urls", () => {
    return helper.response([
      {
        url:
          "//testbucket.s3.dualstack.us-east-2.amazonaws.com/original/1X/f1095d89269ff22e1818cf54b73e857261851019.jpeg",
        short_path: "/uploads/short-url/yoj8pf9DdIeHRRULyw7i57GAYdz.jpeg",
        short_url: "upload://yoj8pf9DdIeHRRULyw7i57GAYdz.jpeg",
      },
    ]);
  });

  server.post("/uploads.json", () => {
    return helper.response({
      extension: "jpeg",
      filesize: 126177,
      height: 800,
      human_filesize: "123 KB",
      id: 202,
      original_filename: "avatar.PNG.jpg",
      retain_hours: null,
      short_path: "/uploads/short-url/yoj8pf9DdIeHRRULyw7i57GAYdz.jpeg",
      short_url: "upload://yoj8pf9DdIeHRRULyw7i57GAYdz.jpeg",
      thumbnail_height: 320,
      thumbnail_width: 690,
      url:
        "//testbucket.s3.dualstack.us-east-2.amazonaws.com/original/1X/f1095d89269ff22e1818cf54b73e857261851019.jpeg",
      width: 1920,
    });
  });
}

acceptance("Uppy Composer Attachment - Upload Placeholder", function (needs) {
  needs.user();
  needs.pretender(pretender);
  needs.settings({
    enable_experimental_composer_uploader: true,
    simultaneous_uploads: 2,
  });

  test("should insert the Uploading placeholder then the complete image placeholder", async function (assert) {
    await visit("/");
    await click("#create-topic");
    await fillIn(".d-editor-input", "The image:\n");
    const appEvents = this.container.lookup("service:app-events");
    const done = assert.async();

    appEvents.on("composer:all-uploads-complete", () => {
      assert.equal(
        queryAll(".d-editor-input").val(),
        "The image:\n![avatar.PNG|690x320](upload://yoj8pf9DdIeHRRULyw7i57GAYdz.jpeg)\n"
      );
      done();
    });

    appEvents.on("composer:upload-started", () => {
      assert.equal(
        queryAll(".d-editor-input").val(),
        "The image:\n[Uploading: avatar.png...]()\n"
      );
    });

    const image = createImage("avatar.png");
    appEvents.trigger("composer:add-files", image);
  });

  test("should error if too many files are added at once", async function (assert) {
    await visit("/");
    await click("#create-topic");
    const appEvents = this.container.lookup("service:app-events");
    const image = createImage("avatar.png");
    const image1 = createImage("avatar1.png");
    const image2 = createImage("avatar2.png");
    const done = assert.async();

    appEvents.trigger("composer:add-files", [image, image1, image2]);
    appEvents.on("composer:uploads-aborted", () => {
      assert.equal(
        queryAll(".bootbox .modal-body").html(),
        I18n.t("post.errors.too_many_dragged_and_dropped_files", {
          count: 2,
        }),
        "it should warn about too many files added"
      );
      done();
    });
  });

  function createImage(name) {
    const file = new Blob([""], { type: "image/png" });
    file.name = name;
    return file;
  }
});
