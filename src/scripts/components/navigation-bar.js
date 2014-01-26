/**
	@module ember-topcoat
	@submodule components
*/
/**
	@class		TopcoatNavigationBarComponent
	@extends	TC.TopcoatComponent
	@namespace	TC
*/
TC.TopcoatNavigationBarComponent = TC.TopcoatComponent.extend({
	topcoatClass: 'topcoat-navigation-bar'
});

/**
	@class		TopcoatNavigationBarItemComponent
	@extends	TC.TopcoatComponent
	@namespace	TC
*/
TC.TopcoatNavigationBarItemComponent = TC.TopcoatComponent.extend({
	topcoatClass: 'topcoat-navigation-bar__item'
});

/**
	@class		TopcoatNavigationBarTitleComponent
	@extends	TC.TopcoatComponent
	@namespace	TC
*/
TC.TopcoatNavigationBarTitleComponent = TC.TopcoatComponent.extend({
	tagName: 'h1',
	topcoatClass: 'topcoat-navigation-bar__title'
});
