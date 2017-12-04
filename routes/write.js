var express = require('express');
var router = express.Router();
var spell = require('spellchecker');

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('write', {title: 'inspiring'});
});

module.exports = router;