const Seqeulize = require('sequelize');

const sequelize = require('../util/database');

const CartItem = sequelize.define('cartItem', {
    id: {
        type: Seqeulize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    quantity: Seqeulize.INTEGER
});

module.exports = CartItem;


// Progress:
// s11-166:Import sequelize from database file
// s11-166:Define CartItem model with sequelize.define() & name it cartItem
// s11-166:Add id property to cartItem model
// s11-166:Export cartItem model
// s11-166:Add quantity property to cartItem model