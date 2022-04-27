import styled from 'styled-components';
import ExpenseButtonClose from './../ExpenseButtonClose/ExpenseButtonClose';
import ExpenseBadge from '../ExpenseBadge/ExpenseBadge';
import ExpenseName from '../ExpenseName/ExpenseName';

interface IExpenseCard {
	expenseName: string;
	expenseValue: number;
}

const ExpenseCard = ({ expenseName, expenseValue }: IExpenseCard) => {
	return (
		<StyledExpenseCard>
			<ExpenseName expenseName={expenseName} />
			<ExpenseBadge expenseValue={expenseValue} />
			<ExpenseButtonClose />
		</StyledExpenseCard>
	);
};

export default ExpenseCard;

export const StyledExpenseCard = styled.div`
	padding: 14px 17px 14px 20px;
	border-bottom: 2px solid #ccd5ff;
	display: grid;
	grid-template-columns: 1.1fr 0.2fr 0.1fr;
`;
