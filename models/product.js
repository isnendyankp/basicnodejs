const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Product = sequelize.define('product',{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
});

// - S11-152:cr8 Sequelize for import sequelize
// - S11-152:import sequelize  database pool managed by sequelize
// - S11-152:cr8 Product for define module by sequelize
// - S11-152:Add product as a module name
// - S11-152:Setup second argument for structure
// - S11-152:Setup base id as a property
// - S11-152:Add type data for id property
// - S11-152:Add autoIncrement for automatically increase every time a new product is added to the database.
// - S11-152:Add allowNull false for indicates that the value of the 'id' column will be automatically incremented every time a new product is added to the database.
// - S11-152:Add primaryKey true for used to uniquely identify each entity in the products table. By providing the id attribute as the primary key, Sequelize will manage it specifically in database operations.