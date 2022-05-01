import styled from 'styled-components';

interface IBudgetCardText {
	cardName: string;
	value: number;
	currency: string;
}

const BudgetCardText = ({ cardName, value, currency }: IBudgetCardText) => {

	return (
		<StyledBudgetCardText>
			{cardName}: {currency} {value}
		</StyledBudgetCardText>
	);
};

export default BudgetCardText;

export const StyledBudgetCardText = styled.p`
	font-weight: 500;
	font-size: 20px;
	line-height: 24px;
`;
