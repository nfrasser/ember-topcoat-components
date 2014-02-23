App.ListController = App.ComponentController.extend({

	actions: {
		addItem: function () {
			var item = this.get('newItem');
			if (item) {
				this.get('groupItems').pushObject(item);
				this.set('newItem', '');
			}
		},
		removeItem: function (item) {
			this.get('groupItems').removeObject(item);
		}
	},

	groupItems: function () {
		return Em.ArrayProxy.create({content: []});
	}.property(),

	items: [
		'First list item',
		'Second list item',
		'Third list item',
		'Fourth list item',
		'Fifth list item'
	],

	objects: [{
		id: 1,
		label: 'First list object'
	}, {
		id: 2,
		label: 'Second list object'
	}, {
		id: 3,
		label: 'Third list object'
	}, {
		id: 4,
		label: 'Fourth list object'
	}, {
		id: 5,
		label: 'Fifth list object'
	}]

});