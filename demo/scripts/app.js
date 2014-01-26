
var App = window.App = Ember.Application.create();

require('demo/scripts/bootstrap');
require('demo/scripts/objects/topcoat-component-list');

// Controllers
require('demo/scripts/controllers/application-controller');
require('demo/scripts/controllers/button-bar-controller');

// Views
require('demo/scripts/views/prettify-view');
require('demo/scripts/views/application-view');

// Controllers
require('demo/scripts/routes/application-route');

App.Router.map(function () {
	App.TopcoatComponentList.forEach(function (component) {
		this.route(component.name);
	}, this);
});