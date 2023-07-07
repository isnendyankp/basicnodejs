// import path for res.sendFile
const path = require('path');

// import express
const express = require('express');

// import util-path & cr8 rootDir for easy access navigation sendfile
const rootDir = require('../util/path');

// access to the product with import adminData
const adminData = require('./admin');

// cr8 router object by calling express.router as a function
const router = express.Router();

// move code for shop route & change app.use to router.get
// The function router.get() in middleware is used to handle incoming GET HTTP requests in Express.js.
router.get('/', (req, res, next) => {
  // rendering shop.pug from views folder
  res.render('shop');
});

// export the router
module.exports = router;