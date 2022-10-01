const path = require('path');

const express = require('express');
const productcontroller=require('../controllers/product')

const rootDir = require('../util/path');

const router = express.Router();

const products = [];

// /admin/add-product => GET
router.get('/add-product',productcontroller.getproduct);


// /admin/add-product => POST
router.post('/add-product',productcontroller.postproduct);

module.exports = router;

