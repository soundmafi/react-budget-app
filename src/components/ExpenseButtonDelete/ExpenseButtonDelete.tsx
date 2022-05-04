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
	return (
		<StyledExpenseButtonClose onClick={handleBtnDelete} id={id}>
			<svg
				width="16"
				height="16"
				viewBox="0 0 16 16"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<line
					x1="0.883025"
					y1="1.0305"
					x2="15.0252"
					y2="15.1726"
					stroke="#C884A6"
					stroke-width="2"
				/>
				<line
					x1="14.8493"
					y1="0.707107"
					x2="0.707138"
					y2="14.8492"
					stroke="#C884A6"
					stroke-width="2"
				/>
			</svg>
		</StyledExpenseButtonClose>
	);
};

export default ExpenseButtonDelete;

export const StyledExpenseButtonClose = styled.button`
	width: 20px;
	height: 20px;
	margin-left: 15px;
	
	background-color: #ffffff;
`;
