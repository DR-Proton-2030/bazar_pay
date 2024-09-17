import mongoose from "mongoose";
import { MONGO_URI, NODE_ENV } from "./config";

const mongoURI: string =
	String(NODE_ENV) === "PROD"
		? MONGO_URI.PROD
		: String(NODE_ENV) === "DEV"
			? MONGO_URI.DEV
			: String(NODE_ENV) === "LOCAL"
				? MONGO_URI.LOCAL
				: "";

console.log("MongoDB URI:", mongoURI);

const connectDb = async () => {
	if (!mongoURI) {
		throw new Error("MongoDB URI is not defined.");
	}

	try {
		// Check if mongoose is already connected
		if (mongoose.connection.readyState === 0) {
			const conn = await mongoose.connect(mongoURI, {
				serverSelectionTimeoutMS: 40000,
			});
			console.log("MongoDB Connected:", conn.connection.host);
		} else {
			console.log("MongoDB already connected.");
		}
	} catch (error) {
		console.error("MongoDB connection error:", error);
		throw error;
	}
};

export default connectDb;
