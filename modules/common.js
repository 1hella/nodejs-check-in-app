'use strict';

const mongoConnection = require('./mongo_connection');
const CHECK_IN_COLLECTION = 'checkIns';

module.exports.renderAdmin = res => {
    let db = mongoConnection.db();
    db.collection('checkIns').find({
        isActive: true
    }).toArray((err, result) => {
        res.render('admin', {
            title: 'Admin panel',
            docs: result
        });
    });
}

module.exports.renderLoginError = res => {
    module.exports.renderLogin(res, {
        error: 'Please login to view this page'
    });
}

module.exports.renderLogin = (res, options) => {
    const TITLE = 'Login';
    if (!options) {
        options = {
            title: TITLE
        };
    } else if (!options.title) {
        options.title = TITLE;
    }

    res.render('login', options);
}