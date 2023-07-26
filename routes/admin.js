const path = require('path');

const express = require('express');

const productsController = require('../controllers/products');

const router = express.Router();

const products = [];

// /admin/add-product => GEt
// Cr8 filter path for admin to add product
router.get('/add-product', productsController.getAddProduct);

// /admin/add-product => POST
router.post('/add-product', (req, res, next) => {
  // push new element into this array, a new object
  products.push({ title: req.body.title });
  res.redirect('/');
});

exports.routes = router;
exports.products = products;

// - add 3 property & make it true for render: formsCSS: true, productCSS: true, activeAddProduct: true
// - move function middleware get on route add product
// - import productsController by requiring controller on product.js
// - pass in prouctController with controller getAddProduct