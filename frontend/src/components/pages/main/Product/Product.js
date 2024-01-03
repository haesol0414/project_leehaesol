import React from 'react';
import { useRecoilState } from 'recoil';
import * as S from './Product.style';
import { cartAtom } from '../../../../recoil/cartAtom';
import ProductFlag from '../ProductFlag/ProductFlag';

/* 상품 1개 컴포넌트 */
export default function Product({ product, index }) {
	const [cart, setCart] = useRecoilState(cartAtom); // 장바구니 불러오기

	// 장바구니 담기 버튼
	const handleCartBtn = () => {
		// 현재 상품이 Cart에 이미 존재하는 상품인지 확인
		const existingItemIndex = cart.findIndex(e => e._id === product._id);

		// 존재하는 상품일 경우 (Index 값이 들어왔을 경우)
		if (existingItemIndex !== -1) {
			setCart(prevCart => {
				const updatedCart = [...prevCart];

				// 기존 수량 + 1
				updatedCart[existingItemIndex] = {
					...updatedCart[existingItemIndex],
					quantity: updatedCart[existingItemIndex].quantity + 1,
				};

				return updatedCart;
			});
		} else {
			// 장바구니에 존재하지 않는 상품의 경우
			const newCartItem = {
				_id: product._id,
				title: product.title,
				imageUrl: product.imageUrl,
				price: product.price,
				discountedPrice: product.discountedPrice,
				quantity: 1,
			};

			// 현재 상품 1개 추가
			setCart([...cart, newCartItem]);
		}

		alert(`${product.title} 상품이 장바구니에 추가되었습니다. `);
	};

	return (
		<>
			<S.StyledLi key={product._id}>
				<S.TargetLink to={`/products/${product._id}`}>
					<S.Index>{index}</S.Index>
					<S.ImageWrap>
						<img src={product.imageUrl} alt={product.title} />
					</S.ImageWrap>

					<S.TextWrap>
						{product.salesAmount >= 10000 && (
							<ProductFlag textFlag={'베스트'} />
						)}
						<S.Title>{product.title}</S.Title>
						<S.Description>{product.description}</S.Description>
						<S.Price>
							<span>
								<b>
									{product.discountedPrice.toLocaleString()}
								</b>
								원
							</span>
							{product.discountRate !== 0 && (
								<del>
									<b>{product.price.toLocaleString()}</b>원
								</del>
							)}
							{product.discountRate !== 0 && (
								<em>
									<b>{product.discountRate}</b>%
								</em>
							)}
						</S.Price>
						<S.Option option={product.storageOption}>
							{product.storageOption}
						</S.Option>
					</S.TextWrap>
				</S.TargetLink>
				<S.TargetHover>
					<S.Button feature={'cart'} onClick={handleCartBtn}>
						장바구니
					</S.Button>
					<S.Button feature={'favor'}>찜하기</S.Button>
					<S.Button feature={'compare'}>상품비교</S.Button>
				</S.TargetHover>
			</S.StyledLi>
		</>
	);
}
