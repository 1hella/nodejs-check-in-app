var express = require('express');
var router = express.Router();

router.post('/history', (req, res) => {
    let id = req.body.id;
    res.render('history', { title: 'Check-in history' });
});

module.exports = router;