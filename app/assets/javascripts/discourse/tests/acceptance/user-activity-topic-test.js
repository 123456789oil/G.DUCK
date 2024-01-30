import { click, visit } from "@ember/test-helpers";
import { test } from "qunit";
import I18n from "discourse-i18n";
import userFixtures from "../fixtures/user-fixtures";
import { acceptance, exists, query, queryAll } from "../helpers/qunit-helpers";

acceptance("User Activity / Topics - bulk actions", function (needs) {
  const currentUser = "eviltrout";
  needs.user();

  needs.pretender((server, helper) => {
    server.get(`/topics/created-by/${currentUser}.json`, () => {
      return helper.response(
        userFixtures[`/topics/created-by/${currentUser}.json`]
      );
    });

    server.put("/topics/bulk", () => {
      return helper.response({ topic_ids: [7764, 9318] });
    });
  });

  test("bulk topic closing works", async function (assert) {
    await visit(`/u/${currentUser}/activity/topics`);

    await click("button.bulk-select");
    await click(queryAll("input.bulk-select")[0]);
    await click(queryAll("input.bulk-select")[1]);
    await click("button.bulk-select-actions");

    await click("div.bulk-buttons button:nth-child(2)"); // the Close Topics button

    assert.notOk(
      exists("div.bulk-buttons"),
      "The bulk actions modal was closed"
    );
  });
});

acceptance("User Activity / Topics - empty state", function (needs) {
  const currentUser = "eviltrout";
  const anotherUser = "charlie";
  needs.user();

  needs.pretender((server, helper) => {
    const emptyResponse = {
      topic_list: {
        topics: [],
      },
    };

    server.get(`/topics/created-by/${currentUser}.json`, () => {
      return helper.response(emptyResponse);
    });

    server.get(`/topics/created-by/${anotherUser}.json`, () => {
      return helper.response(emptyResponse);
    });
  });

  test("When looking at the own activity page", async function (assert) {
    await visit(`/u/${currentUser}/activity/topics`);
    assert.equal(
      query("div.empty-state span.empty-state-title").innerText,
      I18n.t("user_activity.no_topics_title")
    );
  });

  test("When looking at another user's activity page", async function (assert) {
    await visit(`/u/${anotherUser}/activity/topics`);
    assert.equal(
      query("div.empty-state span.empty-state-title").innerText,
      I18n.t("user_activity.no_topics_title_others", { username: anotherUser })
    );
  });
});
