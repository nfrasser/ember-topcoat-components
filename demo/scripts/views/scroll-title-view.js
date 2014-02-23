App.ScrollTitleView = Ember.View.extend({

	tagName: 'span',
	title: null,
	templateName: 'views/scroll-title-view',

	didInsertElement: function () {
		this.set('scrollToElement', this.get('element'));
		this.titleDidChange();
	},

	titleDidChange: function () {
		Em.run.scheduleOnce('afterRender', this, 'scrollTo');
	}.observes('title')

});

Em.Handlebars.helper('scroll-title', App.ScrollTitleView);
