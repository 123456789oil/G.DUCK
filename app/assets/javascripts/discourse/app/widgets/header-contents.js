import { createWidget } from "discourse/widgets/widget";
import hbs from "discourse/widgets/hbs-compiler";

createWidget("header-contents", {
  tagName: "div.contents.clearfix",
  template: hbs`
    {{#unless this.site.mobileView}}
      {{#if this.siteSettings.enable_experimental_sidebar_hamburger}}
        {{#if attrs.sidebarEnabled}}
          {{sidebar-toggle attrs=attrs}}
        {{/if}}
      {{/if}}
    {{/unless}}
    {{home-logo attrs=attrs}}
    {{#if attrs.topic}}
      {{header-topic-info attrs=attrs}}
    {{/if}}
    <div class="panel clearfix" role="navigation">{{yield}}</div>
  `,
});
