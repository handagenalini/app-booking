const path = require('path');

const express = require('express');

const productcontrollers=require('../controllers/product');

const router = express.Router();

router.get('/', productcontrollers.getaproduct);

module.exports = router;
