const mongoose = require("mongoose");

// Define the MongoDB connection URI
//const mongoURI = "mongodb://127.0.0.1:27017/propertyDB"; // Replace with your DB name
const mongoURI="mongodb+srv://admin:ShGxFq03tpHI47d8@property-manager-cluste.mskks.mongodb.net/?retryWrites=true&w=majority&appName=Property-Manager-Cluster"


// Create a function to connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected successfully!");
  } catch (err) {
    console.error("MongoDB connection error:", err.message);
    process.exit(1); // Exit process with failure
  }
};

// Export the connectDB function
module.exports = connectDB;
