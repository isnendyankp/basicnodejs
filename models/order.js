const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Order = sequelize.define('order', { 
    id: { 
        type: Sequelize.INTEGER, 
        autoIncrement: true, 
        allowNull: false, 
        primaryKey: true 
    }
});

module.exports = Order;

// progress:
// 11-171: import Sequelize and sequelize
// 11-171: create Order model base
// 11-171: add id property to Order model
// 11-171: export Order model