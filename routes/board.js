var express = require('express');
var router = express.Router();

router.post('/write.do', function(req, res){
    // 글 작성하고 submit하게 되면 저장이 되는 부분
    var addNewTitle = req.body.addContentSubject;
    var addNewAuthor = req.body.addContentAuthor;
    var content = document.getElementById('writeframe');
    var addNewContent = content.contentDocument || content.contentWindow.document;
    //var addNewContent = req.body.addContents.text();

    console.log("POST SUBMIT SUCCESS.");
    console.log(addNewTitle + addNewAuthor + addNewContent);
//res.redirect('/board');
});

module.exports = router;