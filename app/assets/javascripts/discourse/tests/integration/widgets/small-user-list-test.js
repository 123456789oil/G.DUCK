import componentTest, {
  setupRenderingTest,
} from "discourse/tests/helpers/component-test";
import {
  discourseModule,
  exists,
  queryAll,
} from "discourse/tests/helpers/qunit-helpers";
import hbs from "htmlbars-inline-precompile";

discourseModule(
  "Integration | Component | Widget | small-user-list",
  function (hooks) {
    setupRenderingTest(hooks);

    componentTest("renders avatars and support for unknown", {
      template: hbs`{{mount-widget widget="small-user-list" args=args}}`,
      beforeEach() {
        this.set("args", {
          users: [
            { id: 456, username: "eviltrout" },
            { id: 457, username: "someone", unknown: true },
          ],
        });
      },
      async test(assert) {
        assert.ok(queryAll('[data-user-card="eviltrout"]').length === 1);
        assert.ok(!exists('[data-user-card="someone"]'));
        assert.ok(exists(".unknown"), "includes unknown user");
      },
    });
  }
);
