const express = require('express');

const router = express.Router();

router.get('/add-product', (req, res, next) => {
  res.send(
    '<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>'
  );
});

router.post('/product', (req, res, next) => {
  console.log(req.body);
  res.redirect('/');
});

// adding a 404 Error page
app.use((req, res, next) => {
    res.status(404).send('<h1>Page not found</h1>');
});

module.exports = router;