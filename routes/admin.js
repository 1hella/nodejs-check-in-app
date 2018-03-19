var express = require('express');
var router = express.Router();
const common = require('../modules/common');

router.post('/admin', (req, res) => {
    common.renderAdmin(res);
});

module.exports = router;