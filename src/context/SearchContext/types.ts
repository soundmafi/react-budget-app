import { ReactNode } from 'react';

export interface ISearchContextProviderProps {
	children: ReactNode;
}

export interface ISearchContex {
	searchExpense: string;
	setSearchExpense: (newsearchExpense: string) => void;
}