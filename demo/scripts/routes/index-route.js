App.IndexRoute = Ember.Route.extend({

	indexComponent: {
		title: 'Welcome to Ember Topcoat Components!',
		name: 'index',
	},

	activate: function () {
		this.controllerFor('application').set(
			'component', this.get('indexComponent')
		);
		document.title = 'Home — Topcoat Components for Ember.js';
	}
});