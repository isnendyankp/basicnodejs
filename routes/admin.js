const path = require('path');

const express = require('express');

const adminController = require('../controllers/admin');

const router = express.Router();

// /admin/add-product => GET
router.get('/add-product', adminController.getAddProduct);

// /admin/products => GET
router.get('/products';

// /admin/add-product => POST
router.post('/add-product', adminController.postAddProduct);

module.exports = router;

// - add 3 property & make it true for render: formsCSS: true, productCSS: true, activeAddProduct: true
// - move get controller function middleware to products.js
// - import productsController on product.js
// - pass in productsController getAddProduct
// - move post controller function middleware  to products.js
// - pass in productsController postAddProduct
// - export the router
// - Registering Routes: admin>products
// - change controller path on router into adminController