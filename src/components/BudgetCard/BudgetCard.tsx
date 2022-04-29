import { useState } from 'react';
import styled from 'styled-components';
import BudgetButtonEdit from '../BudgetButtonEdit/BudgetButtonEdit';
import BudgetButtonSave from '../BudgetButtonSave/BudgetButtonSave';
import BudgetInput from '../BudgetInput/BudgetInput';
import BudgetCardText from './../BudgetCardText/BudgetCardText';

interface IBudgetCard {
	cardName: string;
	value: number;
}

const BudgetCard = ({ cardName, value }: IBudgetCard) => {
	const [stateButton, setStateButton] = useState(true);
	const hadleClickEdit = () =>{
		setStateButton(false);
	}
	const hadleClickSave = () =>{
		setStateButton(true);
	}


	return (
		<StyledBudgetCard aria-label={cardName} cardName={cardName}>
			{stateButton? <BudgetCardText cardName={cardName} value={value} />: <BudgetInput/>}
			
			{/* {cardName === 'Budget' && <BudgetButton typeButton={'Edit'} />} */}
			{stateButton ? <BudgetButtonEdit hadleClickEdit= {hadleClickEdit}/> : <BudgetButtonSave hadleClickSave= {hadleClickSave}/>}
		</StyledBudgetCard>
	);
};

export default BudgetCard;

const StyledBudgetCard = styled.div<{ cardName: string }>`
	display: flex;
	align-items: center;
	justify-content: space-between;

	width: 100%;
	height: 100px;
	padding: 20px;

	border-radius: 10px;
	background-color: ${({ cardName }) =>
		cardName === 'Budget'
			? '#7cc6fe'
			: cardName === 'Remaining'
			? '#CCD5FF'
			: cardName === 'Spent so far'
			? '#E7BBE3'
			: '#FF0000'};
`;
