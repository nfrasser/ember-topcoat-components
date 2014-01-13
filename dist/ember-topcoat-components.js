/**
 *  ember-topcoat-components v0.0.0
 *  A collection of Ember Components for Adobe's Topcoat CSS framework
 *  https://github.com/nfrasser/ember-topcoat-components
 *  Made by Nick Frasser <nfrasser@gmail.com>
 */
Ember.TEMPLATES.application = Ember.Handlebars.template(function(a, b, c, d, e) {
    function f(a, b) {
        var d, e = "";
        return b.buffer.push(' <li class="list-group-item">'), d = c._triageMustache.call(a, "item", {
            hash: {},
            hashTypes: {},
            hashContexts: {},
            contexts: [ a ],
            types: [ "ID" ],
            data: b
        }), (d || 0 === d) && b.buffer.push(d), b.buffer.push("</li> "), e;
    }
    this.compilerInfo = [ 4, ">= 1.0.0" ], c = this.merge(c, Ember.Handlebars.helpers), 
    e = e || {};
    var g, h = "", i = this;
    return e.buffer.push('<div> <nav class="navbar navbar-default navbar-fixed-top" role="navigation"> <div class="navbar-header"> <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse"> <span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button> <a class="navbar-brand" href="#">Your App</a> </div> <div class="collapse navbar-collapse navbar-ex1-collapse"> </div> </nav> <div class="container" id="main"> <div class="row"> <div> <div class="col-md-3"> <div class="well sidebar-nav"> <strong>Colors</strong> <ul class="list-group"> '), 
    g = c.each.call(b, "item", "in", "controller", {
        hash: {},
        hashTypes: {},
        hashContexts: {},
        inverse: i.noop,
        fn: i.program(1, f, e),
        contexts: [ b, b, b ],
        types: [ "ID", "ID", "ID" ],
        data: e
    }), (g || 0 === g) && e.buffer.push(g), e.buffer.push(' </ul> </div> </div> <div class="col-md-9"> '), 
    g = c._triageMustache.call(b, "outlet", {
        hash: {},
        hashTypes: {},
        hashContexts: {},
        contexts: [ b ],
        types: [ "ID" ],
        data: e
    }), (g || 0 === g) && e.buffer.push(g), e.buffer.push(" </div> </div> </div> </div> </div> "), 
    h;
}), Ember.TEMPLATES.index = Ember.Handlebars.template(function(a, b, c, d, e) {
    this.compilerInfo = [ 4, ">= 1.0.0" ], c = this.merge(c, Ember.Handlebars.helpers), 
    e = e || {}, e.buffer.push('<div class="well"> Welcome to Yeoman and Ember.js! </div> ');
}), function() {
    window.TC = Ember.Namespace.create();
}(), function() {
    TC.Component = Ember.Component.extend({
        classNameBindings: [ "topcoatClass" ],
        topcoatClass: "topcoat"
    });
}(), function() {
    TC.TopcoatButtonComponent = TC.Component.extend({
        tagName: "button",
        attributeBindings: [ "disabled" ],
        topcoatClass: function() {
            var a = [ this.get("_prefix") ], b = this.get("type");
            return this.get("large") && a.push("large"), b ? a.push(b) : this.get("cta") ? a.push("cta") : this.get("quiet") && a.push("quiet"), 
            a.join("--");
        }.property("large", "quiet", "cta", "type"),
        disabled: !1,
        large: !1,
        quiet: !1,
        cta: !1,
        type: null,
        _prefix: "topcoat-button"
    });
}();