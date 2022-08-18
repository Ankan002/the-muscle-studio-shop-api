import { ObjectId } from "mongoose";

export interface CartItemSchema {
	userId: ObjectId;
	productId: ObjectId;
	quantity: number;
	size?: string;
}
