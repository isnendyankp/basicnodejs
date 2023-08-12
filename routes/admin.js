const path = require('path');

const express = require('express');

const productsController = require('../controllers/products');

const router = express.Router();

// /admin/add-product => GET
router.get('/add-product', productsController.getAddProduct);

// /admin/products => GET
router.get('/products';

// /admin/add-product => POST
router.post('/add-product', productsController.postAddProduct);

module.exports = router;

// - add 3 property & make it true for render: formsCSS: true, productCSS: true, activeAddProduct: true
// - move get controller function middleware to products.js
// - import productsController on product.js
// - pass in productsController getAddProduct
// - move post controller function middleware  to products.js
// - pass in productsController postAddProduct
// - export the router
// - Registering Routes: admin>products