import Title from './components/Title/Title';
import Input from './components/Input/Input';
import CustomSelect from './components/CurrencySelect/CurrencySelect';
import ExpenseForm from './components/ExpenseForm/ExpenseForm';
import ExpensesList from './components/ExpensesList/ExpensesList';
import BudgetInput from './components/BudgetInput/BudgetInput';
import BudgetButtonEdit from './components/BudgetButtonEdit/BudgetButtonEdit';
import BudgetButtonSave from './components/BudgetButtonSave/BudgetButtonSave';
import { ChangeEvent } from 'react';
import { IExpense } from './types';
import { CurrencyContext } from './context/CurrenciesContext/CurrenciesContext';
import { useContext, useEffect, useState } from 'react';
import { useExpensesContex } from './context/ExpensesContext/ExpensesContext';
import { BudgetContext } from './context/BudgetContext/BudgetContext';
import {
	StyledApp,
	StyledBudgetCard,
	StyledBudgetCardText,
	StyledCardContainer,
	StyledContainer,
	StyledHeader,
} from './Appstyles';

const App = () => {
	// search algorythm
	const { expenses } = useExpensesContex();
	const [searchExpense, setSearchExpense] = useState<string>('');
	const [resultExpenses, setResultExpenses] = useState<IExpense[]>(expenses);

	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchExpense(e.target.value);
	};

	useEffect(() => {
		setResultExpenses(
			expenses.filter((expense) =>
				expense.name.toLowerCase().includes(searchExpense.toLowerCase())
			)
		);
	}, [searchExpense, expenses]);

	// budget algorythm
	const { budget, setBudget } = useContext(BudgetContext);
	const { currency } = useContext(CurrencyContext);
	const [isEdit, setEditButton] = useState(true);

	const hadleClickEdit = () => {
		setEditButton(false);
	};

	const hadleClickSave = () => {
		setEditButton(true);
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
					<Title text="Budget App" />
					<CustomSelect />
				</StyledHeader>
				<StyledCardContainer>
					<StyledBudgetCard cardName="Budget">
						{isEdit ? (
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
						{isEdit ? (
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
				<Title text="Expenses" />
				<Input searchExpense={searchExpense} handleSearch={handleSearch} />
				<ExpensesList resultExpenses={resultExpenses} />
				<Title text="Add Expense" />
				<ExpenseForm />
			</StyledContainer>
		</StyledApp>
	);
};

export default App;
