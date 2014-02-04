/**
	@module ember-topcoat
	@submodule helpers
*/
/**
	Basic Topcoat input
	@method		topcoat-input
	@for		Ember.Handlebars.helpers
	@param		{Object} options
*/
Em.Handlebars.helper('topcoat-input', function (options) {
	var className = options.hash.topcoatClass || [
			'topcoat',
			options.hash.type || 'text',
			'input'
		].join('-'),
		hash = {
			'class': className + (
				options.hash.large ? '--large' : ''
			) + (
				options.hash['class'] ? (' ' + options.hash['class']) : ''
			)
		};
	Em.merge(options.hash, hash);
	delete options.hash.topcoatClass;
	return Em.Handlebars.helpers.input.call(this, options);
});
