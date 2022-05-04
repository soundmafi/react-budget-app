import { MouseEvent } from 'react';
import { StyledButton } from './styles';

interface IBudgetButton {
	hadleClickSave: (e: MouseEvent<HTMLButtonElement>) => void;
}

const CardButtonSave = ({ hadleClickSave }: IBudgetButton) => {
	return <StyledButton onClick={hadleClickSave}>Save</StyledButton>;
};

export default CardButtonSave;


