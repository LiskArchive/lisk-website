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
		name: "Max Kordek",
		lang: "germany",
		country: "Germany",
		btt: "https://bitcointalk.org/index.php?topic=1348884",
		linked: "https://www.linkedin.com/in/maxkordek?locale=en_US",
		pm: "mailto:max@lisk.io"
	},
	{
		name: "Luiz Chen",
		lang: "china",
		country: "China",
		btt: "https://bitcointalk.org/index.php?topic=1350375",
		qq: "377193016",
		pm: "https://bitcointalk.org/index.php?action=pm;sa=send;u=306645"
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
	},
	{
		name: "Nick F.",
		lang: "netherlands",
		country: "The Netherlands",
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
		name: "Petros Anagnostou",
		lang: "greece",
		country: "Greece",
		facebook: "https://www.facebook.com/Lisk-Greece-1097089743664106",
		twitter: "https://twitter.com/LiskGreece",
		btt: "https://bitcointalk.org/index.php?topic=1370696",
		pm: "https://bitcointalk.org/index.php?action=pm;sa=send;u=517454",
		linked: "https://www.linkedin.com/in/petrosanagnostou"
	},
];

module.exports = function (app) {
	app.get("/team", function (req, res) {
		return res.render("team", {pageId: "team", title: "Team", correspondents: correspondents, adviser : adviser, description: "Take a look at the team which makes hard problems simple and maintain Lisk on a regular basis.", words: "lisk, crypti, contact, team, dapp, dapps, decentralized application, dapp store, crypto, currency, cryptocurrency, smart contracts, smart contract, decentralized applications, wallet, blockchain", hasScript: false});
	});
}
