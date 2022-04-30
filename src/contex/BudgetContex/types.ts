import { ReactNode } from 'react';

export interface IBudgetContextProviderProps {
	children: ReactNode;
}

export interface IBudgetContex {
	budget: number;
	setBudget: (newBudget: number) => void;
}
