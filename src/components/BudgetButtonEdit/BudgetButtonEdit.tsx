import styled from 'styled-components';

interface IBudgetButton {
	hadleClickEdit: (e: React.MouseEvent<HTMLButtonElement>) =>void;
}

const CardButtonEdit = ({hadleClickEdit}: IBudgetButton) => {

	return <StyledButton onClick={hadleClickEdit}>Edit</StyledButton>;
};

export default CardButtonEdit;

export const StyledButton = styled.button`
	width: 85px;
	padding: 8px;

	font-weight: 500;
	font-size: 14px;
	line-height: 17px;

	color: #000000;
	text-align: center;
	background-color: #ffffff;
	border-radius: 10px;
`;
