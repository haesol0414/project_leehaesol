import React from 'react';
import * as S from './Header.style';
// import { BsPerson } from '@react-icons/all-files/bs/BsPerson';
// import { FiShoppingCart } from '@react-icons/all-files/fi/FiShoppingCart';

export default function Header() {
	return (
		<header>
			<S.HeaderBox>
				<S.StyledLink to="/">상품리스트</S.StyledLink>
				<S.StyledLink to="/cart">장바구니</S.StyledLink>
			</S.HeaderBox>
		</header>
	);
}
