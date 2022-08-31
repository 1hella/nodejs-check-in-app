'use strict';

var express = require('express');
var router = express.Router();
var mongoConnection = require('../modules/mongo_connection');
var common = require('../modules/common');

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
            title: 'Event Check-in History',
            docs: docs,
            base_dir: '..'
        });
    });
});

router.get('/stop-check-in/', (req, res) => {
    common.renderLoginError(res);
});

module.exports = router;
