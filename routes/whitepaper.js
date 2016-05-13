module.exports = function (app) {
	app.get("/whitepaper", function (req, res) {
		return res.render("whitepaper", {pageId: "whitepaper", title: "Whitepaper",  description: "Lisk is a revolutionary piece of software. Read our whitepaper to understand how it works!", words: "lisk, crypti, features, source code, open source, development, dapp, dapps, decentralized application, dapp store, crypto, currency, cryptocurrency, smart contracts, smart contract, decentralized applications, wallet, blockchain", hasScript: false});
	})
}
