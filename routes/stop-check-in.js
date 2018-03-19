var express = require('express');
var router = express.Router();
var mongoConnection = require('../data/mongo_connection');

router.post('/stop-check-in/:id', (req, res) => {
    let db = mongoConnection.db();
    let id = req.params.id;
    db.collection('checkIns').findAndModify({
        id: id,
        isActive: true
    }, [
        ['id', 1]
    ], {
        $set: {
            isActive: false
        }
    }, {
        new: true
    }, (err, result) => {
        let docs = [];
        if (result.value) {
            docs = [result.value];
        }
        res.render('history', {
            title: id + ' Check-in list',
            docs: docs
        });
    });
});

module.exports = router;