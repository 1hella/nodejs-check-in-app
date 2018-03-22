var express = require('express');
var router = express.Router();
const common = require('../modules/common');

router.post('/admin', (req, res) => {
    common.renderAdmin(res);
});

router.get('/admin', (req, res) => {
    common.renderLoginError(res);
})

module.exports = router;