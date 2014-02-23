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

		showMessage: function (message) {
			window.alert('You sent the following message: "' + message + '"');
		},

		scrollTo: function (element) {
			var applicationView = this.get('container').lookup('view:application');
			if (applicationView) {
				return applicationView.scrollTo(element);
			}
		}

	}
});
