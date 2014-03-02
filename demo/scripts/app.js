// Remove noscript tags
Em.$('noscript').remove();

var App = window.App = Ember.Application.create();


// Helpers
require('demo/scripts/helpers/brackets');

// Views
require('demo/scripts/views/component-container-view');
require('demo/scripts/views/prettify-view');
require('demo/scripts/views/application-view');

// Components
TC.inject(App);
require('demo/scripts/components/toggle-text-component');
require('demo/scripts/components/toggle-code-component');
require('demo/scripts/components/show-code-component');
require('demo/scripts/components/extend-blurb-component');

// Controllers
require('demo/scripts/controllers/application-controller');
require('demo/scripts/controllers/component-controller');
require('demo/scripts/controllers/button-bar-controller');
require('demo/scripts/controllers/tab-bar-controller');
require('demo/scripts/controllers/list-controller');

// Views
require('demo/scripts/views/view');
require('demo/scripts/views/list-item-view');
require('demo/scripts/views/scroll-title-view');

// Routes
require('demo/scripts/routes/application-route');
require('demo/scripts/routes/index-route');
require('demo/scripts/routes/component-route');
//require('demo/scripts/routes/button-bar-route');

require('demo/scripts/objects/topcoat-component-list');

App.Router.map(function () {
  App.topcoatComponentList.forEach(function (component) {
    this.route(component.name);
  }, this);
});