var express = require('express');
var router = express.Router();
var crypto = require('crypto');



function hash(password) {
    return crypto.createHmac('sha256', process.env.SECRET_KEY).update(password).digest('hex');
}


router.get('/', function (req, res) {
    var addNewUserid = req.body.Userid;
    var addNewpassword = req.body.password;
    var addNewname = req.body.name;
    var addNewemail = req.body.email;
    addSignup(addNewUserid, addNewpassword, addNewname, addNewemail);
    res.render('login', {title: "login"});
});




module.exports = router;


