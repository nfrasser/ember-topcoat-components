App.ApplicationView = Ember.View.extend({
	actions: {
		jumpTo: function (selector) {
			Ember.$('#' + selector).first().focus();
		}
	}
});
