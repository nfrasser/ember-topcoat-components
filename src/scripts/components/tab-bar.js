/**
  @module ember-topcoat
  @submodule components
*/
/**
  @class TopcoatTabBarComponent
  @extends TC.TopcoatButtonBarComponent
  @namespace TC
*/
TC.TopcoatTabBarComponent = TC.TopcoatButtonBarComponent.extend({
  type: 'select',
  barType: 'tab-bar'
});

Em.TEMPLATES['components/topcoat-tab-bar'] =
  Em.TEMPLATES['components/topcoat-button-bar'];
