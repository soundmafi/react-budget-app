import ExpenseButtonClose from '../ExpenseButtonDelete/ExpenseButtonDelete';
import { IExpense } from '../../context/ExpensesContext/types';
import { CurrencyContext } from '../../context/CurrenciesContext/CurrenciesContext';
import { useContext } from 'react';
import { useExpensesContex } from '../../context/ExpensesContext/ExpensesContext';
import { StyledExpenseBadge, StyledExpenseCard, StyledExpenseName } from './styles';

const ExpenseCard = ({ cost, name, id }: IExpense) => {
	const { currency } = useContext(CurrencyContext);
	const { deleteExpense } = useExpensesContex();

	const handleBtnDelete = () => deleteExpense(id);

	return (
		<StyledExpenseCard id={id}>
			<StyledExpenseName>{name}</StyledExpenseName>
			<StyledExpenseBadge>
				{currency}
				{cost}
			</StyledExpenseBadge>
			<ExpenseButtonClose handleBtnDelete={handleBtnDelete} />
		</StyledExpenseCard>
	);
};

export default ExpenseCard;
