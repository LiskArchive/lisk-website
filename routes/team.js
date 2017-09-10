var members = [
	{
		name: "Ali Haghighatkhah",
		pic: "ali",
		post: "Front End Developer",
		hired: " "
	},
	{
		name: "Diego Garcia",
		pic: "diego",
		post: "Back End Developer",
		hired: " "
	},
	{
		name: "François Chavant",
		pic: "francois",
		post: "DevOps Engineer",
		hired: " "
	},
	{
		name: "Isabella Dell",
		pic: "isabella",
		post: "System Architect",
		hired: " "
	},
	{
		name: "Jacob Kowalewski",
		pic: "jacob",
		post: "Marketing Manager",
		hired: " "
	},
	{
		name: "Jennifer Tekneci",
		pic: "jennifer",
		post: "Social Media Manager",
		hired: " "
	},
	{
		name: "Kuba Kufel",
		pic: "kuba",
		post: "Marketing Manager",
		hired: " "
	},
	{
		name: "Lindsay Buescher",
		pic: "lindsay",
		post: "Marketing Manager",
		hired: " "
	},
	{
		name: "Maciej Baj",
		pic: "maciej",
		post: "Back End Developer",
		hired: " "
	},
	{
		name: "Max Kordek",
		pic: "max",
		post: "Co-Founder",
	},
	{
		name: "Mariusz Serek",
		pic: "mariusz",
		post: "Back End Developer",
		hired: " "
	},
	{
		name: "Mona Barenfänger",
		pic: "mona",
		post: "Student Assistant",
		hired: " "
	},
	{
		name: "Oliver Beddows",
		pic: "oliver",
		post: "Co-Founder",
	},
	{
		name: "Thomas Schouten",
		pic: "thomas",
		post: "Marketing Lead",
		hired: " "
	},
	{
		name: "Tobias Schwarz",
		pic: "tobias",
		post: "Full Stack Developer",
		hired: " "
	},
	{
		name: "Usman Khan",
		pic: "usman",
		post: "Back End Developer",
		hired: " "
	},
	{
		name: "Vit Stanislav",
		pic: "vit",
		post: "Front End Developer",
		hired: " "
	},
	{
		name: "Will Clark",
		pic: "will",
		post: "Full Stack Developer",
		hired: " "
	},
	{
		name: "Lucas Isasmendi",
		pic: "lucas",
		post: "Back End Developer",
		hired: " "
	},
	{
		name: "Yashar Ayari",
		pic: "yashar",
		post: "Front End Developer",
		hired: " "
	},
	{
		name: "Guido Schmitz-Krummacher",
		pic: "guido",
		post: "Legal & Financials",
	}
];

var correspondents = [
	{
		name: "Luiz Chen",
		lang: "china",
		country: "China",
		pm: "mailto:china@liskambassador.io"
	},
	{
		name: "Stefan Neagu",
		lang: "romania",
		country: "Romania",
		pm: "mailto:romania@liskambassador.io"
	},
	{
		name: "Denis Smirnov",
		lang: "russia",
		country: "Russia",
		pm: "mailto:russia@liskambassador.io"
	},
	{
		name: "Daniel Vassilev",
		lang: "australia",
		country: "Australia",
		pm: "mailto:australia@liskambassador.io"
	},
	{
		name: "John Cortesi",
		lang: "france",
		country: "France",
		pm: "mailto:france@liskambassador.io"
	},
	{
		name: "Edward Trosclair",
		lang: "usa",
		country: "USA",
		pm: "mailto:usa@liskambassador.io"
	},
	{
		name: "Lisk Italian Group",
		lang: "italy",
		country: "Italy",
		pm: "mailto:italy@liskambassador.io"
	}
];

var collaborations = [
	{
		name: "lightcurve",
		img: "lightcurve",
		url: "http://www.lightcurve.io"
	},
	{
		name: "Taikonauten",
		img: "taikonauten",
		url: "http://taikonauten.com"
	},
	{
		name: "WachsmanPR",
		img: "wachsmanpr",
		url: "http://wachsmanpr.com"
	},
	{
		name: "Bitcoin Suisse AG",
		img: "bitcoinsuisse",
		url: "https://www.bitcoinsuisse.ch"
	},
	{
		name: "MME",
		img: "mme",
		url: "https://www.mme.ch"
	}
];

module.exports = function (app) {
	app.get("/team", function (req, res) {
		return res.render("team", {pageId: "team", title: "Team", correspondents: correspondents, collaborations: collaborations, members: members, description: "Take a look at the Lisk Foundation which makes hard problems simple and maintain Lisk on a regular basis.", words: "lisk, contact, team, dapp, dapps, decentralized application, dapp store, crypto, currency, cryptocurrency, smart contracts, smart contract, decentralized applications, wallet, blockchain", hasScript: false});
	});
}
