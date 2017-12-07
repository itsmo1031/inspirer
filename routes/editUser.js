var express = require('express');
var router = express.Router();
var mongoose    = require('mongoose');

// mongodb setup
var promise = mongoose.connect('mongodb://localhost/signup', {
    useMongoClient: true
});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    // we're connected!
    console.log('connected successfully');
});


/* GET home page.필수임 */
router.get('/', function (req, res, next) {
    res.render('editUser', {title: 'inspiring'});
});

module.exports = router;