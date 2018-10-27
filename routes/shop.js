const path = require('path');
const rootDir = require('../util/path');
const express = require('express');
const router = express.Router();
const adminData = require('./admin');

router.get('/', (req, res, next) => {
    const products = adminData.products;
    res.render('shop', {
        prods: products,
        pageTitle: 'Products',
        hasProducts: products.length > 0,
        activeShop: true
    });

});


module.exports = router;