import mongoose from "mongoose";
import { MONGO_URI, NODE_ENV } from "./config";

console.log("NODE_ENV", String(NODE_ENV));

const mongoURI: string =
  String(NODE_ENV) == "PROD"
    ? MONGO_URI.PROD
    : String(NODE_ENV) == "DEV"
    ? MONGO_URI.DEV
    : String(NODE_ENV) == "LOCAL"
    ? MONGO_URI.LOCAL
    : "";

console.log("MongoDB First Connection", mongoURI);

const connectDb = async () => {
  try {
    if (mongoURI) {
      const conn = await mongoose.connect(mongoURI, {
        serverSelectionTimeoutMS: 40000,
      });
      console.log("MongoDB Second Connection -->", mongoURI);
      console.log(
        `\x1b[34m \x1b[1m \x1b[4mMongoDB Connected: ${conn.connection.port}\x1b[0m`
      );
    }
  } catch (error: any) {
    throw error;
  }
};

export default connectDb;
