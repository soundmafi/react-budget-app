import { ChangeEvent } from 'react';
import { StyledInput } from './styles';

interface IInput {
	handleSearch: (e: ChangeEvent<HTMLInputElement>) => void;
	searchExpense: string;
}

const SearchInput = ({ searchExpense, handleSearch }: IInput) => {
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

export default SearchInput;
