/**
  @module ember-topcoat
  @submodule components
*/
/**
  @class TopcoatNavigationBarComponent
  @extends TC.TopcoatComponent
  @namespace TC
*/
TC.TopcoatNavigationBarComponent = TC.TopcoatComponent.extend({
  topcoatClass: 'topcoat-navigation-bar'
});

/**
  @class TopcoatNavigationBarItemComponent
  @extends TC.TopcoatComponent
  @namespace TC
*/
TC.TopcoatNavigationBarItemView = TC.TopcoatView.extend({
  classNames: ['topcoat-navigation-bar__item']
});

Ember.Handlebars.helper(
  'topcoat-navigation-bar-item',
  TC.TopcoatNavigationBarItemView
);

/**
  @class TopcoatNavigationBarTitleComponent
  @extends TC.TopcoatComponent
  @namespace TC
*/
TC.TopcoatNavigationBarTitleComponent = TC.TopcoatComponent.extend({
  tagName: 'h1',
  topcoatClass: 'topcoat-navigation-bar__title'
});
