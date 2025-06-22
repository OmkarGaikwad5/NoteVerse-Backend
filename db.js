const mongoose = require('mongoose');
const dotenv = require("dotenv") ;
dotenv.config();

const mongoURI = process.env.MONGO_URI // Use IPv4 explicitly

const connectDB = async () => {
    try {
        await mongoose.connect(mongoURI);
        console.log("MongoDB connected successfully");  // Moved inside
    } catch (err) {
        console.error("MongoDB connection failed:", err.message);
        process.exit(1);
    }
}

module.exports = connectDB;
