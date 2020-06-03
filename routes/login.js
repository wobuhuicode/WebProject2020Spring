var express = require('express');
var router = express.Router();

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

//example data
var username = 'yang xinqi';
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
