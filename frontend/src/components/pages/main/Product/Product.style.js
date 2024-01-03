import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

export const StyledLi = styled.li`
	position: relative;
	float: left;
	width: 286px;
	margin: 30px 0 0 40px;
	flex: 0 1 calc(20% - 20px);

	&:hover button {
		opacity: 1;
	}
`;

export const TargetLink = styled(Link)`
	display: block;
	position: relative;
	z-index: 1;
`;

export const ImageWrap = styled.div`
	position: relative;
	border: 1px solid #eee;
	overflow: hidden;

	& img {
		max-width: 100%;
		border-radius: 20px;
	}
`;

export const Index = styled.span`
	display: inline-block;
	font-size: 3.2rem;
	font-weight: 720;
	margin-bottom: 8px;
`;

export const TextWrap = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 18px;
	gap: 5px;
`;

export const Title = styled.strong`
	font-weight: 500;
`;

export const Description = styled.p`
	margin-top: 2px;
	color: #666;
`;

export const Price = styled.div`
	margin-top: 10px;

	& span {
		font-size: 2.4rem;
	}

	& del {
		color: #666666;
		margin-left: 3px;
	}

	& em {
		color: #ff6500;
		font-weight: 500;
		margin-left: 5px;
		font-style: normal;
	}
`;

export const Option = styled.p`
	margin-top: 8px;
	color: #666;

	${props =>
		props.option === '냉동' &&
		css`
			color: #448ccb;
		`}
	${props =>
		props.option === '냉장' &&
		css`
			color: #3fc2ec;
		`};
`;

export const TargetHover = styled.div`
	position: absolute;
	top: 56px;
	left: 0;
	width: 100%;
	padding: calc(100% - 63px) 0 21px 0;
	text-align: center;
`;

export const Button = styled.button`
	display: inline-block;
	position: relative;
	width: 42px;
	height: 42px;
	margin: 0 4px;
	overflow: hidden;
	text-indent: -9999px;
	z-index: 1;
	transition: opacity 0.3s ease-in-out;
	cursor: pointer;
	opacity: 0;
	background: url('https://mall.ourhome.co.kr/res_new/images/pc/ico_item_tool.png')
		0 0 no-repeat;

	${props =>
		props.feature === 'favor' &&
		css`
			background-position: 0 -42px;
		`};
	${props =>
		props.feature === 'compare' &&
		css`
			background-position: 0 -84px;
		`};
`;
