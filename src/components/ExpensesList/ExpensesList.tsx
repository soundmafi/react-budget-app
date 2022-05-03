import styled from 'styled-components';
import { IExpense } from '../../contex/ExpensesContex/types';
import ExpenseCard from '../ExpenseCard/ExpenseCard';

interface IList {
	resultExpenses: IExpense[];
}

const ExpensesList = ({ resultExpenses }: IList) => {
	return (
		<StyledExpensesList>
			{resultExpenses.map((expense) => {
				return (
					<ExpenseCard
						name={expense.name}
						cost={expense.cost}
						id={expense.id}
						key={expense.id}
					/>
				);
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
