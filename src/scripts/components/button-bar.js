/**
	@module ember-topcoat
	@submodule components
*/

var ButtonBarItemViewMixin = Ember.Mixin.create({

	templateName: 'views/topcoat-button-bar-item',
	classNameBindings: ['className'],

	componentBinding: 'parentView.component',
	inputTypeBinding: 'parentView.inputType',
	isFormTypeBinding: 'parentView.isFormType',

	className: function () {
		return 'topcoat-' + this.get('component.barType') + '__item';
	}.property('component.barType'),

});

var ButtonBarDefaultItemView = Ember.SelectOption.extend(ButtonBarItemViewMixin, {

	tagName: 'div',

	/**
		Send the `sendAction` event to this view's target object,
		along with the name of the selected item

		@event	click
	*/
	click: function () {
		this.get('component').send(
			'sendAction',
			this.get('content')
		);
		return true;
	}
});

var ButtonBarFormItemView = Ember.SelectOption.extend(ButtonBarItemViewMixin, {

	tagName: 'label',

	actions: {
		/**
			Trigger the selected content to update itself
			@event update
		*/
		check: function () {
			var $input = this.$('input'),
				checked = $input.prop('checked');
			$input.prop('checked', !checked);
			this.get('parentView').trigger('change');
			return true;
		}
	},

	/**
		Check or uncheck the checkbox before it's inserted to avoid
		content selection complications.
		@method	updateCheckbox
	*/
	updateCheckbox: function () {
		if (this.get('selected')) {
			this.one('didInsertElement', this, function () {
				this.send('check');
			});
		}
	}.on('willInsertElement')

});


/**
	@class    TopcoatButtonBarButtonComponent
	@extends  TC.TopcoatButtonComponent
	@namepsace  TC
*/
TC.TopcoatButtonBarButtonComponent = TC.TopcoatButtonComponent.extend({

	barType: 'button-bar',

	/**
		TODO: Update to a regular button when Topcoat updates
		@property _prefix
		@protected
	*/
	_prefix: function () {
		return 'topcoat-' + this.get('barType') + '__button';
	}.property('barType'),

	/**
		The button bar cannot be a call to action button
		@property _hasCta
		@protected
	*/
	_hasCta: false,

	/**
		The button bar cannot be a call to action button
		@property _hasQuiet
		@protected
	*/
	_hasQuiet: false,

	/**
		Quick check for whether chrome is the current browser
		@property	_isChrome
		@protected
	*/
	_isChrome: /Chrome/.test(navigator.userAgent),

	click: function () {
		if (
			this.get('_isChrome') &&
			this.get('parentView._actions.check')
		) {
			/*
				There seems to be a bug in Chrome (that could be more like
				a bug with all the other browsers). The checkbox is
				overlayed on the button at the top left corner and doesn't
				cover its full width. That means that clicking the wrong
				place (the button instead of the checkbox) won't toggle
				the checkbox.
			*/
			this.get('parentView').send('check');
		}
	}

});

TC.TopcoatButtonBarView = Ember.Select.extend({

	init: function () {
		this._super();
		this.get('classNameBindings').push('className');
	},

	tagName: 'div',
	defaultTemplate: null,
	templateName: 'views/topcoat-button-bar',

	componentBinding: 'parentView',
	contentBinding: 'component.content',

	prompt: null,

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
		@type		Ember.ComputedProperty|Ember.View
	*/
	optionView: function () {
		return this.get('parentView').get(
			this.get('isFormType') ? 'formItemView' : 'defaultItemView'
		);
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
	}.property('component.type'),


	className: function () {
		return 'topcoat-' + this.get('component.barType');
	}.property('component'),

	// Adapted from Ember.Select
	// https://github.com/emberjs/ember.js/blob/v1.3.0/packages/ember-handlebars/lib/controls/select.js#L530-L563

	_changeSingle: function() {

		// CHANGED FROM <option>
		var selectedIndex = (function (elements) {

				for (var i = 0; i < elements.length; i++) {
					if (elements[i].checked) {
						return i;
					}
				}

				return -1;

			}) (this.$('input')),

			content = this.get('content'),
			prompt = this.get('prompt');

		if (!content || !Em.get(content, 'length')) { return; }
		if (prompt && selectedIndex === 0) {
			this.set('selection', null); return;
		}

		if (prompt) { selectedIndex -= 1; }
		this.set('selection', content.objectAt(selectedIndex));
	},
	_changeMultiple: function() {

		// CHANGED FROM <option>
		var options = this.$('input'),
			prompt = this.get('prompt'),
			offset = prompt ? 1 : 0,
			content = this.get('content'),
			selection = this.get('selection');

		if (!content) { return; }
		if (options) {

			// CHANGED THE WAY THIS WORKS
			var selectedIndexes = [];
			options.each(function (index, option) {
				if (option.checked) {
					selectedIndexes.push(index - offset);
				}
			});

			var newSelection = content.objectsAt(selectedIndexes);

			if (Em.isArray(selection)) {
				Em.EnumerableUtils.replace(selection, 0, Em.get(selection, 'length'), newSelection);
			} else {
				this.set('selection', newSelection);
			}
		}
	},

});

