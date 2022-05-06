import Title from './components/Title/Title';
import Input from './components/Input/Input';
import CustomSelect from './components/CurrencySelect/CurrencySelect';
import ExpenseForm from './components/ExpenseForm/ExpenseForm';
import ExpensesList from './components/ExpensesList/ExpensesList';
import { StyledApp, StyledCardContainer, StyledContainer, StyledHeader } from './Appstyles';
import CardBudget from './components/CardBudget/CardBudget';
import CardRemaining from './components/CardRemaining/CardRemaining';
import CardSpent from './components/CardSpent/CardSpent';

const App = () => {
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
				<Input />
				<ExpensesList />
				<Title text="Add Expense" />
				<ExpenseForm />
			</StyledContainer>
		</StyledApp>
	);
};

export default App;
