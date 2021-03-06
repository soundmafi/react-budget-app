import { ReactNode } from 'react';

export interface IExpenseContextProviderProps {
	children: ReactNode;
}

export interface IExpenseContex {
	expenses: IExpense[];
	setExpenses: (newExpenses: IExpense[]) => void;
	deleteExpense: (id: string) => void;
}

export interface IExpense {
	name: string;
	cost: number;
	id: string;
}
