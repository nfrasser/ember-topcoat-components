/**
  @module ember-topcoat
  @submodule helpers
*/
/**
  Basic Topcoat select
  @method topcoat-select
  @for Ember.Handlebars.helpers
  @param {Object} options
*/
Em.Handlebars.helper('topcoat-select', function (options) {
  var className = options.hash.topcoatClass || 'topcoat-select',
    hash = {
      'class': className + (
        options.hash.large ? '--large' : ''
      ) + (
        options['class'] ? (' ' + options['class']) : ''
      )
    };
  Em.merge(options.hash, hash);
  return Em.Handlebars.helpers.view.call(this, Ember.Select, options);
});
