var express = require('express');
var router = express.Router();
var mysql=require('./SQL');

/* GET home page. */

router.get('/', function(req,res, next){
  //res.render('rank_search', { title: 'IGC', username: username, game: game});

  mysql.information(function (result) {
    game.t1.title = result[0].name;
    game.t1.score = result[0].star;
    game.t2.title = result[1].name;
    game.t2.score = result[1].star;
    game.t3.title = result[2].name;
    game.t3.score = result[2].star;
    game.t4.title = result[3].name;
    game.t4.score = result[3].star;
    game.t5.title = result[4].name;
    game.t5.score = result[4].star;
    game.t6.title = result[5].name;
    game.t6.score = result[5].star;
    game.t7.title = result[6].name;
    game.t7.score = result[6].star;
    game.t8.title = result[7].name;
    game.t8.score = result[7].star;
    game.t9.title = result[8].name;
    game.t9.score = result[8].star;
    game.t10.title = result[9].name;
    game.t10.score = result[9].star;
    res.render('rank_search', { title: 'IGC', username: username, game: game});
  });
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'IGC' });
});

router.get('/register', function(req, res, next) {
  res.render('register', { title: 'IGC' });
});



router.get('/auth',function (req,res,next) {

  var sql="select password from user where username='"+req.query.username+"'";

  mysql.connection.query(sql,function (err,result) {
    if(result[0].password==req.query.password){
      req.session.username=req.query.username;
      res.redirect('/');
      username=req.session.username;
    }
  })
})

router.get('/regist',function (req,res,next) {

  var sql="select password from user where username='"+req.query.username+"'";

  mysql.connection.query(sql,function (err,result) {
    if(result.length==0){
      var sql1="select count(user_id) from user";

      mysql.connection.query(sql1,function (err,result1) {
        var sql2="insert into user values('"+(result1[0]["count(user_id)"]+1)+"','"+req.query.username+"','"+req.query.email+"','"+req.query.password+"');";
        mysql.connection.query(sql2,function (err,ressult2) {
          res.redirect('/login');
        })
      })
    }
  })
})

//example data
var username = null;
var game = {
  t1: {
    title: "League of Legends",
    score: 9.5,
    type: 'MOBA',
    link: '/game?=lol'
  },
  t2: {
    title: "League of Legends",
    score: 9.5,
    type: 'MOBA',
    link: '/game?=lol'
  },
  t3: {
    title: "League of Legends",
    score: 9.5,
    type: 'MOBA',
    link: '/game?=lol'
  },
  t4: {
    title: "League of Legends",
    score: 9.5,
    type: 'MOBA',
    link: '/game?=lol'
  },
  t5: {
    title: "League of Legends",
    score: 9.5,
    type: 'MOBA',
    link: '/game?=lol'
  },
  t6: {
    title: "League of Legends",
    score: 9.5,
    type: 'MOBA',
    link: '/game?=lol'
  },
  t7: {
    title: "League of Legends",
    score: 9.5,
    type: 'MOBA',
    link: '/game?=lol'
  },
  t8: {
    title: "League of Legends",
    score: 9.5,
    type: 'MOBA',
    link: '/game?=lol'
  },
  t9: {
    title: "League of Legends",
    score: 9.5,
    type: 'MOBA',
    link: '/game?=lol'
  },
  t10: {
    title: "League of Legends",
    score: 9.5,
    type: 'MOBA',
    link: '/game?=lol'
  },
}

module.exports = router;
