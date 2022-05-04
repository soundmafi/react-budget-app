import styled from "styled-components";

export const StyledExpenseForm = styled.form`
	display: grid;
	grid-row-gap: 20px;

	width: 100%;
`;

export const StyledInput = styled.input`
	width: 100%;
	padding: 15px 20px;

	font-size: 16px;
	font-weight: 400;
	line-height: 19px;
	letter-spacing: 0.5px;
	text-align: left;
	color: #999999;

	border-radius: 10px;
	box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);
`;

export const StyledButton = styled.button`
	width: 100%;
	margin-top: 10px;
	padding: 15px;

	font-weight: 400;
	font-size: 16px;
	line-height: 19px;
	color: #ffffff;
	text-align: center;

	background-color: #23c9ff;
	border-radius: 10px;

	&:hover{
		background-color: #21b4e6;
	}

	&:active{
		background-color: #188db4;
	}
`;
