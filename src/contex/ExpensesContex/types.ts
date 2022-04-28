import { ReactNode } from "react";

export interface IExpenseContextProviderProps{
    expenseCard: ReactNode;
}

export interface IExpenseContex{
    expenses: IExpense[],
    setExpenses: (newExpenses: IExpense[]) => void;
}

export interface IExpense{
    name:string;
    cost:number
}