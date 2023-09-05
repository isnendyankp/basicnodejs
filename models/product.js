const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Product = sequelize.define('product',{
    id: {
        type: Sequelize.INTEGER
    },
});

// - S11-152:cr8 Sequelize for import sequelize
// - S11-152:import sequelize  database pool managed by sequelize
// - S11-152:cr8 Product for define module by sequelize
// - S11-152:Add product as a module name
// - S11-152:Setup second argument for structure
// - S11-152:Setup base id as a property
// - S11-152:Add type data for id property