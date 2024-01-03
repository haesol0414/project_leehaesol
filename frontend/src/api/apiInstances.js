import axios from 'axios';

const getHeader = () => {
	const header = {
		'content-type': 'application/json',
	};

	return header;
};

const axiosApi = url => {
	const instance = axios.create({
		baseURL: url,
		headers: getHeader(),
	});
	return instance;
};

export const defaultInstance = axiosApi(process.env.REACT_APP_BASE_URL || '');
