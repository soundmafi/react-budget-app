import styled from 'styled-components';
import Title from './components/Title/Title';
import BudgetCard from './components/BudgetCard/BudgetCard';
import Input from './components/Input/Input';
import CustomSelect from './components/CurrencySelect/CurrencySelect';
import ExpenseForm from './components/ExpenseForm/ExpenseForm';
import ExpensesList from './components/ExpensesList/ExpensesList';
import { ExpenseContextProvider } from './contex/ExpensesContex/ExpensesContex';

const App = () => {
	return (
		<StyledApp>
			<ExpenseContextProvider>
			<StyledContainer>
				<StyledHeader>
					<Title textTitle="Budget App" />
					<CustomSelect />
				</StyledHeader>
				<StyledCardContainer>
					<BudgetCard cardName="Budget" value={3000} />
					<BudgetCard cardName="Remaining" value={2000} />
					<BudgetCard cardName="Spent so far" value={1000} />
				</StyledCardContainer>

				<Title textTitle="Expenses" />
				<Input name={'search'} placeholder={'search ...'} type="text" />
				
				<ExpensesList />

				<Title textTitle="Add Expense" />
				<ExpenseForm />
			</StyledContainer>
			</ExpenseContextProvider>
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
