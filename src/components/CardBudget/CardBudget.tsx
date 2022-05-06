import { ChangeEvent, useContext, useState } from 'react';
import { StyledBudgetCardText } from '../../Appstyles';
import { BudgetContext } from '../../context/BudgetContext/BudgetContext';
import { CurrencyContext } from '../../context/CurrenciesContext/CurrenciesContext';
import BudgetButtonEdit from '../BudgetButtonEdit/BudgetButtonEdit';
import BudgetButtonSave from '../BudgetButtonSave/BudgetButtonSave';
import BudgetInput from '../BudgetInput/BudgetInput';
import { StyledCardBudget } from './styles';

const CardBudget = () => {
	const [isEdit, setIsEdit] = useState(true);
	const { currency } = useContext(CurrencyContext);
	const { budget, setBudget } = useContext(BudgetContext);

	const handleGetBudget = (e: ChangeEvent<HTMLInputElement>) => {
		setBudget(+e.target.value);
	};

	const handleClickEdit = () => {
		setIsEdit(false);
	};

	const handleClickSave = () => {
		setIsEdit(true);
	};

	return (
		<StyledCardBudget>
			{isEdit ? (
				<StyledBudgetCardText>
					Budget: {currency}
					{budget}
				</StyledBudgetCardText>
			) : (
				<BudgetInput cardName="Budget" handleGetBudget={handleGetBudget} budget={budget} />
			)}

			{isEdit ? (
				<BudgetButtonEdit hadleClickEdit={handleClickEdit} />
			) : (
				<BudgetButtonSave hadleClickSave={handleClickSave} />
			)}
		</StyledCardBudget>
	);
};

export default CardBudget;