const Product = require('../models/product');
const Cart = require('../models/cart');
const { get } = require('../routes/admin');

exports.getProducts = (req, res, next) => {
  Product.findAll()
    .then(products => {
      res.render('shop/product-list', {
        prods: products,
        pageTitle: 'All Products',
        path: '/products'
      });
    })
    .catch(err => {
      console.log(err);
    });
};

exports.getProduct = (req, res, next) => {
  const prodId = req.params.productId;
  // Product.findAll({ where: { id: prodId } })
  //   .then(products => {
  //     res.render('shop/product-detail', {
  //       product: products[0],
  //       pageTitle: products[0].title,
  //       path: '/products'
  //     });
  //   })
  //   .catch(err => console.log(err));
  Product.findById(prodId)
    .then(product => {
      res.render('shop/product-detail', {
        product: product,
        pageTitle: product.title,
        path: '/products'
      });
    })
    .catch(err => console.log(err));
};

exports.getIndex = (req, res, next) => {
  Product.findAll()
    .then(products => {
      res.render('shop/index', {
        prods: products,
        pageTitle: 'Shop',
        path: '/'
      });
    })
    .catch(err => {
      console.log(err);
    });
};

exports.getCart = (req, res, next) => {
  req.user
    .getCart()
    .then(cart => {
      return cart
        .getProducts()
        .then(products => {
          res.render('shop/cart', {
            path: '/cart',
            pageTitle: 'Your Cart',
            products: products
          });
        })
        .catch(err => console.log(err));
    })
    .catch(err => console.log(err));
};

exports.postCart = (req, res, next) => {
  const prodId = req.body.productId;
  req.user
    .getCart()
    .then(cart => { 
      return cart.getProducts({ where: { id: prodId } });
    })
    .then(products => {
      let product;
      if (products.length > 0) {
        product = products[0];
      }
      let newQuantity = 1;
      if (product) {
        // ...
      }
      return Product.findById(prodId)
        .then(product => {
          
        })
        .catch(err => console.log(err));
    })
    .catch(err => console.log(err));
};

exports.postCartDeleteProduct = (req, res, next) => {
  const prodId = req.body.productId;
  Product.findById(prodId, product => {
    Cart.deleteProduct(prodId, product.price);
    res.redirect('/cart');
  });
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


// s11-167: req.user.getCart() is a sequelize method
// s11-167: Add then() and catch() to getCart() method
// s11-167: pass in cart @ then() method for getCart() method
// s11-167: Add return cart.getProducts() to getCart() method
// s11-167: Add then() return  @getCart() method
// s11-167: Add catch() return  @getCart() method
// s11-167: Add products to then() method @getCart() method
// s11-167: Add res.render() to then() method @getCart() method
// s11-167: Add path to res.render() @getCart() method
// s11-167: Add pageTitle to res.render() @getCart() method
// s11-167: Add products to res.render() @getCart() method
// s11-167: Add req.user.getCart() @exports.postCart
// s11-167: Add then() and catch() to req.user.getCart() @exports.postCart
// s11-167: pass in cart to then method @exports.postCart
// s11-167: Add return with where clause to then method @exports.postCart
// s11-167: Add then wih passin products@exports.postCart
// s11-167: add retrive single product from products @exports.postCart
// s11-167: add product to then method @exports.postCart
// s11-168: add if statement to then method @exports.postCart
// s11-168: add newQuantity var with default value of 1 @exports.postCart
// s11-168: add if product is anything but undefined @exports.postCart
// s11-168: add return to call product @exports.postCart
// s11-168: pass in productid to findById method @exports.postCart
// s11-168: add then() and catch() to return findById method @exports.postCart
