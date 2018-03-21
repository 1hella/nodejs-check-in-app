'use strict';

var express = require('express');
var router = express.Router();
const common = require('../modules/common');

const ADMIN_USERNAME = 'admin';
const ADMIN_PASSWORD = '1234';

router.post('/', (req, res) => {
  let username = req.body.username;
  let password = req.body.password;
  if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
    common.renderAdmin(res);
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
