export interface IExpense {
	id: string;
	name: string;
	cost: number;
}


export const enum Currency {
	USD = '$',
	EUR = '€',
	GBR = '£',
}