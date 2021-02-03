import Component from "@ember/component";
import discourseComputed from "discourse-common/utils/decorators";
import getURL from "discourse-common/lib/get-url";

export default Component.extend({
  tagName: "a",
  classNameBindings: [":discourse-tag", "style", "tagClass"],
  attributeBindings: ["href"],

  @discourseComputed("tagRecord.id")
  tagClass(tagRecordId) {
    return "tag-" + tagRecordId;
  },

  @discourseComputed("tagRecord.id")
  href(tagRecordId) {
    return getURL("/tag/" + tagRecordId);
  },
});
