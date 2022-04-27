import styled from 'styled-components';

// interface IButton {
// 	isDisabled: boolean;
// }

const Button = () => {
	return <StyledButton type="submit">Done</StyledButton>;
};

export default Button;

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
`;
