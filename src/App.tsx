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
import { StyledApp, StyledBudgetCard, StyledBudgetCardText, StyledCardContainer, StyledContainer, StyledHeader } from './styles';

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
	const [resultExpenses, setResultExpenses] = useState<IExpense[]>(expenses);

	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchExpense(e.target.value);
	};

	useEffect(() => {
		const result = expenses.slice(0);
		setResultExpenses(
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
