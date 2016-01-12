module.exports = function (app) {
	app.get("/contest", function (req, res) {
		return res.render("contest", {title: "Dapp Contest",  description: "Participate in our decentralized applications contest and win huge prizes.", words: "crypti, contest, hackathon, dapp, dapps, decentralized application, dapp store, crypto, currency, cryptocurrency, smart contracts, smart contract, decentralized applications, wallet, blockchain", isContest: true});
	})
}
