module.exports = function (app) {
	app.get("/get-started", function (req, res) {
		return res.render("get_started", {pageId: "get_started", title: "Get Started",  description: "Need help starting your Lisk adventure? Take a look at our Get Started.", words: "lisk, crypti, get started, beginning, start, dapp, dapps, decentralized application, dapp store, crypto, currency, cryptocurrency, smart contracts, smart contract, decentralized applications, wallet, blockchain", hasScript: false});
	});
}
