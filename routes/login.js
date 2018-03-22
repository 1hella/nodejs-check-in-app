var express = require('express');
var router = express.Router();

const common = require('../modules/common');

const ADMIN_USERNAME = 'admin';
const ADMIN_PASSWORD = '1234';

router.get('/login', (req, res) => {
    common.renderLogin(res);
});

router.post('/login', (req, res) => {
    let username = req.body.username;
    let password = req.body.password;
    if (username.trim().toUpperCase() === ADMIN_USERNAME.trim().toUpperCase() && password === ADMIN_PASSWORD) {
        common.renderAdmin(res);
    } else {
        res.render('login', {
            title: 'Login',
            error: 'Incorrect username or password',
            incorrectPassword: true
        });
    }
});

module.exports = router;