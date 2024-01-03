import React, { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import * as S from './CartPrice.style';
import { totalPriceSelector } from '../../../../recoil/cartAtom';

/* 장바구니 하단 총 가격 컴포넌트 */
export default function CartPrice() {
	const totalCartPrice = useRecoilValue(totalPriceSelector); // 장바구니 상품 총액 불러오기
	const [shippingCost, setShippingCost] = useState(); // 배송비 상태

	useEffect(() => {
		// 총 가격을 기반으로 배송비 설정
		if (totalCartPrice === 0 || totalCartPrice >= 30000) {
			setShippingCost(0);
		} else {
			setShippingCost(3000);
		}
	}, [totalCartPrice]); // 수량 조절로 인해 총 가격이 변경될 경우 재 렌더링

	return (
		<>
			<tfoot>
				<tr>
					<S.StyledTd colSpan="8">
						<S.Text>총 금액</S.Text>
						<S.Price>
							<b>{totalCartPrice.toLocaleString()}</b>원
						</S.Price>
						<S.Symbol>+</S.Symbol>
						<S.Text>배송비</S.Text>
						<S.Price>
							<b>
								{shippingCost && shippingCost.toLocaleString()}
							</b>
							원
						</S.Price>
						<S.Notice>(3만원이상 구매 시 무료배송)</S.Notice>
						<S.Symbol>=</S.Symbol>
						<S.Text>결제 금액</S.Text>
						<S.Price>
							<b>
								{(
									totalCartPrice + shippingCost
								).toLocaleString()}
							</b>
							원
						</S.Price>
					</S.StyledTd>
				</tr>
			</tfoot>
		</>
	);
}
