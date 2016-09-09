var apps = [
	{
		url: "https://www.youtube.com/watch?v=ZK1ogQ6L_Ko",
		image: "criterion.png",
		description: "Concept: Proof of Existence"
	},
	{
		url: "https://www.youtube.com/watch?v=T6e7lttEFsM",
		image: "dust.png",
		description: "Concept: Decentralized Trust on Lisk"
	},
	{
		url: "https://www.youtube.com/watch?v=Djcaoba1MLg",
		image: "discovr.png",
		description: "Concept: A Social Network for Artists"
	},
	{
		url: "https://www.youtube.com/watch?v=I6emtbHgiVA",
		image: "marketplace.png",
		description: "Prototype: A Decentralized Shop on Lisk"
	},
	{
		url: "https://www.youtube.com/watch?v=t0T_Ko8f39o",
		image: "blockdata.png",
		description: "Prototype: Your Smart Home on Lisk"
	},
	{
		url: "mailto:business@lisk.io",
		image: "newdapp.png",
		description: "You developed an app?"
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
		name: "BitcoinPRBuzz",
		img: "bitcoinprbuzz",
		url: "http://bitcoinprbuzz.com"
	},
	{
		name: "WachsmanPR",
		img: "wachsmanpr",
		url: "http://wachsmanpr.com"
	}
];


module.exports = function (app) {
	app.get("/", function (req, res) {
		res.render('home', {pageId: "home", title: "Blockchain Application Platform", partnerships: partnerships, apps: apps, description: "Develop and publish blockchain applications with your own sidechains on the open-source Lisk Platform.", words: "lisk, crypti, dapp, dapps, decentralized application, dapp store, crypto, currency, cryptocurrency, smart contracts, smart contract, decentralized applications, wallet, blockchain, sia", hasScript: true});
	});
}
