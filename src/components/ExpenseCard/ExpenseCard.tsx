import styled from 'styled-components';
import ExpenseButtonClose from './../ExpenseButtonClose/ExpenseButtonClose';
import ExpenseBadge from '../ExpenseBadge/ExpenseBadge';
import ExpenseName from '../ExpenseName/ExpenseName';
import { IExpense } from '../../contex/ExpensesContex/types';


const ExpenseCard = ({ cost, name, id }: IExpense) => {
	return (
		<StyledExpenseCard id={id}>
			<ExpenseName name={name} />
			<ExpenseBadge cost={cost} />
			<ExpenseButtonClose />
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
