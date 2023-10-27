const Seqeulize = require('sequelize');

const sequelize = require('../util/database');

const Cart = sequelize.define('cart', {
    id: {
        type: Seqeulize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    }
});

module.exports = Cart;


// progress:
// s11-166:Import Sequelize 
// s11-166:Import sequelize from database file
// s11-166:Define Cart model with sequelize.define() & name it cart
// s11-166:Add id property to cart model
// s11-166:Export cart model