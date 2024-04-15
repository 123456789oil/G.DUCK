import Controller, { inject as controller } from "@ember/controller";
import { computed } from "@ember/object";
import { alias } from "@ember/object/computed";
import { inject as service } from "@ember/service";
import { duration } from "discourse/lib/formatter";
import discourseComputed from "discourse-common/utils/decorators";

// should be kept in sync with 'UserSummary::MAX_BADGES'
const MAX_BADGES = 6;

export default Controller.extend({
  userController: controller("user"),
  user: alias("userController.model"),
  siteSettings: service(),
  currentUser: service(),

  @discourseComputed("model.badges.length")
  moreBadges(badgesLength) {
    return badgesLength >= MAX_BADGES;
  },

  @discourseComputed("model.time_read")
  timeRead(timeReadSeconds) {
    return duration(timeReadSeconds, { format: "tiny" });
  },

  @discourseComputed("model.time_read")
  timeReadMedium(timeReadSeconds) {
    return duration(timeReadSeconds, { format: "medium" });
  },

  @discourseComputed("model.time_read", "model.recent_time_read")
  showRecentTimeRead(timeRead, recentTimeRead) {
    return timeRead !== recentTimeRead && recentTimeRead !== 0;
  },

  @discourseComputed("model.recent_time_read")
  recentTimeRead(recentTimeReadSeconds) {
    return recentTimeReadSeconds > 0
      ? duration(recentTimeReadSeconds, { format: "tiny" })
      : null;
  },

  @discourseComputed("model.recent_time_read")
  recentTimeReadMedium(recentTimeReadSeconds) {
    return recentTimeReadSeconds > 0
      ? duration(recentTimeReadSeconds, { format: "medium" })
      : null;
  },

  topCollege: computed(function () {
    return this
      .currentUser.custom_fields?.[this.siteSettings.college_top_preference_field];
  }),

  admitsReceived: computed(function () {
    return this
      .currentUser.custom_fields?.[this.siteSettings.college_admits_received_field];
  }),

  admitsAwaited: computed(function () {
    return this
      .currentUser.custom_fields?.[this.siteSettings.college_admits_awaited_field];
  }),
});
