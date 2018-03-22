var express = require('express');
var router = express.Router();

const common = require('../modules/common');

const ADMIN_USERNAME = 'admin';
const ADMIN_PASSWORD = '1234';

router.get('/login', (req, res) => {
    res.render('login', { title: 'Login' });
});

router.post('/login', (req, res) => {
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

module.exports = router;