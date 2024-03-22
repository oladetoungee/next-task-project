// Import dependencies
import { connectDB } from "@/config/dbConfig"; // Connect to the database
import User from "@/models/userModel"; // Import the User model
import { NextRequest, NextResponse } from "next/server"; // Import Next.js server-related modules
import bcrypt from "bcryptjs"; // Import bcrypt for password hashing
import jwt from "jsonwebtoken"; // Import jwt for token generation


// Connect to the MongoDB database when the server starts
connectDB();

// Define the POST request handler for user registration
export async function POST(request: NextRequest) {
    try {
        //check of user exist
        const requestBody = await request.json();
        const existingUser = await User.findOne({ email: requestBody.email }) as any;
        //throw error if user does not exist
        if (!existingUser) {
            // Return error response if user already exists
            return NextResponse.json({ message: "User does not exist" }, { status: 400 });
        }
        //check if user password is correct
        const validPassword = await bcrypt.compare(requestBody.password, existingUser.password);
        if (!validPassword) {
            return NextResponse.json({ message: "Invalid password" }, { status: 400 });
        }
        //return success message if user is successfully logged in
        return NextResponse.json({ message: "User logged in successfully" }, { status: 200 });

        //save token as cookie
        const token = jwt.sign({ UserId: existingUser._id }, process.env.TOKEN_SECRET!, { expiresIn: '7d' });
        const response = NextResponse.json({ message: "User logged in successfully" }, { status: 200 });
        //attach token to response header
        response.cookies.set('token', token, { httpOnly: true });
    } catch (error: string | any) {

    }
}

