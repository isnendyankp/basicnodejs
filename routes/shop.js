// 1
const path = require('path');
// 2
const express = require('express');
// 3
// const rootDir = require('../util/path');
// 4
// const adminData = require('./admin');

// import products
const productsController = require('../controllers/products');
// 5
const router = express.Router();
// 6
router.get('/', productsController.getProducts);

// 7
module.exports = router;

// progress:
// 1. import path for res.sendFile
// 2. import express
// 3. import util-path & cr8 rootDir for easy access navigation sendfile.
// 4. access to the product with import adminData.
// 5. cr8 router object by calling express.router as a function
// 6. The function router.get() in middleware is used to handle incoming GET HTTP requests in Express.js. : 
// 6. rendering template shop with object contains data {prods: products} & pass in with additional key path: path: '/'
// 7. export the router
// 6. add new key value pair & pass into template : hasProducts: products.length > 0,
// 6. add property activeShop & set it into true for pass from main layout.hbs
// 6. add property productCSS & set it into true for pass from main layout.hbs 
// 3&4. unenable rootDir & adminData
// import with cr8 variable productsController
// pass in productsController with controller getProducts