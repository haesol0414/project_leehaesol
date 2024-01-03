import React from 'react';
import { useRecoilValue } from 'recoil';
import * as S from './CartTable.style';
import CartHead from '../CartHead/CartHead';
import CartItem from '../CartItem/CartItem';
import CartPrice from '../CartPrice/CartPrice';
import { cartAtom } from '../../../../recoil/cartAtom';

/* 장바구니 테이블 컴포넌트 */
export default function CartTable() {
	const cartList = useRecoilValue(cartAtom); // Cart 불러오기

	return (
		<>
			{cartList && cartList.length > 0 ? (
				<S.CartTable>
					<CartHead />
					<tbody>
						{cartList.map(Item => {
							return (
								<CartItem
									key={Item._id}
									cart={cartList}
									cartItem={Item}
								/>
							);
						})}
					</tbody>
					<CartPrice cart={cartList} />
				</S.CartTable>
			) : (
				<S.EmptyCart>
					<p>장바구니가 비어 있습니다.</p>
				</S.EmptyCart>
			)}
		</>
	);
}
