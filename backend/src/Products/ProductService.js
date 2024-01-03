const Product = require('./ProductModel');

const ProductService = {
	// 상품 리스트 조회 service
	getProducts: async () => {
		return await Product.find({}).sort({ _id: -1 });
	},
};

module.exports = ProductService;
