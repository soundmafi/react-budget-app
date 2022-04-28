import { SubmitHandler, useForm } from 'react-hook-form';
import styled from 'styled-components';
interface IExpense {
	expenseName: string;
	expenseCost: number;
}

const ExpenseForm = () => {
	const { register, handleSubmit, reset } = useForm<IExpense>();

	const onSubmit: SubmitHandler<IExpense> = (expense: IExpense) => {
		if (!!expense.expenseCost) {
			console.log('Только цифры');
		} else {
			console.log(expense);
			reset();
		}
	};

	return (
		<StyledExpenseForm onSubmit={handleSubmit(onSubmit)}>
			<StyledInput
				placeholder="Enter name ..."
				{...register('expenseName', {
					required: true,
					maxLength: 15,
					valueAsNumber: false,
					pattern: /^[A-Za-z0-9]+$/,
				})}
			/>
			<StyledInput
				placeholder="Enter cost ..."
				{...register('expenseCost', {
					required: true,
					maxLength: 5,
					valueAsNumber: true,
					pattern: /^[0-9]+$/,
				})}
			/>
			<StyledButton type="submit">Done</StyledButton>
		</StyledExpenseForm>
	);
};

export default ExpenseForm;

const StyledExpenseForm = styled.form`
	display: grid;
	grid-row-gap: 20px;

	width: 100%;
`;

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

const StyledButton = styled.button`
	width: 100%;
	margin-top: 10px;
	padding: 15px;

	font-weight: 400;
	font-size: 16px;
	line-height: 19px;
	color: #ffffff;
	text-align: center;

	background-color: #23c9ff;
	border-radius: 10px;
`;
