import styled from 'styled-components';
import Title from './components/Title/Title';
import BudgetCard from './components/BudgetCard/BudgetCard';
import Input from './components/Input/Input';
import CustomSelect from './components/CurrencySelect/CurrencySelect';
import ExpenseForm from './components/ExpenseForm/ExpenseForm';
import ExpensesList from './components/ExpensesList/ExpensesList';
import { IOption } from './components/CurrencySelect/CurrencySelect';
import { CurrencyContext } from './contex/CurrenciesContex/CurrenciesContex';
import { useContext } from 'react';
import { Currency } from './types';
const App = () => {
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
				<Input name={'search'} placeholder={'search ...'} type="text" />
				<ExpensesList />
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
