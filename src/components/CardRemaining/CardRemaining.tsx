import { useContext } from 'react';
import { StyledBudgetCardText } from '../../Appstyles';
import { BudgetContext } from '../../context/BudgetContext/BudgetContext';
import { CurrencyContext } from '../../context/CurrenciesContext/CurrenciesContext';
import { useExpensesContex } from '../../context/ExpensesContext/ExpensesContext';
import { StyledCardRemaining } from './styles';

const CardRemaining = () => {
	const { currency } = useContext(CurrencyContext);
	const { budget } = useContext(BudgetContext);
	const { expenses } = useExpensesContex();
	const spent = expenses.reduce((sumExpenses, expense) => sumExpenses + expense.cost, 0);
	const remaining = budget - spent;

	return (
		<StyledCardRemaining remaining={remaining}>
			{remaining >= 0 ? (
				<StyledBudgetCardText>
					Remaining: {currency} {remaining}
				</StyledBudgetCardText>
			) : (
				<StyledBudgetCardText>
					Overspending by: {currency} {-remaining}
				</StyledBudgetCardText>
			)}
		</StyledCardRemaining>
	);
};

export default CardRemaining;
