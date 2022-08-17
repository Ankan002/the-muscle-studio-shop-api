import { ObjectId } from "mongoose";

export interface OrderItemSchema {
	userId: ObjectId;
	productId: ObjectId;
	quantity: number;
	size?: string;
}
