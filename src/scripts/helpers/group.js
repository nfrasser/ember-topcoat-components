/**
	@module	ember-topcoat
	@submodule helpers
*/
var get = Ember.get;


if (!Ember.Handlebars.helpers.group) {

	// Define group helper if required
	// https://github.com/emberjs/group-helper
	Ember.Handlebars.registerHelper('group', function(options) {
		var data = options.data,
				fn   = options.fn,
				view = data.view,
				childView;

		childView = view.createChildView(Ember._MetamorphView, {
			context: get(view, 'context'),

			template: function(context, options) {
				options.data.insideGroup = true;
				return fn(context, options);
			}
		});

		view.appendChild(childView);
	});

}