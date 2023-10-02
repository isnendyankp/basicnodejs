const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const User = sequelize.define('user', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: sequelize.STRING,
    email: sequelize.STRING
});


// progress:
// S11-161: define Sequelize
// S11-161: define sequelize on database
// S11-161: define User model
// S11-161: Add structure of the user model
// S11-161: Add id field @user model
// S11-161: Add type field @user model>id
// S11-161: Add autoIncrement field @user model>id
// S11-161: Add allowNull field @user model>id
// S11-161: Add primaryKey field @user model>id
// S11-161: Add name field @user model
// S11-161: Add email field @user model