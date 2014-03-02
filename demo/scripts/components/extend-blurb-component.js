App.ExtendBlurbComponent = Ember.Component.extend({
  name: '',
  className: function () {
    return this.get('name').classify();
  }.property('name'),
  includeTemplate: false
});
