import styled from 'styled-components';

interface IExpenseName {
	expenseName: string;
}

const ExpenseName = ({ expenseName }: IExpenseName) => {
	return <StyledExpenseName>{expenseName}</StyledExpenseName>;
};

export default ExpenseName;

export const StyledExpenseName = styled.p`
	font-size: 16px;
	font-weight: 400;
	line-height: 19.8px;
	letter-spacing: 0em;
	text-align: left;
`;
