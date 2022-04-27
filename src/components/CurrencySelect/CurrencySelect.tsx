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
			width: 85,
			position: 'absolute',
			right: 0,
		}),

		singleValue: (nativeStyles) => ({
			...nativeStyles,
			fontSize: 12,
		}),
	};

	return (
		<Select styles={customStyles} options={options} defaultValue={options[0]} isMulti={false} />
	);
};

export default CustomSelect;
