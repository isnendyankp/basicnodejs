const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// set a global configuration value
// The app.set() used to set configuration options for the Express application.
// have two arguments: settingName, settingValue
app.set();
// set the default view engine to Pug.
// Express will use Pug as the primary view engine for rendering the application's views.
app.set('view engine', 'pug');
// function in Express.js is used to specify the directory where the view templates are located.
// app.set('views = functiion make default folder view', 'directory folder view');
app.set('views', 'views');

// import all routes folder
const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

// install npm install --save body-parser for parsing
// URL encoding is the process of converting non-alphanumeric characters into a computer-understandable representation of a URL.
app.use(bodyParser.urlencoded({extended: false}));
// Serving File Staticly for split styling css
app.use(express.static(path.join(__dirname, 'public')));
// call Routes
app.use('/admin', adminData.routes);
app.use(shopRoutes);

// adding a 404 Error page
app.use((req, res, next) => {
    //  passing pageTitle: 'Page NotFound'
    res.status(404).render('404', {pageTitle: 'Page Not Found'});
});

// s5-62: shorthand to set up the server
app.listen(3000);
