const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');


const errorController = require('./controllers/error');
const sequelize = require('./util/database');
const Product = require('./models/product');
const User = require('./models/user');
const Cart = require('./models/cart');
const CartItem = require('./models/cart-item');


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

// cr8 middleware for user
app.use((req, res, next) => {
  User.findById(1)
    .then(user => {
      req.user = user;
      next();
    })
    .catch(err => console.log(err));
});

// call Routes
app.use('/admin', adminRoutes);
app.use(shopRoutes);

// adding a 404 Error page
app.use(errorController.get404);

Product.belongsTo(User, { constraints: true, onDelete: 'CASCADE' });
User.hasMany(Product);
User.hasOne(Cart);
Cart.belongsTo(User);
Cart.belongsToMany(Product, { through: CartItem });
Product.belongsToMany(Cart, { through: CartItem });

sequelize
  // .sync({ force: true })
  .sync()
  .then(result => {
    return User.findById(1);
    // console.log(result);
    // set up the server
  })
  .then(user => {
    if (!user) {
      return User.create({ name: 'Max', email: 'test@test.com' });
    }
    return user;
  })
  .then(user => {
    // console.log(user);
    app.listen(3000);
  })
  .catch(err => {
    console.log(err);
  });


// Progress:
// s11-166:import Cart model
// s11-166:import CartItem model
// s11-166:Define relationship between User and Product
// s11-166:Define relationship between User and Cart
// s11-166:Define relationship between Cart and Product through CartItem
// s11-166:Define relationship between Product and Cart through CartItem

