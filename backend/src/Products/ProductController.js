const ProductService = require('./ProductService');

const ProductController = {
	// 상품 리스트 조회 controller, 요청과 응답 처리
	getProducts: async (req, res, next) => {
		try {
			const productList = await ProductService.getProducts();

			return res.status(200).json({
				message: '상품 리스트 조회 성공',
				productList,
			});
		} catch (err) {
			next(err);
		}
	},
};

module.exports = ProductController;
