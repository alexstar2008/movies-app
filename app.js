'use strict';
const app = require('./config/express');
const {port} = require('./config/settings').server;
const db = require('./config/db');


db.on('open', function () {
    console.log('Database connection OK');
});
db.on('error', console.error.bind(console, `MongoDB connection error: `));

app.listen(port, (err) => {
    if (err) {
        return console.log(err);
    }
    console.log(`Server is listenin on port ${port}`);
});