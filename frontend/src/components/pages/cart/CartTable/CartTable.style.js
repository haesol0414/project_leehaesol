import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const CartTable = styled.table`
	width: 100%;
	border-collapse: collapse;
	border-top: 1px solid #000;

	& caption {
		font-size: 0;
	}
`;

export const EmptyCart = styled.div`
	padding: 80px;
	background-color: #f7f7f7;
	text-align: center;

	& p {
		font-size: 2rem;
		font-weight: 600;
	}
`;
