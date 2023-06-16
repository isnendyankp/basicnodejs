// npm start for start beginning

// s5-62: shorthand to set up the server so the constant no need it that syntax
// const http = require('http');

const express = require('express');

const app = express();

// app.use((req, res, next) => {
//     console.log('In the middleware!');
//     next(); // Allows the request to continue to the next middleware in line
// });

// app.use((req, res, next) => {
//     console.log('In another middleware!');
//     res.send('<h1>Hello from Express!</h1>');
// });

// s5-63: Setup Handling different Routes/ multiple middleware
app.use('/', (req, res, next) => {
    console.log('This always runs!');
    next();
});

// s5-63:  add product for different routes
app.use('/add-product', (req, res, next) => {
  console.log('In another middleware!');
  res.send('<h1>The "Add Product" Page</h1>');
});

// s5-63: main middleware
app.use('/', (req, res, next) => {
  console.log('In another middleware!');
  res.send('<h1>Hello from Express!</h1>');
});

// const server = http.createServer(app);

// server.listen(3000);

// s5-62: shorthand to set up the server
app.listen(3000);
