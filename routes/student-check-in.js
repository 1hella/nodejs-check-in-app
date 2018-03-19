var express = require('express');
var router = express.Router();

router.get('/student-check-in', (req, res) => {
    res.render('student-check-in', { title: 'Student check-in'});
});

router.post('/student-check-in', (req, res) => {
    // res.writeHead(403, `Check-in ${req.body.id} is not open right now`);
    res.end();
});

module.exports = router;