module.exports = function (app) {
	app.get("/contact-us", function (req, res) {
		return res.render("contact", {isMap: true, title: "Contact Us",  description: "You need to contact the Crypti team for business inquiries or personal matters, here you can.", words: "crypti, contact, dapp, dapps, decentralized application, dapp store, crypto, currency, cryptocurrency, smart contracts, smart contract, decentralized applications, wallet, blockchain"});
	});
}
