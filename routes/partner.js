module.exports = function (app) {
	app.get("/become-a-partner", function (req, res) {
		res.render('partner', {title: "Become a Partner",  description: "Interested in becoming a Lisk partner? Contact us!", words: "lisk, crypti, partner, sia, dapp, dapps, decentralized application, dapp store, crypto, currency, cryptocurrency, smart contracts, smart contract, decentralized applications, wallet, blockchain"});
	});
}
