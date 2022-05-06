import Title from './components/Title/Title';
import Input from './components/Input/Input';
import CustomSelect from './components/CurrencySelect/CurrencySelect';
import ExpenseForm from './components/ExpenseForm/ExpenseForm';
import ExpensesList from './components/ExpensesList/ExpensesList';
import { ChangeEvent } from 'react';
import { IExpense } from './types';
import { useEffect, useState } from 'react';
import { useExpensesContex } from './context/ExpensesContext/ExpensesContext';
import { StyledApp, StyledCardContainer, StyledContainer, StyledHeader } from './Appstyles';
import CardBudget from './components/CardBudget/CardBudget';
import CardRemaining from './components/CardRemaining/CardRemaining';
import CardSpent from './components/CardSpent/CardSpent';

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

	return (
		<StyledApp>
			<StyledContainer>
				<StyledHeader>
					<Title text="Budget App" />
					<CustomSelect />
				</StyledHeader>
				<StyledCardContainer>
					<CardBudget />
					<CardRemaining />
					<CardSpent />
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
