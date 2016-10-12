var adviser = [
	{
		name: "Charles Hoskinson",
		img : "charles_hoskinson",
		company: "Input Output HK",
		description: "Senior Adviser",
		linked: "https://www.linkedin.com/in/charles-hoskinson-1a95a4b4",
		twitter: "https://twitter.com/IOHK_Charles"
	},
	{
		name: "Steven Nerayoff",
		img : "steven_nerayoff",
		company: "Maple Ventures",
		description: "Senior Adviser",
		linked: "https://www.linkedin.com/in/nerayoff",
		twitter: "https://twitter.com/stevennerayoff"
	},
	{
		name: "Boris Povod",
		img : "boris_povod",
		company: "Wings",
		description: "Technical Adviser",
		linked: "https://www.linkedin.com/in/boris-povod-361a1b79/en",
		twitter: "https://twitter.com/Mr_Povod"
	},
	{
		name: "Axel Hellinger",
		img : "hellinger",
		company: "Kanzlei Hellinger",
		description: "Legal Adviser",
		linked: "https://de.linkedin.com/in/ahellinger"
	}
];

var correspondents = [
	{
		name: "Luiz Chen",
		lang: "china",
		country: "China",
		btt: "https://bitcointalk.org/index.php?topic=1350375",
		qq: "377193016",
		pm: "https://bitcointalk.org/index.php?action=pm;sa=send;u=306645"
	},
	{
		name: "Daniel B.",
		lang: "germany",
		country: "Germany",
		twitter: "https://twitter.com/Lisk_DE",
		facebook: "https://www.facebook.com/LiskDE",
		btt: "https://bitcointalk.org/index.php?topic=1348884",
		pm: "https://bitcointalk.org/index.php?action=pm;sa=send;u=174939"
	},
	{
		name: "Nick Friedrich",
		lang: "netherlands",
		country: "Netherlands",
		twitter: "https://twitter.com/lisknederland",
		btt: "https://bitcointalk.org/index.php?topic=1368751",
		pm: "https://bitcointalk.org/index.php?action=pm;sa=send;u=231239"
	},
	{
		name: "Joel Fernández",
		lang: "puertorico",
		country: "Puerto Rico",
		btt: "https://bitcointalk.org/index.php?topic=1347362",
		pm: "https://bitcointalk.org/index.php?action=pm;sa=send;u=157356",
		linked: "https://www.linkedin.com/in/joel-fernández-92669359"
	},
	{
		name: "Kostayntyn Ahafontsev",
		lang: "ukraine",
		country: "Ukraine",
		twitter: "https://twitter.com/liskukraine",
		btt: "https://forum.lisk.io/viewforum.php?f=33"
	},
	{
		name: "Stefan Neagu",
		lang: "romania",
		country: "Romania",
		twitter: "https://twitter.com/liskromania",
		facebook: "https://www.facebook.com/LiskRomania/",
		btt: "https://bitcointalk.org/index.php?topic=1434407",
		linked: "https://ro.linkedin.com/in/stenea"
	},
	{
		name: "Denis Smirnov",
		lang: "russia",
		country: "Russia",
		facebook: "https://www.facebook.com/lisk.russia/",
		btt: "https://bitcointalk.org/index.php?topic=1346837",
		pm: "https://bitcointalk.org/index.php?action=pm;sa=send;u=534708",
		linked: "https://ru.linkedin.com/in/densmirnov"
	},
	{
		name: "Daniel Vassilev",
		lang: "australia",
		country: "Australia",
		twitter: "https://twitter.com/LiskAustralia",
		btt: "https://bitcointalk.org/index.php?topic=1346646",
		linked: "https://au.linkedin.com/in/daniel-vassilev-8b0a59b2"
	},
	{
		name: "Samuel Heinrichs",
		lang: "brazil",
		country: "Brazil",
		facebook: "https://www.facebook.com/groups/liskbr/",
		btt: "https://bitcointalk.org/index.php?topic=1348132",
		pm: "https://bitcointalk.org/index.php?action=pm;sa=send;u=821447",
		linked: "https://www.linkedin.com/in/samuel-heinrichs-243891a0"
	}
];

var conferences = [
	{
		name: "√ BlueYard: Decentralized & Encrypted",
		country: "germany",
		website: "https://medium.com/@BlueYard/join-the-people-working-on-upgrading-the-internet-decentralized-encrypted-7ff2b6ac1f8#.a9poen7uk",
		date: "1st June 2016"
	},
	{
		name: "√ Global Blockchain Summit",
		country: "china",
		website: "http://www.global-blockchain-summit.com",
		date: "22nd - 24th June 2016"
	},
	{
		name: "√ FoundersDevelopers",
		country: "russia",
		website: "https://www.facebook.com/events/1763404587211413/",
		date: "1st July 2016"
	},
	{
		name: "√ BIP 001: Black Sea Edition",
		country: "ukraine",
		website: "http://bip001.com",
		date: "7th July 2016"
	},
	{
		name: "√ Bitcoin Wednesday",
		country: "netherlands",
		website: "http://www.meetup.com/BitcoinWednesday/events/224454244/",
		date: "3rd August 2016"
	},
	{
		name: "√ Global Blockchain Roadshow",
		country: "china",
		website: "http://hechain.com",
		date: "6th August 2016"
	},
	{
		name: "√ Euroforum: Blockchain an einem Tag",
		country: "germany",
		website: "http://www.euroforum.de/blockchain/",
		date: "19th September 2016"
	},
	{
		name: "√ International Blockchain Week",
		country: "china",
		website: "http://www.blockchainweek2016.org",
		date: "19th-24th September 2016"
	},
	{
		name: "Golden Drum",
		country: "slovenia",
		website: "http://www.goldendrum.com",
		date: "20th October 2016"
	},
	{
		name: "StartupCon",
		country: "germany",
		website: "http://www.startupcon.de",
		date: "27th October 2016"
	},
	{
		name: "Web Summit",
		country: "portugal",
		website: "http://websummit.net",
		date: "7th-10th November 2016"
	},
	{
		name: "33C3",
		country: "germany",
		website: "https://events.ccc.de",
		date: "27th-30th December 2016"
	}
];

module.exports = function (app) {
	app.get("/team", function (req, res) {
		return res.render("team", {pageId: "team", title: "Team", conferences: conferences, correspondents: correspondents, adviser : adviser, description: "Take a look at the team which makes hard problems simple and maintain Lisk on a regular basis.", words: "lisk, crypti, contact, team, dapp, dapps, decentralized application, dapp store, crypto, currency, cryptocurrency, smart contracts, smart contract, decentralized applications, wallet, blockchain", hasScript: false});
	});
}
