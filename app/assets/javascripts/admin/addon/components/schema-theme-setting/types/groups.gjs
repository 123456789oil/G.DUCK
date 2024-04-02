import { service } from "@ember/service";
import { and, not } from "truth-helpers";
import FieldInputDescription from "admin/components/schema-theme-setting/field-input-description";
import SchemaThemeSettingTypeModels from "admin/components/schema-theme-setting/types/models";
import GroupChooser from "select-kit/components/group-chooser";

export default class SchemaThemeSettingTypeGroups extends SchemaThemeSettingTypeModels {
  @service site;

  type = "groups";

  get groupChooserOptions() {
    return {
      clearable: !this.required,
      filterable: true,
      maximum: this.max,
    };
  }

  <template>
    <GroupChooser
      @content={{this.site.groups}}
      @value={{this.value}}
      @onChange={{this.onInput}}
      @options={{this.groupChooserOptions}}
    />

    <div class="schema-field__input-supporting-text">
      {{#if (and @description (not this.validationErrorMessage))}}
        <FieldInputDescription @description={{@description}} />
      {{/if}}

      {{#if this.validationErrorMessage}}
        <div class="schema-field__input-error">
          {{this.validationErrorMessage}}
        </div>
      {{/if}}
    </div>
  </template>
}
