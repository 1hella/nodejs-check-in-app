var express = require('express');
var router = express.Router();
var connection = require('../data/mongo_connection');

router.get('/student-check-in', (req, res) => {
    res.render('student-check-in', {
        title: 'Student check-in'
    });
});

router.post('/student-check-in', (req, res) => {
    let db = connection.db();
    let id = req.body.id.toUpperCase();
    
    db.collection('checkIns', (err, collection) => {
        collection.updateOne({
            id: id,
            isActive: true
        }, {
            $push: {
                users: {
                    name: req.body.name,
                    userId: req.body['user-id']
                }
            }
        }, (err, result) => {
            if (err) {
                res.writeHead(500, err);
            } else if (result.result.n === 0) {
                res.writeHead(404, `Check-in not found for ${req.body.id}`);
            }

            res.end();
        });
    });
});

module.exports = router;