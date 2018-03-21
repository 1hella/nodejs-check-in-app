'use strict';

const MongoClient = require('mongodb').MongoClient;
let state = {
    db: null
}

module.exports.connect = (url, dbName, callback) => {
    MongoClient.connect(url, (err, client) => {
        if (err) {
            console.log(err);
        } else {
            state.db = client.db(dbName);
        }

        callback(err);
    });
}

module.exports.db = () => {
    return state.db;
}
