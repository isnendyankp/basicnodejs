const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const OrderItem = sequelize.define('orderItem', { 
   id: {
         type: Sequelize.INTEGER,
         autoIncrement: true,
         allowNull: false,
         primaryKey: true
    },
    quantity: Sequelize.INTEGER
});


// progress:
// 11-171: import Sequelize and sequelize @models/order-item
// 11-171: create OrderItem model base
// 11-171: add id property to OrderItem model
// 11-171: type, autoIncrement, allowNull & primaryKey properties to id property
// 11-171: add quantity property to OrderItem model