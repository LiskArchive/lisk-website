In this tutorial we will briefly describe how to add a user interface to your dapp.

Within the root folder of your dapp is a **public** folder where the user interface (UI) of your dapp is located.

Crypti's dapp platform supports [Single-Page Applications](https://en.wikipedia.org/wiki/Single-page_application), where all necessary code - HTML, CSS and JavaScript, is retrieved as a single page load and then changed dynamically in-place from there on.

Some of the better known frameworks for developing such applications, supported by the Crypti platform, are:

* [AngularJS](https://angularjs.org/)
* [Ember.js](http://emberjs.com/)
* [React.js](https://facebook.github.io/react/)

As a result, when it comes to adding a user interface to your dapp, developers have a broad range of options.

Your choice of framework is often dependent on various factors, including an individual's personal taste and the given application requirements. Rather than provide a full tutorial, we will give an overview on how to integrate the Crypti API within any given framework.

## How to Start

Simply add an **index.html** file to the **public** folder located within the root folder of your dapp.

Then, assuming Crypti is launched, along with the backend portion of your dapp:

Open the following URL: [http://localhost:7040/dapps/[dappid]/](http://localhost:7040/dapps/<dappid>/) replacing **[dapp]** with your dapp's unique identifier.

This will open the **index.html** file we added to the **public** folder. This can include the HTML, CSS and JavaScript code, which serves as the user interface to your dapp.

Interacting with your dapp's API is then merely a case of pulling and pushing data back and forth between the frontend (UI) and your dapp's backend code running on the Crypti node's sandboxed virtual machine (VM).

If you are not familiar with developing Single-Page Applications, we strongly suggest you check out the following resources as valuable starting points:

* [AngularJS Tutorial](http://www.w3schools.com/angular/default.asp)
* [React.js - Getting Started](http://facebook.github.io/react/docs/getting-started.html)
* [Ember.js - Guides and Tutorials](http://guides.emberjs.com/v2.0.0/)

## Interacting with the API

As each individual framework has its own method of making Ajax based HTTP requests, we will simply detail how the base URL linking to your API's endpoint is called:

`/dapps/api/[dappid]/api/[endpoint]`

Where:

  * **[dappid]** - Is your dapp's unique identifier, e.g. **16595324874141671114**.
  * **[endpoint]** - Is the path to your API's endpoint, as described in **routes.json**, e.g. `messages/add`.

Given a URL containing our dapp's **[dappid]**, how do we detect it within the UI?

When constructing the URL to a given dapp's UI, it is done by using the following URL format:

**http://localhost:7040/dapps/[dappid]/**

So, in order to extract the **[dappid]** from this URL, for example, when using the [AngularJS](http://angularjs.org) framework, we would write a simple function to pull the identifier from the URL using Angular's `$location` service:

```js
// Returns your dapp's unique identifier
// as defined in the requested URL.
var detectDappID = function () {}
	var url = $location.absUrl();
	var parts = url.split('/');
	var dappId = parts[parts.indexOf('dapps') + 1];

	return dappId;
}

detectDappID(); // 16595324874141671114
```

## Using Less/Sass

To use [less](http://lesscss.org/) or [sass](http://sass-lang.com/) while developing any stylesheets for your dapp's UI, simply prepare a [Grunt](http://gruntjs.com/) task to compile them as you normally would. Then place compiled copies of said files in the **public** folder, and commit them to your repository.
