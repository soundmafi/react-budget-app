import styled from 'styled-components';
import Title from './components/Title/Title';
import Input from './components/Input/Input';
import CustomSelect from './components/CurrencySelect/CurrencySelect';
import ExpenseForm from './components/ExpenseForm/ExpenseForm';
import ExpensesList from './components/ExpensesList/ExpensesList';
import BudgetInput from './components/BudgetInput/BudgetInput';
import BudgetButtonEdit from './components/BudgetButtonEdit/BudgetButtonEdit';
import BudgetButtonSave from './components/BudgetButtonSave/BudgetButtonSave';
import { ChangeEvent } from 'react';
import { IOption } from './components/CurrencySelect/CurrencySelect';
import { IExpense } from './types';
import { CurrencyContext } from './contex/CurrenciesContex/CurrenciesContex';
import { useContext, useEffect, useState } from 'react';
import { useExpensesContex } from './contex/ExpensesContex/ExpensesContex';
import { BudgetContext } from './contex/BudgetContex/BudgetContext';

const App = () => {
	// set currency
	const { setCurrency } = useContext(CurrencyContext);
	const handleSelect = (option: IOption | null): void => {
		if (option) {
			setCurrency(option.value);
		}
	};

	// search algorythm
	const { expenses } = useExpensesContex();
	const [searchExpense, setSearchExpense] = useState<string>('');
	const [resultExpenses, setResultExpenses] = useState<IExpense[]>([]);

	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchExpense(e.target.value);
	};

	useEffect(() => {
		const result = expenses.slice(0);
		setResultExpenses(result);
		return setResultExpenses(
			result.filter((expense) =>
				expense.name.toLowerCase().includes(searchExpense.toLowerCase())
			)
		);
	}, [searchExpense, expenses]);

	// budget algorythm
	const { budget, setBudget } = useContext(BudgetContext);
	const { currency } = useContext(CurrencyContext);
	const [stateButton, setStateButton] = useState(true);

	const hadleClickEdit = () => {
		setStateButton(false);
	};

	const hadleClickSave = () => {
		setStateButton(true);
	};

	const handleGetBudget = (e: ChangeEvent<HTMLInputElement>) => {
		setBudget(+e.target.value);
	};

	const spent = expenses.reduce((sumExpenses, expense) => sumExpenses + expense.cost, 0);
	const remaining = budget - spent;

	return (
		<StyledApp>
			<StyledContainer>
				<StyledHeader>
					<Title textTitle="Budget App" />
					<CustomSelect handleSelect={handleSelect} />
				</StyledHeader>
				<StyledCardContainer>
					<StyledBudgetCard cardName="Budget">
						{stateButton ? (
							<StyledBudgetCardText>
								Budget: {currency} {budget}
							</StyledBudgetCardText>
						) : (
							<BudgetInput
								cardName="Budget"
								handleGetBudget={handleGetBudget}
								budget={budget}
							/>
						)}
						{stateButton ? (
							<BudgetButtonEdit hadleClickEdit={hadleClickEdit} />
						) : (
							<BudgetButtonSave hadleClickSave={hadleClickSave} />
						)}
					</StyledBudgetCard>
					{remaining >= 0 ? (
						<StyledBudgetCard cardName="Remaining">
							<StyledBudgetCardText>
								Remaining: {currency} {remaining}
							</StyledBudgetCardText>
						</StyledBudgetCard>
					) : (
						<StyledBudgetCard cardName="Overspending by">
							<StyledBudgetCardText>
								Overspending by: {currency} {-remaining}
							</StyledBudgetCardText>
						</StyledBudgetCard>
					)}

					<StyledBudgetCard cardName="Spent">
						<StyledBudgetCardText>
							Spent so far: {currency} {spent}
						</StyledBudgetCardText>
					</StyledBudgetCard>
				</StyledCardContainer>
				<Title textTitle="Expenses" />
				<Input searchExpense={searchExpense} handleSearch={handleSearch} />
				<ExpensesList resultExpenses={resultExpenses} />
				<Title textTitle="Add Expense" />
				<ExpenseForm />
			</StyledContainer>
		</StyledApp>
	);
};

export default App;

const StyledApp = styled.div``;

const StyledContainer = styled.div`
	width: 100%;
	max-width: 375px;
	margin: 0 auto;
	padding: 30px 20px;

	background-color: #ffffff;
`;

const StyledCardContainer = styled.div`
	display: grid;
	grid-template-rows: repeat(1fr);
	grid-row-gap: 20px;

	margin-bottom: 30px;
`;

const StyledHeader = styled.header`
	display: grid;
	grid-template-columns: 1fr 0.3fr;
`;

const StyledBudgetCard = styled.div<{ cardName: string }>`
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

const StyledBudgetCardText = styled.p`
	font-weight: 500;
	font-size: 20px;
	line-height: 24px;
`;
