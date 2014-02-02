App.ScrollTitleView = Ember.View.extend({

	tagName: 'span',
	title: null,
	templateName: 'views/scroll-title-view',

	/**
		Scroll the given element in this view's viewport
		@method	scrollTo
		@param	Element|String element The element in the viewport to scroll over to
	*/
	scrollTo: function () {

		/*
			Scroll to the given element, which defaults to the view's
			scrollTo property
		*/
		var $scrollTo = Em.$(this.get('element')),
			$viewport,
			scrollHeight;

		if ($scrollTo.length === 1) {

			// A single item to scroll to exists.
			$viewport = Em.$('body,html');

			var viewportOffset = ($viewport.offset() || {}).top || 0,
				scrollToOffset = ($scrollTo.offset() || {}).top || 0;

			// This is the element's position within the element
			scrollHeight = scrollToOffset - viewportOffset;

			// Perform the scroll animation
			$viewport.animate({
				scrollTop: scrollHeight
			}, 300, function () {
				$scrollTo.focus();
			});

		}
	},

	didInsertElement: function () {
		this.notifyPropertyChange('title');
	},

	titleDidChange: function () {
		Em.run.scheduleOnce('afterRender', this, 'scrollTo');
	}.observes('title')

});

Em.Handlebars.helper('scroll-title', App.ScrollTitleView);
