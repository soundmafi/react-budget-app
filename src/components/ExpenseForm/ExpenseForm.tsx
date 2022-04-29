import { SubmitHandler, useForm } from 'react-hook-form';
import styled from 'styled-components';
import { ExpenseContextProvider, useExpensesContex } from '../../contex/ExpensesContex/ExpensesContex';
import { IExpense } from '../../types';
import { v4 as uuidv4 } from 'uuid';

const ExpenseForm = () => {

	const { expenses, setExpenses } = useExpensesContex();
	const { register, handleSubmit, reset } = useForm<IExpense>();

	const onSubmit: SubmitHandler<IExpense> = (expense: IExpense) => {
			
		
		if (!expense.cost) {
			console.log('Только цифры');
		} else {	
			expense.id = uuidv4();
			expenses.push(expense)
			setExpenses(expenses);
			reset();
			console.log(expenses);			
		}
	};

	return (		
		<StyledExpenseForm onSubmit={handleSubmit(onSubmit)}>
			<StyledInput
				placeholder="Enter name ..."
				{...register('name', {
					required: true,
					maxLength: 15,
					valueAsNumber: false,
					pattern: /^[A-Za-z0-9]+$/,
				})}
			/>
			<StyledInput
				placeholder="Enter cost ..."
				{...register('cost', {
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
