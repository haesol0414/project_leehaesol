import React, { memo } from 'react';
import * as S from './CartHead.style';

/* 장바구니 테이블 Head 컴포넌트 */
function CartHead() {
	return (
		<>
			<caption>장바구니 상품 목록</caption>
			<colgroup>
				<col style={{ width: 'auto' }} />
				<col style={{ width: '14%' }} />
				<col style={{ width: '10%' }} />
				<col style={{ width: '14%' }} />
			</colgroup>
			<thead>
				<tr>
					<S.StyledTh scope="col">상품명</S.StyledTh>
					<S.StyledTh scope="col">구매가</S.StyledTh>
					<S.StyledTh scope="col">수량</S.StyledTh>
					<S.StyledTh scope="col">금액</S.StyledTh>
				</tr>
			</thead>
		</>
	);
}

export default memo(CartHead);


// cart 안의 데이터들에 영향을 미치지 않는 컴포넌트이므로
// React의 memo 기능을 이용하여 불필요한 렌더링 방지
