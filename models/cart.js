const fs = require('fs');
const path = require('path');

const p = path.join(
  path.dirname(process.mainModule.filename),
  'data',
  'cart.json'
);


module.exports = class Cart {
  static addProduct(id) {
      // Fetch the previous cart
      fs.readFile(p, (err, fileContent) => {
        let cart = { products: [], totalPrice: 0 };
        if (!err) {
          cart = JSON.parse(fileContent);
        }
        // Analyze the cart => Find existing product
        const existingProduct = cart.products.find(
          prod => prod.id === id
        );
         let updatedProduct;
        // Add new product/ increase quantity
        if (existingProduct) {
          
        }
      });
  }
}

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