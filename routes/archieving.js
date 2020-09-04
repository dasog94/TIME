var express = require("express");
var router = express.Router();
import ArchieveModel from "../db/archieve";

/* GET archieving page. */
router.get("/", function(req, res, next) {
    const p = req.query.page ? req.query.page : 1;
    const option = { page: p, limit: 13 };
    ArchieveModel.paginate({}, option, (err, result) => {
        res.render("archieving.ejs", {
            archievings: result.docs,
            page: p,
            hasNext: result.hasNextPage,
            hasPrev: result.hasPrevPage,
        });
    });
});

router.post("/pwconfirm", function(req, res, next) {
    const pw = req.body.password;
    if (pw === "xkdlaWkd") {
        res.redirect("/archieving/upload");
    } else {}
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