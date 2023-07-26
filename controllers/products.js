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
  // push new element into this array, a new object
  products.push({ title: req.body.title });
  res.redirect('/');
}

// - add function get middleware admin route
// - cr8 export function get middleware with name getAddProduct
// - add function post middleware admin route
// - cr8 export function post middleware with name postAddProduct