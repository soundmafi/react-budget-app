import styled from 'styled-components';
import { ChangeEvent } from 'react';
interface IBudgetInput {
	cardName: string;
	budget: number;
	handleGetBudget: (e: ChangeEvent<HTMLInputElement>) => void;
}

const BudgetInput = ({ handleGetBudget, budget, cardName }: IBudgetInput) => {
	return (
		<label htmlFor={cardName}>
			<StyledBudgetInput
				name={cardName}
				type="number"
				min={0}
				value={budget}
				placeholder="Enter budget..."
				onChange={handleGetBudget}
			/>
		</label>
	);
};

export default BudgetInput;

const StyledBudgetInput = styled.input`
	width: 70%;

	font-size: 20px;
	font-weight: 500;
	line-height: 24px;
	color: #ffffff99;

	background: inherit;
`;
