var jobs = [
	{
		img: "frontend",
		position : "Front End Developer",
		skills: "JavaScript · React",
		description: "We are actively looking for front end developers who can bring the Lisk user interfaces to an entirely new level.",
		link: "https://angel.co/lisk/jobs/180316-front-end-developer"
	},
	{
		img: "qa",
		position : "Back End QA Engineer",
		skills: "Node.JS · PostgreSQL · Cryptography",
		description: "We are actively looking for a backend QA engineer who can help the Lisk project achieve the very highest standards in code quality, performance and security.",
		link: "https://angel.co/lisk/jobs/255681-back-end-qa-engineer"
	},
	{
		img: "devops",
		position : "DevOps Engineer",
		skills: "git · network configurations · data collection systems",
		description: "We are actively looking for a backend QA engineer who can assist the Lisk project in configuring and orchestrating its entire development infrastructure.",
		link: "https://angel.co/lisk/jobs/256017-devops-engineer"
	},
	{
		img: "designer",
		position : "Designer / Illustrator",
		skills: "Photoshop · Illustrator · Vector",
		description: "We are actively looking for a designer with a great eye for beautiful and simplistic designs. Please attach a portfolio to your application!",
		link: "https://angel.co/lisk/jobs/251295-designer-illustrator"
	},
	{
		img: "office",
		position : "Office Manager / Executive Assistant / Bookkeeper",
		skills: "German native",
		description: "We are actively looking for a multi-talent to help us with important day to day operations.",
		link: "https://angel.co/lisk/jobs/253405-office-manager-executive-assistant-bookkeeper"
	}
];


module.exports = function (app) {
	app.get("/careers", function (req, res) {
		return res.render("careers", {pageId: "careers", title: "Careers", jobs : jobs, description: "Lisk is hiring! Take a look at our job descriptions.", words: "lisk, jobs, career, developer, designer, crypti, contact, team, dapp, dapps, decentralized application, dapp store, crypto, currency, cryptocurrency, smart contracts, smart contract, decentralized applications, wallet, blockchain", hasScript: false});
	});
}
