const fs = require('fs');
const path = require('path');

const p = path.join(
  path.dirname(process.mainModule.filename),
  'data',
  'cart.json'
);

module.exports = class Cart {
  static addProduct(id, productPrice) {
    // Fetch the previous cart
    fs.readFile(p, (err, fileContent) => {
      let cart = { products: [], totalPrice: 0 };
      if (!err) {
        cart = JSON.parse(fileContent);
      }
      // Analyze the cart => Find existing product
      const existingProductIndex = cart.products.findIndex(
        prod => prod.id === id
      );
      const existingProduct = cart.products[existingProductIndex];
      let updatedProduct;
      // Add new product/ increase quantity
      if (existingProduct) {
        updatedProduct = { ...existingProduct };
        updatedProduct.qty = updatedProduct.qty + 1;
        cart.products = [...cart.products];
        cart.products[existingProductIndex] = updatedProduct;
      } else {
        updatedProduct = { id: id, qty: 1 };
        cart.products = [...cart.products, updatedProduct];
      }
      cart.totalPrice = cart.totalPrice + +productPrice;
      fs.writeFile(p, JSON.stringify(cart), err => {
        console.log(err);
      });
    });
  }

  static deleteProduct(id, productPrice) {
    fs.readFile(p, (err, fileContent) => {
      if (err) {
        return;
      }
      const updatedCart = { ...JSON.parse(fileContent) };
      const product = updatedCart.products.find(prod => prod.id === id);
      if (!product) {
          return;
      }
      const productQty = product.qty;
      updatedCart.products = updatedCart.products.filter(
        prod => prod.id !== id
      );
      updatedCart.totalPrice =
        updatedCart.totalPrice - productPrice * productQty;

      fs.writeFile(p, JSON.stringify(updatedCart), err => {
        console.log(err);
      });
    });
  }

  static getCart(cb) {
    fs.readFile(p, (err, fileContent) => {
      const cart = JSON.parse(fileContent);
      if (err) {
        cb(null);
      } else {
        cb(cart);
      }
    });
  }
};

// - cr8 class cart model base
// - add constructor base
// - Add product property with type array
// - Add totalPrice property with equal 0
// - remove property to addProduct method with param id
// - import file system & path
// - cr8 path.join function for cart models
// - s9-123:cr8 readFile funct with path & callback as a argument then at callback function has 2 paramater err & fileContent
// - s9-123:Cr8 cart = product array & totalprice 0
// - s9-123:checking If no error filecontent convert to object with JSON.parse()
// - s9-123:cr8 variable for fine existing product
// - s9-123:cr8 base statement for increase quatity
// - s9-123:cr8 updatedProduct for save new product
// - s9-123:setup logic increase quantity on updateProduct
// - s9-123:Add else conditional statement
// - s9-123:Add argument productPrice
// - s9-123:Add spread operator on updateProduct at else statement
// - s9-123:cr8 existingProductIndex for find existing product by index
// - s9-123:Add cart.products after updateProduct in array
// - s9-123:cr8 fs.writeFile function with 3 parameter: p for path, JSON.stringify(cart) for change object cart into string JSON and callback function for error
// - s9-129:Cr8 Delete method cart models
// - s9-129:Add readfile to get cart inculde error statement
// - s9-129:UpdateCart if no error
// - s9-129:find updatedCart with findindex method
// - s9-129:find product quantity
// - s9-129:Add method to know cart total price
// - s9-129:Add writeFile & store updatedCart
// - s9-130:cr8 base static to get all product in a cart
// - s9-130:Add fs.readfile
// - s9-130:Cr8 cart equal to JSON.parse(fileContent)
// - s9-130:Change method name to getCart
// - s9-130:Add if statement include cb for cart
// - s9-132:Fixing Delete Product with add if statement !product & give return