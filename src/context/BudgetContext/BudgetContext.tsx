import { createContext, useState, useContext } from 'react';
import { IBudgetContex, IBudgetContextProviderProps } from './types';

export const BudgetContext = createContext<IBudgetContex>({
	budget: 0,
	setBudget: (newBudget: number) => {},
});

export const useBudgetContex = () => useContext<IBudgetContex>(BudgetContext);

const useBudgetContextValue = () => {
	const [budgetContext, setBudgetContext] = useState<IBudgetContex>(() => ({
		budget: 100,
		setBudget: (newBudget: number) => {
			setBudgetContext((ctx) => ({ ...ctx, budget: newBudget }));
		},
	}));
	return budgetContext;
};

export const BudgetContextProvider = ({ children }: IBudgetContextProviderProps) => {
	return (
		<BudgetContext.Provider value={useBudgetContextValue()}>{children}</BudgetContext.Provider>
	);
};
