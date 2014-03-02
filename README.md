Topcoat Components <small>for Ember.js</small>
[![Node Dependencies](https://david-dm.org/nfrasser/ember-topcoat-components/dev-status.png)](https://david-dm.org/nfrasser/ember-topcoat-components/#info=devDependencies)
========================

Use these components for your [Ember.js](http://emberjs.com) JavaScript project
that uses Adobe's [Topcoat](http://topcoat.io/) CSS framework.

**Download**

* [Minified](https://github.com/nfrasser/ember-topcoat-components/blob/master/dist/scripts/ember-topcoat-components.min.js)
* [Source](https://github.com/nfrasser/ember-topcoat-components/blob/master/dist/scripts/ember-topcoat-components.js)

## Demo and Examples

[View the demo](http://nfrasser.github.io/ember-topcoat-components/)

## Available Components

* [Button](http://nfrasser.github.io/ember-topcoat-components/#/button)
* [Button Bar](http://nfrasser.github.io/ember-topcoat-components/#/button-bar)
* [Checkbox](http://nfrasser.github.io/ember-topcoat-components/#/checkbox)
* [Radio Button](http://nfrasser.github.io/ember-topcoat-components/#/radio-button)
* [List](http://nfrasser.github.io/ember-topcoat-components/#/list)
* [Navigation Bar](http://nfrasser.github.io/ember-topcoat-components/#/navigation)
* [Notification](http://nfrasser.github.io/ember-topcoat-components/#/notification)
* [Range](http://nfrasser.github.io/ember-topcoat-components/#/range)
* [Switch](http://nfrasser.github.io/ember-topcoat-components/#/switch)
* [Tab Bar](http://nfrasser.github.io/ember-topcoat-components/#/tab-bar)
* [Text Input](http://nfrasser.github.io/ember-topcoat-components/#/text-input)
* [Search Input](http://nfrasser.github.io/ember-topcoat-components/#/search-input)
* [Textarea](http://nfrasser.github.io/ember-topcoat-components/#/textarea)

## Getting Started

Download the source from above or add to your project via Bower:

```bash
bower install ember-topcoat-components --save
```

Then include it in in your HTML following the jQuery, Handlebars, and Ember:

```html
<!-- Frameworks -->
<script src="scripts/jquery.js"></script>
<script src="scripts/handlebars.js"></script>
<script src="scripts/ember.js"></script>

<!-- Components and other plugins -->
<script src="scripts/ember-topcoat-components.js"></script>

<!-- Your Ember App -->
<script src="scripts/app.js"></script>
```

You will now have access to the components within the `TC` Ember namespace.
Before you can use these in your templates, you have to inject them into your
app's scope. Quickly do this with the provided `TC.inject()` function:

```js
// app.js
var App = Ember.Application.create();

// Define controllers, views, etc.
// ...

// Components
TC.inject(App);

// ...

App.Router.map(function () {
  // ...
});
```

## Contributing

### Prerequisites

* [Node.js](http://nodejs.org/)
* [Bower](http://bower.io/) and [Grunt](http://gruntjs.com/)
* [Compass](http://compass-style.org/)

Once you have Node set up, you can install Bower and Grunt through the terminal:

```bash
npm install bower -g
npm install grunt-cli -g
```

Then install the Compass Ruby gem:

```bash
gem install compass
```

Finally, clone this repo to your computer, navigate to the root folder, and
install the project dependencies:

```bash
git clone https://github.com/nfrasser/ember-topcoat-components.git
cd ember-topcoat-components
npm install
bower install
```

### Development Tasks

This project uses [Grunt](http://gruntjs.com/) for building code and running
automated unit tests. Run a task from the terminal using `grunt <taskName>` To
view all availiable tasks, run `grunt --help`. Here are tasks you'll use most
often:

* `test` - Run the complete test suite with QUnit and Phantom.js
* `build` - Compile source code and the demo site
* `publish` - Publish the demo and documentation to GitHub pages
* `default` - JSHint, test, and build

### License

MIT

