App.ToggleTextComponent = Ember.Component.extend({

  tagName: 'p',
  classNames: ['toggle-text'],

  trueText: "On",
  falseText: "Off",

  text: function () {
    return this.get(this.get('show') ? 'trueText' : 'falseText');
  }.property('show'),

  actions: {
    toggleShow: function () {
      this.toggleProperty('show');
    }
  },

});
