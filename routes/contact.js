module.exports = function (app) {
	app.get("/contact-us", function (req, res) {
		return res.render("contact", {isMap: true, title: "Contact Us",  description: "If you need to contact the Lisk team for business inquiries or personal matters, here you can.", words: "lisk, crypti, contact, dapp, dapps, decentralized application, dapp store, crypto, currency, cryptocurrency, smart contracts, smart contract, decentralized applications, wallet, blockchain"});
	});
}
