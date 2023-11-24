const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const OrderItem = sequelize.define('orderItem', { 
   id: {

   }
});


// progress:
// 11-171: import Sequelize and sequelize @models/order-item
// 11-171: create OrderItem model base
// 11-171: add id property to OrderItem model