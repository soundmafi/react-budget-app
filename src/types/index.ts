export const enum Color {
	budget = '#7CC6FE',
	remaining = '#CCD5FF',
	spent = '#E7BBE3',
	overspending = '#FF0000',
}

export interface IExpense {
	id: string;
	name: string;
	cost: number;
}

export interface ISetting {
	budget: any;
	currency: any;
}

export const enum Currency{
	USD = '$',
	EUR = '€',
	GBR = '£'
}



