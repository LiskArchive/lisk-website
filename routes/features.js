module.exports = function (app) {
	app.get("/features", function (req, res) {
		return res.render("features", {title: "Features",  description: "Beautiful and simple on the front, secure and brilliant on the back. Take a look at Crypti’s awesome features.", words: "crypti, features, source code, open source, development, dapp, dapps, decentralized application, dapp store, crypto, currency, cryptocurrency, smart contracts, smart contract, decentralized applications, wallet, blockchain"});
	})
}
