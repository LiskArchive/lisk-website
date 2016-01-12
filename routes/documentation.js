var fs = require('fs'),
	path = require('path'),
	markdown = require( "markdown" ).markdown,
	_ = require('lodash');

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
				name: "User Interface",
				i: "UserInterface"
			},
			{
				name: "Dapp Toolkit Introduction",
				i: "DappToolkit"
			},
			{
				name: "Sidechain Overview",
				i: "Sidechain"
			}
		]
	},
	{
		name: "Dapp API",
		url: "http://docs.crypti.me"
	},
	{
		name: "Crypti API",
		url: "http://docs.crypti.apiary.io"
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
		next: "UserInterface"
	},
	{
		title: "User Interface",
		i: "UserInterface",
		next: "DappToolkit"
	},
	{
		title: "Dapp Toolkit Introduction",
		i: "DappToolkit",
		next: "Sidechain"
	},
	{
		title: "Sidechain Overview",
		i: "Sidechain",
	}
]


module.exports = function (app) {
	app.get("/documentation", function (req, res) {
		var i = req.query.i || "welcome";

		function finish(doc) {
			if (doc) {
				doc.content = markdown.toHTML(doc.content);

				return res.render("documentation", {
					title: doc.title,
					description: "Crypti DApps Documentation",
					words: "crypti, documentation, doc, docs, guides, tutorial, dapp, dapps, decentralized application, dapp store, crypto, currency, cryptocurrency, smart contracts, smart contract, decentralized applications, wallet, blockchain",
					menu: menu,
					isDoc: true,
					doc: doc
				});
			} else {
				return res.render("documentation", {
					title: "Documentation",
					description: "Crypti DApps Documentation",
					words: "crypti, documentation, doc, docs, guides, tutorial, dapp, dapps, decentralized application, dapp store, crypto, currency, cryptocurrency, smart contracts, smart contract, decentralized applications, wallet, blockchain",
					menu: menu,
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

				doc.next = next;
			}

			fs.readFile(path.join('./', 'docs/', doc.i + ".md"), 'utf8', function (err, data) {
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
