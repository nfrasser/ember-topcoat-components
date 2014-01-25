/* global test, ok, module */

module('Integration Tests - Main Test');

test('Components and namespace exist', function () {
    ok(true, 'Should run here few assertions');
    ok(TC, 'TC namespace should exist');
});

module('Button Bar', {
	setup: function () {
		App.reset();
		App.visit('/');
	}
});

test('Basic button bar', function () {
	var buttonBar = App.TopcoatButtonBar.create({
		content: [
			'one',
			'two',
			'three'
		]
	});

	buttonBar.appendView();

	andThen(function () {
		ok(find('#' + button.elementId));

	});
});
