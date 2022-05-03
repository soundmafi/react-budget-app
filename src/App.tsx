import styled from 'styled-components';
import Title from './components/Title/Title';
import BudgetCard from './components/BudgetCard/BudgetCard';
import Input from './components/Input/Input';
import CustomSelect from './components/CurrencySelect/CurrencySelect';
import ExpenseForm from './components/ExpenseForm/ExpenseForm';
import ExpensesList from './components/ExpensesList/ExpensesList';
import { IOption } from './components/CurrencySelect/CurrencySelect';
import { IExpense } from './types';
import { CurrencyContext } from './contex/CurrenciesContex/CurrenciesContex';
import { useContext, useEffect, useState } from 'react';
import { Currency } from './types';
import { useExpensesContex } from './contex/ExpensesContex/ExpensesContex';
const App = () => {
	// set currency
	const { setCurrency } = useContext(CurrencyContext);
	const handleSelect = (option: IOption | null): void => {
		if (option) {
			let symbol = '';
			switch (option.value) {
				case 'USD':
					symbol = Currency.USD;
					break;
				case 'EUR':
					symbol = Currency.EUR;
					break;
				case 'GBR':
					symbol = Currency.GBR;
					break;
			}
			setCurrency(symbol);
		}
	};

	// search algorythm
	const { expenses } = useExpensesContex();
	const [searchExpense, setSearchExpense] = useState<string>('');
	const [resultExpenses, setResultExpenses] = useState<IExpense[]>([]);
	
	const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchExpense(e.target.value);
	};
	 
	useEffect(() => {
		const result = expenses.slice(0)
		setResultExpenses(result);		
		return setResultExpenses(
			result.filter((expense) =>
				expense.name.toLowerCase().includes(searchExpense.toLowerCase())
			)
		);
	}, [searchExpense, expenses]);	

	return (
		<StyledApp>
			<StyledContainer>
				<StyledHeader>
					<Title textTitle="Budget App" />
					<CustomSelect handleSelect={handleSelect} />
				</StyledHeader>
				<StyledCardContainer>
					<BudgetCard cardName="Budget" />
					<BudgetCard cardName="Remaining" />
					<BudgetCard cardName="Spent so far" />
				</StyledCardContainer>
				<Title textTitle="Expenses" />
				<Input
					searchExpense={searchExpense}
					handleSearch={handleSearch}
				/>
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
