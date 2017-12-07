var express = require('express');
var router = express.Router();
var UserContents= require('../models/userSchema');
var crypto =require('crypto');


function hash(password) {
    return crypto.createHmac('sha256', process.env.SECRET_KEY).update(password).digest('hex');
}


router.get('/', function (req, res) {
    res.render('Signup', {title:"Signup"});
});



router.post('/', function(req, res){
    // 가입작성하고 submit하게 되면 저장이 되는 부분
    var addNewUserid = req.body.Userid;
    var addNewpassword = req.body.password;
    var addNewname = req.body.name;
    var addNewemail = req.body.email;
    addSignup(addNewUserid, addNewpassword, addNewname, addNewemail);
    res.redirect('/signup');

});

//form에 입력된 정보를 req.body를 통해 받아오고 데이터베이스에 저장하는 함수 addSignup 사용해 저장
function addSignup(Userid, password, name, email){
    var newSignupContents = new UserContents;

    newSignupContents.Userid = Userid;
    newSignupContents.password = password;
    newSignupContents.name = name;
    newSignupContents.email = email;
    newSignupContents.save(function (err) {
        if (err) throw err;
        console.log("DB successfully saved.");
    });
}


module.exports = router;