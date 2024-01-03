import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledTd = styled.td`
	border-bottom: 1px solid #eee;
	padding: 15px 20px;
	vertical-align: middle;
	font-size: 1.6rem;
	text-align: center;
`;

export const TargetLink = styled(Link)`
	display: flex;
	align-items: center;
`;

export const ImageWrap = styled.div`
	position: relative;
	border: 1px solid #eee;
	overflow: hidden;
	width: 100px;

	img {
		max-width: 100%;
		border-radius: 20px;
	}
`;

export const Title = styled.div`
	padding-left: 20px;

	& strong {
		font-size: 1.6rem;
		font-weight: 400;
	}
`;

export const Price = styled.div`
	display: flex;
	flex-direction: column;

	& del {
		color: #666666;
		margin-top: 3px;
		font-size: 1.4rem;
	}
`;

export const QuantitySelector = styled.span`
	display: inline-block;
	position: relative;
	padding: 0 24px;
	height: 24px;
	background: #fff;
`;

export const Button = styled.button`
	position: absolute;
	top: 0;
	width: 24px;
	height: 100%;
	overflow: hidden;
	border: 1px solid #e0e0e0;
	font-size: 1.6rem;
	font-weight: 700;
	color: #a4a4a4;

	${props =>
		props.operator === 'minus' &&
		css`
			left: 0;
		`}

	${props =>
		props.operator === 'plus' &&
		css`
			right: 0;
		`}
`;

export const Input = styled.input`
	width: 42px;
	height: 100%;
	color: #000;
	font-size: 1.4rem;
	font-weight: 500;
	text-align: center;
	vertical-align: top;
	border: solid #e0e0e0;
	border-width: 1px 0;
`;
