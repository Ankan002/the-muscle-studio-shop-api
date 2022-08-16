import mongoose, { Schema } from "mongoose";
import { ProductSchema } from "typings/schema";

const productSchema = new Schema<ProductSchema>(
	{
		name: {
			type: String,
			required: true,
			minlength: 5,
			maxlength: 60,
		},
		price: {
			type: Number,
			required: true,
			min: 1,
		},
		size: {
			type: [String],
			required: false,
		},
		photo: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: true,
			minlength: 50,
			maxlength: 400,
		},
		memberDiscount: {
			type: Number,
			required: true,
			min: 0,
		},
		features: {
			type: [String],
			required: false,
		},
	},
	{ timestamps: true }
);

export const Product = mongoose.model<ProductSchema>("Product", productSchema);
