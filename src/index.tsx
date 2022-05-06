import React from 'react';
import App from './App';
import { createRoot } from 'react-dom/client';
import { GlobalStyles } from './GlobalStyles';
import { ExpenseContextProvider } from './context/ExpensesContext/ExpensesContext';
import { BudgetContextProvider } from './context/BudgetContext/BudgetContext';
import { CurrencyContextProvider } from './context/CurrenciesContext/CurrenciesContext';
import { SearchContextProvider } from './context/SearchContext/SearchContext';

const container = document.getElementById('root');
if (!container) {
	throw new Error('No root element found');
}

const root = createRoot(container);
root.render(
	<React.StrictMode>
		<SearchContextProvider>
			<BudgetContextProvider>
				<CurrencyContextProvider>
					<ExpenseContextProvider>
						<GlobalStyles />
						<App />
					</ExpenseContextProvider>
				</CurrencyContextProvider>
			</BudgetContextProvider>
		</SearchContextProvider>
	</React.StrictMode>
);
