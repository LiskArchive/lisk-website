module.exports = function (app) {
	app.get("/beta", function (req, res) {
		return res.render("beta", {title: "Beta v0.5.0",  description: "Participate in our open beta test for Crypti v0.5.0. Develop decentralized applications in a local testnet with Crypti-cli.", words: "crypti, beta, dapp, dapps, decentralized application, dapp store, crypto, currency, cryptocurrency, smart contracts, smart contract, decentralized applications, wallet, blockchain"});
	})
}
