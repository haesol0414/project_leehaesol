import React from 'react';
import * as S from './ProductFlag.style';

/* 상품 Flag 컴포넌트 */
export default function ProductFlag({ textFlag }) {
	return (
		<S.FlagWrap>
			<S.Text>{textFlag}</S.Text>
		</S.FlagWrap>
	);
}
