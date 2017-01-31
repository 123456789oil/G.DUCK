import PreloadStore from 'preload-store';
import { ajax } from 'discourse/lib/ajax';

export default Discourse.Route.extend({
  titleToken() {
    return I18n.t('login.reset_password');
  },

  model(params) {
    if (PreloadStore.get("password_reset")) {
      return PreloadStore.getAndRemove("password_reset").then(json => _.merge(params, json));
    }
  },

  afterModel(model) {
    // confirm token here so email clients who crawl URLs don't invalidate the link
    ajax({ url: `/users/confirm-email-token/${model.token}.json`, dataType: 'json' });
  }
});
