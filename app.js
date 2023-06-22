const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// import all routes folder
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

// install npm install --save body-parser for parsing
// URL encoding is the process of converting non-alphanumeric characters into a computer-understandable representation of a URL.
app.use(bodyParser.urlencoded({extended: false}));

// call Routes
app.use(adminRoutes);
app.use(shopRoutes);

// adding a 404 Error page
app.use((req, res, next) => {
    res.status(404).send('<h1>Page not found</h1>');
});

// s5-62: shorthand to set up the server
app.listen(3000);
