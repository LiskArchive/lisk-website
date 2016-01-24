module.exports = function (app) {
	app.get("/missing", function (req, res) {
		return res.render("missing", {pageId: "missing", title: "404 - Page Not Found", hasScript: false});
	})
}
