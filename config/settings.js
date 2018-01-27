'use strict';

const db = {
    connectionString: 'mongodb://root:970619@ds213688.mlab.com:13688/sandbox' || process.env.MONGO_STR
};

const server = {
    port: process.env.PORT || 3000
}

module.exports = { db, server };