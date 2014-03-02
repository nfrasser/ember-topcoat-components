var stylesheets = [{
  name: 'topcoat-desktop-dark',
  title: 'Topcoat Desktop Dark',
  url: 'vendor/topcoat/css/topcoat-desktop-dark.min.css'
}, {
  name: 'topcoat-desktop-light',
  title: 'Topcoat Desktop Light',
  url: 'vendor/topcoat/css/topcoat-desktop-light.min.css'
}, {
  name: 'topcoat-mobile-dark',
  title: 'Topcoat Mobile Dark',
  url: 'vendor/topcoat/css/topcoat-mobile-dark.min.css'
}, {
  name: 'topcoat-mobile-light',
  title: 'Topcoat Mobile Light',
  url: 'vendor/topcoat/css/topcoat-mobile-light.min.css'
}];

/**
  @class    ApplicationController
  @namespace  App
  @extends  Ember.Controller
*/
App.ApplicationController = Ember.Controller.extend({

  /**
    @property  stylesheets
    @type    Ember.ArrayProxy
  */
  stylesheets: Em.ArrayProxy.create({
    content: stylesheets,
    selected: 'topcoat-mobile-dark'
  }),

  /**
    Called whenever the selected stylesheet was changed
    @method selectedStylesheetDidChange
  */
  selectedStylesheetDidChange: function () {
    var selected = this.get('stylesheets').findBy(
      'name',
      this.get('stylesheets.selected')
    );
    this.send('updateTopcoatStyle', selected, this.get('stylesheets'));
  }.observes('stylesheets.selected')

});
