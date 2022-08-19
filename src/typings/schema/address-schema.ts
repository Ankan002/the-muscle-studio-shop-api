import { ObjectId } from "mongoose";

export interface AddressSchema {
	user: ObjectId;
	name: string;
	house: string;
	street: string;
	locality: string;
	city: string;
	state: string;
	pincode: string;
	mobileNumber: string;
	landmark?: string;
}
