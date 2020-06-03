var express = require('express');
var router = express.Router();
var mysql=require('./SQL');

/* GET home page. */
router.get('/login', function(req, res, next) {
  res.render('login', { title: 'IGC' });
});

router.get('/register', function(req, res, next) {
  res.render('register', { title: 'IGC' });
});

router.get('/', function(req, res, next) {
  res.render('rank_search', { title: 'IGC', username: username, game: game});
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
        var sql2="insert into user values('"+(result1[0]["count(user_id)"]+1)+"','"+req.query.username+"','"+req.query.password+"','"+req.query.email+"');";
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
