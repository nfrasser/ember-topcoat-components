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
	],
	selected1: 'two',
	selected2: ['one']
});
