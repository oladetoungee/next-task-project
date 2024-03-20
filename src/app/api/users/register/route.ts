// Import dependencies
import { connectDB } from "@/config/dbConfig"; // Connect to the database
import User from "@/models/userModel"; // Import the User model
import { NextRequest, NextResponse } from "next/server"; // Import Next.js server-related modules
import bcrypt from "bcryptjs"; // Import bcrypt for password hashing

// Connect to the MongoDB database when the server starts
connectDB();

// Define the POST request handler for user registration
export async function POST(request: NextRequest) {
    try {
        // Check if user already exists
        const requestBody = await request.json();
        const existingUser = await User.findOne({ email: requestBody.email });

        if (existingUser) {
            // Return error response if user already exists
            return NextResponse.json({ message: "User already exists" }, { status: 400 });
        }

        // Hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(requestBody.password, salt);

        // Create a new User model instance with the user data from the request body
        requestBody.password = hashedPassword;
        await User.create(requestBody);

        // If the user is successfully saved to the database, return a success message
        return NextResponse.json({ message: "User registered successfully" }, { status: 201 });

    } catch (error: string | any) {
        console.error('Error during user registration:', error);
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
}

