/**
	@module	ember-topcoat
	@submodule components
*/

var ButtonBarItemViewMixin = Ember.Mixin.create({

	templateName: 'views/topcoat-button-bar-item-view',
	classNames: ['topcoat-button-bar__item'],

	componentBinding: 'parentView.component',
	inputTypeBinding: 'parentView.inputType',
	isFormTypeBinding: 'parentView.isFormType'

});

var DefaultItemView = Ember.SelectOption.extend(ButtonBarItemViewMixin, {

	tagName: 'div',

	/**
		Send the `sendAction` event to this view's target object,
		along with the name of the selected item
	*/
	click: function () {
		this.get('component').send(
			'sendAction',
			this.get('content')
		);
		return true;
	}
});

var FormItemView = Ember.SelectOption.extend(ButtonBarItemViewMixin, {

	tagName: 'label',

	click: function () {

		var content = this.get('content'),
			selection = this.get('parentView.selection'),
			selectedIndex = -1;

		if (this.get('parentView.multiple')) {

			selection = Em.isArray(selection) ? selection : [];
			selectedIndex = selection.indexOf(content);

			if (selectedIndex >= 0) {
				// Already selected, untoggle and remove from selection
				selection.splice(selectedIndex, 1);
			} else {
				// Add new item to selection
				selection.push(content);
			}

			Em.run.next(
				this,
				'notifyPropertyChange',
				'parentView.selection.@each'
			);

		} else {
			selection = content;
		}

		this.set('parentView.selection', selection);
	}
});

/**
	The options for the button bar are based on the [mobile button bar
	example](http://codepen.io/Topcoat/pen/kdKyg). Use `type="select"` or
	`type="toggle"` for checkboxes and what not.

	Selections are based on
*/
TC.TopcoatButtonBarComponent = TC.TopcoatComponent.extend({

	actions: {

		/**
			Sends the `action` action to the current target object with
			all the given parameters. This is called whenever any of the
			button bar buttons are selected. If this instance is of type
			`'select'` or `'toggle'`, the corresponding selection will
			also be made for the given `content` property. More docs on
			this coming soon.

			@event	sendAction
		*/
		sendAction: function (selected) {
			//console.log(selected);
			this.sendAction('action', selected);
		}
	},

	/**
		Represents the content for which buttons will be created
		@property	content
		@type		Ember.Enumerable
		@default	null
	*/
	content: null,

	/**
		Used for when there is no type, this action will be called on the
		current context whenever the buttons for the given content are
		selected.

	*/
	action: null,

	/**
		Should this be a large button bar?
		@property	large
		@type		Boolean
		@default	false
	*/
	large: false,

	/**
		When using type "toggle" or "select", used to specify the name of
		this group of checkboxes or radio buttons
		@property	name
		@type		String
		@default	null
	*/
	name: null,

	selection: null,
	value: null,

	topcoatClass: 'topcoat-button-bar--container'

});

TC.TopcoatButtonBarView = Ember.Select.extend({

	classNames: ['topcoat-button-bar'],
	tagName: 'div',
	defaultTemplate: null,
	templateName: 'views/topcoat-button-bar-view',

	componentBinding: 'parentView',
	contentBinding: 'component.content',

	/**
		Is this instance of type 'toggle' or 'select'?
		@property	isFormType
		@type		Ember.ComputerProperty|Boolean
	*/
	isFormType: function () {
		return ['select', 'toggle'].indexOf(
			this.get('component.type')
		) >= 0;
	}.property('component.type'),

	/**
		Multiple selection?
	*/
	multiple: Em.computed.equal('component.type', 'toggle'),

	/**
		View class that should be used for each item
		@property	buttonBarItemClass
		@type		Ember.ComputerProperty|Ember.View
	*/
	optionView: function () {
		return this.get('isFormType') ? FormItemView : DefaultItemView;
	}.property('component.type'),

	/**
		Type for the input of selectable or toggleable button bars.
		A type of `select` returns `radio`, and `toggle` returns
		`checkbox`. Otherwise `hidden` is returned.
		@property	inputType
		@type		Ember.ComputerProperty|Str9jg
	*/
	inputType: function () {
		var type = this.get('component.type');
		return type === 'select' ? 'radio' : (
			type === 'toggle' ? 'checkbox' : 'hidden'
		);
	}.property('component.type')

});

/**
	@class		TopcoatButtonBarButtonComponent
	@extends	TC.TopcoatButtonComponent
	@namepsace	TC
*/
TC.TopcoatButtonBarButtonComponent = TC.TopcoatButtonComponent.extend({

	/**
		@property _prefix
		@protected
	*/
	_prefix: 'topcoat-button-bar__button',

	/**
		The button bar cannot be a call to action button
		@property	_hasCta
		@protected
	*/
	_hasCta: false,

	/**
		The button bar cannot be a call to action button
		@property	_hasQuiet
		@protected
	*/
	_hasQuiet: false

});
