import { useEffect, useState } from 'react';
import { useExpensesContex } from '../../context/ExpensesContext/ExpensesContext';
import { IExpense } from '../../context/ExpensesContext/types';
import { useSearchContex } from '../../context/SearchContext/SearchContext';
import ExpenseCard from '../ExpenseCard/ExpenseCard';
import { StyledExpensesList, StyledAlert } from './styles';

const ExpensesList = () => {
	const { expenses } = useExpensesContex();
	const { searchExpense } = useSearchContex();
	const [resultExpenses, setResultExpenses] = useState<IExpense[]>(expenses);

	useEffect(() => {
		setResultExpenses(
			expenses.filter((expense) =>
				expense.name.toLowerCase().includes(searchExpense.toLowerCase())
			)
		);
	}, [searchExpense, expenses]);

	return (
		<StyledExpensesList>
			{resultExpenses.length > 0 ? (
				resultExpenses.map((expense) => {
					return (
						<ExpenseCard
							name={expense.name}
							cost={expense.cost}
							id={expense.id}
							key={expense.id}
						/>
					);
				})
			) : (
				<StyledAlert>Oooops 🙈</StyledAlert>
			)}
		</StyledExpensesList>
	);
};

export default ExpensesList;
