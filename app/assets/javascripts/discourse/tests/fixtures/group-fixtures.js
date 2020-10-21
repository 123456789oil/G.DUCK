export default {
  "/groups/moderators.json": {
    group: {
      id: 50,
      automatic: true,
      name: "moderators",
      display_name: "moderators",
      mentionable_level: 0,
      messageable_level: 99,
      visibility_level: 0,
      automatic_membership_email_domains: null,
      primary_group: false,
      title: null,
      grant_trust_level: null,
      incoming_email: null,
      has_messages: true,
      flair_url: null,
      flair_bg_color: null,
      flair_color: null,
      bio_raw: null,
      bio_cooked: null,
      public_admission: false,
      public_exit: false,
      allow_membership_requests: false,
      full_name: null,
      default_notification_level: 2,
      membership_request_template: null,
      is_group_user: true,
      is_group_owner: true,
      mentionable: false,
      messageable: true
    }
  },
  "/groups/discourse.json": {
    group: {
      id: 47,
      automatic: false,
      name: "discourse",
      full_name: "Awesome Team",
      user_count: 8,
      alias_level: 99,
      visible: true,
      public_admission: true,
      public_exit: false,
      flair_url: "fa-adjust",
      is_group_owner: true,
      mentionable: true,
      messageable: true,
      can_see_members: true
    },
    extras: {
      visible_group_names: ["discourse"]
    }
  },
  "/topics/groups/discourse.json": {
    users: [
      {
        id: 2,
        username: "bruce1",
        avatar_template:
          "/user_avatar/meta.discourse.org/bruce1/{size}/5245.png"
      },
      {
        id: 1,
        username: "bruce0",
        avatar_template:
          "/user_avatar/meta.discourse.org/bruce0/{size}/5245.png"
      }
    ],
    primary_groups: [],
    topic_list: {
      can_create_topic: true,
      draft: null,
      draft_key: "new_topic",
      draft_sequence: 1,
      per_page: 30,
      topics: [
        {
          id: 12074,
          title: "This is a test topic 1",
          fancy_title: "This is a test topic 1",
          slug: "this-is-a-test-topic-1",
          posts_count: 0,
          reply_count: 0,
          highest_post_number: 0,
          image_url: null,
          created_at: "2018-03-15T03:12:48.955Z",
          last_posted_at: null,
          bumped: true,
          bumped_at: "2018-03-15T03:12:48.955Z",
          unseen: true,
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
          archetype: "regular",
          last_poster_username: "bruce1",
          category_id: 1,
          pinned_globally: false,
          featured_link: null,
          posters: [
            {
              extras: "latest single",
              description: "Original Poster, Most Recent Poster",
              user_id: 2,
              primary_group_id: null
            }
          ]
        },
        {
          id: 12073,
          title: "This is a test topic 0",
          fancy_title: "This is a test topic 0",
          slug: "this-is-a-test-topic-0",
          posts_count: 0,
          reply_count: 0,
          highest_post_number: 0,
          image_url: null,
          created_at: "2018-03-15T03:12:48.899Z",
          last_posted_at: null,
          bumped: true,
          bumped_at: "2018-03-15T03:12:48.900Z",
          unseen: true,
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
          archetype: "regular",
          last_poster_username: "bruce0",
          category_id: 1,
          pinned_globally: false,
          featured_link: null,
          posters: [
            {
              extras: "latest single",
              description: "Original Poster, Most Recent Poster",
              user_id: 1,
              primary_group_id: null
            }
          ]
        }
      ]
    }
  },
  "/groups/discourse/counts.json": {
    counts: {
      posts: 17829,
      members: 7
    }
  },
  "/groups/discourse/members.json": {
    owners: [],
    members: [
      {
        id: 2770,
        username: "awesomerobot",
        uploaded_avatar_id: 33872,
        avatar_template:
          "/user_avatar/meta.discourse.org/awesomerobot/{size}/33872.png",
        name: "",
        last_seen_at: "2015-01-23T15:53:17.844Z"
      },
      {
        id: 32,
        username: "codinghorror",
        uploaded_avatar_id: 5297,
        avatar_template:
          "/user_avatar/meta.discourse.org/codinghorror/{size}/5297.png",
        name: "Jeff Atwood",
        last_seen_at: "2015-01-23T06:05:25.457Z"
      },
      {
        id: 19,
        username: "eviltrout",
        uploaded_avatar_id: 5275,
        avatar_template:
          "/user_avatar/meta.discourse.org/eviltrout/{size}/5275.png",
        name: "Robin Ward",
        last_seen_at: "2015-01-23T16:03:45.098Z"
      },
      {
        id: 2,
        username: "neil",
        uploaded_avatar_id: 5245,
        avatar_template: "/user_avatar/meta.discourse.org/neil/{size}/5245.png",
        name: "Neil Lalonde",
        last_seen_at: "2015-01-23T15:22:10.244Z"
      },
      {
        id: 1,
        username: "sam",
        uploaded_avatar_id: 5243,
        avatar_template: "/user_avatar/meta.discourse.org/sam/{size}/5243.png",
        name: "Sam Saffron",
        last_seen_at: "2015-01-23T11:07:06.233Z"
      },
      {
        id: 3,
        username: "supermathie",
        uploaded_avatar_id: 34097,
        avatar_template:
          "/user_avatar/meta.discourse.org/supermathie/{size}/34097.png",
        name: "Michael Brown",
        last_seen_at: "2015-01-22T05:16:42.254Z"
      },
      {
        id: 1995,
        username: "zogstrip",
        uploaded_avatar_id: 8630,
        avatar_template:
          "/user_avatar/meta.discourse.org/zogstrip/{size}/8630.png",
        name: "Régis Hanol",
        last_seen_at: "2015-01-23T15:45:34.196Z"
      }
    ],
    meta: {
      total: 7,
      limit: 50,
      offset: 0
    }
  },
  "/groups/discourse/posts.json": [
    {
      id: 94607,
      cooked:
        '<p>I don\'t know how to pronounce that in English, but this makes me think of the French word "disquette" (floppy disk)</p>',
      created_at: "2015-01-23T15:13:01.935Z",
      title: "Consistent new indicator",
      url: "/t/consistent-new-indicator/24355/1",
      user_title: "designerator",
      user_long_name: "",
      category: {
        id: 9,
        name: "ux",
        color: "5F497A",
        topic_id: 2628,
        topic_count: 540,
        created_at: "2013-02-10T03:52:21.322Z",
        updated_at: "2015-01-22T18:05:32.152Z",
        user_id: 32,
        topics_year: 370,
        topics_month: 33,
        topics_week: 3,
        slug: "ux",
        description:
          "Discussion about the user interface of Discourse, how features are presented to the user in the client, including language and UI elements.",
        text_color: "FFFFFF",
        read_restricted: false,
        auto_close_hours: null,
        post_count: 5823,
        latest_post_id: 94610,
        latest_topic_id: 24355,
        position: 25,
        parent_category_id: null,
        posts_year: 4264,
        posts_month: 609,
        posts_week: 103,
        email_in: null,
        email_in_allow_strangers: false,
        topics_day: 0,
        posts_day: 28,
        allow_badges: true,
        name_lower: "ux",
        auto_close_based_on_last_post: false
      },
      user: {
        id: 2770,
        username: "awesomerobot",
        uploaded_avatar_id: 33872,
        avatar_template:
          "/user_avatar/meta.discourse.org/awesomerobot/{size}/33872.png"
      }
    },
    {
      id: 94603,
      cooked:
        "<p>Agree that the markup isn't ideal - it's kind of hacked together at the moment; especially because we have two different styles. I think once we settle on the specifics it can be re-written entirely.</p>",
      created_at: "2015-01-23T14:59:21.941Z",
      title: "The end of Clown Vomit, or, simplified category styles",
      url: "/t/the-end-of-clown-vomit-or-simplified-category-styles/24249/63",
      user_title: "designerator",
      user_long_name: "",
      category: {
        id: 9,
        name: "ux",
        color: "5F497A",
        topic_id: 2628,
        topic_count: 540,
        created_at: "2013-02-10T03:52:21.322Z",
        updated_at: "2015-01-22T18:05:32.152Z",
        user_id: 32,
        topics_year: 370,
        topics_month: 33,
        topics_week: 3,
        slug: "ux",
        description:
          "Discussion about the user interface of Discourse, how features are presented to the user in the client, including language and UI elements.",
        text_color: "FFFFFF",
        read_restricted: false,
        auto_close_hours: null,
        post_count: 5823,
        latest_post_id: 94610,
        latest_topic_id: 24355,
        position: 25,
        parent_category_id: null,
        posts_year: 4264,
        posts_month: 609,
        posts_week: 103,
        email_in: null,
        email_in_allow_strangers: false,
        topics_day: 0,
        posts_day: 28,
        allow_badges: true,
        name_lower: "ux",
        auto_close_based_on_last_post: false
      },
      user: {
        id: 2770,
        username: "awesomerobot",
        uploaded_avatar_id: 33872,
        avatar_template:
          "/user_avatar/meta.discourse.org/awesomerobot/{size}/33872.png"
      }
    },
    {
      id: 94601,
      cooked:
        "<p>Agree that the markup isn't ideal - it's kind of hacked together at the moment; especially because we have two different styles. I think once we settle on the specifics it can be re-written entirely.</p>",
      created_at: "2015-01-23T14:51:55.497Z",
      title: "The end of Clown Vomit, or, simplified category styles",
      url: "/t/the-end-of-clown-vomit-or-simplified-category-styles/24249/62",
      user_title: "designerator",
      user_long_name: "",
      category: {
        id: 9,
        name: "ux",
        color: "5F497A",
        topic_id: 2628,
        topic_count: 540,
        created_at: "2013-02-10T03:52:21.322Z",
        updated_at: "2015-01-22T18:05:32.152Z",
        user_id: 32,
        topics_year: 370,
        topics_month: 33,
        topics_week: 3,
        slug: "ux",
        description:
          "Discussion about the user interface of Discourse, how features are presented to the user in the client, including language and UI elements.",
        text_color: "FFFFFF",
        read_restricted: false,
        auto_close_hours: null,
        post_count: 5823,
        latest_post_id: 94610,
        latest_topic_id: 24355,
        position: 25,
        parent_category_id: null,
        posts_year: 4264,
        posts_month: 609,
        posts_week: 103,
        email_in: null,
        email_in_allow_strangers: false,
        topics_day: 0,
        posts_day: 28,
        allow_badges: true,
        name_lower: "ux",
        auto_close_based_on_last_post: false
      },
      user: {
        id: 2770,
        username: "awesomerobot",
        uploaded_avatar_id: 33872,
        avatar_template:
          "/user_avatar/meta.discourse.org/awesomerobot/{size}/33872.png"
      }
    },
    {
      id: 94577,
      cooked:
        "<p>Agree that the markup isn't ideal - it's kind of hacked together at the moment; especially because we have two different styles. I think once we settle on the specifics it can be re-written entirely.</p>",
      created_at: "2015-01-23T10:50:55.846Z",
      title: "Quote reply insertion at cursor position",
      url: "/t/quote-reply-insertion-at-cursor-position/24344/4",
      user_title: "team",
      user_long_name: "Régis Hanol",
      category: {
        id: 2,
        name: "feature",
        color: "0E76BD",
        topic_id: 11,
        topic_count: 1592,
        created_at: "2013-02-02T21:42:52.552Z",
        updated_at: "2015-01-22T18:05:32.647Z",
        user_id: 1,
        topics_year: 919,
        topics_month: 60,
        topics_week: 20,
        slug: "feature",
        description:
          "Discussion about features or potential features of Discourse: how they work, why they work, etc.",
        text_color: "FFFFFF",
        read_restricted: false,
        auto_close_hours: null,
        post_count: 14360,
        latest_post_id: 94600,
        latest_topic_id: 24344,
        position: 25,
        parent_category_id: null,
        posts_year: 8617,
        posts_month: 690,
        posts_week: 190,
        email_in: null,
        email_in_allow_strangers: false,
        topics_day: 2,
        posts_day: 8,
        background_url: null,
        allow_badges: true,
        name_lower: "feature",
        auto_close_based_on_last_post: false
      },
      user: {
        id: 1995,
        username: "zogstrip",
        uploaded_avatar_id: 8630,
        avatar_template:
          "/user_avatar/meta.discourse.org/zogstrip/{size}/8630.png"
      }
    },
    {
      id: 94574,
      cooked:
        "<p>Agree that the markup isn't ideal - it's kind of hacked together at the moment; especially because we have two different styles. I think once we settle on the specifics it can be re-written entirely.</p>",
      created_at: "2015-01-23T10:31:29.222Z",
      title: "Quote reply insertion at cursor position",
      url: "/t/quote-reply-insertion-at-cursor-position/24344/2",
      user_title: "team",
      user_long_name: "Régis Hanol",
      category: {
        id: 2,
        name: "feature",
        color: "0E76BD",
        topic_id: 11,
        topic_count: 1592,
        created_at: "2013-02-02T21:42:52.552Z",
        updated_at: "2015-01-22T18:05:32.647Z",
        user_id: 1,
        topics_year: 919,
        topics_month: 60,
        topics_week: 20,
        slug: "feature",
        description:
          "Discussion about features or potential features of Discourse: how they work, why they work, etc.",
        text_color: "FFFFFF",
        read_restricted: false,
        auto_close_hours: null,
        post_count: 14360,
        latest_post_id: 94600,
        latest_topic_id: 24344,
        position: 25,
        parent_category_id: null,
        posts_year: 8617,
        posts_month: 690,
        posts_week: 190,
        email_in: null,
        email_in_allow_strangers: false,
        topics_day: 2,
        posts_day: 8,
        background_url: null,
        allow_badges: true,
        name_lower: "feature",
        auto_close_based_on_last_post: false
      },
      user: {
        id: 1995,
        username: "zogstrip",
        uploaded_avatar_id: 8630,
        avatar_template:
          "/user_avatar/meta.discourse.org/zogstrip/{size}/8630.png"
      }
    },
    {
      id: 94572,
      cooked:
        "<p>Agree that the markup isn't ideal - it's kind of hacked together at the moment; especially because we have two different styles. I think once we settle on the specifics it can be re-written entirely.</p>",
      created_at: "2015-01-23T09:46:00.901Z",
      title: "Translations frequently broken",
      url: "/t/translations-frequently-broken/22546/27",
      user_title: "team",
      user_long_name: "Régis Hanol",
      category: {
        id: 27,
        name: "translations",
        color: "27AA5B",
        topic_id: 14549,
        topic_count: 146,
        created_at: "2014-04-07T20:30:17.623Z",
        updated_at: "2015-01-22T18:05:33.111Z",
        user_id: 2,
        topics_year: 134,
        topics_month: 5,
        topics_week: 3,
        slug: "translations",
        description:
          "This category is for discussion about localizing Discourse.",
        text_color: "FFFFFF",
        read_restricted: false,
        auto_close_hours: null,
        post_count: 1167,
        latest_post_id: 94575,
        latest_topic_id: 24301,
        position: 25,
        parent_category_id: 7,
        posts_year: 965,
        posts_month: 60,
        posts_week: 29,
        email_in: null,
        email_in_allow_strangers: false,
        topics_day: 1,
        posts_day: 5,
        background_url: null,
        allow_badges: true,
        name_lower: "translations",
        auto_close_based_on_last_post: false
      },
      user: {
        id: 1995,
        username: "zogstrip",
        uploaded_avatar_id: 8630,
        avatar_template:
          "/user_avatar/meta.discourse.org/zogstrip/{size}/8630.png"
      }
    },
    {
      id: 94555,
      cooked:
        '<p>I don\'t know how to pronounce that in English, but this makes me think of the French word "disquette" (floppy disk)</p>',
      created_at: "2015-01-23T08:17:31.700Z",
      title:
        "Introducing Discette - a minimal ember-cli front end to Discourse",
      url:
        "/t/introducing-discette-a-minimal-ember-cli-front-end-to-discourse/24321/3",
      user_title: "team",
      user_long_name: "Régis Hanol",
      category: {
        id: 7,
        name: "dev",
        color: "000",
        topic_id: 1026,
        topic_count: 574,
        created_at: "2013-02-06T08:43:41.550Z",
        updated_at: "2015-01-22T18:05:32.855Z",
        user_id: 32,
        topics_year: 298,
        topics_month: 29,
        topics_week: 2,
        slug: "dev",
        description:
          "This category is for topics related to hacking on Discourse: submitting pull requests, configuring development environments, coding conventions, and so forth.",
        text_color: "FFFFFF",
        read_restricted: false,
        auto_close_hours: null,
        post_count: 4196,
        latest_post_id: 94590,
        latest_topic_id: 24349,
        position: 25,
        parent_category_id: null,
        posts_year: 2095,
        posts_month: 172,
        posts_week: 16,
        email_in: null,
        email_in_allow_strangers: false,
        topics_day: 0,
        posts_day: 3,
        background_url: null,
        allow_badges: true,
        name_lower: "dev",
        auto_close_based_on_last_post: false
      },
      user: {
        id: 1995,
        username: "zogstrip",
        uploaded_avatar_id: 8630,
        avatar_template:
          "/user_avatar/meta.discourse.org/zogstrip/{size}/8630.png"
      }
    },
    {
      id: 94544,
      cooked:
        '<p><a class="mention" href="/u/techapj">@techapj</a> fixed this for 1.2.</p>',
      created_at: "2015-01-23T05:49:35.881Z",
      title: "After sign-in, I'm not redirected to the conversation",
      url: "/t/after-sign-in-im-not-redirected-to-the-conversation/17753/8",
      user_title: "co-founder",
      user_long_name: "Jeff Atwood",
      category: {
        id: 9,
        name: "ux",
        color: "5F497A",
        topic_id: 2628,
        topic_count: 540,
        created_at: "2013-02-10T03:52:21.322Z",
        updated_at: "2015-01-22T18:05:32.152Z",
        user_id: 32,
        topics_year: 370,
        topics_month: 33,
        topics_week: 3,
        slug: "ux",
        description:
          "Discussion about the user interface of Discourse, how features are presented to the user in the client, including language and UI elements.",
        text_color: "FFFFFF",
        read_restricted: false,
        auto_close_hours: null,
        post_count: 5823,
        latest_post_id: 94610,
        latest_topic_id: 24355,
        position: 25,
        parent_category_id: null,
        posts_year: 4264,
        posts_month: 609,
        posts_week: 103,
        email_in: null,
        email_in_allow_strangers: false,
        topics_day: 0,
        posts_day: 28,
        background_url: null,
        allow_badges: true,
        name_lower: "ux",
        auto_close_based_on_last_post: false
      },
      user: {
        id: 32,
        username: "codinghorror",
        uploaded_avatar_id: 5297,
        avatar_template:
          "/user_avatar/meta.discourse.org/codinghorror/{size}/5297.png"
      }
    },
    {
      id: 94543,
      cooked:
        "<p>Oh yes IOS 8.2 -- well, let's see what happens because there is really no fix on our end. Basic HTML / CSS stuff is broken.</p>",
      created_at: "2015-01-23T05:45:40.306Z",
      title: "Dealing with iOS 8 Mobile Safari bugs?",
      url: "/t/dealing-with-ios-8-mobile-safari-bugs/24101/7",
      user_title: "co-founder",
      user_long_name: "Jeff Atwood",
      category: {
        id: 2,
        name: "feature",
        color: "0E76BD",
        topic_id: 11,
        topic_count: 1592,
        created_at: "2013-02-02T21:42:52.552Z",
        updated_at: "2015-01-22T18:05:32.647Z",
        user_id: 1,
        topics_year: 919,
        topics_month: 60,
        topics_week: 20,
        slug: "feature",
        description:
          "Discussion about features or potential features of Discourse: how they work, why they work, etc.",
        text_color: "FFFFFF",
        read_restricted: false,
        auto_close_hours: null,
        post_count: 14360,
        latest_post_id: 94600,
        latest_topic_id: 24344,
        position: 25,
        parent_category_id: null,
        posts_year: 8617,
        posts_month: 690,
        posts_week: 190,
        email_in: null,
        email_in_allow_strangers: false,
        topics_day: 2,
        posts_day: 8,
        background_url: null,
        allow_badges: true,
        name_lower: "feature",
        auto_close_based_on_last_post: false
      },
      user: {
        id: 32,
        username: "codinghorror",
        uploaded_avatar_id: 5297,
        avatar_template:
          "/user_avatar/meta.discourse.org/codinghorror/{size}/5297.png"
      }
    },
    {
      id: 94542,
      cooked:
        '<p>Hmm that looks like a bug, <a class="mention" href="/u/techapj">@techapj</a> can you have a look?</p>',
      created_at: "2015-01-23T05:43:55.602Z",
      title: "RSS is not valid",
      url: "/t/rss-is-not-valid/24338/2",
      user_title: "co-founder",
      user_long_name: "Jeff Atwood",
      category: {
        id: 6,
        name: "support",
        color: "CEA9A9",
        topic_id: 389,
        topic_count: 1781,
        created_at: "2013-02-05T22:16:38.672Z",
        updated_at: "2015-01-22T18:05:33.572Z",
        user_id: 1,
        topics_year: 1541,
        topics_month: 167,
        topics_week: 49,
        slug: "support",
        description:
          "Support on configuring and using Discourse after it is up and running. For installation questions, use the install category.",
        text_color: "FFFFFF",
        read_restricted: false,
        auto_close_hours: null,
        post_count: 12272,
        latest_post_id: 94602,
        latest_topic_id: 24346,
        position: 25,
        parent_category_id: null,
        posts_year: 10571,
        posts_month: 1254,
        posts_week: 413,
        email_in: null,
        email_in_allow_strangers: false,
        topics_day: 5,
        posts_day: 70,
        background_url: "",
        allow_badges: true,
        name_lower: "support",
        auto_close_based_on_last_post: false
      },
      user: {
        id: 32,
        username: "codinghorror",
        uploaded_avatar_id: 5297,
        avatar_template:
          "/user_avatar/meta.discourse.org/codinghorror/{size}/5297.png"
      }
    },
    {
      id: 94522,
      cooked:
        '<p>Oh I see. <a class="mention" href="/u/zogstrip">@zogstrip</a> can you have a look?</p>',
      created_at: "2015-01-23T03:00:20.485Z",
      title: "Pasted image upload size error",
      url: "/t/pasted-image-upload-size-error/24320/4",
      user_title: "co-founder",
      user_long_name: "Jeff Atwood",
      category: {
        id: 1,
        name: "bug",
        color: "e9dd00",
        topic_id: 2,
        topic_count: 1729,
        created_at: "2013-02-01T04:56:34.914Z",
        updated_at: "2015-01-22T18:05:33.426Z",
        user_id: 1,
        topics_year: 1114,
        topics_month: 69,
        topics_week: 22,
        slug: "bug",
        description:
          "A bug report means something is broken, preventing normal/typical use of Discourse. Do be sure to search prior to submitting bugs. Include repro steps, and only describe one bug per topic please.",
        text_color: "000000",
        read_restricted: false,
        auto_close_hours: null,
        post_count: 11179,
        latest_post_id: 94611,
        latest_topic_id: 24350,
        position: 25,
        parent_category_id: null,
        posts_year: 7138,
        posts_month: 397,
        posts_week: 121,
        email_in: null,
        email_in_allow_strangers: false,
        topics_day: 1,
        posts_day: 6,
        background_url: null,
        allow_badges: true,
        name_lower: "bug",
        auto_close_based_on_last_post: false
      },
      user: {
        id: 32,
        username: "codinghorror",
        uploaded_avatar_id: 5297,
        avatar_template:
          "/user_avatar/meta.discourse.org/codinghorror/{size}/5297.png"
      }
    },
    {
      id: 94521,
      cooked:
        '<p><a class="mention" href="/u/techapj">@techapj</a> fixed this for 1.2.</p>',
      created_at: "2015-01-23T02:58:27.451Z",
      title: "The end of Clown Vomit, or, simplified category styles",
      url: "/t/the-end-of-clown-vomit-or-simplified-category-styles/24249/57",
      user_title: "co-founder",
      user_long_name: "Jeff Atwood",
      category: {
        id: 9,
        name: "ux",
        color: "5F497A",
        topic_id: 2628,
        topic_count: 540,
        created_at: "2013-02-10T03:52:21.322Z",
        updated_at: "2015-01-22T18:05:32.152Z",
        user_id: 32,
        topics_year: 370,
        topics_month: 33,
        topics_week: 3,
        slug: "ux",
        description:
          "Discussion about the user interface of Discourse, how features are presented to the user in the client, including language and UI elements.",
        text_color: "FFFFFF",
        read_restricted: false,
        auto_close_hours: null,
        post_count: 5823,
        latest_post_id: 94610,
        latest_topic_id: 24355,
        position: 25,
        parent_category_id: null,
        posts_year: 4264,
        posts_month: 609,
        posts_week: 103,
        email_in: null,
        email_in_allow_strangers: false,
        topics_day: 0,
        posts_day: 28,
        background_url: null,
        allow_badges: true,
        name_lower: "ux",
        auto_close_based_on_last_post: false
      },
      user: {
        id: 32,
        username: "codinghorror",
        uploaded_avatar_id: 5297,
        avatar_template:
          "/user_avatar/meta.discourse.org/codinghorror/{size}/5297.png"
      }
    },
    {
      id: 94519,
      cooked:
        "<p>What would you suggest writing here that would be more clear?</p>",
      created_at: "2015-01-23T02:45:36.859Z",
      title: 'What is "Born mobile, born to touch" supposed to tell me?',
      url: "/t/what-is-born-mobile-born-to-touch-supposed-to-tell-me/24329/3",
      user_title: "co-founder",
      user_long_name: "Jeff Atwood",
      category: {
        id: 3,
        name: "meta",
        color: "aaa",
        topic_id: 24,
        topic_count: 139,
        created_at: "2013-02-03T00:00:15.230Z",
        updated_at: "2015-01-22T18:05:32.797Z",
        user_id: 1,
        topics_year: 68,
        topics_month: 5,
        topics_week: 1,
        slug: "meta",
        description:
          "Discussion about meta.discourse.org itself, the organization of this forum about Discourse, how it works, and how we can improve this site.",
        text_color: "FFFFFF",
        read_restricted: false,
        auto_close_hours: null,
        post_count: 1116,
        latest_post_id: 94559,
        latest_topic_id: 24208,
        position: 25,
        parent_category_id: null,
        posts_year: 553,
        posts_month: 33,
        posts_week: 8,
        email_in: null,
        email_in_allow_strangers: false,
        topics_day: 0,
        posts_day: 0,
        background_url: null,
        allow_badges: true,
        name_lower: "meta",
        auto_close_based_on_last_post: false
      },
      user: {
        id: 32,
        username: "codinghorror",
        uploaded_avatar_id: 5297,
        avatar_template:
          "/user_avatar/meta.discourse.org/codinghorror/{size}/5297.png"
      }
    },
    {
      id: 94518,
      cooked:
        "<p>You should generally create topics to host things like this, then make them wiki, close them, etc.</p>",
      created_at: "2015-01-23T02:42:20.053Z",
      title: "How to Create Static Pages in Discourse?",
      url: "/t/how-to-create-static-pages-in-discourse/24313/2",
      user_title: "co-founder",
      user_long_name: "Jeff Atwood",
      category: {
        id: 6,
        name: "support",
        color: "CEA9A9",
        topic_id: 389,
        topic_count: 1781,
        created_at: "2013-02-05T22:16:38.672Z",
        updated_at: "2015-01-22T18:05:33.572Z",
        user_id: 1,
        topics_year: 1541,
        topics_month: 167,
        topics_week: 49,
        slug: "support",
        description:
          "Support on configuring and using Discourse after it is up and running. For installation questions, use the install category.",
        text_color: "FFFFFF",
        read_restricted: false,
        auto_close_hours: null,
        post_count: 12272,
        latest_post_id: 94602,
        latest_topic_id: 24346,
        position: 25,
        parent_category_id: null,
        posts_year: 10571,
        posts_month: 1254,
        posts_week: 413,
        email_in: null,
        email_in_allow_strangers: false,
        topics_day: 5,
        posts_day: 70,
        background_url: "",
        allow_badges: true,
        name_lower: "support",
        auto_close_based_on_last_post: false
      },
      user: {
        id: 32,
        username: "codinghorror",
        uploaded_avatar_id: 5297,
        avatar_template:
          "/user_avatar/meta.discourse.org/codinghorror/{size}/5297.png"
      }
    },
    {
      id: 94517,
      cooked:
        "<p>Doubtful this is a bug, probably dependent on the PNG encoding.</p>\n\n<p>Try using PNGOUT, or converting to 8 bit PNGOUT, to see some of the differences. And PNGOUT is lossless!</p>",
      created_at: "2015-01-23T02:41:30.287Z",
      title: "Pasted image upload size error",
      url: "/t/pasted-image-upload-size-error/24320/2",
      user_title: "co-founder",
      user_long_name: "Jeff Atwood",
      category: {
        id: 1,
        name: "bug",
        color: "e9dd00",
        topic_id: 2,
        topic_count: 1729,
        created_at: "2013-02-01T04:56:34.914Z",
        updated_at: "2015-01-22T18:05:33.426Z",
        user_id: 1,
        topics_year: 1114,
        topics_month: 69,
        topics_week: 22,
        slug: "bug",
        description:
          "A bug report means something is broken, preventing normal/typical use of Discourse. Do be sure to search prior to submitting bugs. Include repro steps, and only describe one bug per topic please.",
        text_color: "000000",
        read_restricted: false,
        auto_close_hours: null,
        post_count: 11179,
        latest_post_id: 94611,
        latest_topic_id: 24350,
        position: 25,
        parent_category_id: null,
        posts_year: 7138,
        posts_month: 397,
        posts_week: 121,
        email_in: null,
        email_in_allow_strangers: false,
        topics_day: 1,
        posts_day: 6,
        background_url: null,
        allow_badges: true,
        name_lower: "bug",
        auto_close_based_on_last_post: false
      },
      user: {
        id: 32,
        username: "codinghorror",
        uploaded_avatar_id: 5297,
        avatar_template:
          "/user_avatar/meta.discourse.org/codinghorror/{size}/5297.png"
      }
    },
    {
      id: 94516,
      cooked:
        "<p>I would worry about getting your expenses down to $5 per month, that seems more likely over time as hosting for Docker compliant sites gets cheaper.</p>",
      created_at: "2015-01-23T02:40:11.726Z",
      title: "Monetizing Discourse Talk",
      url: "/t/monetizing-discourse-talk/24316/4",
      user_title: "co-founder",
      user_long_name: "Jeff Atwood",
      category: {
        id: 6,
        name: "support",
        color: "CEA9A9",
        topic_id: 389,
        topic_count: 1781,
        created_at: "2013-02-05T22:16:38.672Z",
        updated_at: "2015-01-22T18:05:33.572Z",
        user_id: 1,
        topics_year: 1541,
        topics_month: 167,
        topics_week: 49,
        slug: "support",
        description:
          "Support on configuring and using Discourse after it is up and running. For installation questions, use the install category.",
        text_color: "FFFFFF",
        read_restricted: false,
        auto_close_hours: null,
        post_count: 12272,
        latest_post_id: 94602,
        latest_topic_id: 24346,
        position: 25,
        parent_category_id: null,
        posts_year: 10571,
        posts_month: 1254,
        posts_week: 413,
        email_in: null,
        email_in_allow_strangers: false,
        topics_day: 5,
        posts_day: 70,
        background_url: "",
        allow_badges: true,
        name_lower: "support",
        auto_close_based_on_last_post: false
      },
      user: {
        id: 32,
        username: "codinghorror",
        uploaded_avatar_id: 5297,
        avatar_template:
          "/user_avatar/meta.discourse.org/codinghorror/{size}/5297.png"
      }
    },
    {
      id: 94515,
      cooked:
        "<p>I would worry about getting your expenses down to $5 per month, that seems more likely over time as hosting for Docker compliant sites gets cheaper.</p>",
      created_at: "2015-01-23T02:38:29.185Z",
      title:
        "Introducing Discette - a minimal ember-cli front end to Discourse",
      url:
        "/t/introducing-discette-a-minimal-ember-cli-front-end-to-discourse/24321/2",
      user_title: "co-founder",
      user_long_name: "Jeff Atwood",
      category: {
        id: 7,
        name: "dev",
        color: "000",
        topic_id: 1026,
        topic_count: 574,
        created_at: "2013-02-06T08:43:41.550Z",
        updated_at: "2015-01-22T18:05:32.855Z",
        user_id: 32,
        topics_year: 298,
        topics_month: 29,
        topics_week: 2,
        slug: "dev",
        description:
          "This category is for topics related to hacking on Discourse: submitting pull requests, configuring development environments, coding conventions, and so forth.",
        text_color: "FFFFFF",
        read_restricted: false,
        auto_close_hours: null,
        post_count: 4196,
        latest_post_id: 94590,
        latest_topic_id: 24349,
        position: 25,
        parent_category_id: null,
        posts_year: 2095,
        posts_month: 172,
        posts_week: 16,
        email_in: null,
        email_in_allow_strangers: false,
        topics_day: 0,
        posts_day: 3,
        background_url: null,
        allow_badges: true,
        name_lower: "dev",
        auto_close_based_on_last_post: false
      },
      user: {
        id: 32,
        username: "codinghorror",
        uploaded_avatar_id: 5297,
        avatar_template:
          "/user_avatar/meta.discourse.org/codinghorror/{size}/5297.png"
      }
    },
    {
      id: 94514,
      cooked:
        "<p>I would worry about getting your expenses down to $5 per month, that seems more likely over time as hosting for Docker compliant sites gets cheaper.</p>",
      created_at: "2015-01-23T02:37:39.518Z",
      title: 'How to do "Object Oriented Discussion" through Oneboxes?',
      url: "/t/how-to-do-object-oriented-discussion-through-oneboxes/24328/2",
      user_title: "co-founder",
      user_long_name: "Jeff Atwood",
      category: {
        id: 5,
        name: "extensibility",
        color: "FE8432",
        topic_id: 28,
        topic_count: 295,
        created_at: "2013-02-03T08:42:06.329Z",
        updated_at: "2015-01-22T18:05:32.698Z",
        user_id: 1,
        topics_year: 187,
        topics_month: 17,
        topics_week: 7,
        slug: "extensibility",
        description:
          "Topics about extending the functionality of Discourse with plugins, themes, add-ons, or other mechanisms for extensibility.  ",
        text_color: "FFFFFF",
        read_restricted: false,
        auto_close_hours: null,
        post_count: 2574,
        latest_post_id: 94582,
        latest_topic_id: 24328,
        position: 25,
        parent_category_id: null,
        posts_year: 1485,
        posts_month: 196,
        posts_week: 52,
        email_in: null,
        email_in_allow_strangers: false,
        topics_day: 2,
        posts_day: 8,
        background_url: null,
        allow_badges: true,
        name_lower: "extensibility",
        auto_close_based_on_last_post: false
      },
      user: {
        id: 32,
        username: "codinghorror",
        uploaded_avatar_id: 5297,
        avatar_template:
          "/user_avatar/meta.discourse.org/codinghorror/{size}/5297.png"
      }
    },
    {
      id: 94512,
      cooked:
        "<p>Hmm, have not seen problems updating on 1gb instance provided swap is there.</p>\n\n<p>Anything else running on the machine?</p>\n\n<p>Maybe reboot, then upgrade Docker from command line, then upgrade Discourse from command line.</p>",
      created_at: "2015-01-23T02:32:31.383Z",
      title: "Update Failed and Now Showing Currently Upgrading",
      url: "/t/update-failed-and-now-showing-currently-upgrading/24332/2",
      user_title: "co-founder",
      user_long_name: "Jeff Atwood",
      category: {
        id: 6,
        name: "support",
        color: "CEA9A9",
        topic_id: 389,
        topic_count: 1781,
        created_at: "2013-02-05T22:16:38.672Z",
        updated_at: "2015-01-22T18:05:33.572Z",
        user_id: 1,
        topics_year: 1541,
        topics_month: 167,
        topics_week: 49,
        slug: "support",
        description:
          "Support on configuring and using Discourse after it is up and running. For installation questions, use the install category.",
        text_color: "FFFFFF",
        read_restricted: false,
        auto_close_hours: null,
        post_count: 12272,
        latest_post_id: 94602,
        latest_topic_id: 24346,
        position: 25,
        parent_category_id: null,
        posts_year: 10571,
        posts_month: 1254,
        posts_week: 413,
        email_in: null,
        email_in_allow_strangers: false,
        topics_day: 5,
        posts_day: 70,
        background_url: "",
        allow_badges: true,
        name_lower: "support",
        auto_close_based_on_last_post: false
      },
      user: {
        id: 32,
        username: "codinghorror",
        uploaded_avatar_id: 5297,
        avatar_template:
          "/user_avatar/meta.discourse.org/codinghorror/{size}/5297.png"
      }
    },
    {
      id: 94511,
      cooked:
        "<p>Hmm, not sure about that, good odds they will be fixed in iOS 8.1 which is due soon.</p>",
      created_at: "2015-01-23T02:27:16.786Z",
      title: "Dealing with iOS 8 Mobile Safari bugs?",
      url: "/t/dealing-with-ios-8-mobile-safari-bugs/24101/5",
      user_title: "co-founder",
      user_long_name: "Jeff Atwood",
      category: {
        id: 2,
        name: "feature",
        color: "0E76BD",
        topic_id: 11,
        topic_count: 1592,
        created_at: "2013-02-02T21:42:52.552Z",
        updated_at: "2015-01-22T18:05:32.647Z",
        user_id: 1,
        topics_year: 919,
        topics_month: 60,
        topics_week: 20,
        slug: "feature",
        description:
          "Discussion about features or potential features of Discourse: how they work, why they work, etc.",
        text_color: "FFFFFF",
        read_restricted: false,
        auto_close_hours: null,
        post_count: 14360,
        latest_post_id: 94600,
        latest_topic_id: 24344,
        position: 25,
        parent_category_id: null,
        posts_year: 8617,
        posts_month: 690,
        posts_week: 190,
        email_in: null,
        email_in_allow_strangers: false,
        topics_day: 2,
        posts_day: 8,
        background_url: null,
        allow_badges: true,
        name_lower: "feature",
        auto_close_based_on_last_post: false
      },
      user: {
        id: 32,
        username: "codinghorror",
        uploaded_avatar_id: 5297,
        avatar_template:
          "/user_avatar/meta.discourse.org/codinghorror/{size}/5297.png"
      }
    }
  ],
  "/groups/alternative-group.json": {
    group: {
      id: 57,
      automatic: false,
      name: "alternative-group",
      full_name: "Moderatable Table",
      user_count: 8,
      alias_level: 99,
      visible: true,
      public_admission: true,
      public_exit: false,
      flair_url: "fa-adjust",
      is_group_owner: true,
      mentionable: true,
      messageable: true,
      can_see_members: true,
      can_admin_group: true
    },
    extras: {
      visible_group_names: ["alternative-group"]
    }
  },
  "/groups/alternative-group/members.json": {
    owners: [],
    members: [
      {
        id: 2770,
        username: "awesomerobot",
        uploaded_avatar_id: 33872,
        avatar_template:
          "/user_avatar/meta.discourse.org/awesomerobot/{size}/33872.png",
        name: "",
        last_seen_at: "2015-01-23T15:53:17.844Z"
      },
      {
        id: 32,
        username: "codinghorror",
        uploaded_avatar_id: 5297,
        avatar_template:
          "/user_avatar/meta.discourse.org/codinghorror/{size}/5297.png",
        name: "Jeff Atwood",
        last_seen_at: "2015-01-23T06:05:25.457Z"
      },
    ],
    meta: {
      total: 2,
      limit: 50,
      offset: 0
    }
  }
};
