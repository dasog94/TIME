var express = require("express");
var router = express.Router();
import ArchieveModel from "../db/archieve";

/* GET archieving page. */
router.get("/", function(req, res, next) {
    ArchieveModel.find({}, (err, archievings) => {
        res.render("archieving.ejs", { archievings: archievings });
    });
});

router.get("/upload", function(req, res) {
    res.render("archieve_upload.ejs");
});

router.post("/upload", function(req, res) {
    const archieve = new ArchieveModel(req.body);
    archieve.save(function(err) {
        if (err) {
            console.log(err);
            res.redirect("/");
        } else {
            console.log("Created");
            res.redirect("/archieving");
        }
    });
});

module.exports = router;