const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// import all routes folder
const adminRoutes = require('./routes/admin');

// install npm install --save body-parser for parsing
// URL encoding is the process of converting non-alphanumeric characters into a computer-understandable representation of a URL.
app.use(bodyParser.urlencoded({extended: false}));


app.use('/', (req, res, next) => {
  console.log('In another middleware!');
  res.send('<h1>Hello from Express!</h1>');
});

// s5-62: shorthand to set up the server
app.listen(3000);
