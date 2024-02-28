import { connectDB } from "@/config/dbConfig";
import User from "@/models/userModel";
import { connect } from "http2";
import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";
connectDB();

export async function POST(request: NextRequest) {
    try {
   return NextResponse.json({ message: 'User registered successfully' });
    } catch (error) {
        console.log('Error connecting to the database', error);
    }
}