import styled from 'styled-components';
import { Color } from './../../types/index';
import BudgetButton from '../BudgetButton/BudgetButton';
import BudgetCardText from './../BudgetCardText/BudgetCardText';

interface IBudgetCard {
	cardName: string;
	value: number;
}

const BudgetCard = ({ cardName, value }: IBudgetCard) => {
	return (
		<StyledBudgetCard aria-label={cardName} cardName={cardName}>
			<BudgetCardText cardName={cardName} value={value} />
			{cardName === 'Budget' && <BudgetButton typeButton={'Edit'} />}
		</StyledBudgetCard>
	);
};

export default BudgetCard;

const StyledBudgetCard = styled.div<{ cardName: string }>`
	width: 100%;
	height: 100px;
	border-radius: 10px;
	padding: 20px;
	background-color: ${({ cardName }) =>
		cardName === 'Budget'
			? '#7cc6fe'
			: cardName === 'Remaining'
			? '#CCD5FF'
			: cardName === 'Spent so far'
			? '#E7BBE3'
			: '#FF0000'};
	display: flex;
	align-items: center;
	justify-content: space-between;
`;
