/**
  @module ember-topcoat
  @submodule views
  @main
*/
TC.TopcoatView = Ember.View.extend({

  classNameBindings: ['topcoatClass'],

  /**
    The name of the class this component's element will have
    @property topcoatClass
    @type String
    @default 'topcoat'
  */
  topcoatClass: 'topcoat'
});
