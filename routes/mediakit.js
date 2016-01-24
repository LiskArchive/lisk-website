module.exports = function (app) {
	app.get('/mediakit', function (req, res) {
		return res.render('mediakit', {pageId: "mediakit", title: "Media Kit", hasScript: false});
	});
}
