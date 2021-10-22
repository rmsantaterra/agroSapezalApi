const express = require('express');
const ProductsController = require('../models/ProductsController');
const cors = require('cors');

const router = express.Router();

router.use(cors());

router.options("*", cors());

router.get('/productByBarCode/:barcode', ProductsController.getByBarCode);
router.get('/getAllProducts', ProductsController.getAllProducts);
router.get('/getImageByUrl', ProductsController.getImageByUrl);

module.exports = router;