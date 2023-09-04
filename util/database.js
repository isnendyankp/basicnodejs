// const mysql = require('mysql2');
// const pool = mysql.createPool({
//     host: 'localhost',
//     user: 'root',
//     database: 'node-complete',
//     password: '#Semogasukses27'
// });
// module.exports = pool.promise();

const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', '#Semogasukses27');

// - S10-140:Cr8 database.js file & import mysql
// - S10-140:Cr8 base for mysql.createPool
// - S10-140:Add information for pool
// - S10-140:Export pool.promise
// - S11-151: remove mysql2 connect for setup Sequelize
// - S11-151: cr8 sequelize instant with call Sequelize
// - S11-151: Add schema name, username, pass on Sequelize