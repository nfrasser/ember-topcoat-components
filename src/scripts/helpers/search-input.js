/**
  @module ember-topcoat
  @submodule helpers
*/
/**
  Basic Topcoat range
  @method topcoat-search-input
  @for Ember.Handlebars.helpers
  @param {Object} options
*/
Em.Handlebars.registerHelper('topcoat-search-input', function (options) {
  options.hash.topcoatClass = 'topcoat-search-input';
  options.hash.type = 'search';
  return Em.Handlebars.helpers['topcoat-input'].call(this, options);
});
