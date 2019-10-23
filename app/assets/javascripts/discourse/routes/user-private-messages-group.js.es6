import createPMRoute from "discourse/routes/build-private-messages-route";

export default createPMRoute("groups", "private-messages-groups").extend({
  groupName: null,

  titleToken() {
    const groupName = this.groupName;
    if (groupName)
      return [groupName.capitalize(), I18n.t("user.private_messages")];
  },

  model(params) {
    const username = this.modelFor("user").get("username_lower");
    const session = Discourse.Session.current();
    const filter =
      `topics/private-messages-group/${username}/${params.name}`;
    const lastTopicList = session.get("topicList");
    if (lastTopicList && lastTopicList.filter === filter) {
      return lastTopicList;
    } else {
      session.setProperties({
        topicList: null,
        topicListScrollPosition: null
      });
      return this.store.findFiltered("topicList", { filter });
    }
  },

  afterModel(model) {
    const groupName = _.last(model.get("filter").split("/"));
    this.set("groupName", groupName);
    const groups = this.modelFor("user").get("groups");
    const group = _.first(groups.filterBy("name", groupName));
    this.controllerFor("user-private-messages").set("group", group);
  },

  setupController(controller, model) {
    this._super.apply(this, arguments);
    const group = _.last(model.get("filter").split("/"));
    this.controllerFor("user-private-messages").set("groupFilter", group);
    this.controllerFor("user-private-messages").set("archive", false);
    this.controllerFor("user-topics-list").subscribe(
      `/private-messages/group/${group}`
    );
  }
});
