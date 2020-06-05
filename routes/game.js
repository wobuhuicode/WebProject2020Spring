var express = require('express');
var url = require('url');
var router = express.Router();
var mysql=require('./SQL');

router.get('/', function (request, response) {
    //用这个去数据库找游戏信息和评论信息
    request.query.name;
    //渲染页面
    if(typeof username == "undefined") username = null;
    /*let gameInfo = {name: '英雄联盟', rating: 3, intro:'Note that depending on how the' +
            'y are used, badges may be confusing for users of screen readers and sim' +
            'ilar assistive technologies. While the styling of badges provides a visual' +
            ' cue as to their purpose, these users will simply be presented with the cont' +
            'ent of the badge. Depending on the specific situation, these badges may seem' +
            ' like random additional words or numbers at the end of a sentence, link, o' +
            'r button.', type: 'MOBA',img:'/image/shili.jpg'};*/
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
    function result(data){
        if(data.code==0) alert("评论失败！");
        else if(data.code==1) alert("更新成功！");
        else alert("评论成功！");
    }
})

module.exports = router;
