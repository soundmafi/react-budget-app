import { ChangeEvent } from 'react';
import { StyledBudgetInput } from './styles';
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
