import styled from 'styled-components';
import { useExpensesContex } from '../../contex/ExpensesContex/ExpensesContex';
import ExpenseCard from '../ExpenseCard/ExpenseCard';

const ExpensesList = () => {
	const { expenses } = useExpensesContex();
	return (
		<StyledExpensesList>
			{expenses.map((expense) => {
				return <ExpenseCard name={expense.name} cost={expense.cost} id={expense.id} key={expense.id}/>;
			})}
		</StyledExpensesList>
	);
};

export default ExpensesList;

const StyledExpensesList = styled.ul`
	width: 100%;
	margin-top: 30px;
	margin-bottom: 30px;
`;
