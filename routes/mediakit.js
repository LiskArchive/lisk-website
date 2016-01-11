module.exports = function (app) {
	app.get('/mediakit', function (req, res) {
		//return res.send(404);
		return res.render('mediakit', {title: "Media Kit"});
	});
}