const express = require('express');

const app = express();

// s5-63: Setup middleware for multiple routes
app.use('/', (req, res, next) => {
    console.log('This always runs!');
    next();
});

// s5-63:  add product for different routes
app.use('/add-product', (req, res, next) => {
  console.log('In another middleware!');
  res.send('<h1>The "Add Product" Page</h1>');
});

// s5-63: final 
app.use('/', (req, res, next) => {
  console.log('In another middleware!');
  res.send('<h1>Hello from Express!</h1>');
});

// s5-62: shorthand to set up the server
app.listen(3000);
