module.exports = function (app) {
	app.get('/mediakit', function (req, res) {
		return res.render('mediakit', {title: "Media Kit"});
	});
}
