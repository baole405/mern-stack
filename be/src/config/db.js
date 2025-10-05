import mongoose from "mongoose";

export const connectDB = async() => {
    try {
        await mongoose.connect("mongodb+srv://tommydao2000_db_user:DRHhAdzO8mnuwyso@cluster0.cjzymsd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.error("MongoDB connection failed:", error);
        process.exit(1); // Exit process with failure
    }
};

export default connectDB;
