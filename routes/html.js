const path = require("path");

module.exports = function(app) {
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/temp.html"));
    });

    app.get("/gallery", function(req, res){
        res.sendFile(path.join(__dirname, "../public/gallery.html"));
    });

    app.get("/contact", function(req, res){
        res.sendFile(path.join(__dirname, "../public/form.html"));
    });
};