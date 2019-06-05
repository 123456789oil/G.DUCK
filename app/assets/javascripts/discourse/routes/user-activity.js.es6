export default Discourse.Route.extend({
  model() {
    let user = this.modelFor("user");
    if (!user.profile_hidden) return user;
  },

  setupController(controller, user) {
    this.controllerFor("user-activity").set("model", user);
  }
});
