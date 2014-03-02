App.topcoatComponentList = Ember.ArrayProxy.create({
  content: [{
    name: 'button',
    title: 'Button',
    sections: [{
      name: 'basic',
      title: "Basic Usage",
    }, {
      name: 'large',
      title: "Large Buttons",
    }, {
      name: 'quiet',
      title: "Quiet Buttons",
    }, {
      name: 'cta',
      title: "Call To Action Buttons",
    }, {
      name: 'actions',
      title: "Actions",
    }, {
      name: 'formatting',
      title: "Programmatic Button Formatting",
    }],
    showExtending: true
  }, {
    name: 'button-bar',
    title: 'Button Bar',
    sections: [{
      name: 'basic',
      title: "Basic Usage"
    }, {
      name: 'style-fix',
      title: "Style Fix"
    }, {
      name: 'select-toggle',
      title: "Select and Toggle Button Bars"
    }, {
      name: 'select',
      title: "Select Button Bar"
    }, {
      name: 'toggle',
      title: "Toggle Button Bar"
    }, {
      name: 'value-label-path',
      title: "Specifying value and label paths for each button"
    }],
    showExtending: true,
    includeExtendTemplate: true
  }, {
    name: 'checkbox',
    title: 'Checkbox',
    sections: [{
      name: 'basic',
      title: "Basic Usage"
    }],
    showExtending: true,
    includeExtendTemplate: true
  }, {
    name: 'radio-button',
    title: 'Radio Button',
    sections: [{
      name: 'basic',
      title: "Basic Usage"
    }],
    showExtending: true,
    includeExtendTemplate: true
  }, {
    name: 'list',
    title: 'List',
    sections: [{
      name: 'basic',
      title: "Basic Usage"
    }, {
      name: 'block',
      title: "Block Usage"
    }],
    showExtending: true,
    includeExtendTemplate: true
  }, {
    name: 'navigation-bar',
    title: 'Navigation Bar',
    sections: [{
      name: 'basic',
      title: "Basic Usage"
    }],
    showExtending: true
  }, {
    name: 'notification',
    title: 'Notification',
    sections: [{
      name: 'basic',
      title: "Basic Usage"
    }],
    showExtending: true,
    includeExtendTemplate: true
  }, {
    name: 'range',
    title: 'Range',
    sections: [{
      name: 'basic',
      title: "Basic Usage"
    }]
  }, {
    name: 'switch',
    title: 'Switch',
    sections: [{
      name: 'basic',
      title: "Basic Usage"
    }],
    showExtending: true,
    includeExtendTemplate: true
  }, {
    name: 'tab-bar',
    title: 'Tab Bar',
    sections: [{
      name: 'basic',
      title: "Basic Usage"
    }],
    showExtending: true,
    includeExtendTemplate: true
  }, {
    name: 'text-input',
    title: 'Text Input',
    sections: [{
      name: 'basic',
      title: "Basic Usage"
    }]
  }, {
    name: 'search-input',
    title: 'Search Input',
    sections: [{
      name: 'basic',
      title: "Basic Usage"
    }]
  }, {
    name: 'textarea',
    title: 'Textarea',
    sections: [{
      name: 'basic',
      title: "Basic Usage"
    }]
  }]
});

App.topcoatComponentList.forEach(function (component) {
  var className = component.name.classify();

  component.sections.forEach(function (section) {
    section.templateName = component.name + '/' + section.name;
    section.headingId = component.name + '-' + section.name;
    section.headingSelector = '#' + section.headingId;
  });

  Ember.TEMPLATES[component.name] = Ember.TEMPLATES[component.name] || Ember.TEMPLATES.component;

  App[className + 'Route'] = App[className + 'Route'] || App.ComponentRoute;
  App[className + 'Controller'] = App[className + 'Controller'] || App.ComponentController;
});
