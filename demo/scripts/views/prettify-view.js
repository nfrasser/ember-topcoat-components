// Helper for pretty code
// Requires Google Code prettify
// https://code.google.com/p/google-code-prettify/

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

	apply: function () {
		var view = this,
			viewClass = this.get('constructor'),
			lang = this.get('lang');

		this.getPrettify().then(function (prettify) {
			var $view = view.$();
			$view.html(
				prettify(
					$view.html(),
					Em.getWithDefault(
						viewClass,
						'langMap.' + lang,
						lang
					),
					view.get('linenums')
				)
			);
		});

	}.on('didInsertElement'),

	/**
		Returns a promise that resolves with the window's `prettyPrintOne`
		method.

		@method	getPrettify
		@return	{Ember.RSVP} promise
	*/
	getPrettify: function () {

		// Get the static promise property
		var viewClass = this.get('constructor'),
			promise = Em.get(viewClass, 'prettifyPromise');

		if (!promise) {

			if (typeof window.prettyPrintOne === 'function') {

				// Prettyprint has already been retrieved, just resolve

				promise = new Em.RSVP.Promise(function (resolve) {
					resolve(window.prettyPrintOne);
				});

			} else {

				// Get prettify and all its required syntax packages

				promise = Em.$.when(
					Em.$.getScript(
						'//cdnjs.cloudflare.com/ajax/libs/prettify/r298/prettify.min.js'
					),
					Em.$.getScript(
						'//cdnjs.cloudflare.com/ajax/libs/prettify/r298/lang-css.min.js'
					)
				).then(function () {
					Em.set(viewClass, 'prettifyPromise', null);
					return window.prettyPrintOne || Em.RSVP.reject(
						'Prettify could not be retrieved'
					);
				});

				Em.set(viewClass, 'prettifyPromise', promise);
			}
		}

		return promise;
	}

});

App.PrettifyView.reopenClass({
	prettifyPromise: null,
	langMap: {
		'hbs': 'html',
		'handlebars': 'html'
	}
});

Em.Handlebars.helper('prettify', App.PrettifyView);
