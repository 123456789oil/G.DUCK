import Component from "@glimmer/component";
import CookText from "discourse/components/cook-text";
import i18n from "discourse-common/helpers/i18n";
import and from "truth-helpers/helpers/and";
import not from "truth-helpers/helpers/not";

export default class DashboardNewFeatureItem extends Component {
  <template>
    <div class="admin-new-feature-item">
      <div class="admin-new-feature-item__content">
        <div class="admin-new-feature-item__header">
          <h3>
            {{@item.title}}
          </h3>
          {{#if (and @item.emoji (not @item.screenshot_url))}}
            <div
              class="admin-new-feature-item__new-feature-emoji"
            >{{@item.emoji}}</div>
          {{/if}}
        </div>
        {{#if @item.screenshot_url}}
          <img
            src={{@item.screenshot_url}}
            class="admin-new-feature-item__screenshot"
            alt={{@item.title}}
          />
        {{/if}}
        <div class="admin-new-feature-item__feature-description">
          <CookText @rawText={{@item.description}} />
          {{#if @item.link}}
            <a href={{@item.link}} class="admin-new-feature-item__learn-more">
              {{i18n "admin.dashboard.new_features.learn_more"}}
            </a>
          {{/if}}
        </div>
      </div>
    </div>
  </template>
}
