import styled from 'styled-components';
import { MouseEvent } from 'react';

interface IBudgetButton {
	hadleClickEdit: (e: MouseEvent<HTMLButtonElement>) => void;
}

const CardButtonEdit = ({ hadleClickEdit }: IBudgetButton) => {
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
