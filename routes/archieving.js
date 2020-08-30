var express = require('express');
var router = express.Router();

/* GET archieving page. */
router.get('/archieving', function (req, res, next) {
    res.render('archieving.html');
});

module.exports = router;