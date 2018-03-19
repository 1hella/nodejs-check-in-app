var express = require('express');
var router = express.Router();

router.get('/success', (req, res) => {
    res.render('success', { title: 'Check-in complete' });
});

module.exports = router;