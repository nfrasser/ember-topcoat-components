/**
 *  ember-topcoat-components 1.0.1
 *  A collection of Ember Components for Adobe's Topcoat CSS framework
 *  https://github.com/nfrasser/ember-topcoat-components
 *  Nick Frasser (@nfrasser)
 */
Ember.TEMPLATES["components/topcoat-button-bar-button"] = Ember.Handlebars.template(function(a, b, c, d, e) {
    this.compilerInfo = [ 4, ">= 1.0.0" ], c = this.merge(c, Ember.Handlebars.helpers), 
    e = e || {};
    var f;
    f = c._triageMustache.call(b, "label", {
        hash: {},
        hashTypes: {},
        hashContexts: {},
        contexts: [ b ],
        types: [ "ID" ],
        data: e
    }), e.buffer.push(f || 0 === f ? f : "");
}), Ember.TEMPLATES["components/topcoat-button-bar"] = Ember.Handlebars.template(function(a, b, c, d, e) {
    this.compilerInfo = [ 4, ">= 1.0.0" ], c = this.merge(c, Ember.Handlebars.helpers), 
    e = e || {};
    var f = "", g = this.escapeExpression;
    return e.buffer.push(g(c.view.call(b, "TC.TopcoatButtonBarView", {
        hash: {
            content: "content",
            component: "",
            selection: "selection",
            optionLabelPath: "optionLabelPath",
            optionValuePath: "optionValuePath"
        },
        hashTypes: {
            content: "ID",
            component: "ID",
            selection: "ID",
            optionLabelPath: "ID",
            optionValuePath: "ID"
        },
        hashContexts: {
            content: b,
            component: b,
            selection: b,
            optionLabelPath: b,
            optionValuePath: b
        },
        contexts: [ b ],
        types: [ "ID" ],
        data: e
    }))), e.buffer.push(" "), f;
}), Ember.TEMPLATES["components/topcoat-checkbox"] = Ember.Handlebars.template(function(a, b, c, d, e) {
    this.compilerInfo = [ 4, ">= 1.0.0" ], c = this.merge(c, Ember.Handlebars.helpers), 
    e = e || {};
    var f, g, h, i = "", j = c.helperMissing, k = this.escapeExpression;
    return e.buffer.push(k((g = c.input || b && b.input, h = {
        hash: {
            type: "checkbox",
            checked: "checked",
            name: "name",
            disabled: "disabled"
        },
        hashTypes: {
            type: "STRING",
            checked: "ID",
            name: "ID",
            disabled: "ID"
        },
        hashContexts: {
            type: b,
            checked: b,
            name: b,
            disabled: b
        },
        contexts: [],
        types: [],
        data: e
    }, g ? g.call(b, h) : j.call(b, "input", h)))), e.buffer.push(' <div class="topcoat-checkbox__checkmark"></div> '), 
    f = c._triageMustache.call(b, "label", {
        hash: {},
        hashTypes: {},
        hashContexts: {},
        contexts: [ b ],
        types: [ "ID" ],
        data: e
    }), (f || 0 === f) && e.buffer.push(f), e.buffer.push(" "), f = c._triageMustache.call(b, "yield", {
        hash: {},
        hashTypes: {},
        hashContexts: {},
        contexts: [ b ],
        types: [ "ID" ],
        data: e
    }), (f || 0 === f) && e.buffer.push(f), i;
}), Ember.TEMPLATES["components/topcoat-list"] = Ember.Handlebars.template(function(a, b, c, d, e) {
    function f(a, b) {
        var d = "";
        return b.buffer.push(" "), b.buffer.push(j(c.view.call(a, "TC.TopcoatListView", {
            hash: {
                content: "content",
                itemLabelPath: "itemLabelPath"
            },
            hashTypes: {
                content: "ID",
                itemLabelPath: "ID"
            },
            hashContexts: {
                content: a,
                itemLabelPath: a
            },
            contexts: [ a ],
            types: [ "ID" ],
            data: b
        }))), b.buffer.push(" "), d;
    }
    function g(a, b) {
        var d, e = "";
        return b.buffer.push(' <ul class="topcoat-list__container"> '), d = c._triageMustache.call(a, "yield", {
            hash: {},
            hashTypes: {},
            hashContexts: {},
            contexts: [ a ],
            types: [ "ID" ],
            data: b
        }), (d || 0 === d) && b.buffer.push(d), b.buffer.push(" </ul> "), e;
    }
    this.compilerInfo = [ 4, ">= 1.0.0" ], c = this.merge(c, Ember.Handlebars.helpers), 
    e = e || {};
    var h, i = "", j = this.escapeExpression, k = this;
    return e.buffer.push('<h3 class="topcoat-list__header">'), h = c._triageMustache.call(b, "header", {
        hash: {},
        hashTypes: {},
        hashContexts: {},
        contexts: [ b ],
        types: [ "ID" ],
        data: e
    }), (h || 0 === h) && e.buffer.push(h), e.buffer.push("</h3> "), h = c["if"].call(b, "hasContent", {
        hash: {},
        hashTypes: {},
        hashContexts: {},
        inverse: k.program(3, g, e),
        fn: k.program(1, f, e),
        contexts: [ b ],
        types: [ "ID" ],
        data: e
    }), (h || 0 === h) && e.buffer.push(h), e.buffer.push(" "), i;
}), Ember.TEMPLATES["components/topcoat-notification"] = Ember.Handlebars.template(function(a, b, c, d, e) {
    this.compilerInfo = [ 4, ">= 1.0.0" ], c = this.merge(c, Ember.Handlebars.helpers), 
    e = e || {};
    var f, g = "";
    return f = c._triageMustache.call(b, "content", {
        hash: {},
        hashTypes: {},
        hashContexts: {},
        contexts: [ b ],
        types: [ "ID" ],
        data: e
    }), (f || 0 === f) && e.buffer.push(f), e.buffer.push(" "), f = c._triageMustache.call(b, "yield", {
        hash: {},
        hashTypes: {},
        hashContexts: {},
        contexts: [ b ],
        types: [ "ID" ],
        data: e
    }), (f || 0 === f) && e.buffer.push(f), g;
}), Ember.TEMPLATES["components/topcoat-radio-button"] = Ember.Handlebars.template(function(a, b, c, d, e) {
    this.compilerInfo = [ 4, ">= 1.0.0" ], c = this.merge(c, Ember.Handlebars.helpers), 
    e = e || {};
    var f, g, h, i = "", j = c.helperMissing, k = this.escapeExpression;
    return f = c._triageMustache.call(b, "leftLabel", {
        hash: {},
        hashTypes: {},
        hashContexts: {},
        contexts: [ b ],
        types: [ "ID" ],
        data: e
    }), (f || 0 === f) && e.buffer.push(f), e.buffer.push(" "), e.buffer.push(k((g = c.input || b && b.input, 
    h = {
        hash: {
            type: "radio",
            checked: "checked",
            name: "name",
            disabled: "disabled",
            value: "value"
        },
        hashTypes: {
            type: "STRING",
            checked: "ID",
            name: "ID",
            disabled: "ID",
            value: "ID"
        },
        hashContexts: {
            type: b,
            checked: b,
            name: b,
            disabled: b,
            value: b
        },
        contexts: [],
        types: [],
        data: e
    }, g ? g.call(b, h) : j.call(b, "input", h)))), e.buffer.push(' <div class="topcoat-radio-button__checkmark"></div> '), 
    f = c._triageMustache.call(b, "rightLabel", {
        hash: {},
        hashTypes: {},
        hashContexts: {},
        contexts: [ b ],
        types: [ "ID" ],
        data: e
    }), (f || 0 === f) && e.buffer.push(f), e.buffer.push(" "), f = c._triageMustache.call(b, "yield", {
        hash: {},
        hashTypes: {},
        hashContexts: {},
        contexts: [ b ],
        types: [ "ID" ],
        data: e
    }), (f || 0 === f) && e.buffer.push(f), i;
}), Ember.TEMPLATES["components/topcoat-switch"] = Ember.Handlebars.template(function(a, b, c, d, e) {
    this.compilerInfo = [ 4, ">= 1.0.0" ], c = this.merge(c, Ember.Handlebars.helpers), 
    e = e || {};
    var f, g, h = "", i = c.helperMissing, j = this.escapeExpression;
    return e.buffer.push(j((f = c.input || b && b.input, g = {
        hash: {
            type: "checkbox",
            "class": "topcoat-switch__input",
            checked: "checked",
            name: "name",
            disabled: "disabled"
        },
        hashTypes: {
            type: "STRING",
            "class": "STRING",
            checked: "ID",
            name: "ID",
            disabled: "ID"
        },
        hashContexts: {
            type: b,
            "class": b,
            checked: b,
            name: b,
            disabled: b
        },
        contexts: [],
        types: [],
        data: e
    }, f ? f.call(b, g) : i.call(b, "input", g)))), e.buffer.push(' <div class="topcoat-switch__toggle"></div> '), 
    h;
}), Ember.TEMPLATES["views/topcoat-button-bar-item"] = Ember.Handlebars.template(function(a, b, c, d, e) {
    function f(a, b) {
        var d, e, f = "";
        return b.buffer.push(" "), b.buffer.push(l((d = c.input || a && a.input, e = {
            hash: {
                type: "view.inputType",
                checked: "view.selected",
                name: "view.component.name"
            },
            hashTypes: {
                type: "ID",
                checked: "ID",
                name: "ID"
            },
            hashContexts: {
                type: a,
                checked: a,
                name: a
            },
            contexts: [],
            types: [],
            data: b
        }, d ? d.call(a, e) : k.call(a, "input", e)))), b.buffer.push(" "), f;
    }
    this.compilerInfo = [ 4, ">= 1.0.0" ], c = this.merge(c, Ember.Handlebars.helpers), 
    e = e || {};
    var g, h, i, j = "", k = c.helperMissing, l = this.escapeExpression, m = this;
    return g = c.unbound.call(b, "if", "view.isFormType", {
        hash: {},
        hashTypes: {},
        hashContexts: {},
        inverse: m.noop,
        fn: m.program(1, f, e),
        contexts: [ b, b ],
        types: [ "ID", "ID" ],
        data: e
    }), (g || 0 === g) && e.buffer.push(g), e.buffer.push(" "), e.buffer.push(l((h = c["topcoat-button-bar-button"] || b && b["topcoat-button-bar-button"], 
    i = {
        hash: {
            barType: "view.component.barType",
            large: "view.component.large",
            label: "view.label"
        },
        hashTypes: {
            barType: "ID",
            large: "ID",
            label: "ID"
        },
        hashContexts: {
            barType: b,
            large: b,
            label: b
        },
        contexts: [],
        types: [],
        data: e
    }, h ? h.call(b, i) : k.call(b, "topcoat-button-bar-button", i)))), e.buffer.push(" "), 
    j;
}), Ember.TEMPLATES["views/topcoat-button-bar"] = Ember.Handlebars.template(function(a, b, c, d, e) {
    this.compilerInfo = [ 4, ">= 1.0.0" ], c = this.merge(c, Ember.Handlebars.helpers), 
    e = e || {};
    var f = this.escapeExpression;
    e.buffer.push(f(c.each.call(b, "view.content", {
        hash: {
            itemViewClass: "view.optionView"
        },
        hashTypes: {
            itemViewClass: "STRING"
        },
        hashContexts: {
            itemViewClass: b
        },
        contexts: [ b ],
        types: [ "ID" ],
        data: e
    })));
}), Ember.TEMPLATES["views/topcoat-list-item"] = Ember.Handlebars.template(function(a, b, c, d, e) {
    this.compilerInfo = [ 4, ">= 1.0.0" ], c = this.merge(c, Ember.Handlebars.helpers), 
    e = e || {};
    var f, g = "";
    return f = c._triageMustache.call(b, "view.value", {
        hash: {},
        hashTypes: {},
        hashContexts: {},
        contexts: [ b ],
        types: [ "ID" ],
        data: e
    }), (f || 0 === f) && e.buffer.push(f), e.buffer.push(" "), g;
}), function() {
    window.TC = Ember.Namespace.create({
        inject: function(a) {
            var b = a ? Em.isArray(a) ? a : [ a ] : Em.Application.NAMESPACES, c = {};
            for (var d in this) /^Topcoat.*Component$/.test(d) && (c[d] = this[d]);
            b.forEach(function(a) {
                a !== this && Em.Application.detect(Em.get(a, "constructor")) && Em.setProperties(a, c);
            }, this);
        }
    });
}(), function() {
    Em.Handlebars.helper("topcoat-input", function(a) {
        var b = a.hash.topcoatClass || [ "topcoat", a.hash.type || "text", "input" ].join("-"), c = {
            "class": b + (a.hash.large ? "--large" : "") + (a.hash["class"] ? " " + a.hash["class"] : "")
        };
        return Em.merge(a.hash, c), delete a.hash.topcoatClass, Em.Handlebars.helpers.input.call(this, a);
    });
}(), function() {
    Em.Handlebars.registerHelper("topcoat-text-input", function(a) {
        return a.hash.topcoatClass = "topcoat-text-input", a.hash.type = "text", Em.Handlebars.helpers["topcoat-input"].call(this, a);
    });
}(), function() {
    Em.Handlebars.registerHelper("topcoat-search-input", function(a) {
        return a.hash.topcoatClass = "topcoat-search-input", a.hash.type = "search", Em.Handlebars.helpers["topcoat-input"].call(this, a);
    });
}(), function() {
    Em.Handlebars.registerHelper("topcoat-range", function(a) {
        return a.hash.topcoatClass = "topcoat-range" + (a.hash.vertical ? "--vertical" : ""), 
        a.hash.type = "range", a.hash.large = !1, Em.Handlebars.helpers["topcoat-input"].call(this, a);
    });
}(), function() {
    Em.Handlebars.registerHelper("topcoat-textarea", function(a) {
        var b = "topcoat-textarea", c = {
            "class": b + (a.hash.large ? "--large" : "") + (a["class"] ? " " + a["class"] : "")
        };
        return Em.merge(a.hash, c), Em.Handlebars.helpers.textarea.call(this, a);
    });
}(), function() {
    TC.TopcoatView = Ember.View.extend({
        classNameBindings: [ "topcoatClass" ],
        topcoatClass: "topcoat-view"
    });
}(), function() {
    TC.TopcoatComponent = Ember.Component.extend({
        classNameBindings: [ "topcoatClass" ],
        topcoatClass: "topcoat-component"
    });
}(), function() {
    TC.TopcoatButtonComponent = TC.TopcoatComponent.extend({
        tagName: "button",
        attributeBindings: [ "type", "disabled", "href" ],
        topcoatClass: function() {
            var a = [ this.get("_prefix") ], b = this.get("format");
            return this.get("_hasLarge") && this.get("large") && a.push("large"), b ? a.push(b) : this.get("_hasCta") && this.get("cta") ? a.push("cta") : this.get("_hasQuiet") && this.get("quiet") && a.push("quiet"), 
            a.join("--");
        }.property("large", "quiet", "cta", "type"),
        click: function() {
            var a = this.get("action"), b = this.get("param");
            a && this.get("targetObject").send(this.get("action"), b);
        },
        type: "button",
        disabled: !1,
        large: !1,
        quiet: !1,
        cta: !1,
        format: null,
        _prefix: "topcoat-button",
        _hasCta: !0,
        _hasQuiet: !0,
        _hasLarge: !0
    });
}(), function() {
    TC.TopcoatIconButtonComponent = TC.TopcoatButtonComponent.extend({
        _prefix: "topcoat-icon-button",
        _hasCta: !1
    });
}(), function() {
    var a = Ember.Mixin.create({
        templateName: "views/topcoat-button-bar-item",
        classNameBindings: [ "className" ],
        componentBinding: "parentView.component",
        inputTypeBinding: "parentView.inputType",
        isFormTypeBinding: "parentView.isFormType",
        className: function() {
            return "topcoat-" + this.get("component.barType") + "__item";
        }.property("component.barType")
    }), b = Ember.SelectOption.extend(a, {
        tagName: "div",
        click: function() {
            return this.get("component").send("sendAction", this.get("content")), !0;
        }
    }), c = Ember.SelectOption.extend(a, {
        tagName: "label",
        actions: {
            check: function() {
                var a = this.$("input"), b = a.prop("checked"), c = this.get("parentView");
                return c.get("multiple") ? a.prop("checked", !b) : b || a.prop("checked", !0), this.get("parentView").trigger("change"), 
                !0;
            }
        },
        updateCheckbox: function() {
            this.get("selected") && this.one("didInsertElement", this, function() {
                this.send("check");
            });
        }.on("willInsertElement")
    });
    TC.TopcoatButtonBarButtonComponent = TC.TopcoatButtonComponent.extend({
        barType: "button-bar",
        _prefix: function() {
            return "topcoat-" + this.get("barType") + "__button";
        }.property("barType"),
        _hasCta: !1,
        _hasQuiet: !1,
        _isChrome: /Chrome/.test(navigator.userAgent),
        click: function() {
            this.get("_isChrome") && this.get("parentView._actions.check") && this.get("parentView").send("check");
        }
    }), TC.TopcoatButtonBarView = Ember.Select.extend({
        init: function() {
            this._super(), this.get("classNameBindings").push("className");
        },
        tagName: "div",
        defaultTemplate: null,
        templateName: "views/topcoat-button-bar",
        componentBinding: "parentView",
        contentBinding: "component.content",
        prompt: null,
        isFormType: function() {
            return [ "select", "toggle" ].indexOf(this.get("component.type")) >= 0;
        }.property("component.type"),
        multiple: Em.computed.equal("component.type", "toggle"),
        optionView: function() {
            return this.get("parentView").get(this.get("isFormType") ? "formItemView" : "defaultItemView");
        }.property("component.type"),
        inputType: function() {
            var a = this.get("component.type");
            return "select" === a ? "radio" : "toggle" === a ? "checkbox" : "hidden";
        }.property("component.type"),
        className: function() {
            return "topcoat-" + this.get("component.barType");
        }.property("component"),
        _changeSingle: function() {
            var a = function(a) {
                for (var b = 0; b < a.length; b++) if (a[b].checked) return b;
                return -1;
            }(this.$("input")), b = this.get("content"), c = this.get("prompt");
            if (b && Em.get(b, "length")) {
                if (c && 0 === a) return void this.set("selection", null);
                c && (a -= 1), this.set("selection", b.objectAt(a));
            }
        },
        _changeMultiple: function() {
            var a = this.$("input"), b = this.get("prompt"), c = b ? 1 : 0, d = this.get("content"), e = this.get("selection");
            if (d && a) {
                var f = [];
                a.each(function(a, b) {
                    b.checked && f.push(a - c);
                });
                var g = d.objectsAt(f);
                Em.isArray(e) ? Em.EnumerableUtils.replace(e, 0, Em.get(e, "length"), g) : this.set("selection", g);
            }
        }
    }), TC.TopcoatButtonBarComponent = TC.TopcoatComponent.extend({
        actions: {
            sendAction: function(a) {
                this.sendAction("action", a);
            }
        },
        content: null,
        type: null,
        barType: "button-bar",
        action: null,
        large: !1,
        name: Em.computed.defaultTo("elementId"),
        selection: null,
        value: Em.computed.alias("selection"),
        optionLabelPath: "content",
        optionValuePath: "content",
        defaultItemView: b,
        formItemView: c
    });
}(), function() {
    TC.TopcoatTabBarComponent = TC.TopcoatButtonBarComponent.extend({
        type: "select",
        barType: "tab-bar"
    }), Em.TEMPLATES["components/topcoat-tab-bar"] = Em.TEMPLATES["components/topcoat-button-bar"];
}(), function() {
    TC.TopcoatCheckboxComponent = TC.TopcoatComponent.extend({
        tagName: "label",
        topcoatClass: "topcoat-checkbox",
        label: null,
        disabled: !1,
        name: null,
        value: null
    });
}(), function() {
    TC.TopcoatRadioButtonComponent = TC.TopcoatCheckboxComponent.extend({
        topcoatClass: "topcoat-radio-button",
        label: Em.computed.alias("rightLabel"),
        leftLabel: null,
        rightLabel: null
    });
}(), function() {
    TC.TopcoatSwitchComponent = TC.TopcoatCheckboxComponent.extend({
        topcoatClass: "topcoat-switch"
    });
}(), function() {
    TC.TopcoatListItemView = TC.TopcoatView.extend({
        tagName: "li",
        topcoatClass: "topcoat-list__item"
    }), TC.TopcoatListView = Ember.CollectionView.extend({
        tagName: "ul",
        classNames: [ "topcoat-list__container" ],
        itemLabelPathBinding: "parentView.itemLabelPath",
        itemViewClass: TC.TopcoatListItemView.extend({
            templateName: "views/topcoat-list-item",
            value: function() {
                var a = this.get("content"), b = this.get("itemLabelPath");
                return this.set("_content", a), a && b ? Em.get(a, b) : a;
            }.property("content", "itemLabelPath"),
            itemLabelPathBinding: "parentView.itemLabelPath"
        })
    }), Ember.Handlebars.helper("topcoat-list-item", TC.TopcoatListItemView), TC.TopcoatListComponent = TC.TopcoatComponent.extend({
        topcoatClass: "topcoat-list",
        content: null,
        header: null,
        itemLabelPath: "",
        hasContent: Em.computed.gt("content.length", 0)
    });
}(), function() {
    TC.TopcoatNavigationBarComponent = TC.TopcoatComponent.extend({
        topcoatClass: "topcoat-navigation-bar"
    }), TC.TopcoatNavigationBarItemView = TC.TopcoatView.extend({
        classNames: [ "topcoat-navigation-bar__item" ]
    }), Ember.Handlebars.helper("topcoat-navigation-bar-item", TC.TopcoatNavigationBarItemView), 
    TC.TopcoatNavigationBarTitleComponent = TC.TopcoatComponent.extend({
        tagName: "h1",
        topcoatClass: "topcoat-navigation-bar__title"
    });
}(), function() {
    TC.TopcoatNotificationComponent = TC.TopcoatComponent.extend({
        tagName: "span",
        topcoatClass: "topcoat-notification",
        content: null
    });
}();