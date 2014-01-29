// Helper for pretty code
// Requires Google Code prettify
// https://code.google.com/p/google-code-prettify/

/* global prettyPrintOne */
App.PrettifyView = Ember.View.extend({

	classNames: ['prettyprint'],
	classNameBindings: ['langClass', 'linenumsClass'],
	attributeBindings: ['data-lang', 'data-linenums'],

	tagName: 'pre',

	lang: null,
	linenums: 0,

	'data-lang': Em.computed.alias('lang'),
	'data-linenums': Em.computed.alias('linenums'),

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
		var lang = this.get('lang');
		this.$().html(
			prettyPrintOne(
				this.$().html(),
				this.constructor.langMap[lang] || lang,
				this.get('linenums')
			)
		);
	}

});

App.PrettifyView.reopenClass({
	langMap: {
		'hbs': 'html',
		'handlebars': 'html'
	}
});

Em.Handlebars.helper('prettify', App.PrettifyView);
