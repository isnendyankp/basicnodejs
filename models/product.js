const db = require('../util/database');

const Cart = require('./cart');

module.exports = class Product {
  constructor(id, title, imageUrl, description, price) {
    this.id = id;
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {
   
  }

  static deleteById(id) {
    
  }

  static fetchAll() {
    
  }

  static findById(id) {
    
  }
};


// - create base class product with export
// - cr8 constructor with add property and make it to parameter
// - cr8 product array
// - cr8 base save method
// - add function to store current object to product array
// - cr8 fetchAll method base
// - fetchAll method make it to static for directly on the class object & not an instantiated object
// - add return products on fetchAll method
// - import file & path file
// - edit call path folder on save
// - add argument on save method for generates the directory path of the module file that is being executed.
// - add data folder to the root project folder
// - add store file products.json in data folder
// - add base readfile for products.json in data folder
// - add p as path for readfile & get error or get data(fileContent)
// - check log fileContent
// - sign products for empty array
// - cr8 base situational statement for if not error 
// - add products. products will contain the object from fileContent using parse in JSON:  products = JSON.parse(fileContent);
// - add new products for push object this: products.push(this);
// - saves the "products" array in JSON format to a file whose path is specified by the "p" variable:  fs.writeFile(p, JSON.stringify(products));
// - add call back error with check by log: err => {console.log(err);}
// - add readfile in fetchAll for read file at path(p) to get error or fileContent
// - Add return empty array on conditional statement if got error(fetchAll)
// - Add return fileContent in a parsed form & get rid return product
// - Add define path too on fetchAll: const p
// - Add poramater/argument on fetchAll method
// - Add parameter/argument on return with pass in cb([]);
// - cr8 base helper function getProductsFromFile
// - move fetchAll code to helper function
// - add parameter callback in helper function
// - Add helperfunction in fetchAll method: getProductsFromFile(cb);
// - Add getProductsFromFile at save
// - remove path.join on save (because already setup at getProductsFromFile )
// - fix readfile at getProductsFromFile (fix with give else on conditional statement)
// - remove readfile code on save
// - cr8 base callback product at save getProductsFromFile
// - move method push & function fs.writeFile to callback product
// - move out const p from const getProductsFromFile
// - Add argument / parameter on constructor class product
// - store all that data properties
// - sign ID on save (reason for all product will have an ID)
// - cr8 base static method findById
// - Add id as argument & cb as callback if done
// - Add getProductsFromFile funct for get data product
// - cr8 function product to find product by id with p.id equal with id
// - Add cb for execute product after find id
// - s9-126:Add id on constructor
// - s9-126:cr8 base if statement on save for checking id
// - s9-127:update existing product with find product by id
// - s9-127:replacing update product to existing product index
// - s9-127:cr8 fs.writeFile for first statement
// - s9-127:setup else statement for save
// - s9-128:cr8 static deleteby id method base
// - s9-128:Add filter method for delete by id  as a argument
// - s9-128:Add fs.writeFile for updateProducts
// - s9-129:Add if statement error base on delete
// - s9-129:Import cart
// - s9-129:Call cart delete product & pass in ID
// - s9-129:Pass in product.price at deleteProduct method
// - S10-142:Setup for fetching data from db (remove useless code) 