var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/', function(req, res, next) {
    res.render('pages/add');
});

router.post('/', function(req, res, next) {
    var data=req.body;
    console.log(data);
    res.send(true);
});
module.exports = router;
