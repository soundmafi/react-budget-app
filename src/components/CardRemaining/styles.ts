import styled from 'styled-components';

export const StyledCardRemaining = styled.div<{ remaining: number }>`
	display: flex;
	align-items: center;
	justify-content: space-between;

	width: 100%;
	height: 100px;
	padding: 20px;

	border-radius: 10px;
	background-color: ${({ remaining }) => {return((remaining >= 0) ? '#CCD5FF' : '#FF0000')}};
`;
