/**
	@module ember-topcoat
	@submodule components
*/

TC.TopcoatListItem = Ember.View.extend({
	tagName: 'li',
	classNames: ['topcoat-list__item'],
	hasLayoutBinding: 'parentView.hasLayout'
});

/**
	To Topcoat list can be used in either block or inline form.
	Given that `items = ['one', 'two', 'three']`, here's inline:

		{{topcoat-list header="My list" content=items}}

	And here's block:

		{{#topcoat-list header="My list"}}
			{{#each items itemViewClass="TC.TopcoatListItem"}}
				{{this}}
			{{/each}}
		{{/topcoat}}

	Both would result in the following HTML:

		<div class="topcoat-list">
			<h3 class="topcoat-list__header">My list</h3>
			<ul class="topcoat-list__container">
				<li class="topcoat-list__item">
					One
				</li>
				<li class="topcoat-list__item">
					Two
				</li>
				<li class="topcoat-list__item">
					Three
				</li>
			</ul>
		</div>

	@class		TopcoatListComponent
	@extends	TC.Component
	@namespace	TC
*/
TC.TopcoatListComponent = TC.TopcoatComponent.extend({

	topcoatClass: 'topcoat-list',

	/**
		List contents
		@property	content
		@type		Ember.Enumerable|Array
		@default	null
	*/
	content: null,

	/**
		List header
		@property	header
		@type		String
		@default	null
	*/
	header: null,

	/**
		View class that should be used for each list item
		@property	listItemViewClass
	*/
	listItemViewClass: TC.TopcoatListItem,

	/**
		Does this component instance have a layout? That is, is it being
		used in block form rather than inline?
		@property	hasLayout
		@type		Ember.ComputedProperty|Boolean
	*/
	hasLayout: Em.computed.notEmpty('layout')

});
