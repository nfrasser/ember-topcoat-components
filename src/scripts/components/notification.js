/**
	@module ember-topcoat
	@submodule components
*/
/**
	Basic Topcoat notification
	@class		TopcoatNotificationComponent
	@extends	TC.TopcoatComponent
	@namespace	TC
*/
TC.TopcoatNotificationComponent = TC.TopcoatComponent.extend({

	tagName: 'span',
	topcoatClass: 'topcoat-notification',

	/**
		Value for the content.
		@property	content
		@type		Number|String
		@default	0
	*/
	content: 0

});
