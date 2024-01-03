import React, { useEffect, useState } from 'react';
import * as S from './Main.style';
import ProductList from '../../components/pages/main/ProductList/ProductList';
import LoadingSpinner from '../../components/common/LoadingSpinner/LoadingSpinner';
import { getProducts } from '../../api/apiRequests';

/* 메인 페이지 -> 상품 목록 조회 */
export default function Main() {
	const [productList, setProductList] = useState(); // 상품 리스트 상태 관리

	// 상품 목록 조회 API 호출
	useEffect(() => {
		getProducts().then(response => {
			setProductList(response.data.productList); // 서버에서 받아온 데이터 저장
		});
	}, []);

	return productList ? (
		<S.MainWrapper>
			<h1>상품 리스트 페이지</h1>
			<ProductList productList={productList} />
		</S.MainWrapper>
	) : (
		<LoadingSpinner />
	);
}
