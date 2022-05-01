import { createContext, useState, useContext } from 'react';
import { IExpenseContex, IExpenseContextProviderProps, IExpense } from './types';
import { v4 as uuidv4 } from 'uuid';

export const ExpensesContext = createContext<IExpenseContex>({
	expenses: [
		{
			name: 'item1',
			cost: 100,
			id: uuidv4()
		},
		{
			name: 'Item2',
			cost: 120,
			id: uuidv4()
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
