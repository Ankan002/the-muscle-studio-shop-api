import mongoose, { Schema } from "mongoose";
import { OrderItemSchema } from "typings/schema";

const orderItemSchema = new Schema<OrderItemSchema>(
	{
		user: {
			type: Schema.Types.ObjectId,
			required: true,
			ref: "User",
		},
		product: {
			type: Schema.Types.ObjectId,
			required: true,
			ref: "Product",
		},
		quantity: {
			type: Number,
			required: true,
			min: 1,
		},
		size: {
			type: String,
			required: false,
		},
	},
	{ timestamps: true }
);

export const OrderItem = mongoose.model<OrderItemSchema>("OrderItem", orderItemSchema);
