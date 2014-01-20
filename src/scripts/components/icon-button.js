/**
	@module ember-topcoat
	@submodule components
*/
/**
	@class		TopcoatIconButtonComponent
	@extends	TC.TopcoatButtonComponent
	@namepsace	TC
*/
TC.TopcoatIconButtonComponent = TC.TopcoatButtonComponent.extend({

	/**
		@property _prefix
		@protected
	*/
	_prefix: 'topcoat-icon-button',

	/**
		The icon button cannot be a call to action button
		@property	_hasCta
		@protected
	*/
	_hasCta: false
});
