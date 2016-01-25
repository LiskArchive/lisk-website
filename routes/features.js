module.exports = function (app) {
	app.get("/features", function (req, res) {
		return res.render("features", {pageId: "features", title: "Features",  description: "Beautiful and simple on the front, secure and brilliant on the back. Take a look at Lisk’s awesome features.", words: "lisk, crypti, features, source code, open source, development, dapp, dapps, decentralized application, dapp store, crypto, currency, cryptocurrency, smart contracts, smart contract, decentralized applications, wallet, blockchain", hasScript: false});
	})
}
