import React from 'react';
import * as S from './ProductList.style';
import Product from '../Product/Product';
import { formatIndex } from '../../../../utils/formatIndex';

/* 상품 리스트 컴포넌트 */
export default function ProductList({ productList }) {
	return (
		<>
			{productList && productList.length > 0 ? (
				<S.StyledOl>
					{productList.map((product, index) => (
						<Product
							key={product._id}
							product={product}
							index={formatIndex(index + 1)}
						/>
					))}
				</S.StyledOl>
			) : (
				<S.Empty>
					<p>상품이 없습니다.</p>
				</S.Empty>
			)}
		</>
	);
}
