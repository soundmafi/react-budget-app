import styled from 'styled-components';

interface IExpenseName {
	name: string;
}

const ExpenseName = ({ name }: IExpenseName) => {
	return <StyledExpenseName>{name}</StyledExpenseName>;
};

export default ExpenseName;

export const StyledExpenseName = styled.p`
	font-size: 16px;
	font-weight: 400;
	line-height: 19.8px;
	letter-spacing: 0em;
	text-align: left;
`;
