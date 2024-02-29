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

// DELETE OLD MODEL IF IT EXISTS
// This is done to avoid Mongoose model overwrite issues during development
if (mongoose.models['users']) {
    // If there is an existing 'users' model, delete it
    const userModel = mongoose.model('users');
    mongoose.deleteModel(userModel.modelName);
}

// Create the User model using the defined schema
const User = mongoose.model('User', userSchema);

// Export the User model for use in other parts of the application
export default User;
