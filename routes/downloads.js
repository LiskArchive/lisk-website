module.exports = function (app) {
	app.get("/download", function (req, res) {
		return res.render("downloads", {pageId: "downloads", title: "Downloads",  description: "Download the latest Lisk client to get access to your account and dozens of dapps.", words: "lisk, crypti, download, downloads, client, dapp, dapps, decentralized application, dapp store, crypto, currency, cryptocurrency, smart contracts, smart contract, decentralized applications, wallet, blockchain", hasScript: true});
	})
}
