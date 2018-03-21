'use strict';

var express = require('express');
var router = express.Router();
var mongoConnection = require('../modules/mongo_connection');
const common = require('../modules/common');
var ObjectId = require('mongodb').ObjectID;

router.post('/check-in', (req, res) => {
    var db = mongoConnection.db();
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
                    }, (err, result) => {
                        res.render('check-in', {
                            title: `${id} Check-in`,
                            id: id,
                            error: err,
                            doc: result.ops[0]
                        });
                    });
                } else {
                    res.render('check-in', {
                        title: `${id} Check-in`,
                        id: id,
                        doc: result
                    });
                }
            });
    } else {
        common.renderAdmin(res);
    }
});

router.delete('/check-in/:id', (req, res) => {
    let _id = req.params.id;
    let db = mongoConnection.db();

    db.collection('checkIns').deleteOne({
        _id: new ObjectId(_id)
    }, err => {
        if (err) {
            res.write(500, err);            
        }
        
        res.end();
    })
});

module.exports = router;
