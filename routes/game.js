var express = require('express');
var express = require('express');
var router = express.Router();
var mysql=require('./SQL');

router.get('/', function (request, response) {
    //用这个去数据库找游戏信息和评论信息
    request.query.name;
    //渲染页面
    if(typeof username == "undefined") username = null;
    let gameInfo = {name: '英雄联盟', rating: 3, intro:'Note that depending on how the' +
            'y are used, badges may be confusing for users of screen readers and sim' +
            'ilar assistive technologies. While the styling of badges provides a visual' +
            ' cue as to their purpose, these users will simply be presented with the cont' +
            'ent of the badge. Depending on the specific situation, these badges may seem' +
            ' like random additional words or numbers at the end of a sentence, link, o' +
            'r button.', type: 'MOBA',img:'/image/shili.jpg'};
    let comments = [
        {
            time:'2020',
            username:'bb',
            content:'rimi',
            rate: 8
        },
        {
            time:'2020',
            username:'bb',
            content:'太傻逼了太傻逼了太傻逼了太傻逼了太傻逼了太傻逼了太傻逼了太傻逼了太傻逼了太傻逼了太傻逼了太傻逼了太傻逼了太傻逼了',
            rate: 8
        }
    ]

    response.render('comment', {title:'IGC', username: 'abc', gameInfo: gameInfo, comments: comments})
})

module.exports = router;
