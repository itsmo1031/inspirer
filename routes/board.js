var express = require('express');
var router = express.Router();
var BoardContents = require('../models/boardSchema');

router.post('/write.do', function(req, res){
    // 글 작성하고 submit하게 되면 저장이 되는 부분
    var addNewTitle = req.body.addContentSubject;
    var addNewAuthor = req.body.addContentAuthor;
    var addNewContent = req.body.addContents;
    var addNewAlign = req.body.addAlign;


    console.log(addNewAlign + "\n" + addNewTitle + "\n" + addNewAuthor + "\n" + addNewContent);

    addBoard(addNewTitle, addNewAuthor, addNewContent, addNewAlign)

    console.log("POST SUBMIT SUCCESS.");

    res.redirect('/board/');
});

router.get('/detail', function(req, res){
   var contentId = req.query.id;

   BoardContents.findOne({_id:contentId}, function(err, rawContent){
       if(err) throw err;
       //rawContent.count += 1;
       //var reply_pg = Math.ceil(rawContent.comments.length/5);
       var realContent = rawContent.contents.innerHTML;

       rawContent.save(function(err){
           if(err) throw err;

           res.render('detail',{title: "inspiring", content:rawContent, rContent:realContent});
       });
   });

});

function addBoard(title, author, content, align){
    var newBoardContents = new BoardContents;

    newBoardContents.author = author;
    newBoardContents.title = title;
    newBoardContents.contents = content;
    newBoardContents.align = align;
    newBoardContents.save(function (err) {
        if (err) throw err;
    });
}

module.exports = router;