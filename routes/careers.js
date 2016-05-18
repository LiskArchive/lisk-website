var jobs = [
	{
		img: "backend",
		position : "Back End Developer - Full Time",
		skills: "JavaScript · Node.JS · PostgreSQL",
		description: "Do you have a passion for coding, cryptography, and algorithms? We are actively looking for a back end developer who can efficiently optimising and improving existing codebases. You should also be able to implement new features from scratch with a great quality."
	},
	{
		img: "frontend",
		position : "Front End Developer - Full Time",
		skills: "Javascript · HTML · CSS · Angular 1",
		description: "Lisk needs to have the most useful and simple user interface of all crypto-currencies. Your task would be to achieve that together with us. From time to time you also would have to take care of our official web presence."
	},
	{
		img: "designer",
		position : "Designer - Full Time",
		skills: "Photoshop · Illustrator · Vector",
		description: "We are actively looking for an awesome designer with a great eye for beautiful and simplistic designs. Your tasks would be to design infographics, illustrations, icons, logos, UI/UX designs, banners, and more. If you are interested, feel free to send us your portfolio!"
	},
	{
		img: "dapp",
		position : "3x Blockchain App Developer - Part Time",
		skills: "JavaScript · HTML · CSS · Angular 1.0",
		description: "You are a student and want to proof your JavaScript skills or a junior developer who needs a job? We are actively looking for app developers, who are helping us to develop unique and useful blockchain apps. You need to know JavaScript, HTML and CSS. As a front end framework you need to know Angular 1.0."
	}
];


module.exports = function (app) {
	app.get("/careers", function (req, res) {
		return res.render("careers", {pageId: "careers", title: "Careers", jobs : jobs, description: "Lisk is hiring! Take a look at our job descriptions.", words: "lisk, jobs, career, developer, designer, crypti, contact, team, dapp, dapps, decentralized application, dapp store, crypto, currency, cryptocurrency, smart contracts, smart contract, decentralized applications, wallet, blockchain", hasScript: false});
	});
}