/**
	The options for the button bar are based on the [mobile button bar
	example](http://codepen.io/Topcoat/pen/kdKyg). Use `type="select"`
	for radio buttons or `type="toggle"` for checkboxes.

	The API for this component is based on that of [`Ember.Select`]
	(http://emberjs.com/api/classes/Ember.Select.html).

	Check out the `type` property for how the two types work

	@class		TopcoatButtonBarComponent
	@extends	TC.TopcoatComponent
	@namespace	TC
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
			this.sendAction('action', selected);
		}
	},

	/**
		Represents the content for which buttons will be created
		@property content
		@type		Ember.Enumerable
		@default	null
	*/
	content: null,

	/**
		By default the button bar displays plain old buttons that can be
		bound to an action from the context of the template where this
		component is being rendered. There are two additional types that
		alter the behaviour of the button bar: 'select' and 'toggle'.

		### `type="select"`

		Buttons behave like radio buttons. The value of the clicked button
		is bound to the given `selection` property. Clicking on a button
		will deselect all other buttons in the group and select only the
		clicked one.

		### `type="toggle"`

		Buttons behave like checkboxes. The values for any buttons that
		are clicked and marked as `active` will be added to the
		`selection` array. Buttons that are deselected will be removed
		from the array.

		The template actually renders the checkboxes and radio buttons
		for these buttons, and checks them off accordingly, so the button
		group can in fact be used as a regular checkbox or radio group.

		@property	type
		@type		String
		@default	null
	*/
	type: null,

	/**
		What kind of button should be used for the button bar buttons?
		@property	barType
		@type		String
		@defaut		'button'
	*/
	barType: 'button-bar',

	/**
		Used for when there is no type, this action will be called on the
		current context whenever the buttons for the given content are
		selected.

	*/
	action: null,

	/**
		Should this be a large button bar?
		@property large
		@type		Boolean
		@default	false
	*/
	large: false,

	/**
		When using type "toggle" or "select", used to specify the name of
		this group of checkboxes or radio buttons. Defaults to this
		element's ID.

		@property name
		@type		Ember.ComputedProperty|String
		@default	null
	*/
	name: Em.computed.defaultTo('elementId'),

	/**
		Item or items in the content that are selected
		@property	selection
		@type		String|Array
		@defaut		null
	*/
	selection: null,

	/**
		Alias for `selection`
		@property	value
		@type		Ember.ComputerProperty
		@default	null
	*/
	value: Em.computed.alias('selection'),

	optionLabelPath: 'content',

	optionValuePath: 'content',

	/**
		Default view class that should be used for each item in the tab
		bar. Generally should not be changed outside of this plugin.
		@property	defaultItemView
		@type		Class
	*/
	defaultItemView: ButtonBarDefaultItemView,

	/**
		Class that should be used for each item, used when
	*/
	formItemView: ButtonBarFormItemView,

	topcoatClass: function () {
		return 'topcoat-' + this.get('barType') + '--container';
	}.property('barType')

});
