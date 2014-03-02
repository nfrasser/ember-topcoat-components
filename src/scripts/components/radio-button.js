/**
  @module ember-topcoat
  @submodule components
*/

/**
  Basic Topcoat radio button. See `TopcoatCheckboxComponent`.
  @class TopcoatRadioButtonComponent
  @extends TC.TopcoatCheckboxComponent
  @namespace TC
*/
TC.TopcoatRadioButtonComponent = TC.TopcoatCheckboxComponent.extend({

  topcoatClass: 'topcoat-radio-button',
  label: Em.computed.alias('rightLabel'),

  /**
    Label that appears on the left side of the button
    @property leftLabel
    @type String
    @default null
  */
  leftLabel: null,

  /**
    Label that appears on the right side of the button. The default
    label proxies to the right label.
    @property rightLabel
    @type String
    @default null
  */
  rightLabel: null

});
