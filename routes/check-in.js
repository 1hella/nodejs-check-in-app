var express = require('express');
var router = express.Router();

router.post('/check-in', (req, res) => {
    let id = req.body.id;
    if (id) {
        res.render('check-in', { title: 'Check-in', id: id });
    } else {
        res.render('admin', { title: 'Admin' })
    }
});

router.post('/stop-check-in/:id', (req, res) => {
    let id = req.params.id;
    res.render('history', { title: id + ' Check-in list' });
});

module.exports = router;