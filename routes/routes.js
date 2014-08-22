var express = require('express');
var router = express.Router();


router.get('/', function(req, res) {
    res.redirect('/index');
});

/* GET home page. */
router.get('/index', function(req, res) {
  res.render('index', { title: '首页' });
});

/* GET users listing. */
router.get('/users', function(req, res) {
  res.render('users', { title: '列表' });
});

module.exports = router;