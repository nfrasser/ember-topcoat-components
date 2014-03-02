App.ComponentContainerView = Ember.ContainerView.extend({
  tagName: 'article',
  classNames: ['component'],

  actions: {
    toggleProperty: function (name) {
      this.toggleProperty(name);
    }
  }
});
