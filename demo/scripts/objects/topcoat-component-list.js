App.topcoatComponentList = Ember.ArrayProxy.create({
	content: [{
		name: 'button',
		title: 'Button'
	}, {
		name: 'button-bar',
		title: 'Button Bar'
	}, {
		name: 'checkbox',
		title: 'Checkbox'
	}, {
		name: 'radio-button',
		title: 'Radio Button'
	}, {
		name: 'list',
		title: 'List'
	}, {
		name: 'navigation-bar',
		title: 'Navigation Bar'
	}, {
		name: 'notification',
		title: 'Notification'
	}, {
		name: 'range',
		title: 'Range'
	}, {
		name: 'switch',
		title: 'Switch'
	}, {
		name: 'tab-bar',
		title: 'Tab Bar'
	}, {
		name: 'text-input',
		title: 'Text Input'
	}, {
		name: 'textarea',
		title: 'Textarea'
	}]
});

App.topcoatComponentList.forEach(function (component) {
	App[component.name.classify() + 'Route'] = App.ComponentRoute;
});