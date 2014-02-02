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

	items2: function () {
		var first = {
				name: 'First',
				number: 1
			},
			second = {
				name: 'Second',
				number: 2
			},
			third = {
				name: 'Third',
				number: 3
			};

		this.set('selectedNumber', second);
		return [first, second, third];
	}.property(),

	selectedItem: 'one',
	selectedItems: ['one'],
	selectedNumber: null,

	selectedItemsDisplay: function () {
		return this.get('selectedItems').join(', ');
	}.property('selectedItems.@each'),

	selectedItemsArrayDisplay: function () {
		var items = this.get('selectedItems');
		if (!items || !Em.isArray(items) || items.length === 0) {
			return '[]';
		}
		return "['" + items.join("', '") + "']";
	}.property('selectedItems.@each')

});
