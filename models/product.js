const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Product = sequelize.define()

// - S11-152:cr8 Sequelize for import sequelize
// - S11-152:import sequelize  database pool managed by sequelize
// - cr8 Product for define module that will be managed by sequelize