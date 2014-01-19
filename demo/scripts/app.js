
var App = window.App = Ember.Application.create();

require('demo/scripts/bootstrap');

App.TopcoatComponents = Ember.ArrayProxy.create({
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
		name: 'notification',
		title: 'Notification'
	}, {
		name: 'range',
		title: 'Range'
	}, {
		name: 'switch',
		title: 'Switch'
	}, {
		name: 'text-input',
		title: 'Text Input'
	}]
});

App.Router.reopen({
	location: 'none'
});

require('views/application-view');

