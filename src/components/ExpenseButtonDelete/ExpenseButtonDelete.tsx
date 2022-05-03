import styled from 'styled-components';
import { useExpensesContex } from '../../contex/ExpensesContex/ExpensesContex';

interface IButtonDelete {
	id: string;
}

const ExpenseButtonDelete = ({ id }: IButtonDelete) => {
	const { expenses, setExpenses } = useExpensesContex();
	const handleBtnDelete = () => {
		setExpenses(expenses.filter((expense) => expense.id !== id));
	};
	return <StyledExpenseButtonClose onClick={handleBtnDelete} id={id} />;
};

export default ExpenseButtonDelete;

export const StyledExpenseButtonClose = styled.button`
	width: 20px;
	height: 20px;
	margin-left: 15px;

	border: 1px solid #000000;
`;
