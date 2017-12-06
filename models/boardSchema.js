var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

var boardSchema = mongoose.Schema({
    title: String,
    author: String,
    contents: String,
    like: {type:Number, default:0},
    date: {type:Date, default:Date.now},
    updated: [{title: String, contents:String, date:{type:Date, default:Date.now}}],
    deleted: {type:Boolean, default:false}
});

module.exports = mongoose.model('BoardContents', boardSchema);