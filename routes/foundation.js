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
		name: "John Cortesi",
		lang: "france",
		country: "France",
		btt: "https://bitcointalk.org/index.php?topic=1354476"
	}
];

var collaborations = [
	{
		name: "lightcurve GmbH",
		tag: "lightcurve",
		areas: "DEVELOPMENT &middot; MARKETING &middot; SUPPORT",
		link: "http://lightcurve.io",
		description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
	},
	{
		name: "Taikonauten",
		tag: "taikonauten",
		areas: "DESIGN &middot; USER EXPERIENCE",
		link: "https://taikonauten.com",
		description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
	},
		{
		name: "Wachsman PR",
		tag: "wachsmanpr",
		areas: "PUBLIC RELATIONS",
		link: "https://wachsmanpr.com",
		description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
	},
		{
		name: "Bitcoin Suisse AG",
		tag: "bitcoinsuisse",
		areas: "CRYPTOCURRENCY LIQUIDATION",
		link: "https://www.bitcoinsuisse.ch",
		description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
	},
		{
		name: "MME",
		tag: "mme",
		areas: "LEGAL",
		link: "http://www.mme.ch",
		description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
	},
];

module.exports = function (app) {
	app.get("/foundation", function (req, res) {
		return res.render("foundation", {pageId: "foundation", title: "The Lisk Foundation", correspondents: correspondents, collaborations: collaborations, description: "Take a look at the Lisk Foundation which makes hard problems simple and maintain Lisk on a regular basis.", words: "lisk, contact, team, dapp, dapps, decentralized application, dapp store, crypto, currency, cryptocurrency, smart contracts, smart contract, decentralized applications, wallet, blockchain", hasScript: false});
	});
}
