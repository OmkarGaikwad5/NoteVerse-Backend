const mongoose = require('mongoose');

const mongoURI = "mongodb://127.0.0.1:27017/NoteVerse"; // Use IPv4 explicitly

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
