import ExpenseButtonClose from '../ExpenseButtonDelete/ExpenseButtonDelete';
import { IExpense } from '../../contex/ExpensesContex/types';
import { CurrencyContext } from '../../contex/CurrenciesContex/CurrenciesContex';
import { useContext } from 'react';
import { useExpensesContex } from '../../contex/ExpensesContex/ExpensesContex';
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
