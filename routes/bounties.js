module.exports = function (app) {
	app.get("/bounties", function (req, res) {
		return res.render("bounties", {pageId: "bounties", title: "Bounties", description: "Active Lisk bounties for bugs and community efforts!", words: "lisk, bounties, bugs, developer, designer, crypti, contact, team, dapp, dapps, decentralized application, dapp store, crypto, currency, cryptocurrency, smart contracts, smart contract, decentralized applications, wallet, blockchain", hasScript: false});
	});
}
