import { ChangeEvent } from 'react';
import { useSearchContex } from '../../context/SearchContext/SearchContext';
import { StyledInput } from './styles';

const Input = () => {
	const { searchExpense, setSearchExpense } = useSearchContex();
	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchExpense(e.target.value);
	};

	return (
		<label htmlFor="search">
			<StyledInput
				name={'search'}
				placeholder="search ..."
				type="text"
				value={searchExpense}
				onChange={handleSearch}
			/>
		</label>
	);
};

export default Input;
