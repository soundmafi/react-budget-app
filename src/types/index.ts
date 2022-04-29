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



