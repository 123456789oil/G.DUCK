import {
  acceptance,
  count,
  exists,
  queryAll,
} from "discourse/tests/helpers/qunit-helpers";
import { click, visit } from "@ember/test-helpers";
import I18n from "I18n";
import selectKit from "discourse/tests/helpers/select-kit-helper";
import { test } from "qunit";

function setupGroupPretender(server, helper) {
  server.post("/groups/Macdonald/request_membership", () => {
    return helper.response({
      relative_url: "/t/internationalization-localization/280",
    });
  });
}

function setupGroupTest(needs) {
  needs.settings({ enable_group_directory: true });
}

acceptance("Group - Anonymous", function (needs) {
  setupGroupTest(needs);
  needs.pretender(setupGroupPretender);

  test("Anonymous Viewing Group", async function (assert) {
    await visit("/g/discourse");

    assert.ok(
      !exists(".nav-pills li a[title='Messages']"),
      "it does not show group messages navigation link"
    );

    await click(".nav-pills li a[title='Activity']");

    assert.ok(exists(".user-stream-item"), "it lists stream items");

    await click(".activity-nav li a[href='/g/discourse/activity/topics']");

    assert.ok(queryAll(".topic-list"), "it shows the topic list");
    assert.equal(count(".topic-list-item"), 2, "it lists stream items");

    await click(".activity-nav li a[href='/g/discourse/activity/mentions']");

    assert.ok(exists(".user-stream-item"), "it lists stream items");
    assert.ok(
      !exists(".nav-pills li a[title='Edit Group']"),
      "it should not show messages tab if user is not admin"
    );
    assert.ok(
      !exists(".nav-pills li a[title='Logs']"),
      "it should not show Logs tab if user is not admin"
    );
    assert.ok(exists(".user-stream-item"), "it lists stream items");

    const groupDropdown = selectKit(".group-dropdown");
    await groupDropdown.expand();

    assert.equal(groupDropdown.rowByIndex(1).name(), "discourse");

    assert.equal(
      groupDropdown.rowByIndex(0).name(),
      I18n.t("groups.index.all")
    );

    this.siteSettings.enable_group_directory = false;

    await visit("/g");
    await visit("/g/discourse");

    await groupDropdown.expand();

    assert.ok(
      !exists(".group-dropdown-filter"),
      "it should not display the default header"
    );
  });

  test("Anonymous Viewing Automatic Group", async function (assert) {
    await visit("/g/moderators");

    assert.ok(
      !exists(".nav-pills li a[title='Manage']"),
      "it does not show group messages navigation link"
    );
  });
});

