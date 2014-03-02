/**
  @module ember-topcoat
  @submodule components
*/
/**
  @class TopcoatButtonListComponent
  @extends TC.TopcoatButtonBarComponent
  @namespace TC
*/
TC.TopcoatButtonListComponent = TC.TopcoatButtonBarComponent.extend({
  barType: 'button-list'
});

Em.TEMPLATES['components/topcoat-button-list'] = Em.TEMPLATES['components/topcoat-button-bar'];
