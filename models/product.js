const fs = require('fs');
const path = require('path');


const  getProductsFromFile = (cb) => {
  const p = path.join(
      path.dirname(process.mainModule.filename),
      'data',
      'products.json'
    );
    fs.readFile(p, (err, fileContent) => {
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(fileContent));
    }
  });
}

module.exports = class Product {
  constructor(t) {
    this.title = t;
  }

  save() {
    getProductsFromFile();
    fs.readFile(p, (err, fileContent) => {
      let products = [];
      if (!err) {
        products = JSON.parse(fileContent);
      }
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), err => {
        console.log(err);
      });
    });
  }

  static fetchAll(cb) {
    getProductsFromFile(cb);
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