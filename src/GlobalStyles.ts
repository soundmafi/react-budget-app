import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

* {
	padding: 0;
	margin: 0;
	box-sizing: border-box;
}

input{
	border: none;
}

button {
	padding: 0;
	
	font-family: inherit;

	border: none;
	outline: none;
	cursor: pointer;	
}

body {
	font-family: 'Inter', sans-serif;
	background: #f3f3f3;
}
`;
