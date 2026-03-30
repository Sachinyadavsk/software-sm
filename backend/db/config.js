import mongoose from "mongoose";
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({
  path: path.resolve('backend/.env')
});


const connectDB = async()=>{{
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log("MongoDB connection successfully");
    } catch (error) {
        console.log("MongoDB connection error", error);
    }
}}  

export default connectDB;