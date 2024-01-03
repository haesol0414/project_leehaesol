import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
	html {
		font-size: 62.5%;
	}
	body {
		font-size: 1.6rem;
		font-family: 'Noto Sans KR', sans-serif;
	}
	ul,
	li {
		list-style: none;
	}
	a {
		text-decoration: none;
		color: inherit;
	}
	button {
		padding: 0;
		margin: 0;
		background-color: transparent;
		border: none;
		cursor: pointer;
	}
	input {
		text-align: left;
	}
	h1 {
	font-size: 4.2rem;
	}	
	h2 {
		font-size: 3.8rem;
	}
	h3 {
		font-size: 3.2rem;
	}
	h4 {
		font-size: 2.8rem;
	}
	h5 {
		font-size: 2.4rem;
	}
	strong {
		font-size: 1.7rem;
	}
	p {
		font-size: 1.4rem;
	}
`;

export default GlobalStyles;
