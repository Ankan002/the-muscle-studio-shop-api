import mongoose, { Schema } from "mongoose";
import { AddressSchema } from "typings/schema";

const addressSchema = new Schema<AddressSchema>(
	{
		userId: {
			type: Schema.Types.ObjectId,
			required: true,
			ref: "User",
		},
		name: {
			type: String,
			required: true,
			minlength: 3,
			maxlength: 50,
		},
		house: {
			type: String,
			required: true,
			minlength: 1,
			maxlength: 30,
		},
		street: {
			type: String,
			required: true,
			minlength: 3,
			maxlength: 50,
		},
		locality: {
			type: String,
			required: true,
			minlength: 3,
			maxlength: 50,
		},
		city: {
			type: String,
			required: true,
			minlength: 3,
			maxlength: 50,
		},
		state: {
			type: String,
			required: true,
			minlength: 3,
			maxlength: 60,
		},
		pincode: {
			type: String,
			required: true,
			minlength: 6,
			maxlength: 6,
		},
		mobileNumber: {
			type: String,
			required: true,
			minlength: 8,
			maxlength: 14,
		},
		landmark: {
			type: String,
			required: false,
			minlength: 3,
			maxlength: 60,
		},
	},
	{ timestamps: true }
);

export const Address = mongoose.model<AddressSchema>("Address", addressSchema);
