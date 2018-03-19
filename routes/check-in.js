var express = require('express');
var router = express.Router();
var connection = require('../data/mongo_connection');

router.post('/check-in', (req, res) => {
    var db = connection.db();
    let id = req.body.id;
    
    if (id) {
        id = id.toUpperCase();
        db.collection('checkIns').findOne({
                id: id,
                isActive: true
            },
            (err, result) => {
                if (err) {
                    console.log(err);
                }

                if (!result) {
                    db.collection('checkIns').insertOne({
                        id: id,
                        isActive: true,
                        date: new Date(),
                        users: []
                    }, err => {
                        res.render('check-in', {
                            title: 'Check-in',
                            id: id,
                            error: err
                        });
                    });
                } else {
                    res.render('check-in', {
                        title: 'Check-in',
                        id: id
                    });
                }
            });
    } else {
        res.render('admin', {
            title: 'Admin'
        })
    }
});

module.exports = router;