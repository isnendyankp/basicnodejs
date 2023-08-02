const fs = require('fs');
const path = require('path');

module.exports = class Product {
    constructor(t) {
        this.title = t;
    }

    save() {
        const p = path.join(
        path.dirname(process.mainModule.filename),
        'data',
        'products.json'
        );
    }

    static fetchAll() {
        return products;
    }
}

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