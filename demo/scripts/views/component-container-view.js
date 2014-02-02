App.ComponentContainerView = Ember.ContainerView.extend({
	tagName: 'article',
	classNames: ['component'],

	actions: {
		toggleProperty: function (name) {
			this.toggleProperty(name);
		}
	},

	layoutDidChange: function () {
		Em.run.scheduleOnce('afterRender', this, 'scrollTo', '#component-header');
	}.observes('templateName')

});
