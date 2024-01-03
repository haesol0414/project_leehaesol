import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderBox = styled.header`
	background-color: #ff9326;
	width: 100%;
	height: 100px;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 100px;
`;

export const StyledLink = styled(Link)`
	width: fit-content;
	text-align: right;
	text-decoration: none;
	color: #fff;
	font-size: 3rem;
`;
