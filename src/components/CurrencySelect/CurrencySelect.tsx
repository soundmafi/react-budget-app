import Select, { StylesConfig } from 'react-select';

interface IOption {
	value: string;
	label: string;
}

const CustomSelect = () => {
	const options: IOption[] = [
		{ value: 'USD', label: 'USD' },
		{ value: 'EUR', label: 'EUR' },
		{ value: 'GBR', label: 'GBR' },
	];

	const customStyles: StylesConfig<IOption> = {
		control: (nativeStyles) => ({
			...nativeStyles,
			backgroundColor: '#ffffff',
			height: 30,
			minHeight: 30,
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
		<Select styles={customStyles} options={options} defaultValue={options[0]} isMulti={false} />
	);
};

export default CustomSelect;
