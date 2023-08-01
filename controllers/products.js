const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
  res.render('add-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true
  });
};

exports.postAddProduct = (req, res, next) => {
  const product = new Product(req.body.title);
  // push new element into this array, a new object
  product.save();
  res.redirect('/');
}

exports.getProducts = (req, res, next) => {
  const products = Product.fetchAll();
  res.render('shop', {
    prods: products,
    pageTitle: 'Shop',
    path: '/',
    hasProducts: products.length > 0,
    activeShop: true,
    productCSS: true
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