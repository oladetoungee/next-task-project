// Import the Mongoose library
import mongoose from 'mongoose';

// Export a function named connectDB, which is an asynchronous function
export const connectDB = async () => {
  try {
    // Get the MongoDB connection URL from the environment variable MONGODB_URI
    const url = process.env.MONGODB_URI || '';

    // Attempt to connect to the MongoDB database
    await mongoose.connect(url);

    // If the connection is successful, log a message indicating the successful connection
    console.log('Connected to the database');
  } catch (error) {
    // If an error occurs during the connection attempt, log an error message
    console.log('Error connecting to the database', error);
  }
}
