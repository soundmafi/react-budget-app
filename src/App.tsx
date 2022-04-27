import styled from 'styled-components';
import Title from './components/Title/Title';
import BudgetCard from './components/BudgetCard/BudgetCard';
import Input from './components/Input/Input';
import Button from './components/Button/Button';
import ExpenseCard from './components/ExpenseCard/ExpenseCard';
import CustomSelect from './components/CurrencySelect/CurrencySelect';

const App = () => {
	return (
		<StyledApp>
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
				<StyledExpensesContainer>
					<ExpenseCard expenseName={'shoping'} expenseValue={100} />
					<ExpenseCard expenseName={'drinking'} expenseValue={200} />
					<ExpenseCard expenseName={'relax'} expenseValue={500} />
					<ExpenseCard expenseName={'study'} expenseValue={400} />
				</StyledExpensesContainer>

				<Title textTitle="Add Expense" />
				<StyledExpenseForm>
					<Input name={'expenseName'} placeholder={'enter name ...'} type="text" />
					<Input name={'expenseCost'} placeholder={'enter cost ...'} type="number" />
					<Button />
				</StyledExpenseForm>
			</StyledContainer>
		</StyledApp>
	);
};

export default App;

const StyledApp = styled.div``;

const StyledContainer = styled.div`
	margin: 0 auto;
	max-width: 375px;
	width: 100%;
	padding: 30px 20px;
	background-color: #ffffff;
`;

const StyledCardContainer = styled.div`
	display: grid;
	grid-template-rows: 1fr 1fr 1fr;
	grid-row-gap: 20px;
	margin-bottom: 30px;
`;

const StyledExpenseForm = styled.form`
	width: 100%;
	display: grid;
	grid-row-gap: 20px;
`;

const StyledExpensesContainer = styled.div`
	width: 100%;
	margin-top: 30px;
	margin-bottom: 30px;
`;

const StyledHeader = styled.header`
display: grid;
grid-template-columns: 1fr 0.3fr;
	
`