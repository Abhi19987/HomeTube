import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

export const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.DATABASE_URL}/${DB_NAME}`
    );
    console.log(
      `Databse is Connected at host: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.error("Database Connection Falied: ", error);
  }
};
