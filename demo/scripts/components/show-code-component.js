App.ShowCodeComponent = Ember.Component.extend({

	tagName: 'a',
	attributeBindings: ['href', 'aria-role'],

	show: null,

	href: '#',
	'aria-role': "button",

	click: function () {
		this.set('show', !this.get('show'));
		return false;
	}

});