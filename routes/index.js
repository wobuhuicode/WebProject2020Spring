var express = require('express');
var router = express.Router();
var sql = require('./SQL');
var url = require('url');

router.get('/login', function(req, res, next) {
    res.render('login',{title:'IGC'});
});
router.get('/register', function(req, res, next) {
    res.render('register', { title: 'IGC' });
});
router.post('/auth',function (req,res) {
    if(typeof req.body.username == "undefined"){
        res.redirect("/login");
    }else {
        sql.my_user_exist(req.body.username,function (ret) {
            if(ret < 1){
                res.render("error",{
                    message:"用户不存在！",
                    error:{
                        status:"换个名字试试",
                        stack:"姓名输入有问题"
                    }
                });
            }else {
                sql.user_exist(req.body.username, function (result) {
                    if (result[0].password == req.body.password) {
                        req.session.username=req.body.username;
                        res.redirect('/?user_name=' + req.session.username);
                    }else{
                        res.render("error",{
                            message:"用户名正确但是密码错误！",
                            error:{
                                status:"重新试试密码",
                                stack:""
                            }
                        });
                    }
                });
            }
        });
    }
});
//注册页面，根据数据库现有的用户数量获取下一应该分配的id大小
router.post('/regist',function (req,res) {
    if(typeof req.body.username == "undefined"){
        res.redirect("/login");
    }else{
        sql.user_exist(req.body.username, function (result) {
            if (result.length == 0) {
                sql.get_count(function (rest) {
                    sql.create_new_user(rest[0].num * 1, req.body.username, req.body.email, req.body.password, function (re) {
                        res.redirect('/login');
                    })
                });
            }else {
                res.render("error",{
                    message:"您已经注册了！",
                    error:{
                        status:"快去登录吧！",
                        stack:"http://localhost:3000/login"
                    }
                });
            }
        });
    }
});
//登出
router.post('/logout',function (req,res) {
    req.session.destroy()//清除session
    res.redirect('/login');
})
//进入检索界面
router.get('/', function(req, res, next) {
    if(typeof req.session.username == "undefined"){
        res.redirect("/login");
    }else {
        sql.information(function (result) {
            res.render('rank_search.ejs', {
                title: "Search",
                username: req.session.username,//这个参数需要登录的部分传过来
                game: {
                    t1: {
                        title: result[0].NAME,
                        score: result[0].STAR,
                        link: result[0].link,
                        type: result[0].type
                    },
                    t2: {
                        title: result[1].NAME,
                        score: result[1].STAR,
                        link: result[1].link,
                        type: result[1].type
                    },
                    t3: {
                        title: result[2].NAME,
                        score: result[2].STAR,
                        link: result[2].link,
                        type: result[2].type
                    },
                    t4: {
                        title: result[3].NAME,
                        score: result[3].STAR,
                        link: result[3].link,
                        type: result[3].type
                    },
                    t5: {
                        title: result[4].NAME,
                        score: result[4].STAR,
                        link: result[4].link,
                        type: result[4].type
                    },
                    t6: {
                        title: result[5].NAME,
                        score: result[5].STAR,
                        link: result[5].link,
                        type: result[5].type
                    },
                    t7: {
                        title: result[6].NAME,
                        score: result[6].STAR,
                        link: result[6].link,
                        type: result[6].type
                    },
                    t8: {
                        title: result[7].NAME,
                        score: result[7].STAR,
                        link: result[7].link,
                        type: result[7].type
                    },
                    t9: {
                        title: result[8].NAME,
                        score: result[8].STAR,
                        link: result[8].link,
                        type: result[8].type
                    },
                    t10: {
                        title: result[9].NAME,
                        score: result[9].STAR,
                        link: result[9].link,
                        type: result[9].type
                    }
                }
            });
        });
    }
});
//通过搜索展示消息
//下面的search-result和前端表单的action参数保持一致
router.post('/search-result', function (req, response) {
    sql.exist(req.body.game_name,function (result) {
        if(result < 1){
            response.render("error",{
                message:"未找到此游戏！Σ( ⚆൧⚆)",
                    error:{
                        status:"换个名字试试",
                        stack:"再看看其它的游戏吧！"
                }
            });
        }else {
            sql.update_comment(req.body.game_name, addInfo);

            function addInfo(comments, gameInfo) {
                response.render('comment', {
                    title: 'IGC',
                    username: req.body.user_name,
                    gameInfo: gameInfo,
                    comments: comments
                })
            }
        }
    });
});
//评论操作
router.get('/game/comment',function(req,res){
    let params = url.parse(req.url, true).query;
    let gamename1 = params.gamename;
    let star = params.cRating;
    let comment = params.commentText;
    let username = params.username;
    if(typeof username == "undefined" || typeof gamename1 == "undefined" || typeof star == "undefined"
    || typeof comment == "undefined"){
        res.redirect("/login");
    }else {
        sql.add_comments(gamename1, star, comment, username, function (ret) {
            res.redirect('/?user_name=' + username + '&game_name=' + gamename1);
        });

        function result(data) {
            if (data.code == 0) alert("评论失败！");
            else if (data.code == 1) alert("更新成功！");
            else alert("评论成功！");
        }
    }
});
module.exports = router;