const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
  res.render('admin/edit-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
  });
};

exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  const product = new Product(title, imageUrl, description, price);
  product.save();
  res.redirect('/');
};

exports.getEditProduct = (req, res, next) => {
  const editMode = req.query.edit;
  res.render('admin/edit-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    editing: editMode
  });
};

exports.getProducts = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('admin/products', {
      prods: products,
      pageTitle: 'Admin Products',
      path: '/admin/products'
    });
  });
};

// - cr8 new controller getProducts base function midleware
// - add fetchALl product & render view  on getProducts
// - cr8 const structured for 4 paramter(title, imgUrl, price, description).
// - Pass in all new paramater on postAddProduct(title, imgUrl, price, description)
// - s9-124:Change path res.render getAddProduct into edit-product
// - s9-124:Cr8 getEditProduct controller function base
// - s9-124:Cr8 editMode & call it on editing property