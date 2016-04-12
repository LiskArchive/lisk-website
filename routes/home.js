var dapps = [
	{
		url: "https://www.youtube.com/embed/T6e7lttEFsM?rel=0&amp;showinfo=0"
	},
	{
		url: "https://www.youtube.com/embed/t0T_Ko8f39o?rel=0&amp;showinfo=0"
	},
	{
		url: "https://www.youtube.com/embed/I6emtbHgiVA?rel=0&amp;showinfo=0"
	}
];

var partnerships = [
	{
		name: "Microsoft",
		img: "microsoft",
		url: "https://microsoft.com/"
	},
	{
		name: "Chain of Things",
		img: "chainofthings",
		url: "http://chainofthings.com/"
	},
	{
		name: "Transform PR",
		img: "transformpr",
		url: "http://transform.pr/"
	}
];


module.exports = function (app) {
	app.get("/", function (req, res) {
		res.render('home', {pageId: "home", title: "Decentralized Application Platform", partnerships: partnerships, dapps: dapps, description: "Develop and publish decentralized applications with your own side chains on the open-source Lisk Platform.", words: "lisk, crypti, dapp, dapps, decentralized application, dapp store, crypto, currency, cryptocurrency, smart contracts, smart contract, decentralized applications, wallet, blockchain, sia", hasScript: true});
	});
}
