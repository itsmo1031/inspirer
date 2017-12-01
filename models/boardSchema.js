var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

var boardSchema = mongoose.Schema({
    writer: String,
    password: String,
    title: String,
    contents: String,
    like: {type:Number, default:0},
    date: {type:Date, default:Date.now},
    updated: [{contents:String, date:{type:Date, default:Date.now}}],
    deleted: {type:Boolean, default:false}
});

module.exports = mongoose.model('BoardContents', boardSchema);