import styled from 'styled-components';
import BudgetButtonEdit from '../BudgetButtonEdit/BudgetButtonEdit';
import BudgetButtonSave from '../BudgetButtonSave/BudgetButtonSave';
import BudgetInput from '../BudgetInput/BudgetInput';
import BudgetCardText from './../BudgetCardText/BudgetCardText';
import { useContext, useState } from 'react';
import { BudgetContext } from '../../contex/BudgetContex/BudgetContext';
import { CurrencyContext } from '../../contex/CurrenciesContex/CurrenciesContex';
import { ExpensesContext } from '../../contex/ExpensesContex/ExpensesContex';

interface IBudgetCard {
	cardName: string;
}

const BudgetCard = ({ cardName}: IBudgetCard) => {
	const { budget, setBudget } = useContext(BudgetContext);
	const { currency } = useContext(CurrencyContext);
	const { expenses } = useContext(ExpensesContext);
	const [stateButton, setStateButton] = useState(true);

	const hadleClickEdit = () => {
		setStateButton(false);
	};
	const hadleClickSave = () => {
		setStateButton(true);
	};

	const handleGetBudget = (e: React.ChangeEvent<HTMLInputElement>) => {
		setBudget(+e.target.value);
	};

	return (
		<StyledBudgetCard aria-label={cardName} cardName={cardName}>
			{/* {cardName === 'Budget' && <BudgetButton typeButton={'Edit'} />} */}
			{stateButton ? (
				<BudgetCardText cardName={cardName} currency={currency} value={budget} />
			) : (
				<BudgetInput
					cardName={cardName}
					handleGetBudget={handleGetBudget}
					budget={budget}
				/>
			)}
			{stateButton ? (
				<BudgetButtonEdit hadleClickEdit={hadleClickEdit} />
			) : (
				<BudgetButtonSave hadleClickSave={hadleClickSave} />
			)}
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
