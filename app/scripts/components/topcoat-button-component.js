/**
	@module ember-topcoat-components
*/
/**
	Basic Topcoat button
	@class		TopcoatButtonComponent
	@extends	TC.Component
	@namespace	TC
*/
TC.TopcoatButtonComponent = TC.Component.extend({

	/**
		@property	tagName
		@type		String
		@default	'button'
	*/
	tagName: 'button',

	attributeBindings: ['disabled'],

	/**
		The button's class, based on the 'large','quiet, 'cta', and 'type'
		properties.
		@property	topcoatClass
		@type		Ember.ComputedProperty|String
		@default	'topcoat-button'
	*/
	topcoatClass: function () {
		var classArray = [this.get('_prefix')],
			type = this.get('type');

		if (this.get('large')) {
			classArray.push('large');
		}

		if (type) {
			classArray.push(type);
		} else if (this.get('cta')) {
			classArray.push('cta');
		} else if (this.get('quiet')) {
			classArray.push('quiet');
		}

		return classArray.join('--');

	}.property('large', 'quiet', 'cta', 'type'),

	/**
		Should the button be disabled?
	*/
	disabled: false,

	/**
		Should this be a large button?
		@property	large
		@type		Boolean
		@default	false
	*/
	large: false,

	/**
		Should this be a quiet button?
		@property	quiet
		@type		Boolean
		@default	false
	*/
	quiet: false,

	/**
		Should this be a call-to-action button?
		@property	cta
		@type		Boolean
		@default	false
	*/
	cta: false,

	/**
		The button `type` could be either `"cta"` or `"quiet"`. If set,
		overrides the `quiet` and `cta` properties.
		@property	type
		@type		String
		@default	null
	*/
	type: null,


	/**
		Prefix used for the `topcoatClass`
		@property	_prefix
		@protected
		@type		String
		@default	'topcoat-button'
	*/
	_prefix: 'topcoat-button'

});
