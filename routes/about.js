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
		name: "Microsoft",
		date: "Since February 2016",
		web: "http://microsoft.com/",
		logo: "about_2"
	},
	{
		name: "Ethereum",
		date: "Since March 2016",
		web: "http://ethereum.org/",
		logo: "about_3"
	},
	{
		name: "Microsoft",
		date: "Since February 2016",
		web: "http://microsoft.com/",
		logo: "about_2"
	},
	{
		name: "Ethereum",
		date: "Since March 2016",
		web: "http://ethereum.org/",
		logo: "about_3"
	}
];

var correspondents = [
	{
		name: "Max Kordek",
		lang: "germany",
		linked: "https://www.linkedin.com/profile/view?id=215859616&locale=en_US",
		twitter: "http://twitter.com/MaxKordek",
		country: "Germany",
		btt: "https://bitcointalk.org/index.php?action=profile;u=553440",
		pm: "mailto:max@crypti.me"
	},
	{
		name: "Luiz Chen",
		lang: "china",
		country: "China",
		btt: "https://bitcointalk.org/index.php?action=profile;u=306645",
		pm: "https://bitcointalk.org/index.php?action=pm;sa=send;u=306645"
	},
	{
		name: "Ben Azkhabar",
		lang: "france",
		country: "France",
		btt: "https://bitcointalk.org/index.php?action=profile;u=412425",
		pm: "https://bitcointalk.org/index.php?action=pm;sa=send;u=412425"
	},
	{
		name: "Ben Azkhabar",
		lang: "italy",
		country: "Italy",
		btt: "https://bitcointalk.org/index.php?action=profile;u=412425",
		pm: "https://bitcointalk.org/index.php?action=pm;sa=send;u=412425"
	}
];

module.exports = function (app) {
	app.get("/about", function (req, res) {
		members.forEach(function (item) {
			item.photo = item.name.toLowerCase().replace(' ', '');
		});

		return res.render("about", {title: "About", correspondents: correspondents, members : members, partnerships: partnerships,  description: "Take a look at the team which makes hard problems simple and maintain Lisk on a regular basis.", words: "lisk, crypti, contact, team, dapp, dapps, decentralized application, dapp store, crypto, currency, cryptocurrency, smart contracts, smart contract, decentralized applications, wallet, blockchain"});
	});
}
