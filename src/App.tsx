import Title from './components/Title/Title';
import CustomSelect from './components/CurrencySelect/CurrencySelect';
import ExpenseForm from './components/ExpenseForm/ExpenseForm';
import { StyledApp, StyledCardContainer, StyledContainer, StyledHeader } from './Appstyles';
import CardBudget from './components/CardBudget/CardBudget';
import CardRemaining from './components/CardRemaining/CardRemaining';
import CardSpent from './components/CardSpent/CardSpent';
import ContainerList from './components/ContainerList/ContainerList';

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
				<ContainerList />
				<Title text="Add Expense" />
				<ExpenseForm />
			</StyledContainer>
		</StyledApp>
	);
};

export default App;
