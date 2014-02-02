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

	items2: [
		'ones',
		'twos',
		'threes'
	],

	selectedItem: 'ones',
	selectedItems: ['ones'],

	selectedItemsDisplay: function () {
		return "['" + this.get('selectedItems').join("', '") + "']";
	}.property('selectedItems.@each')

});
