var express = require('express');
var router = express.Router();
var mongoConnection = require('../modules/mongo_connection');

router.post('/history', (req, res) => {
    let id = req.body.id;
    let db = mongoConnection.db();

    db.collection('checkIns').find({
        isActive: false
    }).toArray((err, result) => {
        res.render('history', {
            title: 'Check-in history',
            docs: result
        });
    })
});

module.exports = router;