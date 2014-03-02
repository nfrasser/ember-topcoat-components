Ember.View.reopen({

  /**
    The default element to scroll up/down to when the `scrollTo` event is fired
    @property  scrollToElement
    @type    Element|String
    @default  null
  */
  scrollToElement: null,

  /**
    jQuery object for the scrollToElement property
    @property  $scrollToElement
    @type    Ember.ComputedProperty|jQuery
  */
  $scrollToElement: function () {
    return Em.$(this.get('scrollToElement'));
  }.property('scrollToElement'),

  /**
    Scroll the given element in this view's viewport
    @method  scrollTo
    @param  Element|String element The element in the viewport to scroll over to
  */
  scrollTo: function (element) {

    /*
      Scroll to the given element, which defaults to the view's
      scrollTo property
    */
    var $scrollTo = element ? Em.$(element) : this.get('$scrollToElement'),
      $viewport,
      scrollHeight;

    if ($scrollTo.length === 1) {

      // A single item to scroll to exists.
      $viewport = Em.$('body,html');

      var viewportScrollTop = $viewport.scrollTop() || 0,
        viewportOffset = ($viewport.offset() || {}).top || 0,
        scrollToOffset = ($scrollTo.offset() || {}).top || 0;

      // This is the element's position within the element
      scrollHeight = viewportScrollTop + scrollToOffset - viewportOffset;

      // Perform the scroll animation
      $viewport.animate({
        scrollTop: scrollHeight
      }, 300, function () {
        $scrollTo.focus();
      });

    }
  }

});
