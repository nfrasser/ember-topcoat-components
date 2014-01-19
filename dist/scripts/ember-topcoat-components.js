/**
 *  ember-topcoat-components v0.0.0
 *  A collection of Ember Components for Adobe's Topcoat CSS framework
 *  https://github.com/nfrasser/ember-topcoat-components
 *  Made by Nick Frasser <nfrasser@gmail.com>
 */
Em.TEMPLATES["components/topcoat-checkbox"] = Ember.Handlebars.template(function(a, b, c, d, e) {
    this.compilerInfo = [ 4, ">= 1.0.0" ], c = this.merge(c, Ember.Handlebars.helpers), 
    e = e || {};
    var f, g, h, i = "", j = c.helperMissing, k = this.escapeExpression;
    return e.buffer.push(k((g = c.input || b && b.input, h = {
        hash: {
            type: "checkbox",
            checked: "checked"
        },
        hashTypes: {
            type: "STRING",
            checked: "ID"
        },
        hashContexts: {
            type: b,
            checked: b
        },
        contexts: [],
        types: [],
        data: e
    }, g ? g.call(b, h) : j.call(b, "input", h)))), e.buffer.push('\n<div class="topcoat-checkbox__checkmark"></div>\n'), 
    f = c._triageMustache.call(b, "label", {
        hash: {},
        hashTypes: {},
        hashContexts: {},
        contexts: [ b ],
        types: [ "ID" ],
        data: e
    }), (f || 0 === f) && e.buffer.push(f), e.buffer.push("\n"), i;
}), function() {
    window.TC = Ember.Namespace.create();
}(), function() {
    TC.Component = Ember.Component.extend({
        classNameBindings: [ "topcoatClass" ],
        topcoatClass: "topcoat"
    });
}(), function() {
    TC.ButtonComponent = TC.Component.extend({
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