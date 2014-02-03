
var App = window.App = Ember.Application.create();

//require('demo/scripts/bootstrap');

// Views
require('demo/scripts/views/component-container-view');
require('demo/scripts/views/prettify-view');
require('demo/scripts/views/application-view');

// Components
TC.inject(App);
require('demo/scripts/components/show-code-component');

// Controllers
require('demo/scripts/controllers/application-controller');
require('demo/scripts/controllers/button-bar-controller');
require('demo/scripts/controllers/list-controller');

// Views
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