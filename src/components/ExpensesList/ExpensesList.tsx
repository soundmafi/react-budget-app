import { IExpense } from '../../contex/ExpensesContex/types';
import ExpenseCard from '../ExpenseCard/ExpenseCard';
import { StyledExpensesList } from './styles';

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


