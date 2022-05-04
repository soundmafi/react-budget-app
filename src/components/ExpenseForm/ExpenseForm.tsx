import { SubmitHandler, useForm } from 'react-hook-form';
import { useExpensesContex } from '../../contex/ExpensesContex/ExpensesContex';
import { IExpense } from '../../types';
import { v4 as uuidv4 } from 'uuid';
import { StyledButton, StyledExpenseForm, StyledInput } from './styles';

const ExpenseForm = () => {
	const { expenses, setExpenses } = useExpensesContex();
	const { register, handleSubmit, reset } = useForm<IExpense>();
	const onSubmit: SubmitHandler<IExpense> = (expense: IExpense) => {
		if (!expense.cost) {
			console.log('Только цифры');
		} else {
			expense.id = uuidv4();
			const newExpenses = expenses.slice(0);
			newExpenses.push(expense);
			setExpenses(newExpenses);
			reset();
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