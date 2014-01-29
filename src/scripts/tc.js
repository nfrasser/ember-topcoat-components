window.TC = Ember.Namespace.create({

	inject: function (App) {

		var namespaces = App ? [App] : Em.Application.NAMESPACES,
			componentMatch = /^Topcoat.*Component$/,
			componentClasses = {};

		// Find all the Topcat classes
		for (var prop in this) {
			if (componentMatch.test(prop)) {
				componentClasses[prop] = this[prop];
			}
		}

		// Add the classes to each namespace
		namespaces.forEach(function (namespace) {
			if (namespace !== this && Em.Application.detect(Em.get(namespace, 'constructor'))) {
				Em.setProperties(namespace, componentClasses);
			}
		});
	}

});

/* Order and include as required. */

// Helpers
require('src/scripts/helpers/input');
require('src/scripts/helpers/text-input');
require('src/scripts/helpers/search-input');
require('src/scripts/helpers/range');
require('src/scripts/helpers/textarea');
//require('src/scripts/helpers/select');

// Mixins

// Components
require('src/scripts/components/component');
require('src/scripts/components/button');
require('src/scripts/components/icon-button');
require('src/scripts/components/button-bar');
//require('src/scripts/components/button-list');
require('src/scripts/components/tab-bar');
require('src/scripts/components/checkbox');
require('src/scripts/components/radio-button');
require('src/scripts/components/switch');
require('src/scripts/components/list');
require('src/scripts/components/navigation-bar');
