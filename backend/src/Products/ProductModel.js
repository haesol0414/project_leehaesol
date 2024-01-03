const { mongoose, Schema } = require('mongoose');

const ProductSchema = new Schema({
	title: {
		type: String,
		required: true,
	},
	price: {
		type: Number,
		required: true,
	},
	discountRate: {
		type: Number,
		required: true,
	},
	discountedPrice: {
		type: Number,
		default: function () {
			const discountedPrice =
				this.price - (this.price * this.discountRate) / 100;
			return Math.round(discountedPrice / 10) * 10;
		},
	},
	description: {
		type: String,
		required: true,
	},
	storageOption: {
		type: String,
		required: true,
		enum: ['냉동', '냉장', '실온', '제품별상이'],
	},
	salesAmount: {
		type: Number,
		default: 0,
	},
	imageUrl: {
		type: String,
	},
});

const Product = mongoose.model('Product', ProductSchema, 'Product');

module.exports = Product;

/* 데이터 삽입 */
// const products = [
// 	{
// 		title: '[온더고] 통모짜 로제 떡볶이 with 파스타 320g',
// 		description: '치즈 듬뿍, 떡볶이, 로제 소스, 생크림, 퓨전한식',
// 		price: 5980,
// 		discountRate: 5,
// 		storageOption: '냉동',
// 		salesAmount: 0,
// 		imageUrl:
// 			'https://mall.ourhome.co.kr//attach_file/20230809/B22F8C84573E46B0B215CB68E7BA106F.jpg',
// 	},
// 	{
// 		title: '[구씨반가] 전복 소갈비탕 600g',
// 		description: '진주명문가 구씨가문의 전통을 담은 전복 소갈비탕',
// 		price: 11980,
// 		discountRate: 20,
// 		storageOption: '실온',
// 		salesAmount: 11000,
// 		imageUrl:
// 			'https://mall.ourhome.co.kr//attach_file/20231226/B4CCDFBCFB884CB0A96E45AEA6EBAD40.jpg',
// 	},
// 	{
// 		title: '[김장특가] 남도식 김장김치 10kg+흑마늘삼겹 300g',
// 		description: '남도식 김장김치10kg(3~4포기), 흑마늘삼겹300g',
// 		price: 103900,
// 		discountRate: 25,
// 		storageOption: '냉동',
// 		salesAmount: 10,
// 		imageUrl:
// 			'https://mall.ourhome.co.kr//attach_file/20231213/3732C3B936334F45822D19A6D71D09B4.jpg',
// 	},
// 	{
// 		title: '단호박죽 270g',
// 		description: '부드럽고 달달한 별미 단호박죽',
// 		price: 2810,
// 		discountRate: 5,
// 		storageOption: '실온',
// 		salesAmount: 0,
// 		imageUrl:
// 			'https://mall.ourhome.co.kr//attach_file/20201013/4D2D883AC0EF4D7DB558C2A852302E70.jpg',
// 	},
// 	{
// 		title: '연탄구이맛 간장불고기 400g',
// 		description: '부드러운 앞다리살, 저온숙성, 달콤짭짤, 연탄구이맛',
// 		price: 7580,
// 		discountRate: 5,
// 		storageOption: '냉동',
// 		salesAmount: 0,
// 		imageUrl:
// 			'https://mall.ourhome.co.kr//attach_file/20201204/CB1FF1DB24EE41B99B55CCDB3B6D2845.jpg',
// 	},
// 	{
// 		title: '아워홈 포차 미니+시원 SET',
// 		description: '미니꼬치어묵(오리지널), 꼬치어묵(시원한맛)',
// 		price: 10160,
// 		discountRate: 5,
// 		storageOption: '냉동',
// 		salesAmount: 0,
// 		imageUrl:
// 			'https://mall.ourhome.co.kr//attach_file/20231116/FDCD64DED7264CB28465E00E8CF761AD.jpg',
// 	},
// 	{
// 		title: '소고기장조림 200g',
// 		description: '장조림, 간편반찬,꽈리고추,곤약',
// 		price: 3670,
// 		discountRate: 0,
// 		storageOption: '냉장',
// 		salesAmount: 0,
// 		imageUrl:
// 			'https://mall.ourhome.co.kr//attach_file/goodImages/S000000000044_1.jpg',
// 	},
// 	{
// 		title: '아워홈 치킨스테이크 오리지널 920g (4인분)',
// 		description: '겉바속촉 통닭다리살 오븐구이 치킨스테이크',
// 		price: 17900,
// 		discountRate: 5,
// 		storageOption: '냉동',
// 		salesAmount: 20,
// 		imageUrl:
// 			'https://mall.ourhome.co.kr//attach_file/20230102/46F635C6C78A42EA8290B235FDA4D829.jpg',
// 	},
// ];

// Product.insertMany(products)
// 	.then(result => {
// 		console.log('데이터 삽입:', result);
// 	})
// 	.catch(error => {
// 		console.error('데이터 삽입 에러:', error);
// 	});

/* 데이터 전체 삭제 */
// Product.deleteMany({})
// 	.then(result => {
// 		console.log('모든 데이터가 삭제되었습니다.');
// 	})
// 	.catch(error => {
// 		console.error('데이터 삭제 에러:', error);
// 	});
