App.ToggleCodeComponent = App.ToggleTextComponent.extend({
	trueText: "Hide code",
	falseText: "Show code",
});

Em.TEMPLATES['components/toggle-code'] = Em.TEMPLATES['components/toggle-text'];