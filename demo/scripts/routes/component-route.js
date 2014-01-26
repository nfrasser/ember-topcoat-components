App.ComponentRoute = Ember.Route.extend({
	model: function () {
		return App.topcoatComponentList.findBy('name', this.get('routeName'));
	},
	afterModel: function (model) {
		this.controllerFor('application').set('component', model);
		document.title = model.title + ' — Topcoat Components for Ember.js';
	}
});