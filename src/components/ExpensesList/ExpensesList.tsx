import styled from 'styled-components';
import {
	ExpenseContextProvider,
	useExpensesContex,
} from '../../contex/ExpensesContex/ExpensesContex';
import ExpenseCard from '../ExpenseCard/ExpenseCard';

const ExpensesList = () => {
	const { expenses } = useExpensesContex();
	return (
		<ExpenseContextProvider>
			<StyledExpensesList>
				{expenses.map((expense) => {
					return <ExpenseCard name={expense.name} cost={expense.cost} />;
				})}
			</StyledExpensesList>
		</ExpenseContextProvider>
	);
};

export default ExpensesList;

const StyledExpensesList = styled.ul`
	width: 100%;
	margin-top: 30px;
	margin-bottom: 30px;
`;
