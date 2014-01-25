/**
	@module ember-topcoat
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

var FormItemView = Ember.SelectOption.extend(ButtonBarItemViewMixin, {

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
		this.$('input').prop('checked', this.get('selected'));
	}.on('willInsertElement')

});

/**
	The options for the button bar are based on the [mobile button bar
	example](http://codepen.io/Topcoat/pen/kdKyg). Use `type="select"`
	for radio buttons or `type="toggle"` for checkboxes.

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
		this group of checkboxes or radio buttons
		@property name
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
	}.property('component.type'),


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
	@class    TopcoatButtonBarButtonComponent
	@extends  TC.TopcoatButtonComponent
	@namepsace  TC
*/
TC.TopcoatButtonBarButtonComponent = TC.TopcoatButtonComponent.extend({

	/**
		TODO: Update to a regular button when Topcoat updates
		@property _prefix
		@protected
	*/
	_prefix: 'topcoat-button-bar__button',

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

	click: function () {
		if (this.get('parentView._actions.check')){
			this.get('parentView').send('check');
		}
	}

});
