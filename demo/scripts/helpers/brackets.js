Em.Handlebars.registerHelper('d', function () {
  return new Handlebars.SafeString('{{');
});

Em.Handlebars.registerHelper('b', function () {
  return new Handlebars.SafeString('}}');
});
