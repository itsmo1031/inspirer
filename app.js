var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var crypto = require('crypto');
var app = express();

var passport = require('passport');


//--------------------------------------

var index = require('./routes/index');
var users = require('./routes/users');
var board = require('./routes/board');
var write = require('./routes/write');
var signup = require('./routes/signup');
var editUser = require('./routes/editUser');
var main = require('./routes/main');
var login = require('./routes/login');




// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');



// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);
app.use('/board', board);
app.use('/write', write);
app.use('/signup', signup);
app.use('/editUser', editUser);
app.use('/main', main);
app.use('/login', login);
//--------------------------------------



var myHash = function myHash(key) {
    var hash = crypto.createHash('sha1');
    hash.update(key);
    return hash.digest('hex');
}




// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});


// mongodb setup
mongoose.connect('mongodb://localhost/inspiring', {
    useMongoClient: true
});
mongoose.Promise = global.Promise;
var db = mongoose.connection;

//디비 접속확인
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log('db연결됨');
});
  require('./config/passport')(passport);



app.use(passport.initialize());
app.use(passport.session());
var session = require('express-session');
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}));



module.exports = app;
