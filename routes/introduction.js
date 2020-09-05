import express from "express";
var router = express.Router();

/* GET introduction page. */
router.get("/", function(req, res, next) {
    res.render("introduction.ejs");
});

const introductionRouter = router;
export default introductionRouter;