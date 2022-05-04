import Select, { StylesConfig } from 'react-select';
import { Currency } from '../../config/Currency';

export interface IOption {
	value: Currency;
	label: keyof typeof Currency;
}

interface ISelect {
	handleSelect: (option: IOption | null) => void;
}

const CustomSelect = ({ handleSelect }: ISelect) => {
	const options: IOption[] = [
		{ value: Currency.USD, label: 'USD' },
		{ value: Currency.EUR, label: 'EUR' },
		{ value: Currency.GBR, label: 'GBR' },
	];

	const customStyles: StylesConfig<IOption> = {
		control: (nativeStyles) => ({
			...nativeStyles,
			height: 30,

			backgroundColor: '#ffffff',
		}),

		singleValue: (nativeStyles) => ({
			...nativeStyles,
			fontSize: 12,
		}),

		valueContainer: (nativeStyles) => ({
			...nativeStyles,
			padding: 2,
		}),
	};

	return (
		<Select
			onChange={handleSelect}
			styles={customStyles}
			options={options}
			defaultValue={options[0]}
			isMulti={false}
		/>
	);
};

export default CustomSelect;
