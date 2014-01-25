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
	selected1: null,
	selected2: ['one'],

	selectedContentDidChange: function () {
		console.log(this.get('selected2').toArray());
	}.observes('selected2.@each')
});
