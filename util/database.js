const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'node-complete',
    password: 'nodecomplete'
});

module.exports = pool.promise();

// - S10-140:Cr8 database.js file & import mysql
// - S10-140:Cr8 base for mysql.createPool
// - S10-140:Add information for pool
// - S10-140:Export pool.promise