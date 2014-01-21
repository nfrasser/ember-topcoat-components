App.ButtonBarController = Ember.Controller.extend({
	actions: {
		alert: function (item) {
			window.alert(item);
		}
	},
	items: [
		'one',
		'two',
		'three'
	]
});
