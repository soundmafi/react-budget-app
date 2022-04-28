import styled from 'styled-components';

interface IInput {
	name: string;
	placeholder: string;
	type:string
}

const Input = ({ name, placeholder,type }: IInput) => {
	return <StyledInput name={name} placeholder={placeholder} type={type}/>;
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
