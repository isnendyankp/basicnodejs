const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
  res.render('admin/edit-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    editing: false
  });
};

exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  Product.create({
    title: title,
    price: price,
    imageUrl: imageUrl,
    description: description
  })
    .then(result => {
      // console.log(result);
      console.log('Created Product');
    })
    .catch(err => {
      console.log(err);
    });
};

exports.getEditProduct = (req, res, next) => {
  const editMode = req.query.edit;
  if (!editMode) {
    return res.redirect('/');
  }
  const prodId = req.params.productId;
  Product.findById(prodId, product => {
    if (!product) {
      return res.redirect('/');
    }
    res.render('admin/edit-product', {
      pageTitle: 'Edit Product',
      path: '/admin/edit-product',
      editing: editMode,
      product: product
    });
  });
};

exports.postEditProduct = (req, res, next) => {
  const prodId = req.body.productId;
  const updatedTitle = req.body.title;
  const updatedPrice = req.body.price;
  const updatedImageUrl = req.body.imageUrl;
  const updatedDesc = req.body.description;
  const updatedProduct = new Product(
    prodId,
    updatedTitle,
    updatedImageUrl,
    updatedDesc,
    updatedPrice
  );
  updatedProduct.save();
  res.redirect('/admin/products');
};

exports.getProducts = (req, res, next) => {
  Product.findAll().then().catch(err => console.log(err));
};

exports.postDeleteProduct = (req, res, next) => {
  const prodId = req.body.productId;
  Product.deleteById(prodId);
  res.redirect('/admin/products');
};

// - cr8 new controller getProducts base function midleware
// - add fetchALl product & render view  on getProducts
// - cr8 const structured for 4 paramter(title, imgUrl, price, description).
// - Pass in all new paramater on postAddProduct(title, imgUrl, price, description)
// - s9-124:Change path res.render getAddProduct into edit-product
// - s9-124:Cr8 getEditProduct controller function base
// - s9-124:Cr8 editMode & call it on editing property
// - s9-124:Add check statement !editMode
// - s9-124:Cr8 prodId for req params product id & get that id from the url
// - s9-125:Add findById on getEditProduct
// - s9-125:Pass in product property include check statement
// - s9-125:editing false for getAddProduct controller. this allow for edit controller success to run
// - s9-126:Cr8 base postEditProduct controller
// - s9-127:cr8 prodID accessing the request body on productId
// - s9-127:Cr8 const all values edit product
// - s9-127:All values into new product = updateProduct
// - s9-127:save updateProduct for postEditProduct
// - s9-127:Add res.redirect after save to admin product
// - s9-128:Cr8 base postDeleteProduct controller
// - s9-128:extract product id from request body by accessing prodID
// - s9-129:Use product then delete by id & pass prodId
// - s9-129:Add res.redirect to admin products on postDeleteProduct Controller
// - s9-132:Fix postAddproduct Controller with Add null
// - S10-145:Add then & catch err for save postAddProduct Controller
// - S10-145:Move res.redirect to then for save postAddProduct Controller
// - S11-154: Add create method sequelize  base on postAddProduct
// - S11-154:Sign a title by storing title on Product create method at postAddProduct controller
// - S11-154:Sign a price by storing price on Product create method at postAddProduct controller
// - S11-154:Sign a imageUrl by storing imageUrl on Product create method at postAddProduct controller
// - S11-154:Sign a description by storing description on Product create method at postAddProduct controller
// - S11-154:Add base then promises for chain sequelize at postAddProduct controller
// - S11-154:Add base cath promises for chain sequelize at postAddProduct controller
// - S11-154:Add catch any error include log at postAddProduct controller
// - S11-154:Add look result on then include log at postAddProduct controller
// - S11-154:Checking log Created Product on result then at postAddProduct controller
// - S11-157:change fetchAll to findAll @getProducts
// - S11-157:Add then promises @getProducts findAll
// - S11-158:Add catch promises @getProducts findAll
// - S11-158:Add console log err @getProducts findAll catch