/**
	@module ember-topcoat
	@submodule components
*/
/**
	By default the checkbox is wrapped in a label tag (see
	[example](http://topcoat.io/topcoat/#checkbox)) and this
	property will be used as the label

	For example `{{topcoat-checkbox label="Please check me"}}`

	Results in the following HTML

		<label class="topcoat-checkbox">
			<input type="checkbox">
			<div class="topcoat-checkbox__checkmark"></div>
			Please check me
		</label>

	@class		TopcoatCheckboxComponent
	@extends	TC.TopcoatComponent
	@namespace	TC
*/
TC.TopcoatCheckboxComponent = TC.TopcoatComponent.extend({

	/**
		@property	tagName
		@default	'label'
	*/
	tagName: 'label',

	/**
		@property	topcoatClass
	*/
	topcoatClass: 'topcoat-checkbox',

	/**
		Label for this checkbox
		@property	label
		@type		String
		@default	null
	*/
	label: null,

	/**
		Should this checkbox be disabled?
		@property	disabled
		@type		Boolean
		@default	false
	*/
	disabled: false,


	/**
		Name of the checkbox
		@property	name
		@type		String
		@default	null
	*/
	name: null,

	/**
		Value for the checkbox
		@property	value
		@type		String
		@default	null
	*/
	value: null

});
