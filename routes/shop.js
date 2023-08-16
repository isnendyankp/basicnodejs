const path = require('path');

const express = require('express');

const shopController = require('../controllers/shop');

const router = express.Router();

router.get('/', shopController.getIndex);

router.get('/products', shopController.getProducts);

router.get('/products/:productId', shopController.getProduct);

router.get('/cart', shopController.getCart);

router.get('/orders', shopController.getOrders);

router.get('/checkout', shopController.getCheckout);

module.exports = router;


// progress:
// - import path for res.sendFile
// - import express
// - import util-path & cr8 rootDir for easy access navigation sendfile.
// - access to the product with import adminData.
// - cr8 router object by calling express.router as a function
// - The function router.get() in middleware is used to handle incoming GET HTTP requests in Express.js. : 
// - rendering template shop with object contains data {prods: products} & pass in with additional key path: path: '/'
// - export the router
// - add new key value pair & pass into template : hasProducts: products.length > 0,
// - add property activeShop & set it into true for pass from main layout.hbs
// - add property productCSS & set it into true for pass from main layout.hbs 
// - unenable rootDir & adminData
// - import with cr8 variable productsController
// - pass in productsController getProducts
// - Registering Routes: product,cart&checkout
// - change path router into shopController
// - fix path all router controller for each part
// - Add orders route with controller getOrders
// - cr8 base dynamic params segment the ID
// - Fix route path shopController to getProduct function