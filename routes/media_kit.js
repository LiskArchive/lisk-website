module.exports = function (app) {
	app.get('/media_kit', function (req, res) {
		return res.render('media_kit', {pageId: "media_kit", title: "Media Kit", hasScript: false});
	});
}
