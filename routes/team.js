var adviser = [
	{
		name: "Boris Povod",
		img : "boris_povod",
		company: "Crypti",
		description: "Lead Developer",
		linked: "https://www.linkedin.com/in/boris-povod-361a1b79/en",
		twitter: "https://twitter.com/CryptiTeam"
	}
];

var correspondents = [
	{
		name: "Max Kordek",
		lang: "germany",
		linked: "https://www.linkedin.com/profile/view?id=215859616&locale=en_US",
		twitter: "http://twitter.com/MaxKordek",
		country: "Germany",
		btt: "https://bitcointalk.org/index.php?action=profile;u=718244",
		pm: "mailto:max@lisk.io"
	},
	{
		name: "Luiz Chen",
		lang: "china",
		country: "China",
		btt: "https://bitcointalk.org/index.php?action=profile;u=306645",
		pm: "https://bitcointalk.org/index.php?action=pm;sa=send;u=306645"
	},
	{
		name: "Rendra Permana",
		lang: "indonesia",
		country: "Indonesia",
		linked: "https://www.linkedin.com/in/rendra-dian-permna-18b641b4",
		twitter: "https://twitter.com/rendravolt",
		btt: "https://bitcointalk.org/index.php?action=profile;u=384646",
		pm: "https://bitcointalk.org/index.php?action=pm;sa=send;u=384646"
	},
	{
		name: "JM N. Erestain",
		lang: "filipino",
		country: "Philippines",
		twitter: "https://twitter.com/officialemerge",
		btt: "https://bitcointalk.org/index.php?action=profile;u=521242",
		pm: "https://bitcointalk.org/index.php?action=pm;sa=send;u=521242"
	}
];

module.exports = function (app) {
	app.get("/team", function (req, res) {
		return res.render("team", {pageId: "team", title: "Team", correspondents: correspondents, adviser : adviser, description: "Take a look at the team which makes hard problems simple and maintain Lisk on a regular basis.", words: "lisk, crypti, contact, team, dapp, dapps, decentralized application, dapp store, crypto, currency, cryptocurrency, smart contracts, smart contract, decentralized applications, wallet, blockchain", hasScript: false});
	});
}
