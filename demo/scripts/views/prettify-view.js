// Helper for pretty code
// Requires Google Code prettify
// https://code.google.com/p/google-code-prettify/

/* global prettyPrintOne */
App.PrettifyView = Ember.View.extend({

	classNames: ['prettyprint'],
	classNameBindings: ['langClass', 'linenumsClass'],
	tagName: 'pre',

	lang: null,
	lineNums: 0,

	langClass: function () {
		var lang = this.get('lang');
		return lang ? 'lang-' + lang : null;
	}.property('lang'),

	linenumsClass: function () {
		var linenums = this.get('linenums');
		return linenums ? 'linenums:' + linenums : null;
	}.property('linenums'),

	didInsertElement: function () {
		var view = this;
		if (window.prettyPrintOne) {
			this.apply();
		} else {
			Em.$.getScript(
				'//cdnjs.cloudflare.com/ajax/libs/prettify/r298/prettify.min.js'
			).then(function () {
				Em.$.getScript(
					'//cdnjs.cloudflare.com/ajax/libs/prettify/r298/lang-css.min.js'
				).then(function () {
					view.apply();
				});
			});
		}
	},

	apply: function () {
		this.$().html(
			prettyPrintOne(
				this.$().html(),
				this.get('lang'),
				this.get('linenums')
			)
		);
	}

});

Em.Handlebars.helper('prettify', App.PrettifyView);
