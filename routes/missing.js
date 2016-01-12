module.exports = function (app) {
	app.get("/missing", function (req, res) {
		return res.render("missing", {title: "404 - Page Not Found"});
	})
}
