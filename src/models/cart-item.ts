import mongoose, { Schema } from "mongoose";
import { CartItemSchema } from "typings/schema";

const cartItemSchema = new Schema<CartItemSchema>(
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

export const CartItem = mongoose.model<CartItemSchema>("CartItem", cartItemSchema);
