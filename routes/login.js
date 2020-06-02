var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/login', function(req, res, next) {
  res.render('login', { title: 'IGC' });
});

router.get('/', function(req, res, next) {
  res.render('rank_search', { title: 'IGC' });
});

module.exports = router;
