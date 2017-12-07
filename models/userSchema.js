var mongoose = require('mongoose');
var bcrypt=require('bcrypt-nodejs');

var userSchema = mongoose.Schema({
    Userid: String,
    password: String,
    name: String,
    email: String,
    title: String,

});

//password를 암호화
userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};
//password의 유효성 검증
userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);
};


module.exports =  mongoose.model('UserContents', userSchema);