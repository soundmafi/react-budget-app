import { ChangeEvent, useEffect, useState } from 'react';
import { useExpensesContex } from '../../context/ExpensesContext/ExpensesContext';
import { IExpense } from '../../types';
import ExpensesList from '../ExpensesList/ExpensesList';
import SearchInput from '../SearchInput/SearchInput';

const ContainerList = () => {
	const { expenses } = useExpensesContex();
	const [searchExpense, setSearchExpense] = useState<string>('');
	const [resultExpenses, setResultExpenses] = useState<IExpense[]>(expenses);

	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchExpense(e.target.value);
	};

	useEffect(() => {
		setResultExpenses(
			expenses.filter((expense) =>
				expense.name.toLowerCase().includes(searchExpense.toLowerCase())
			)
		);
	}, [searchExpense, expenses]);

	return (
		<>
			<SearchInput searchExpense={searchExpense} handleSearch={handleSearch} />
			<ExpensesList resultExpenses={resultExpenses} />
		</>
	);
};

export default ContainerList;
