'use strict';

var express = require('express');
var router = express.Router();
var mongoConnection = require('../modules/mongo_connection');
var common = require('../modules/common');

router.post('/history', (req, res) => {
    let id = req.body.id;
    let db = mongoConnection.db();
    
    let options = {
        isActive: false
    };
    let title = 'Event Check-in History';
    if (id) {
        id = id.toUpperCase();
        options.id = id;
        title += ` for ${id}`;
    }

    db.collection('checkIns').find(options).toArray((err, result) => {
        res.render('history', {
            title: title,
            docs: result
        });
    })
});

router.get('/history', (req, res) => {
    common.renderLoginError(res);
})

module.exports = router;
