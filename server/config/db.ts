import mongoose from "mongoose";
// // const mongoose = require("mongoose");
// import mongoose from "mongoose";

// const connectDB = async () => {
// 	try {
// 		await mongoose.connect(process.env.MONGODB_URI);

// 		console.log("MongoDB connected");
// 	} catch (err) {
// 		console.error(err.message);
// 		process.exit(1);
// 	}
// };

// module.exports = connectDB;

const connectDB = async (): Promise<void> => {
	try {
		// Ensure that the MONGODB_URI is defined
		if (!process.env.MONGODB_URI) {
			throw new Error(
				"MONGODB_URI is not defined in the environment variables"
			);
		}

		await mongoose.connect(process.env.MONGODB_URI);

		console.log("MongoDB connected");
	} catch (err: unknown) {
		if (err instanceof Error) {
			console.error(err.message);
		} else {
			console.error("An unknown error occurred during MongoDB connection");
		}
		process.exit(1);
	}
};

export default connectDB;
