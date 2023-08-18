const fs = require('fs');
const path = require('path');

const p = path.join(
  path.dirname(process.mainModule.filename),
  'data',
  'cart.json'
);


module.exports = class Cart {
    static addProduct(id) {

    }
}

// - cr8 class cart model base
// - add constructor base
// - Add product property with type array
// - Add totalPrice property with equal 0
// - remove property to addProduct method with param id
// - import file system & path
// - cr8 path.join function for cart models