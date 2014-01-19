/**
	@module ember-topcoat-components
	@main
*/
/**
	Basic Topcoat component
	@class		Component
	@extend		Ember.Component
	@namespace	TC
*/
TC.Component = Ember.Component.extend({

	classNameBindings: ['topcoatClass'],

	/**
		The name of the class this component's element will have
		@property	topcoatClass
		@type		String
		@default	'topcoat'
	*/
	topcoatClass: 'topcoat'
});
