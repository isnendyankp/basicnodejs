const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

const products = [];

// /admin/add-product => GEt
// Cr8 filter path for admin to add product
router.get('/add-product', (req, res, next) => {
  // access rootDir for easy navigation
  res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
});

// /admin/add-product => POST
router.post('/product', (req, res, next) => {
  // push new element into this array, a new object
  products.push({ title: req.body.title });
  res.redirect('/');
});

exports.routes = router;
exports.products = products;