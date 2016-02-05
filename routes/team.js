var members = [
	{
		name: "Max Kordek",
		post: "CHIEF EXECUTIVE OFFICER",
		linked: "https://www.linkedin.com/profile/view?id=215859616&locale=en_US",
		twitter: "http://twitter.com/MaxKordek"
	},
	{
		name: "Max Kordek",
		post: "CHIEF EXECUTIVE OFFICER",
		twitter: "http://twitter.com/MaxKordek",
		btt: "https://bitcointalk.org/index.php?action=profile;u=553440"
	},
	{
		name: "Olivier Beddows",
		post: "CHIEF TECHNICAL OFFICER",
		btt: "https://bitcointalk.org/index.php?action=profile;u=205168",
		twitter: "http://twitter.com/karmacrypto"
	},
	{
		name: "Olivier Beddows",
		post: "CHIEF TECHNICAL OFFICER",
		btt: "https://bitcointalk.org/index.php?action=profile;u=205168",
		twitter: "http://twitter.com/karmacrypto"
	}
];

var partnerships = [
	{
		name: "abc",
		date: "Since February 2016",
		web: "http://abc.com/",
		card: "abc"
	},
	{
		name: "abc",
		date: "Since March 2016",
		web: "http://abc.org/",
		card: "abc"
	},
	{
		name: "abc",
		date: "Since February 2016",
		web: "http://abc.com/",
		card: "abc"
	},
	{
		name: "abc",
		date: "Since March 2016",
		web: "http://abc.org/",
		card: "abc"
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
	}
];

module.exports = function (app) {
	app.get("/team", function (req, res) {
		members.forEach(function (item) {
			item.photo = item.name.toLowerCase().replace(' ', '');
		});

		return res.render("team", {pageId: "team", title: "Team", correspondents: correspondents, members : members, partnerships: partnerships, description: "Take a look at the team which makes hard problems simple and maintain Lisk on a regular basis.", words: "lisk, crypti, contact, team, dapp, dapps, decentralized application, dapp store, crypto, currency, cryptocurrency, smart contracts, smart contract, decentralized applications, wallet, blockchain", hasScript: false});
	});
}
