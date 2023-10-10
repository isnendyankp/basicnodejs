const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');


const errorController = require('./controllers/error');
const sequelize = require('./util/database');
const Product = require('./models/product');
const User = require('./models/user');

const app = express();


app.set('view engine', 'ejs');
app.set('views', 'views');

// import all routes folder
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');


// install npm install --save body-parser for parsing
// URL encoding is the process of converting non-alphanumeric characters into a computer-understandable representation of a URL.
app.use(bodyParser.urlencoded({ extended: false }));
// Serving File Staticly for split styling css
app.use(express.static(path.join(__dirname, 'public')));
// call Routes
app.use('/admin', adminRoutes);
app.use(shopRoutes);

// adding a 404 Error page
app.use(errorController.get404);

Product.belongsTo(User, { constraints: true, onDelete: 'CASCADE' });
User.hasMany(Product);

sequelize
    // .sync({ force: true})
    .sync()
    .then(result => {
        return User.findById(1);
        // console.log(result);
        // set up the server
    })
    .catch(err => {
        console.log(err);
    });

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
// - change adminData into adminRoutes at import all routes folder
// - change section call Routes adminData into adminRoutes
// - move 404 controller function middleware to error.js
// - import errorController
// - pass in errorController to app.use
// - S10-140:Import database
// - S10-140:Add db.execute base which allow to use database
// - S10-140:Add accessing tables product from mysql
// - S10-141:Execute db with 2 function promises then & catch
// - S10-142:Add argument err in funct catch & log err
// - S10-142:Add argument result in funct then & log result
// - S10-142:Edit log result(array with 2 nested element)
// - S11-153:rename cb const to sequelize
// - S11-153:Call sequelize base
// - S11-153:Add then method on Call sequelize
// - S11-153:Add result at then sequelize
// - S11-153:Add catch base on call sequelize
// - S11-153:Add parameter err on catch sequelize
// - S11-153:Add log err on catch sequelize
// - S11-153:Move setup the server in then sequelize
// - S11-153:unactive log result in then sequelize
// - S11-162:Import Product model
// - S11-162:Import User model
// - S11-162:Call sequelize base with belongTo method
// - S11-162:Add User model on belongTo method
// - S11-162:Add constraint true on belongTo method
// - S11-162:Add onDelete method on belongTo method
// - S11-162:Add define user hasMany
// - S11-162:Add product @user>hasMany method
// - S11-162:Add force true @sequelize>sync
// - S11-163:unactive .sync force true @sequelize>sync
// - S11-163:Add findById method on User @sequelize>sync>then>result
// - S11-163:Change to return for User.findById(1) @sequelize>sync>then>result