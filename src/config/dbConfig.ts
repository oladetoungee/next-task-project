import mongoose from 'mongoose';

export const connectDB = async () => {
  try {
  
    const url = process.env.MONGODB_URI || '';
    await mongoose.connect(url);
    console.log('Connected to the database');

  } catch (error) {
console.log('Error connecting to the database', error);
  }
}