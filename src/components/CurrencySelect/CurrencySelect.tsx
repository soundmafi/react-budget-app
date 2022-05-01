import Select, { StylesConfig } from 'react-select';


export interface IOption {
	value: string;
	label: string;
}

interface ISelect {
	handleSelect: (option: IOption | null) => void;
}

const CustomSelect = ({handleSelect}:ISelect) => {
	const options: IOption[] = [
		{ value: 'USD', label: 'USD' },
		{ value: 'EUR', label: 'EUR' },
		{ value: 'GBR', label: 'GBR' },
	];

	const customStyles: StylesConfig<IOption> = {
		control: (nativeStyles) => ({
			...nativeStyles,
			height: 30,
			minHeight: 30,

			backgroundColor: '#ffffff',
		}),

		singleValue: (nativeStyles) => ({
			...nativeStyles,
			fontSize: 12,
		}),
		indicatorsContainer: (nativeStyles) => ({
			...nativeStyles,
			padding: 0,
		}),

		indicatorSeparator: (nativeStyles) => ({
			...nativeStyles,
			padding: 0,
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
