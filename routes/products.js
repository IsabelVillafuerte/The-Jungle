var express = require('express');
var router = express.Router();
var Product = require('../models/product.js');

/* GET home page. */
router.get('/', function(req, res, next) {

  Product.find(function(error, productList) {

  	if(error) {
  		res.send(500, error.message);
  	}

  	res.render('products', {
  		title: 'PRODUCTS',
  		products: productList
  	});

  });

});

router.post('/', function(req, res) {

			res.render('new', {
				title: 'PRODUCTS'
			});


		});


module.exports = router;
