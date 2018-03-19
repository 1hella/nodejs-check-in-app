var express = require('express');
var router = express.Router();
var connection = require('../data/mongo_connection');

router.post('/check-in', (req, res) => {
    var db = connection.db();
    let id = req.body.id;
    if (id) {
        id = id.toUpperCase();
        db.collection('currentCheckIns', (err, collection) => {
            collection.update({
                    id: id
                }, {
                    id: id,
                    date: new Date()
                }, {
                    upsert: true
                },
                err => {
                    if (err) {
                        console.log(err);
                    }

                    res.render('check-in', {
                        title: 'Check-in',
                        id: id,
                        error: err
                    });
                });
        });
    } else {
        res.render('admin', {
            title: 'Admin'
        })
    }
});

router.post('/stop-check-in/:id', (req, res) => {
    let id = req.params.id;
    res.render('history', {
        title: id + ' Check-in list'
    });
});

module.exports = router;