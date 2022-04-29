import styled from 'styled-components';
import ExpenseButtonClose from '../ExpenseButtonDelete/ExpenseButtonDelete';
import { IExpense } from '../../contex/ExpensesContex/types';


const ExpenseCard = ({ cost, name, id }: IExpense) => {
	return (
		<StyledExpenseCard>
			<StyledExpenseName>{name}</StyledExpenseName>
			<StyledExpenseBadge>{cost}</StyledExpenseBadge>
			<ExpenseButtonClose id = {id}/>
		</StyledExpenseCard>
	);
};

export default ExpenseCard;

export const StyledExpenseCard = styled.li`
	display: grid;
	grid-template-columns: 1.1fr 0.2fr 0.1fr;

	padding: 14px 17px 14px 20px;
	
	border-bottom: 2px solid #ccd5ff;
`;

export const StyledExpenseName = styled.p`
	font-size: 16px;
	font-weight: 400;
	line-height: 19.8px;
	text-align: left;
`;

export const StyledExpenseBadge = styled.p`
	width: 60px;
	padding: 3px 12px;
	
	font-size: 12px;
	font-weight: 400;
	line-height: 15px;
	text-align: center;
	color: #ffffff;

	background-color: #23c9ff;
	border-radius: 10px;
`;
