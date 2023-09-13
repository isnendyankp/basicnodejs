const Product = require('../models/product');
const Cart = require('../models/cart');

exports.getProducts = (req, res, next) => {
  Product.fetchAll()
    .then(([rows, fieldData]) => {
      res.render('shop/product-list', {
        prods: rows,
        pageTitle: 'All Products',
        path: '/products'
      });
    })
    .catch(err => console.log(err));
};

exports.getProduct = (req, res, next) => {
  const prodId = req.params.productId;
  Product.findById(prodId)
    .then(([product]) => {
      res.render('shop/product-detail', {
        product: product[0],
        pageTitle: product.title,
        path: '/products'
      });
    })
    .catch(err => console.log(err));
};

exports.getIndex = (req, res, next) => {
  Product.findAll()
  .then(product =>{

  })
  .catch();
  Product.fetchAll()
    .then(([rows, fieldData]) => {
      res.render('shop/index', {
        prods: rows,
        pageTitle: 'Shop',
        path: '/'
      });
    })
    .catch(err => console.log(err));
};

exports.getCart = (req, res, next) => {
  Cart.getCart(cart => {
    Product.fetchAll(products => {
      const cartProducts = [];
      for (product of products) {
        const cartProductData = cart.products.find(
          prod => prod.id === product.id
        );
        if (cartProductData) {
          cartProducts.push({ productData: product, qty: cartProductData.qty });
        }
      }
      res.render('shop/cart', {
        path: '/cart',
        pageTitle: 'Your Cart',
        products: cartProducts
      });
    });
  });
};

exports.postCart = (req, res, next) => {
  const prodId = req.body.productId;
  Product.findById(prodId, product => {
    Cart.addProduct(prodId, product.price);
  });
  res.redirect('/cart');
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
// - s9-130:Add call Cart.getCart on getCart
// - s9-130:Add call back function cart on getCart
// - s9-130:Move render view inside cb function on getCart
// - s9-130:Add Product.fetchAll inside cb function on getCart
// - s9-130:Add product cb funct inside Product.fetchAll
// - s9-130:Fix cb Product.fetchAll on getCart
// - s9-130:Fix getCart controller
// - s9-131:Cr8 base postCartDeleteProduct controller
// - s9-131:Extra product ID fro req body prodcut ID on postCartDeleteProduct controller
// - s9-131:Add Product.findById for find information by id on postCartDeleteProduct controller
// - s9-131:Add Cart.deleteProduct on postCartDeleteProduct controller
// - s9-131:Add redirect request back to cart on postCartDeleteProduct controller
// - S10-143:Add then & catch method promise on getIndex controller
// - S10-143:Add anonymous function in then method for getIndex
// - S10-143:Add rows & fieldData element on then for getIndex controller
// - S10-143:move render to anonymous funct on then
// - S10-143change products to rows (bcz rows to entries product table)
// - S10-144: add then & catch on getProduct controller
// - S10-144: Change res.render to shop/prod list
// - S10-144: Change pageTitle & path on getProducts
// - S10-146:Add then & catch err on getProduct controller
// - S10-146:Add product param on then
// - S10-146:move res.render into then @getProduct
// - S10-146:checking log for failed detail click
// - S10-146:Add first element [0] for bug detail inthat array
// - S11-154:Add Product.findAll on getProduct controller
// - S11-154:Add then (promises) Product.findAll on getProduct
// - S11-154:Add catch (promises) Product.findAll on getProduct
// - S11-156:Add product list array function on then