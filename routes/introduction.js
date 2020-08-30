var express = require('express');
var router = express.Router();

/* GET introduction page. */
router.get('/introduction', function (req, res, next) {
    res.render('introduction.html');
});

module.exports = router;