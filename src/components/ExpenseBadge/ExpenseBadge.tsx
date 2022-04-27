import styled from 'styled-components';

interface IBudge {
	expenseValue: number;
}

const ExpenseBadge = ({ expenseValue }: IBudge) => {
	return <StyledExpenseBadge>{expenseValue}</StyledExpenseBadge>;
};

export default ExpenseBadge;

export const StyledExpenseBadge = styled.p`
	width: 60px;
	padding: 3px 12px;
	background-color: #23c9ff;
	color: #ffffff;
	border-radius: 10px;
	font-size: 12px;
	font-weight: 400;
	line-height: 15px;
	letter-spacing: 0em;
	text-align: center;
`;
