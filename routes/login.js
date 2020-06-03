var express = require('express');
var router = express.Router();
var sql = require('./SQL');

/* GET home page. */
router.get('/login', function(req, res, next) {
  res.render('login', { title: 'IGC' });
});

router.get('/', function(req,res, next){
  //res.render('rank_search', { title: 'IGC', username: username, game: game});

  sql.information(function (result) {
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

//example data
var username = 'yang xinqi';


var game = {
  t1: {
    title: "fuck",
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
