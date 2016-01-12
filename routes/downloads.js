module.exports = function (app) {
	app.get("/download", function (req, res) {
		return res.render("downloads", {title: "Downloads",  description: "Download the latest Crypti client to get access to your account and dozens of dapps.", words: "crypti, download, downloads, client, dapp, dapps, decentralized application, dapp store, crypto, currency, cryptocurrency, smart contracts, smart contract, decentralized applications, wallet, blockchain"});
	})
}
