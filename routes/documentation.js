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
		name: "Developing Blockchain Apps",
		url: "/documentation?i=lisk-dapps-docs/README",
		subitems: [
			{
				name: "Setting up an Environment",
				i: "lisk-dapps-docs/EnvironmentSetup",
			},
			{
				name: "Creating a Basic App",
				i: "lisk-dapps-docs/BasicApp",
			},
			{
				name: "Creating a Messaging App",
				i: "lisk-dapps-docs/MessagingApp",
			},
			{
				name: "Creating a Reddit App",
				i: "lisk-dapps-docs/RedditApp",
			},
			{
				name: "Adding a User Interface",
				i: "lisk-dapps-docs/UserInterface",
			},
			{
				name: "Introducing the App SDK",
				i: "lisk-dapps-docs/AppSDK",
			},
			{
				name: "Creating a Custom Sidechain",
				i: "lisk-dapps-docs/Sidechain",
			},
			{
				name: "Debugging Apps",
				i: "lisk-dapps-docs/DebuggingApps"
			}
		]
	},
	{
		name: "Handbooks",
		url: "/documentation?i=lisk-handbooks/README",
		subitems: [
			{
				name: "Delegates & Forging",
				i: "lisk-handbooks/DelegateHandbook"
			}
		]
	},
	{
		name: "Whitepaper",
		url: "/documentation?i=lisk-whitepaper/README",
		subitems: [
			{
				name: "English Version",
				i: "lisk-whitepaper/LiskWhitepaper"
			}
		]
	},
	{
		name: "Lisk API",
		url: "/documentation?i=lisk-docs/APIReference"
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
		title: "Developing Apps",
		i: "lisk-dapps-docs/README",
		next: "lisk-dapps-docs/EnvironmentSetup"
	},
	{
		title: "Setting up an Environment",
		i: "lisk-dapps-docs/EnvironmentSetup",
		next: "lisk-dapps-docs/BasicApp"
	},
	{
		title: "Creating a Basic App",
		i: "lisk-dapps-docs/BasicApp",
		next: "lisk-dapps-docs/MessagingApp"
	},
	{
		title: "Creating a Messaging App",
		i: "lisk-dapps-docs/MessagingApp",
		next: "lisk-dapps-docs/RedditApp"
	},
	{
		title: "Creating a Reddit App",
		i: "lisk-dapps-docs/RedditApp",
		next: "lisk-dapps-docs/UserInterface"
	},
	{
		title: "Adding a User Interface",
		i: "lisk-dapps-docs/UserInterface",
		next: "lisk-dapps-docs/AppSDK"
	},
	{
		title: "Introducing the App SDK",
		i: "lisk-dapps-docs/AppSDK",
		next: "lisk-dapps-docs/Sidechain"
	},
	{
		title: "Creating a Custom Sidechain",
		i: "lisk-dapps-docs/Sidechain",
		next: "lisk-dapps-docs/DebuggingApps"
	},
	{
		title: "Debugging Apps",
		i: "lisk-dapps-docs/DebuggingApps",
		next: "lisk-handbooks/README"
	},
	{
		title: "Handbooks",
		i: "lisk-handbooks/README",
		next: "lisk-handbooks/DelegateHandbook"
	},
		{
		title: "Delegates & Forging",
		i: "lisk-handbooks/DelegateHandbook",
		next: "lisk-whitepaper/README"
	},
	{
		title: "Whitepaper",
		i: "lisk-whitepaper/README",
		next: "lisk-whitepaper/LiskWhitepaper"
	},
	{
		title: "Whitepaper (English)",
		i: "lisk-whitepaper/LiskWhitepaper"
	},
	{
		title: "Lisk API",
		i: "lisk-docs/APIReference"
	}
]

module.exports = function (app) {
	app.get("/documentation", function (req, res) {
		var i = req.query.i || "lisk-docs/README";

		function finish(doc) {
			var result = {
				pageId: "documentation",
				description: "Lisk Apps Documentation",
				words: "lisk, crypti, documentation, doc, docs, guides, tutorial, dapp, dapps, decentralized application, dapp store, crypto, currency, cryptocurrency, smart contracts, smart contract, decentralized applications, wallet, blockchain",
				menu: menu,
				hasScript: true,
				isDoc: true,
				doc: doc
			}

			if (doc) {
				doc.content = marked(doc.content);

				result.title = doc.title;
				return res.render("documentation", result);
			} else {
				result.title = "Documentation - Not Found";
				return res.render("documentation", result);
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
