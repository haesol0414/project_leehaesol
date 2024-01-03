const express = require('express');
const ProductController = require('./ProductController');
const ProductRouter = express.Router();

// 상품 리스트 조회 router
ProductRouter.get('/products', ProductController.getProducts);

module.exports = ProductRouter;
