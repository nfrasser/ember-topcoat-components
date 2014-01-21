/**
	@module	ember-topcoat
	@submodule components
*/

var defaultItemView = Ember.View.extend({

		templateName: 'views/topcoat-button-bar-button-view',
		classNames: ['topcoat-button-bar__item'],
		componentBinding: 'parentView.component',
		largeBinding: 'parentView.large',
		typeBinding: 'parentView.type',
		inputTypeBinding: 'parentView.inputType',
		isFormTypeBinding: 'parentView.isFormType',

		/**
			Send the `sendAction` event to this view's target object,
			along with the name of the selected item
		*/
		click: function () {
			this.get('component').send(
				'sendAction',
				this.get('content')
			);
		}
	}),

	formItemView = defaultItemView.extend({
		tagName: 'label'
	});

/**
	The options for the button bar are based on the [mobile button bar
	example](http://codepen.io/Topcoat/pen/kdKyg). Use `type="select"` or
	`type="toggle"` for checkboxes and what not
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
		The type of button bar this is going to be.
		This can be one of 'select' or 'toggle'. Based on the
		Topcoat mobile button bar: http://codepen.io/Topcoat/pen/kdKyg
		@property	type
		@type		String
		@default	null
	*/
	type: null,

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

	topcoatClass: 'topcoat-button-bar--container'

});

TC.TopcoatButtonBarView = Ember.CollectionView.extend({

	classNames: ['topcoat-button-bar'],

	/**
		Is this instance of type 'toggle' or 'select'?
		@property	isFormType
		@type		Ember.ComputerProperty|Boolean
	*/
	isFormType: function () {
		return ['select', 'toggle'].indexOf(
			this.get('type')
		) >= 0;
	}.property('type'),

	/**
		View class that should be used for each item
		@property	buttonBarItemClass
		@type		Ember.ComputerProperty|Ember.View
	*/
	itemViewClass: function () {
		return this.get('isFormType') ? formItemView : defaultItemView;
	}.property('type'),

	/**
		Type for the input of selectable or toggleable button bars.
		A type of `select` returns `radio`, and `toggle` returns
		`checkbox`. Otherwise `hidden` is returned.
		@property	inputType
		@type		Ember.ComputerProperty|Str9jg
	*/
	inputType: function () {
		var type = this.get('type');
		return type === 'select' ? 'radio' : (
			type === 'toggle' ? 'checkbox' : 'hidden'
		);
	}.property('type')

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
