import { useContext } from 'react';
import { StyledBudgetCardText } from '../../Appstyles';
import { CurrencyContext } from '../../context/CurrenciesContext/CurrenciesContext';
import { useExpensesContex } from '../../context/ExpensesContext/ExpensesContext';
import { StyledCardSpent } from './styles';

const CardSpent = () => {
	const { currency } = useContext(CurrencyContext);
	const { expenses } = useExpensesContex();
	const spent = expenses.reduce((sumExpenses, expense) => sumExpenses + expense.cost, 0);

	return (
		<StyledCardSpent>
			<StyledBudgetCardText>
				Spent so far: {currency} {spent}
			</StyledBudgetCardText>
		</StyledCardSpent>
	);
};

export default CardSpent;
