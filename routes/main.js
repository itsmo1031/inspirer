var express = require('express');
var router = express.Router();
var passport = require('passport');




/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('main', {title: 'inspiring'});
});

module.exports = router;

router.post('/signup', passport.authenticate('signup', {
    successRedirect : '/main',
    failureRedirect : '/signup', //가입 실패시 redirect할 url주소
    failureFlash : true
}))

router.post('/login', passport.authenticate('login', {
    successRedirect : '/main',
    failureRedirect : '/login', //로그인 실패시 redirect할 url주소
    failureFlash : true
}))



module.exports = router;