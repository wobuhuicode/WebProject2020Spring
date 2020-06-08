var express = require('express');
var url = require('url');
var router = express.Router();
var mysql=require('./SQL');

router.get('/', function (request, response) {
    //用这个去数据库找游戏信息和评论信息
    request.query.name;
    //渲染页面
    if(typeof username == "undefined") username = null;
    mysql.updatecomment(request.query.name,addInfo);
    function addInfo(comments,gameInfo){
        response.render('comment', {title:'IGC', username: 'abc', gameInfo: gameInfo, comments: comments})
    }
})
router.get('/comment',function(req,res){
    let params = url.parse(req.url, true).query;
    let gamename1 = params.gamename;
    let star = params.cRating;
    let comment = params.commentText;
    let username = params.username;
    mysql.addcomments(gamename1,star,comment,username);
})

module.exports = router;
