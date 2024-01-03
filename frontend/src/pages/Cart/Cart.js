import React from 'react';
import * as S from './Cart.style';
import CartTable from '../../components/pages/cart/CartTable/CartTable';

/* 장바구니 페이지 */
export default function Cart() {
	return (
		<>
			<S.CartWrapper>
				<h1>장바구니 페이지</h1>
				<CartTable />
			</S.CartWrapper>
		</>
	);
}
