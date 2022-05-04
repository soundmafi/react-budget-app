import { MouseEvent } from 'react';
import { StyledButton } from './styles';

interface IBudgetButton {
	hadleClickEdit: (e: MouseEvent<HTMLButtonElement>) => void;
}

const CardButtonEdit = ({ hadleClickEdit }: IBudgetButton) => {
	return <StyledButton onClick={hadleClickEdit}>Edit</StyledButton>;
};

export default CardButtonEdit;
