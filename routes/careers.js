var jobs = [
	{
		img: "backend",
		position : "2x Back End Developer",
		skills: "JavaScript · Node.JS · PostgreSQL",
		description: "Do you have a passion for coding, cryptography, and algorithms? We are actively looking for two back end developers who can efficiently optimise and improve our existing codebase. You should also be able to implement new features from scratch with great quality."
	},
	{
		img: "frontend",
		position : "2x Front End Developer",
		skills: "Javascript · HTML · CSS · Angular 1&2",
		description: "Lisk needs to have the most useful and simple user interface of all crypto-currencies. Your task would be to achieve that together with us. From time to time you also would have to take care of our official web presence."
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
