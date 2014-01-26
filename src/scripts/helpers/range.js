/**
	@module ember-topcoat
	@submodule helpers
*/
/**
	Basic Topcoat range
	@method		topcoat-range
	@for		Ember.Handlebars.helpers
	@param		{Object} options
*/
Em.Handlebars.registerHelper('topcoat-range', function (options) {
	options.hash.topcoatClass = 'topcoat-range';
	options.hash.type = 'range';
	options.hash.large = false;
	return Em.Handlebars.helpers['topcoat-input'].call(this, options);
});
