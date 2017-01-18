var jobs = [
	{
		img: "backend",
		position : "Back End Developer",
		skills: "JavaScript · Node.JS · PostgreSQL",
		description: "Do you have a passion for coding, cryptography, and algorithms? We are actively looking for back end developers who can efficiently optimise and improve our existing codebase."
	},
	{
		img: "designer",
		position : "Designer",
		skills: "Photoshop · Illustrator · Vector",
		description: "We are actively looking for an awesome designer with a great eye for beautiful and simplistic designs. Your tasks would be to design infographics, illustrations, icons, logos, UI/UX, banners, and more. If you are interested, feel free to send us your portfolio!"
	}
];


module.exports = function (app) {
	app.get("/careers", function (req, res) {
		return res.render("careers", {pageId: "careers", title: "Careers", jobs : jobs, description: "Lisk is hiring! Take a look at our job descriptions.", words: "lisk, jobs, career, developer, designer, crypti, contact, team, dapp, dapps, decentralized application, dapp store, crypto, currency, cryptocurrency, smart contracts, smart contract, decentralized applications, wallet, blockchain", hasScript: false});
	});
}
