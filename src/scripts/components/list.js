/**
	@module ember-topcoat
	@submodule components
*/

/**
	A view you can use for the block version of the Topcoat list
	@class		TC.TopcoatListItemView
	@extends	TC.TopcoatView
	@namespace	TC
*/
TC.TopcoatListItemView = TC.TopcoatView.extend({
	tagName: 'li',
	topcoatClass: 'topcoat-list__item'
});

/**
	The collection view used to render list item content
	@class		TopcoatListView
	@extends	Ember.CollectionView
	@namespace	TC
*/
TC.TopcoatListView = Ember.CollectionView.extend({

	tagName: 'ul',
	classNames: ['topcoat-list__container'],
	itemLabelPathBinding: 'parentView.itemLabelPath',

	itemViewClass: TC.TopcoatListItemView.extend({

		templateName: 'views/topcoat-list-item',

		value: function () {
			var content = this.get('content'),
				itemLabelPath = this.get('itemLabelPath');
			this.set('_content', content);
			return content && itemLabelPath ?
				Em.get(content, itemLabelPath) :
				content;
		}.property('content', 'itemLabelPath'),

		itemLabelPathBinding: 'parentView.itemLabelPath'

	}),
});


Ember.Handlebars.helper('topcoat-list-item', TC.TopcoatListItemView);

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

	*/
	itemLabelPath: '',

	hasContent: Em.computed.gt('content.length', 0)

});
