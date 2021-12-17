import componentTest, {
  setupRenderingTest,
} from "discourse/tests/helpers/component-test";
import { discourseModule, exists } from "discourse/tests/helpers/qunit-helpers";
import hbs from "htmlbars-inline-precompile";

discourseModule(
  "Integration | Component | Widget | post-small-action",
  function (hooks) {
    setupRenderingTest(hooks);

    componentTest("does not have delete/edit/recover buttons by default", {
      template: hbs`{{mount-widget widget="post-small-action" args=args}}`,
      beforeEach() {
        this.set("args", { id: 123 });
      },
      async test(assert) {
        assert.ok(!exists(".small-action-desc > .small-action-delete"));
        assert.ok(!exists(".small-action-desc > .small-action-recover"));
        assert.ok(!exists(".small-action-desc > .small-action-edit"));
      },
    });

    componentTest("shows edit button if canEdit", {
      template: hbs`{{mount-widget widget="post-small-action" args=args}}`,
      beforeEach() {
        this.set("args", { id: 123, canEdit: true });
      },
      async test(assert) {
        assert.ok(
          exists(".small-action-desc > .small-action-edit"),
          "it adds the edit small action button"
        );
      },
    });

    componentTest("is clickable if actionClick", {
      template: hbs`{{mount-widget widget="post-small-action" args=args}}`,
      beforeEach() {
        this.set("args", {
          id: 123,
          actionClick: () => {
            document.querySelector(".small-action").style.background = "red";
          },
        });
      },
      async test(assert) {
        const clickable = document.querySelector(".small-action.clickable");
        await click(clickable);

        assert.equal(clickable.style.background, "red", "it calls the action");
      },
    });

    componentTest("does not show edit button if canRecover even if canEdit", {
      template: hbs`{{mount-widget widget="post-small-action" args=args}}`,
      beforeEach() {
        this.set("args", { id: 123, canEdit: true, canRecover: true });
      },
      async test(assert) {
        assert.ok(
          !exists(".small-action-desc > .small-action-edit"),
          "it does not add the edit small action button"
        );
        assert.ok(
          exists(".small-action-desc > .small-action-recover"),
          "it adds the recover small action button"
        );
      },
    });

    componentTest("shows delete button if canDelete", {
      template: hbs`{{mount-widget widget="post-small-action" args=args}}`,
      beforeEach() {
        this.set("args", { id: 123, canDelete: true });
      },
      async test(assert) {
        assert.ok(
          exists(".small-action-desc > .small-action-delete"),
          "it adds the delete small action button"
        );
      },
    });

    componentTest("shows undo button if canRecover", {
      template: hbs`{{mount-widget widget="post-small-action" args=args}}`,
      beforeEach() {
        this.set("args", { id: 123, canRecover: true });
      },
      async test(assert) {
        assert.ok(
          exists(".small-action-desc > .small-action-recover"),
          "it adds the recover small action button"
        );
      },
    });
  }
);
