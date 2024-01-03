import styled from 'styled-components';

export const StyledTd = styled.td`
	padding: 22px 20px 18px 20px;
	color: #000;
	text-align: center;
	border-bottom: 0;
	background: #fafafa;
`;

export const Text = styled.span`
	font-size: 1.4rem;
	margin-right: 14px;
`;

export const Price = styled.span`
	font-size: 2rem;

	& b {
		font-size: 2.2rem;
		font-weight: 900;
	}
`;

export const Notice = styled.span`
	font-size: 1.4rem;
	color: #888888;
	margin-left: 3px;
`;

export const Symbol = styled.span`
	margin: 32px;
	font-size: 4.1rem;
	font-weight: 350;
	color: #b5b5b5;
	vertical-align: middle;
`;
