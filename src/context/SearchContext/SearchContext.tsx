import { createContext, useState, useContext } from 'react';
import { ISearchContex, ISearchContextProviderProps } from './types';

export const SearchContext = createContext<ISearchContex>({
	searchExpense: '',
	setSearchExpense: (newSearchExpense: string) => {},
});

export const useSearchContex = () => useContext<ISearchContex>(SearchContext);

const useSearchContextValue = () => {
	const [searchExpenseContext, setSearchExpenseContext] = useState<ISearchContex>(() => ({
		searchExpense: '',
		setSearchExpense: (newSearchExpense: string) => {
			setSearchExpenseContext((ctx) => ({ ...ctx, searchExpense: newSearchExpense }));
		},
	}));
	return searchExpenseContext;
};

export const SearchContextProvider = ({ children }: ISearchContextProviderProps) => {
	return (
		<SearchContext.Provider value={useSearchContextValue()}>{children}</SearchContext.Provider>
	);
};
