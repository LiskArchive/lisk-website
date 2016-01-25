var fs = require('fs'),
	path = require('path'),
	marked = require('marked'),
	_ = require('lodash');

marked.setOptions({
	renderer: new marked.Renderer(),
	gfm: true,
	tables: true,
	breaks: false,
	pedantic: false,
	sanitize: true,
	smartLists: true,
	smartypants: false,
	langPrefix: 'language-'
});

var menu = [
	{
		name: "Welcome",
		url: "/documentation?i=README"
	},
	{
		name: "Decentralized Applications",
		url: "#",
		subitems: [
			{
				name: "Environment Setup",
				i: "EnvironmentSetup"
			},
			{
				name: "Creating a Basic Dapp",
				i: "BasicDapp"
			},
			{
				name: "Creating a Messaging Dapp",
				i: "MessagingDapp"
			},
			{
				name: "Creating a Reddit Dapp",
				i: "RedditDapp"
			},
			{
				name: "User Interface",
				i: "UserInterface"
			},
			{
				name: "Dapp SDK Introduction",
				i: "DappSDK"
			},
			{
				name: "Sidechain Overview",
				i: "Sidechain"
			},
			{
				name: "Debugging Dapps",
				i: "DebuggingDapps"
			}
		]
	},
	{
		name: "Lisk Dapps API",
		url: "http://dapps-api.lisk.io"
	},
	{
		name: "Lisk API",
		url: "http://api.lisk.io"
	}
];

var docs = [
	{
		title: "Welcome!",
		i: "README",
		next: "EnvironmentSetup"
	},
	{
		title: "Environment Setup",
		i: "EnvironmentSetup",
		next: "BasicDapp"
	},
	{
		title: "Creating a Basic Dapp",
		i: "BasicDapp",
		next: "MessagingDapp"
	},
	{
		title: "Creating a Messaging Dapp",
		i: "MessagingDapp",
		next: "RedditDapp"
	},
	{
		title: "Creating a Reddit Dapp",
		i: "RedditDapp",
		next: "UserInterface"
	},
	{
		title: "User Interface",
		i: "UserInterface",
		next: "DappSDK"
	},
	{
		title: "Dapp SDK Introduction",
		i: "DappSDK",
		next: "Sidechain"
	},
	{
		title: "Sidechain Overview",
		i: "Sidechain",
		next: "DebuggingDapps"
	},
	{
		title: "Debugging Dapps",
		i: "DebuggingDapps"
	}
]


module.exports = function (app) {
	app.get("/documentation", function (req, res) {
		var i = req.query.i || "welcome";

		function finish(doc) {
			if (doc) {
				doc.content = marked(doc.content);

				return res.render("documentation", {
					pageId: "documentation",
					title: doc.title,
					description: "Lisk DApps Documentation",
					words: "lisk, crypti, documentation, doc, docs, guides, tutorial, dapp, dapps, decentralized application, dapp store, crypto, currency, cryptocurrency, smart contracts, smart contract, decentralized applications, wallet, blockchain",
					menu: menu,
					hasScript: true,
					isDoc: true,
					doc: doc
				});
			} else {
				return res.render("documentation", {
					pageId: "documentation",
					title: "Documentation - Not Found",
					description: "Lisk DApps Documentation",
					words: "lisk, crypti, documentation, doc, docs, guides, tutorial, dapp, dapps, decentralized application, dapp store, crypto, currency, cryptocurrency, smart contracts, smart contract, decentralized applications, wallet, blockchain",
					menu: menu,
					hasScript: true,
					isDoc: true
				});
			}
		}

		var doc = _.find(docs, function (item) {
			return item.i == i;
		});

		if (!doc) {
			return finish();
		} else {
			if (doc.next) {
				var next = _.find(docs, function (item) {
					return item.i == doc.next;
				});
				if (next) {
					doc.next = next;
				}
			}

			fs.readFile(path.join('./', 'docs', doc.i + ".md"), 'utf8', function (err, data) {
				if (err) {
					console.log(err);
					finish();
				} else {
					finish({
						title: doc.title,
						content: data,
						next: doc.next
					})
				}
			});
		}
	});
}
