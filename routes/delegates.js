module.exports = function (app) {
	app.get("/delegates", function (req, res) {
		return res.render("delegates", {pageId: "delegates", title: "Become a Lisk Delegate!", description: "Become a Lisk delegate and earn over 12,000 LSK monthly!", words: "lisk, delegate, delegates, forging, dpos, developer, designer, crypti, contact, team, dapp, dapps, decentralized application, dapp store, crypto, currency, cryptocurrency, smart contracts, smart contract, decentralized applications, wallet, blockchain", hasScript: false});
	});
}
