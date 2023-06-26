// import path for res.sendFile
const path = require('path');

// import express
const express = require('express');

// cr8 router object by calling express.router as a function
const router = express.Router();

// move code for shop route & change app.use to router.get
// The function router.get() in middleware is used to handle incoming GET HTTP requests in Express.js.
router.get('/', (req, res, next) => {
  // res.sendFile() to send a file as a response to an HTTP request.
  // path.join() is a method commonly used in Node.js to join multiple path segments into a single path. 
  res.sendFile(path.join());
});

// export the router
module.exports = router;