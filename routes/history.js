var express = require('express');
var router = express.Router();
var mongoConnection = require('../modules/mongo_connection');

router.post('/history', (req, res) => {
    let id = req.body.id.toUpperCase();
    let db = mongoConnection.db();
    
    let options = {
        isActive: false
    };
    let title = 'Check-in history';
    if (id) {
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

module.exports = router;