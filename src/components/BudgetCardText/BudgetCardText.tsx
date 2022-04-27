import styled from 'styled-components';

interface IBudgetCardText {
	cardName: string;
	value: number;
}

const BudgetCardText = ({ cardName, value }: IBudgetCardText) => {
	return (
		<StyledBudgetCardText>
			{cardName}: ${value}
		</StyledBudgetCardText>
	);
};

export default BudgetCardText;

export const StyledBudgetCardText = styled.p`
	font-weight: 500;
	font-size: 20px;
	line-height: 24px;
`;
