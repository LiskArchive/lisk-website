var emailValidator = require('email-validator');
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
	service: 'Gmail',
	auth: {
		user: 'admin@crypti.me',
		pass: '4g92kut51'
	}
});

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

		return res.render("about", {title: "About", correspondents: correspondents, members : members, partnerships: partnerships,  description: "Take a look at the team which makes hard problems simple and maintain Crypti on a regular basis.", words: "crypti, contact, foundation, team, dapp, dapps, decentralized application, dapp store, crypto, currency, cryptocurrency, smart contracts, smart contract, decentralized applications, wallet, blockchain"});
	});

	app.post('/about', function (req, res) {
		var name = req.body.name,
			email = req.body.email,
			company = req.body.company,
			message = req.body.message;

		if (!name || name.trim().length == 0 || name.length > 64) {
			return res.json({success : false, error: "Incorrect name"});
		}

		if (!email || !emailValidator.validate(email)) {
			return res.json({success: false, error : "Incorrect email address"});
		}

		if (company && (company.trim().length == 0 || company.length > 64)) {
			return res.json({success: false, error: "Incorrect company"});
		}

		if (!message || message.trim().length == 0) {
			return res.json({success: false, error: "Incorrect message"});
		}

		var message = 'Name: ' + name + "\n" + "Email: " + email + "\n" + (company? "Company: " + company + "\n" : "") + "Message: " + "\n" + message;

		var mailOptions = {
			from: 'Crypti Admin <admin@crypti.me>', // sender address
			to: 'max@crypti.me, stas@crypti.me, boris@crypti.me', // list of receivers
			subject: 'Partner Message From Crypti.me', // Subject line
			text: message
		};

		transporter.sendMail(mailOptions, function(error, info){
			if(error) {
				console.log(error);
				return res.json({success: false, error: "Something wrong with our smtp channel, please, contact admins"});
			}

			console.log('Message sent: ' + info.response);
			return res.json({success: true});
		});
	});
}