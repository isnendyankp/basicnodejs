const Seqeulize = require('sequelize');

const sequelize = require('../util/database');

const CartItem = sequelize.define('cartItem', {

});


// Progress:
// s11-166:Import sequelize from database file
// s11-166:Define CartItem model with sequelize.define() & name it cartItem