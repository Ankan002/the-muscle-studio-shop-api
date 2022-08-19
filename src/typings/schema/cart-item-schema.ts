import { ObjectId } from "mongoose";

export interface CartItemSchema {
	user: ObjectId;
	product: ObjectId;
	quantity: number;
	size?: string;
}
