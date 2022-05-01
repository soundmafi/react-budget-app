import { createContext, useState, useContext } from 'react';
import { ICurrencyContex, ICurrencyContextProviderProps } from './types';

export const CurrencyContext = createContext<ICurrencyContex>({
	currency: '',
	setCurrency: (newCurrency: string) => {},
});

export const useCurrencyContex = () => useContext<ICurrencyContex>(CurrencyContext);

const useCurrencyContextValue = () => {
	const [currencyContext, setCurrencyContext] = useState<ICurrencyContex>(() => ({
		currency: '$',
		setCurrency: (newCurrency: string) => {
			setCurrencyContext((ctx) => ({ ...ctx, currency: newCurrency }));
		},
	}));
	return currencyContext;
};

export const CurrencyContextProvider = ({ children }: ICurrencyContextProviderProps) => {
	return (
		<CurrencyContext.Provider value={useCurrencyContextValue()}>
			{children}
		</CurrencyContext.Provider>
	);
};