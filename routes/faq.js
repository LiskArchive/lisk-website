module.exports = function (app) {
	app.get("/faq", function (req, res) {
		return res.render("faq", {pageId: "faq", title: "Frequently Asked Questions",  description: "Frequently asked questions regarding Lisk, the decentralized application platform.", words: "lisk, crypti, documentation, faq, frequently asked questions, dapp, dapps, decentralized application, dapp store, crypto, currency, cryptocurrency, smart contracts, smart contract, decentralized applications, wallet, blockchain", hasScript: false});
	})
}
