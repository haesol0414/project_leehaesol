import React from 'react';
import { useRecoilState } from 'recoil';
import * as S from './CartItem.style';
import { cartAtom } from '../../../../recoil/cartAtom';

/* 장바구니 상품 한 줄 컴포넌트 */
export default function CartItem({ cartItem }) {
	const [cart, setCart] = useRecoilState(cartAtom);

	// 장바구니 수량 조절
	const handleQuantity = (type, inputValue) => {
		const cartItemIndex = cart.findIndex(e => e._id === cartItem._id);

		if (type === 'plus') {
			// 수량 증가
			setCart(prevCart => {
				const updatedCart = [...prevCart];

				updatedCart[cartItemIndex] = {
					...updatedCart[cartItemIndex],
					quantity: updatedCart[cartItemIndex].quantity + 1,
				};

				return updatedCart;
			});
		} else if (type === 'minus') {
			// 수량 감소
			if (cart[cartItemIndex].quantity === 1) return;

			setCart(prevCart => {
				const updatedCart = [...prevCart];

				updatedCart[cartItemIndex] = {
					...updatedCart[cartItemIndex],
					quantity: updatedCart[cartItemIndex].quantity - 1,
				};

				return updatedCart;
			});
		} else if (type === 'input') {
			// 수량 직접 입력
			const newQuantity = parseInt(inputValue, 10) || 0;
			if (newQuantity <= 0) return;

			setCart(prevCart => {
				const updatedCart = [...prevCart];

				updatedCart[cartItemIndex] = {
					...updatedCart[cartItemIndex],
					quantity: newQuantity,
				};

				return updatedCart;
			});
		}
	};

	return (
		<>
			<tr key={cartItem._id}>
				<S.StyledTd>
					<S.TargetLink to={`/products/${cartItem._id}`}>
						<S.ImageWrap>
							<img src={cartItem.imageUrl} alt={cartItem.title} />
						</S.ImageWrap>
						<S.Title>
							<strong>{cartItem.title}</strong>
						</S.Title>
					</S.TargetLink>
				</S.StyledTd>
				<S.StyledTd>
					<S.Price>
						<span>
							<b>{cartItem.discountedPrice.toLocaleString()}</b>원
						</span>
						<del>
							<b>{cartItem.price.toLocaleString()}</b>원
						</del>
					</S.Price>
				</S.StyledTd>
				<S.StyledTd>
					<S.QuantitySelector>
						<S.Button
							operator={'minus'}
							onClick={() => handleQuantity('minus')}
						>
							-
						</S.Button>
						<S.Input
							type="text"
							title="수량 직접입력"
							value={cartItem.quantity}
							onChange={e =>
								handleQuantity('input', e.target.value)
							}
						/>
						<S.Button
							operator={'plus'}
							onClick={() => handleQuantity('plus')}
						>
							+
						</S.Button>
					</S.QuantitySelector>
				</S.StyledTd>
				<S.StyledTd>
					<span>
						<b>
							{(
								cartItem.discountedPrice * cartItem.quantity
							).toLocaleString()}
						</b>
						원
					</span>
				</S.StyledTd>
			</tr>
		</>
	);
}
