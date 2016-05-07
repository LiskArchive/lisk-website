var adviser = [
	{
		name: "Boris Povod",
		img : "boris_povod",
		company: "Crypti",
		description: "Blockchain Expert",
		linked: "https://www.linkedin.com/in/boris-povod-361a1b79/en",
		twitter: "https://twitter.com/CryptiTeam"
	},
	{
		name: "Axel Hellinger",
		img : "hellinger",
		company: "Kanzlei Hellinger",
		description: "Lawyer",
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
		btt: "https://bitcointalk.org/index.php?topic=1368751",
		pm: "https://bitcointalk.org/index.php?action=pm;sa=send;u=231239"
	},
	{
		name: "Samuel Heinrichs",
		lang: "brazil",
		country: "Brazil",
		facebook: "https://www.facebook.com/groups/liskbr/",
		btt: "https://bitcointalk.org/index.php?topic=1348132",
		pm: "https://bitcointalk.org/index.php?action=pm;sa=send;u=821447",
		linked: "https://www.linkedin.com/in/samuel-heinrichs-243891a0"
	},
	{
		name: "Petros Anagnostou",
		lang: "greece",
		country: "Greece",
		facebook: "https://www.facebook.com/Lisk-Greece-1097089743664106",
		twitter: "https://twitter.com/LiskGreece",
		btt: "https://bitcointalk.org/index.php?topic=1370696",
		pm: "https://bitcointalk.org/index.php?action=pm;sa=send;u=517454",
		linked: "https://www.linkedin.com/in/petrosanagnostou"
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
		name: "Rendra Permana",
		lang: "indonesia",
		country: "Indonesia",
		btt: "https://bitcointalk.org/index.php?topic=1357381",
		twitter: "https://twitter.com/Lisk_Indonesia",
		facebook: "https://www.facebook.com/Lisk-Indonesia-182561438776664/",
		linked: "https://www.linkedin.com/in/rendra-permana-18b641b4",
		pm: "https://bitcointalk.org/index.php?action=pm;sa=send;u=384646"
	},
	{
		name: "JM N. Erestain",
		lang: "filipino",
		country: "Philippines",
		btt: "https://bitcointalk.org/index.php?topic=1360016",
		pm: "https://bitcointalk.org/index.php?action=pm;sa=send;u=521242"
	}
];

var conferences = [
	{
		name: "BlueYard: Decentralized & Encrypted",
		country: "germany",
		website: "https://medium.com/@BlueYard/join-the-people-working-on-upgrading-the-internet-decentralized-encrypted-7ff2b6ac1f8#.a9poen7uk",
		date: "1st June 2016"
	},
	{
		name: "Global Blockchain Summit",
		country: "china",
		website: "http://www.global-blockchain-summit.com",
		date: "22nd - 24th June 2016"
	},
	{
		name: "Euroforum: Blockchain an einem Tag",
		country: "germany",
		website: "http://www.euroforum.de/blockchain/",
		date: "19th September 2016"
	}
];

module.exports = function (app) {
	app.get("/team", function (req, res) {
		return res.render("team", {pageId: "team", title: "Team", conferences: conferences, correspondents: correspondents, adviser : adviser, description: "Take a look at the team which makes hard problems simple and maintain Lisk on a regular basis.", words: "lisk, crypti, contact, team, dapp, dapps, decentralized application, dapp store, crypto, currency, cryptocurrency, smart contracts, smart contract, decentralized applications, wallet, blockchain", hasScript: false});
	});
}
