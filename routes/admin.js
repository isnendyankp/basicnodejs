const path = require('path');

const express = require('express');

const adminController = require('../controllers/admin');

const router = express.Router();

// /admin/add-product => GET
router.get('/add-product', adminController.getAddProduct);

// /admin/products => GET
router.get('/products', adminController.getProducts);

// /admin/add-product => POST
router.post('/add-product', adminController.postAddProduct);

// /admin/edit-product => edit
router.get('/edit-product/:productId', adminController.getEditProduct);

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
// - change controller path for getProducts
// - s9-124:Cr8 route for getEditProduct controller