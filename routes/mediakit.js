module.exports = function (app) {
	app.get('/mediakit', function (req, res) {
		return res.render('mediakit', {pageId: "mediakit", title: "Media Kit", description: "The official Lisk Media Kit with many logos and related images.", words: "lisk, media kit, mediakit, crypti, dapp, dapps, decentralized application, dapp store, crypto, currency, cryptocurrency, smart contracts, smart contract, decentralized applications, wallet, blockchain", hasScript: false});
	});
}
