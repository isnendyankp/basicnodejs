const Product = require('../models/product');

exports.getProducts = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('shop/product-list', {
      prods: products,
      pageTitle: 'All Products',
      path: '/products'
    });
  });
};

exports.getIndex = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('shop/index', {
      prods: products,
      pageTitle: 'Shop',
      path: '/',
    });
  });
};

exports.getCart = (req, res, next) => {
  res.render('shop/cart', {
    path: '/cart',
    pageTitle: 'Your Cart'
  });
};

exports.getCheckout = (req, res, next) => {
  res.render('shop/checkout', {
    path: '/checkout',
    pageTitle: 'Checkout'
  });
};

// - add function get middleware admin route
// - cr8 export controller function middleware getAddProduct
// - add function post middleware admin route
// - cr8 export controller function middlewaree postAddProduct
// - add product array
// - add function get middleware shop route
// - cr8 export controller function middleware getProducts
// - change import for connecting on model product
// - cr8 new object product with pass request body title
// - add save method from model product
// - cr8 local const for fetchAll product
// - cr8 fetchAll Method with parameter products
// - move render in Product Method on function getProducts
// - change render path for getProducts : res.render('shop/product-list',
// - change render path for getAddProduct:  res.render('admin/add-product',
// - move getAddProduct & postAddProduct to admin.js controller
// - cr8 export controller function middleware getIndex
// - cr8 getCart & getCheckout controller function middleware 