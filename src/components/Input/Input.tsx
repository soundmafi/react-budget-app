import styled from 'styled-components';

interface IInput {
	handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
	searchExpense: string;
}

const Input = ({searchExpense, handleSearch }: IInput) => {
	return (
		<label htmlFor="search">
		<StyledInput
			name={'search'}
			placeholder='search ...'
			type="text"
			value={searchExpense}
			onChange={handleSearch}
		/>
		</label>
	);
};

export default Input;

const StyledInput = styled.input`
	width: 100%;
	padding: 15px 20px;

	font-size: 16px;
	font-weight: 400;
	line-height: 19px;
	letter-spacing: 0.5px;
	text-align: left;
	color: #999999;

	border-radius: 10px;
	box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);
`;
