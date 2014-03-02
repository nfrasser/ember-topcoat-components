/**
  @module ember-topcoat
  @submodule helpers
*/
/**
  Basic Topcoat textarea
  @method topcoat-search
  @for Ember.Handlebars.helpers
  @param {Object} options
*/
Em.Handlebars.registerHelper('topcoat-textarea', function (options) {
  var className = 'topcoat-textarea',
    hash = {
      'class': className + (
        options.hash.large ? '--large' : ''
      ) + (
        options['class'] ? (' ' + options['class']) : ''
      )
    };
  Em.merge(options.hash, hash);
  return Em.Handlebars.helpers.textarea.call(this, options);
});
