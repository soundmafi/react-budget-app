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

export const StyledBudgetCardText = styled.p`
	font-weight: 500;
	font-size: 20px;
	line-height: 24px;
`;
