window.TC = Ember.Namespace.create({

  inject: function (App) {

    var namespaces = App ? (
        Em.isArray(App) ? App : [App]
      ) : Em.Application.NAMESPACES,
      componentClasses = {};

    // Find all the Topcat classes
    for (var prop in this) {
      if (/^Topcoat.*Component$/.test(prop)) {
        componentClasses[prop] = this[prop];
      }
    }

    // Add the classes to each namespace
    namespaces.forEach(function (namespace) {
      if (namespace !== this && Em.Application.detect(Em.get(namespace, 'constructor'))) {
        Em.setProperties(namespace, componentClasses);
      }
    }, this);
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

// Views
require('src/scripts/views/view');

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
require('src/scripts/components/notification');
