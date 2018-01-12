var collaborations = [
	{
		name: "lightcurve",
		img: "lightcurve",
		url: "http://www.lightcurve.io"
	},
	{
		name: "Taikonauten",
		img: "taikonauten",
		url: "http://taikonauten.com"
	},
	{
		name: "WachsmanPR",
		img: "wachsmanpr",
		url: "http://wachsmanpr.com"
	},
	{
		name: "Bitcoin Suisse AG",
		img: "bitcoinsuisse",
		url: "https://www.bitcoinsuisse.ch"
	},
	{
		name: "MME",
		img: "mme",
		url: "https://www.mme.ch"
	}
];

const relaunchPopup = {
	location: 'Westhafen event and conversion center',
	address: 'Westfafenstraße 1, Berlin',
	dateTime: {
		day: 'Tuesday',
		date: '20 of February 2018',
		time: '7:30 pm',
	}
};


module.exports = function (app) {
	app.get("/relaunch", function (req, res) {
		res.render('relaunch', {
			pageId: "relaunch",
		});
	});
}
