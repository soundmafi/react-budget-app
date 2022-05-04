import { createContext, useState, useContext } from 'react';
import { IExpenseContex, IExpenseContextProviderProps, IExpense } from './types';
import { v4 as uuidv4 } from 'uuid';

const ExpensesContext = createContext<IExpenseContex>({
	expenses: [],
	setExpenses: (newExpenses: IExpense[]) => {},
	deleteExpense: (id: string) => {},
});

export const useExpensesContex = () => useContext<IExpenseContex>(ExpensesContext);

const useExpensesContextValue = () => {
	const [expensesContext, setExpensesContext] = useState<IExpenseContex>(() => ({
		expenses: [{ name: 'test', cost: 10, id: uuidv4() }],
		setExpenses: (newExpenses: IExpense[]) => {
			setExpensesContext((ctx) => ({ ...ctx, expenses: newExpenses }));
		},
		deleteExpense: (id: string) =>
			setExpensesContext((ctx) => ({
				...ctx,
				expenses: ctx.expenses.filter((expense) => expense.id !== id),
			})),
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
