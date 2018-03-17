var express = require('express');
var router = express.Router();

router.post('/admin', (req, res) => {
    res.render('admin', { title: 'Admin' });
});

module.exports = router;