var dapps = [
	{
		url: "https://www.youtube.com/watch?v=T6e7lttEFsM",
		image: "dust.png",
		description: "Concept: Decentralized Trust on Lisk"
	},
	{
		url: "https://www.youtube.com/watch?v=Djcaoba1MLg",
		image: "discovr.png",
		description: "Concept: Social network for artists"
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
		description: "You developed a dapp?"
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
