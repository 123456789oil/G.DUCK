import { getOwner } from "@ember/application";
import { visit } from "@ember/test-helpers";
import { test } from "qunit";
import Site from "discourse/models/site";
import User from "discourse/models/user";
import { acceptance } from "discourse/tests/helpers/qunit-helpers";
import { withSilencedDeprecations } from "discourse-common/lib/deprecated";

acceptance("Acceptance | Globals", function () {
  test("Globals function as expected", async function (assert) {
    await visit("/");

    assert.ok(window.Discourse, "window.Discourse is present");

    assert.strictEqual(
      window.Discourse,
      getOwner(this),
      "matches the expected application instance"
    );

    withSilencedDeprecations("discourse.global.user", () => {
      assert.strictEqual(
        window.Discourse.User,
        User,
        "Deprecated User alias is present"
      );
    });

    withSilencedDeprecations("discourse.global.site", () => {
      assert.strictEqual(
        window.Discourse.Site,
        Site,
        "Deprecated Site alias is present"
      );
    });

    withSilencedDeprecations("discourse.global.site-settings", () => {
      assert.strictEqual(
        window.Discourse.SiteSettings,
        getOwner(this).lookup("service:site-settings"),
        "Deprecated SiteSettings alias is present"
      );
    });
  });
});
