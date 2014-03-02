/**
  @module ember-topcoat-components
*/
/**
  Basic Topcoat button
  @class TopcoatButtonComponent
  @extends TC.Component
  @namespace TC
*/
TC.TopcoatButtonComponent = TC.TopcoatComponent.extend({

  /**
    @property tagName
    @type String
    @default 'button'
  */
  tagName: 'button',

  attributeBindings: [
    'type',
    'disabled',
    'href'
  ],

  /**
    The button's class, based on the 'large','quiet, 'cta', and 'type'
    properties.
    @property topcoatClass
    @type Ember.ComputedProperty|String
    @default 'topcoat-button'
  */
  topcoatClass: function () {
    var classArray = [this.get('_prefix')],
      format = this.get('format');

    if (this.get('_hasLarge') && this.get('large')) {
      classArray.push('large');
    }

    if (format) {
      classArray.push(format);
    } else if (this.get('_hasCta') && this.get('cta')) {
      classArray.push('cta');
    } else if (this.get('_hasQuiet') && this.get('quiet')) {
      classArray.push('quiet');
    }

    return classArray.join('--');

  }.property('large', 'quiet', 'cta', 'type'),

  click: function() {
    var action = this.get('action'),
      param = this.get('param');
    if (action) {
      this.get('targetObject').send(this.get('action'), param);
    }
  },

  /**
    Type attribute for this button
    @property type
    @type String
    @default 'button'
  */
  type: 'button',


  /**
    Should the button be disabled?
  */
  disabled: false,

  /**
    Should this be a large button?
    @property large
    @type Boolean
    @default false
  */
  large: false,

  /**
    Should this be a quiet button?
    @property quiet
    @type Boolean
    @default false
  */
  quiet: false,

  /**
    Should this be a call-to-action button?
    @property cta
    @type Boolean
    @default false
  */
  cta: false,

  /**
    The button `type` could be either `"cta"` or `"quiet"`. If set,
    overrides the `quiet` and `cta` properties.
    @property type
    @type String
    @default null
  */
  format: null,


  /**
    Prefix used for the `topcoatClass`
    @property _prefix
    @protected
    @type String
    @default 'topcoat-button'
  */
  _prefix: 'topcoat-button',

  /**
    Can this button be a call to action button?
    @property _hasCta
    @protected
    @type Boolean
    @default true
  */
  _hasCta: true,

  /**
    Can this button be a quiet button?
    @property _hasQuiet
    @protected
    @type Boolean
    @default true
  */
  _hasQuiet: true,

  /**
    Can this button be a Large button?
    @property _hasLarge
    @protected
    @type Boolean
    @default true
  */
  _hasLarge: true

});
