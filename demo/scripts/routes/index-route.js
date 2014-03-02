App.IndexRoute = Ember.Route.extend({

  indexComponent: {
    title: '',
    name: 'index',
  },

  activate: function () {
    this.controllerFor('application').set(
      'component', this.get('indexComponent')
    );
    document.title = 'Home — Topcoat Components for Ember.js';
  }
});