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
		name: "Welcome to Lisk",
		url: "/documentation?i=lisk-docs/README",
		subitems: [
			{
				name: "Installing Lisk (using Binaries)",
				i: "lisk-docs/BinaryInstall"
			},
			{
				name: "Installing Lisk (using Docker)",
				i: "lisk-docs/DockerInstall"
			},
			{
				name: "Installing Lisk (from Source)",
				i: "lisk-docs/SourceInstall"
			}
		]
	},
	{
		name: "Developing Dapps",
		url: "/documentation?i=lisk-dapps-docs/README",
		subitems: [
			{
				name: "Setting up an Environment",
				i: "lisk-dapps-docs/EnvironmentSetup",
			},
			{
				name: "Creating a Basic Dapp",
				i: "lisk-dapps-docs/BasicDapp",
			},
			{
				name: "Creating a Messaging Dapp",
				i: "lisk-dapps-docs/MessagingDapp",
			},
			{
				name: "Creating a Reddit Dapp",
				i: "lisk-dapps-docs/RedditDapp",
			},
			{
				name: "Adding a User Interface",
				i: "lisk-dapps-docs/UserInterface",
			},
			{
				name: "Introducing the Dapp SDK",
				i: "lisk-dapps-docs/DappSDK",
			},
			{
				name: "Creating a Custom Sidechain",
				i: "lisk-dapps-docs/Sidechain",
			},
			{
				name: "Debugging Dapps",
				i: "lisk-dapps-docs/DebuggingDapps"
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
		title: "Welcome to Lisk",
		i: "lisk-docs/README",
		next: "lisk-docs/BinaryInstall"
	},
	{
		title: "Installing Lisk (using Binaries)",
		i: "lisk-docs/BinaryInstall",
		next: "lisk-docs/DockerInstall"
	},
	{
		title: "Installing Lisk (using Docker)",
		i: "lisk-docs/DockerInstall",
		next: "lisk-docs/SourceInstall"
	},
	{
		title: "Installing Lisk (from Source)",
		i: "lisk-docs/SourceInstall",
		next: "lisk-dapps-docs/README"
	},
	{
		title: "Developing Dapps",
		i: "lisk-dapps-docs/README",
		next: "lisk-dapps-docs/EnvironmentSetup"
	},
	{
		title: "Setting up an Environment",
		i: "lisk-dapps-docs/EnvironmentSetup",
		next: "lisk-dapps-docs/BasicDapp"
	},
	{
		title: "Creating a Basic Dapp",
		i: "lisk-dapps-docs/BasicDapp",
		next: "lisk-dapps-docs/MessagingDapp"
	},
	{
		title: "Creating a Messaging Dapp",
		i: "lisk-dapps-docs/MessagingDapp",
		next: "lisk-dapps-docs/RedditDapp"
	},
	{
		title: "Creating a Reddit Dapp",
		i: "lisk-dapps-docs/RedditDapp",
		next: "lisk-dapps-docs/UserInterface"
	},
	{
		title: "Adding a User Interface",
		i: "lisk-dapps-docs/UserInterface",
		next: "lisk-dapps-docs/DappSDK"
	},
	{
		title: "Introducing the Dapp SDK",
		i: "lisk-dapps-docs/DappSDK",
		next: "lisk-dapps-docs/Sidechain"
	},
	{
		title: "Creating a Custom Sidechain",
		i: "lisk-dapps-docs/Sidechain",
		next: "lisk-dapps-docs/DebuggingDapps"
	},
	{
		title: "Debugging Dapps",
		i: "lisk-dapps-docs/DebuggingDapps"
	}
]

module.exports = function (app) {
	app.get("/documentation", function (req, res) {
		var i = req.query.i || "lisk-docs/README";

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

			fs.readFile(path.join('./', 'docs', '/' + doc.i + '.md'), 'utf8', function (err, data) {
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
