import { createContext, useState } from 'react';
import { IExpenseContex, IExpenseContextProviderProps, IExpense } from './types';

export const ExpensesContext = createContext<IExpenseContex>({
	expenses: [],
	setExpenses: (newExpenses: IExpense[]) => {},
});

 const useExpensesContextValue = () => {
	const [expensesContext, setExpensesContext] = useState<IExpenseContex>(() => ({
		expenses: [],
		setExpenses: (newExpenses: IExpense[]) => {
			setExpensesContext((previusCtx) => ({ ...previusCtx, expenses: newExpenses }));
		},
	}));
	return expensesContext;
};

export const ExpenseContextProvider = ({ expenseCard }: IExpenseContextProviderProps) => {
	return (
		<ExpensesContext.Provider value={useExpensesContextValue()}>
			{expenseCard}
		</ExpensesContext.Provider>
	);
};
