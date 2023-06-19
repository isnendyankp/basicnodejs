const express = require('express');

const app = express();

// s5-63: Setup middleware for different routes
app.use('/', (req, res, next) => {
    console.log('This always runs!');
    next();
});

// s5-63:  add product for different routes
app.use('/add-product', (req, res, next) => {
  console.log('In another middleware!');
  res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>');
});

// cr8 route or middleware that handles request to product from form
app.post('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

app.use('/', (req, res, next) => {
  console.log('In another middleware!');
  res.send('<h1>Hello from Express!</h1>');
});

// s5-62: shorthand to set up the server
app.listen(3000);
