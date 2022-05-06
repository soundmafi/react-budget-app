import styled from 'styled-components';

export const StyledApp = styled.div``;

export const StyledContainer = styled.div`
	width: 100%;
	max-width: 375px;
	margin: 0 auto;
	padding: 30px 20px;

	background-color: #ffffff;
`;

export const StyledCardContainer = styled.div`
	display: grid;
	grid-template-rows: repeat(1fr);
	grid-row-gap: 20px;

	margin-bottom: 30px;
`;

export const StyledHeader = styled.header`
	display: grid;
	grid-template-columns: 1fr 0.3fr;
`;

export const StyledBudgetCard = styled.div<{ cardName: string }>`
	display: flex;
	align-items: center;
	justify-content: space-between;

	width: 100%;
	height: 100px;
	padding: 20px;

	border-radius: 10px;
	background-color: ${({ cardName }) =>
		cardName === 'Budget'
			? '#7cc6fe'
			: cardName === 'Remaining'
			? '#CCD5FF'
			: cardName === 'Spent'
			? '#E7BBE3'
			: '#FF0000'};
`;

export const StyledBudgetCardText = styled.p`
	font-weight: 500;
	font-size: 20px;
	line-height: 24px;
`;
