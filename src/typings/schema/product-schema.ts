export interface ProductSchema {
	name: string;
	price: number;
	size?: Array<string>;
	photo: string;
	description: string;
	memberDiscount: number;
	features?: Array<string>;
}
