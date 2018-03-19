var express = require('express');
var router = express.Router();

const ADMIN_USERNAME = 'admin';
const ADMIN_PASSWORD = '1234';

router.post('/', (req, res) => {
  let username = req.body.username;
  let password = req.body.password;
  if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
    res.render('admin', {
      title: 'Admin'
    });
  } else {
    res.render('login', {
      title: 'Login',
      error: 'Incorrect username or password'
    });
  }
});

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('login', {
    title: 'Login'
  });
});

module.exports = router;