import mongoose, { Schema } from "mongoose";
import { OrderSchema } from "typings/schema";

enum OrderStatus {
	Pending = "pending",
	Received = "received",
	Dispatched = "dispatched",
	OutForDelivery = "out for delivery",
	Delivered = "delivered",
	Cancelled = "cancelled",
}

const orderSchema = new Schema<OrderSchema>(
	{
		user: {
			type: Schema.Types.ObjectId,
			required: true,
			ref: "User",
		},
		items: {
			type: [Schema.Types.ObjectId],
			required: true,
			ref: "OrderItem",
		},
		status: {
			type: String,
			required: true,
			enum: OrderStatus,
		},
		address: {
			type: Schema.Types.ObjectId,
			required: true,
			ref: "Address",
		},
		deliveryCharges: {
			type: Number,
			required: true,
			min: 0,
		},
		totalAmount: {
			type: Number,
			required: true,
			min: 0,
		},
		razorpayOrderId: {
			type: String,
			required: true,
		},
		razorpayPaymentId: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true }
);

export const Order = mongoose.model<OrderSchema>("Order", orderSchema);
