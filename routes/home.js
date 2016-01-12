/*var partners = [
	{
		name: "Sia - Decentralized Storage",
		site: "http://www.siacoin.com/",
		image: "i/sia.png"
	}
]*/

module.exports = function (app) {
	app.get("/", function (req, res) {
		res.render('index', {title: "Decentralized Application Platform", indexPageClass: "index_page", description: "Develop and publish decentralized applications with your own side chains on the open-source Crypti Platform.", words: "crypti, dapp, dapps, decentralized application, dapp store, crypto, currency, cryptocurrency, smart contracts, smart contract, decentralized applications, wallet, blockchain, sia"/*, partners: partners*/});
	});
}
