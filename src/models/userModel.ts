// Import the Mongoose library
import mongoose from "mongoose";

// Define a schema for the User model
const userSchema = new mongoose.Schema({
    // Username field, a required string
    username: {
        type: String,
        required: true,
    },
    // Email field, a required string, and must be unique
    email: {
        type: String,
        required: true,
        unique: true,
    },
    // Password field, a required string
    password: {
        type: String,
        required: true,
    },
}, {timestamps: true});  // Add timestamps to automatically track creation and modification times

// Check if the User model already exists
const User = mongoose.models.User || mongoose.model('User', userSchema);

// Export the User model for use in other parts of the application
export default User;
