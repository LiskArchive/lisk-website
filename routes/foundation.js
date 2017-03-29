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
		name: "√ Golden Drum",
		country: "slovenia",
		website: "http://www.goldendrum.com",
		date: "20th October 2016"
	},
	{
		name: "√ StartupCon",
		country: "germany",
		website: "http://www.startupcon.de",
		date: "27th October 2016"
	},
	{
		name: "√ Web Summit",
		country: "portugal",
		website: "http://websummit.net",
		date: "7th-10th November 2016"
	},
	{
		name: "√ 33C3",
		country: "germany",
		website: "https://events.ccc.de",
		date: "27th-30th December 2016"
	},
	{
		name: "√ Bitcoin SF: Sidechains and Lisk",
		country: "usa",
		website: "https://www.meetup.com/San-Francisco-Bitcoin-Social/events/228473712/",
		date: "31st January 2017"
	},
	{
		name: "√ New Finance Meetup NYC",
		country: "usa",
		website: "https://www.meetup.com/NewFinanceNewYork/events/236838011/",
		date: "1st February 2017"
	},
	{
		name: "√ Lisk Berlin - Blockchain Meetup",
		country: "germany",
		website: "https://www.meetup.com/de-DE/Lisk-Berlin-Blockchain-Meetup/",
		date: "9th March 2017"
	},
	{
		name: "√ Digitalisierung & Start-ups",
		country: "germany",
		website: "https://www.frankfurter-zukunftsrat.de/projekte/digitalisierung-start-ups/",
		date: "23rd March 2017"
	},
	{
		name: "Consensus 2017",
		country: "usa",
		website: "http://www.coindesk.com/events/consensus-2017/",
		date: "22nd-24th May 2017"
	},
	{
		name: "Blockchain Expo",
		country: "germany",
		website: "http://blockchain-expo.com/europe/track/blockchain-for-industry-berlin/",
		date: "1st-2nd June 2017"
	},
	{
		name: "Distribute - Blockchain Conference",
		country: "germany",
		website: "http://www.distribute-conference.com",
		date: "16th June 2017"
	}
];

module.exports = function (app) {
	app.get("/foundation", function (req, res) {
		return res.render("foundation", {pageId: "foundation", title: "The Foundation", conferences: conferences, correspondents: correspondents, description: "Take a look at the Lisk Foundation which makes hard problems simple and maintain Lisk on a regular basis.", words: "lisk, contact, team, dapp, dapps, decentralized application, dapp store, crypto, currency, cryptocurrency, smart contracts, smart contract, decentralized applications, wallet, blockchain", hasScript: false});
	});
}
