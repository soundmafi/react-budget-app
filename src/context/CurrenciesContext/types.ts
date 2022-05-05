import { ReactNode } from 'react';

export interface ICurrencyContextProviderProps {
	children: ReactNode;
}

export interface ICurrencyContex {
	currency: string;
	setCurrency: (newCurrency: string) => void;
}

