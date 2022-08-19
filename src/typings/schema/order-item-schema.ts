import { ObjectId } from "mongoose";

export interface OrderItemSchema {
	user: ObjectId;
	product: ObjectId;
	quantity: number;
	size?: string;
}
