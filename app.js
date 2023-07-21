const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
// const expressHbs = require('express-handlebars');

const app = express();

// unactive hbs
// app.engine('hbs', expressHbs({ layoutsDir: 'views/layouts/', defaultLayout: 'main-layout', extname: 'hbs' }));
// app.set('view engine', 'hbs');

app.set('view engine', 'ejs');
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


// Description:
// - The app.set() used to set configuration options for the Express application.
// -- have two arguments: settingName, settingValue
// - app.set('view engine', 'pug');
// -- set the default view engine to Pug.
// -- Express will use Pug as the primary view engine for rendering the application's views.
// - app.set('views', 'views');
// -- function in Express.js is used to specify the directory where the view templates are located.
// -- app.set('views = functiion make default folder view', 'directory folder view');
// - app.engine(); cr8 function with engine method for using express js.
// -- need two parameter : name engine, function rendering will calling with express.js
// -- // - app.engine('handlebars', expressHbs());  handlebars: name, expressHbs(); function rendering
// - app.set('view engine', 'handlebars'); switch view engine to handlebars
// - pass option layoutsDir property on handlebars engine
// - pass option defaultLayout property on handlebars engine
// - set the extension name which only applies to the layout and not to all files
// - unactive hbs & setup view engine into ejs