/**
  This view handles rendering of a combobox that can view a category

  @class ComboboxViewCategory
  @extends Discourse.ComboboxView
  @namespace Discourse
  @module Discourse
**/
Discourse.ComboboxViewCategory = Discourse.ComboboxView.extend({
  none: 'category.none',
  classNames: ['combobox category-combobox'],
  overrideWidths: true,
  dataAttributes: ['color', 'text_color', 'description'],
  valueBinding: Ember.Binding.oneWay('source'),

  template: function(text, templateData) {
    if (!templateData.color) return text;

    var result = "<span class='badge-category' style='background-color: #" + templateData.color + '; color: #' +
        templateData.text_color + ";' >" + text + "</span>";
    if (templateData.description && templateData.description !== 'null') {
      result += '<div class="category-desc">' + templateData.description + '</div>';
    }
    return result;
  }

});


