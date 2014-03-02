/**
  @module ember-topcoat
  @submodule helpers
*/
/**
  Basic Topcoat range
  @method topcoat-text-input
  @for Ember.Handlebars.helpers
  @param {Object} options
*/
Em.Handlebars.registerHelper('topcoat-text-input', function (options) {
  options.hash.topcoatClass = 'topcoat-text-input';
  options.hash.type = 'text';
  return Em.Handlebars.helpers['topcoat-input'].call(this, options);
});
