import { ObjectId } from "mongoose";
import { OrderStatus } from "typings/general";

export interface OrderSchema {
	user: ObjectId;
	items: [ObjectId];
	status: OrderStatus;
	deliveryCharges: number;
	totalAmount: number;
	address: ObjectId;
	razorpayPaymentId: string;
	razorpayOrderId: string;
}
