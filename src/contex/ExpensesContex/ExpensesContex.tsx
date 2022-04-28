import { createContext, useState, useContext } from 'react';
import { IExpenseContex, IExpenseContextProviderProps, IExpense } from './types';

const ExpensesContext = createContext<IExpenseContex>({
	expenses: [
		{
			name: 'item1',
			cost: 100,
		},
		{
			name: 'Item2',
			cost: 120,
		},
	],
	setExpenses: (newExpenses: IExpense[]) => {},
});

export const useExpensesContex = () => useContext<IExpenseContex>(ExpensesContext)

const useExpensesContextValue = () => {
	const [expensesContext, setExpensesContext] = useState<IExpenseContex>(() => ({
		expenses: [],
		setExpenses: (newExpenses: IExpense[]) => {
			setExpensesContext((previusCtx) => ({ ...previusCtx, expenses: newExpenses }));
		},
	}));
	return expensesContext;
};

export const ExpenseContextProvider = ({ children }: IExpenseContextProviderProps) => {
	return (
		<ExpensesContext.Provider value={useExpensesContextValue()}>
			{children}
		</ExpensesContext.Provider>
	);
};
