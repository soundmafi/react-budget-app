import { IExpense } from '../../context/ExpensesContext/types';
import ExpenseCard from '../ExpenseCard/ExpenseCard';
import { StyledExpensesList, StyledAlert } from './styles';

interface IList {
	resultExpenses: IExpense[];
}

const ExpensesList = ({ resultExpenses }: IList) => {
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
