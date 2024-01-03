const { defaultInstance } = require('./apiInstances');

// POST 요청 함수
const requestPost = async (path, instance, data) => {
	const response = await instance.post(path, JSON.stringify(data));
	const status = response.status;

	return {
		status: status,
		data: response.data,
	};
};

// GET 요청 함수
const requestGet = async (path, instance) => {
	const response = await instance.get(path);
	const status = response.status;

	return {
		status: status,
		data: response.data,
	};
};

// PATCH 요청 함수
const requestPatch = async (path, instance, data) => {
	const response = await instance.patch(path, JSON.stringify(data));
	const status = response.status;

	return {
		status: status,
		data: response.data,
	};
};

// DELETE 요청 함수
const requestDelete = async (path, instance, data) => {
	const response = data
		? await instance.delete(path, { data })
		: await instance.delete(path);
	const status = response.status;
	return {
		status: status,
		data: response.data,
	};
};

/* API */
// 상품 전체 조회
export const getProducts = () => {
	return requestGet('/products', defaultInstance);
};
