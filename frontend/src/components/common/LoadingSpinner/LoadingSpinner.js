import React from 'react';
import Spinner from '../../../assets/images/spinner.gif';
import * as S from './LodingSpinner.style';

export default function LoadingSpinner() {
	return (
		<S.StyledSpinner>
			<img src={Spinner} alt="로딩 중..." width="5%" />
		</S.StyledSpinner>
	);
}
