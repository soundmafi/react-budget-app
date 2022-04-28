import styled from 'styled-components';

interface IBudge {
	cost: number;
}

const ExpenseBadge = ({ cost }: IBudge) => {
	return <StyledExpenseBadge>{cost}</StyledExpenseBadge>;
};

export default ExpenseBadge;

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
