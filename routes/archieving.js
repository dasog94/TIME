var express = require("express");
var router = express.Router();

/* GET archieving page. */
router.get("/", function(req, res, next) {
    res.render("archieving.ejs");
});

router.get("/upload", function(req, res) {
    res.render("archieve_upload.ejs");
});

module.exports = router;