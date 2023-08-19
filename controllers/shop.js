const Product = require('../models/product');
const Cart = require('../models/cart');

exports.getProducts = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('shop/product-list', {
      prods: products,
      pageTitle: 'All Products',
      path: '/products'
    });
  });
};

exports.getProduct = (req, res, next) => {
  const prodId = req.params.productId;
  Product.findById(prodId, product => {
    res.render('shop/product-detail', {
      product: product,
      pageTitle: product.title,
      path: '/products'
    });
  });
};

exports.getIndex = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('shop/index', {
      prods: products,
      pageTitle: 'Shop',
      path: '/'
    });
  });
};

exports.getCart = (req, res, next) => {
  res.render('shop/cart', {
    path: '/cart',
    pageTitle: 'Your Cart'
  });
};

exports.postCart = (req, res, next) => {
  const prodId = req.body.productId;
  Product.findById(prodId, product => {
    Cart.addProduct(prodId, product.price);
  });
  res.redirect('/cart');
};

exports.getOrders = (req, res, next) => {
  res.render('shop/orders', {
    path: '/orders',
    pageTitle: 'Your Orders'
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
// - cr8 getOrders controller function middleware
// - cr8 getProduct function middleware with require params.productId
// - Add base function Product.findById
// - pass in prodId for find product
// - Add argument with console.log(product) for information product after find Id
// - Add res.render for product detail views on getProduct
// - pass in product property include the path
// - cr8 base postCart controller function
// - cr8 prodId for request body productId
// - log prodId & res redirect cart
// - s9-123:import cart models
// - s9-123:cr8 function for find product by ID on postcart
// - s9-123:Add callback to increase product to cart with 2 parameter: id & price