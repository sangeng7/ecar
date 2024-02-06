import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config();
const DATABASE_URL = process.env.DATABASE_URL;
const DATABASE_NAME = process.env.DATABASE_NAME;

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(`${DATABASE_URL}/${DATABASE_NAME}`);
        // const conn = await mongoose.connect(`mongodb://127.0.0.1:27017/ecar`);
        console.log("Connected to databse succesfully!")
    } catch (error) {
        console.log(error.message)
        process.exit(1)
    }
}

export default connectDB;