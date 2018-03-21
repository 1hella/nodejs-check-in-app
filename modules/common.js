'use strict';

const mongoConnection = require('./mongo_connection');
const CHECK_IN_COLLECTION = 'checkIns';

module.exports.renderAdmin = res => {
    let db = mongoConnection.db();
    db.collection('checkIns').find({
        isActive: true
    }).toArray((err, result) => {
        res.render('admin', { title: 'Admin panel', docs: result});
    });
}
