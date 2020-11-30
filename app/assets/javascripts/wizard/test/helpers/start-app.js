import Wizard from "wizard/wizard";
import initializer from "wizard/initializers/load-helpers";
import { run } from "@ember/runloop";

let app;
let started = false;

export default function () {
  run(() => (app = Wizard.create({ rootElement: "#ember-testing" })));

  if (!started) {
    initializer.initialize(app);
    app.start();
    started = true;
  }
  app.setupForTesting();
  app.injectTestHelpers();
  return app;
}
