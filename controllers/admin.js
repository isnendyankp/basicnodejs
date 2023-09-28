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
  Product.findById(prodId)
    .then(product => {
      if (!product) {
        return res.redirect('/');
      }
      res.render('admin/edit-product', {
        pageTitle: 'Edit Product',
        path: '/admin/edit-product',
        editing: editMode,
        product: product
      });
    })
    .catch(err => console.log(err));
};

exports.postEditProduct = (req, res, next) => {
  const prodId = req.body.productId;
  const updatedTitle = req.body.title;
  const updatedPrice = req.body.price;
  const updatedImageUrl = req.body.imageUrl;
  const updatedDesc = req.body.description;
  Product.findById()
  .then(product => {
    product.title = updatedTitle;
    product.price = updatedPrice;
    product.description = updatedDesc;
    product.imageUrl = updatedImageUrl;
    return product.save();
  })
  .then(result =>{
    console.log('UPDATED PRODUCT!');
     res.redirect('/admin/products');
  })
  .catch(err => console.log(err));
};

exports.getProducts = (req, res, next) => {
  Product.findAll()
    .then(products => {
      res.render('admin/products', {
        prods: products,
        pageTitle: 'Admin Products',
        path: '/admin/products'
      });
    })
    .catch(err => console.log(err));
};

exports.postDeleteProduct = (req, res, next) => {
  const prodId = req.body.productId;
  Product.findById(prodId)
    .then(product =>{
     return product.destroy();
    })
    .then()
    .catch(err => console.log(err));
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
// - S11-158:Add res render function @getProducts findAll then
// - S11-159: remove CB function @getEditProduct
// - S11-159:Add then promises @getEditProduct>findById
// - S11-159:Add catch promises @getEditProduct>findById
// - S11-159:Add check err log @getEditProduct>findById>catch
// - S11-159:Add if param for get product @getEditProduct
// - S11-159:Add res render function @getEditProduct
// - S11-159:Add function to find element 1st database @PostEditProduct
// - S11-159:Add then promises @PostEditProduct>findById
// - S11-159:Add catch promises @PostEditProduct>findById
// - S11-159:Add check err @postEditProduct>findById>catch
// - S11-159:Add product param @postEditProduct>findById>then
// - S11-159:Add product.title @postEditProduct>findById>then
// - S11-159:Add product.price to update price @postEditProduct>findById>then
// - S11-159:Add product.description to update description @postEditProduct>findById>then
// - S11-159:Add product.imageUrl for update imageUrl @postEditProduct>findById>then
// - S11-159:Add call product.save
// - S11-159:Add return the promise 
// - S11-159:Add then promise to handle success response from save promise before
// - S11-159: Add result function base @then promise to handle success response from save promise before
// - S11-159: Add log for update product
// - S11-159: Move ress redirect
// - S11-160:change deleteById to findById @postDelete Product
// - S11-160:Pass in prodId @postDeleteProduct>findById
// - S11-160:Add then Prom @postDeleteProduct>findById
// - S11-160:Add catch Prom @postDeleteProduct>findById
// - S11-160:Add err log @postDeleteProduct>findById>cacth
// - S11-160:pass in product@postDeleteProduct>findById>then
// - S11-160:Add call product.destroy @then
// - S11-160:Add another then @postDeleteProduct>findById>then 