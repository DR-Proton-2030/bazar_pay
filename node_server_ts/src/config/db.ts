import mongoose from "mongoose";
import { MONGO_URI, NODE_ENV } from "./config";

console.log("NODE_ENV", String(NODE_ENV));

const mongoURI: string =
  String(NODE_ENV) == "PROD"
    ? MONGO_URI.PROD
    : String(NODE_ENV) == "DEV"
    ? MONGO_URI.DEV
    : String(NODE_ENV) == "LOCAL"
    ? "mongodb+srv://drprotonofficial:Adarsha%40123@cluster0.9ogg6pi.mongodb.net"
    : "";

console.log("First Connection", mongoURI);

const connectDb = async () => {
  try {
    if (mongoURI) {
      const conn = await mongoose.connect(mongoURI, {
        serverSelectionTimeoutMS: 40000,
      });
      console.log("Second Connection -->", mongoURI);
      console.log(
        `\x1b[34m \x1b[1m \x1b[4mMongoDB Connected: ${conn.connection.port}\x1b[0m`
      );
    }
  } catch (err) {
    throw err;
  }
};
export default connectDb;
