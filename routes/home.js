var collaborations = [
	{
		name: "lightcurve",
		img: "lightcurve",
		url: "http://www.lightcurve.io"
	},
	{
		name: "Taikonauten",
		img: "taikonauten",
		url: "http://taikonauten.com"
	},
	{
		name: "WachsmanPR",
		img: "wachsmanpr",
		url: "http://wachsmanpr.com"
	},
	{
		name: "Bitcoin Suisse AG",
		img: "bitcoinsuisse",
		url: "https://www.bitcoinsuisse.ch"
	},
	{
		name: "MME",
		img: "mme",
		url: "https://www.mme.ch"
	}
];


module.exports = function (app) {
	app.get("/", function (req, res) {
		res.render('home', {pageId: "home", title: "Blockchain Application Platform", collaborations: collaborations, description: "Develop and publish blockchain applications with your own sidechains on the open-source Lisk Platform.", words: "lisk, crypti, dapp, dapps, decentralized application, dapp store, crypto, currency, cryptocurrency, smart contracts, smart contract, decentralized applications, wallet, blockchain, sia", hasScript: true});
	});
}
