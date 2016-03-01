var emailValidator = require('email-validator');
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
	host: 'localhost',
	port: '25',
	requireTLS: true,
	tls: { rejectUnauthorized: false }
});

module.exports = function (app) {
	app.get("/contact_us", function (req, res) {
		return res.render("contact_us", {pageId: "contact_us", title: "Contact Us",  description: "If you need to contact the Lisk team for business inquiries or personal matters, here you can.", words: "lisk, crypti, contact, dapp, dapps, decentralized application, dapp store, crypto, currency, cryptocurrency, smart contracts, smart contract, decentralized applications, wallet, blockchain", hasScript: true, isMap: true});
	});

	app.post('/contact_us', function (req, res) {
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
			from: 'Lisk Business <business@lisk.io>', // sender address
			replyTo: email,                           // reply to user
			to: 'business@lisk.io',                   // list of receivers
			subject: 'Contact Message From Lisk.io',  // subject line
			text: message
		};

		transporter.sendMail(mailOptions, function(error, info){
			if(error) {
				console.log(error);
				return res.json({success: false, error: "Failed to send message! Something went wrong on our server."});
			}

			console.log('Message sent: ' + info.response);
			return res.json({success: true});
		});
	});
}
