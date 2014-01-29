/**
	@class		ApplicationRoute
	@extends	Ember.Route
	@namespace	App
*/
App.ApplicationRoute = Ember.Route.extend({

	// Route actions
	actions: {
		/**
			Updates the URL for the Topcoat stylesheet
		*/
		updateTopcoatStyle: function (selected, options) {
			var $body = Em.$('body'),
				$stylesheet = Em.$('#topcoat-stylesheet');
			$stylesheet.attr('href', selected.url);
			$body.removeClass(options.getEach('name').join(' '));
			$body.addClass(selected.name);
		},

		sampleAction: function () {
			window.alert('You sent a sample action!');
		}
	}
});
