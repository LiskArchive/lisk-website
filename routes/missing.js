module.exports = function (app) {
	app.get("/missing", function (req, res) {
		return res.render("missing", {title: "404 - Page Not Found",  description: "Participate in our decentralized applications contest and win huge prizes.", words: "crypti, contest, hackathon, dapp, dapps, decentralized application, dapp store, crypto, currency, cryptocurrency, smart contracts, smart contract, decentralized applications, wallet, blockchain"});
	})
}
