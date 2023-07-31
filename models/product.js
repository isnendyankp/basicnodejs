const products = [];

module.exports = class Product {
    constructor(t) {
        this.title = t;
    }

    save() {
        products.push(this);
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