acceptance("Group - Authenticated", function (needs) {
  setupGroupTest(needs);
  needs.user();

  needs.pretender((server, helper) => {
    setupGroupPretender(server, helper);
    server.get(
      "/topics/private-messages-group/eviltrout/alternative-group.json",
      () => {
        return helper.response({ topic_list: { topics: [] } });
      }
    );

    server.get(
      "/topics/private-messages-group/eviltrout/discourse.json",
      () => {
        return helper.response({
          users: [
            {
              id: 2,
              username: "bruce1",
              avatar_template:
                "/user_avatar/meta.discourse.org/bruce1/{size}/5245.png",
            },
            {
              id: 3,
              username: "CodingHorror",
              avatar_template:
                "/user_avatar/meta.discourse.org/codinghorror/{size}/5245.png",
            },
          ],
          primary_groups: [],
          topic_list: {
            can_create_topic: true,
            draft: null,
            draft_key: "new_topic",
            draft_sequence: 0,
            per_page: 30,
            topics: [
              {
                id: 12199,
                title: "This is a private message 1",
                fancy_title: "This is a private message 1",
                slug: "this-is-a-private-message-1",
                posts_count: 0,
                reply_count: 0,
                highest_post_number: 0,
                image_url: null,
                created_at: "2018-03-16T03:38:45.583Z",
                last_posted_at: null,
                bumped: true,
                bumped_at: "2018-03-16T03:38:45.583Z",
                unseen: false,
                pinned: false,
                unpinned: null,
                visible: true,
                closed: false,
                archived: false,
                bookmarked: null,
                liked: null,
                views: 0,
                like_count: 0,
                has_summary: false,
                archetype: "private_message",
                last_poster_username: "bruce1",
                category_id: null,
                pinned_globally: false,
                featured_link: null,
                posters: [
                  {
                    extras: "latest single",
                    description: "Original Poster, Most Recent Poster",
                    user_id: 2,
                    primary_group_id: null,
                  },
                ],
                participants: [
                  {
                    extras: "latest",
                    description: null,
                    user_id: 2,
                    primary_group_id: null,
                  },
                  {
                    extras: null,
                    description: null,
                    user_id: 3,
                    primary_group_id: null,
                  },
                ],
              },
            ],
          },
        });
      }
    );
  });

  test("User Viewing Group", async function (assert) {
    await visit("/g");
    await click(".group-index-request");

    assert.equal(
      queryAll(".modal-header .title").text().trim(),
      I18n.t("groups.membership_request.title", { group_name: "Macdonald" })
    );

    assert.equal(
      queryAll(".request-group-membership-form textarea").val(),
      "Please add me"
    );

    await click(".modal-footer .btn-primary");

    assert.equal(
      queryAll(".fancy-title").text().trim(),
      "Internationalization / localization"
    );

    await visit("/g/discourse");

    await click(".group-message-button");

    assert.equal(count("#reply-control"), 1, "it opens the composer");
    const privateMessageUsers = selectKit("#private-message-users");
    assert.equal(
      privateMessageUsers.header().value(),
      "discourse",
      "it prefills the group name"
    );

    assert.ok(!exists(".add-warning"), "groups can't receive warnings");
  });

  test("Admin viewing group messages when there are no messages", async function (assert) {
    await visit("/g/alternative-group");
    await click(".nav-pills li a[title='Messages']");

    assert.equal(
      queryAll(".alert").text().trim(),
      I18n.t("choose_topic.none_found"),
      "it should display the right alert"
    );
  });

  test("Admin viewing group messages", async function (assert) {
    await visit("/g/discourse");
    await click(".nav-pills li a[title='Messages']");

    assert.equal(
      queryAll(".topic-list-item .link-top-line").text().trim(),
      "This is a private message 1",
      "it should display the list of group topics"
    );

    await click("#search-button");
    assert.ok(
      exists(".search-context input:checked"),
      "scope to message checkbox is checked"
    );
  });

  test("Admin Viewing Group", async function (assert) {
    await visit("/g/discourse");

    assert.equal(
      count(".nav-pills li a[title='Manage']"),
      1,
      "it should show manage group tab if user is admin"
    );

    assert.equal(
      count(".group-message-button"),
      1,
      "it displays show group message button"
    );
    assert.equal(
      queryAll(".group-info-name").text(),
      "Awesome Team",
      "it should display the group name"
    );

    await click(".group-details-button button.btn-danger");

    assert.equal(
      queryAll(".bootbox .modal-body").html(),
      I18n.t("admin.groups.delete_with_messages_confirm", {
        count: 2,
      }),
      "it should warn about orphan messages"
    );

    await click(".modal-footer .btn-default");
  });

  test("Moderator Viewing Group", async function (assert) {
    await visit("/g/alternative-group");

    assert.equal(
      count(".nav-pills li a[title='Manage']"),
      1,
      "it should show manage group tab if user can_admin_group"
    );

    await click(".group-members-add.btn");

    assert.ok(
      exists(".group-add-members-modal #set-owner"),
      "it allows moderators to set group owners"
    );

    await click(".group-add-members-modal .modal-close");

    const memberDropdown = selectKit(".group-member-dropdown:nth-of-type(1)");
    await memberDropdown.expand();

    assert.equal(
      memberDropdown.rowByIndex(0).name(),
      I18n.t("groups.members.remove_member")
    );
    assert.equal(
      memberDropdown.rowByIndex(1).name(),
      I18n.t("groups.members.make_owner")
    );
  });
});
