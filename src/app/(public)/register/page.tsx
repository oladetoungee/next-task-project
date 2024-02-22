'use client';

import Link from 'next/link';
// Import necessary modules and styles
import React, { useState } from 'react';

const Register = () => {
  // Initialize state for user information and form validation
  const [user, setUser] = useState({ username: '', email: '', password: '' });
  const [errors, setErrors] = useState({ username: '', email: '', password: '' });
  const [isFormValid, setIsFormValid] = useState(false);

  // Destructure state for easier usage
  const { username, email, password } = user;

  // Handle form submission
  const onRegister = () => {
    isFormValid ? console.log('User Registered:', user) : console.log('Form has errors. Please fix them.');
  };

  // Handle input change and perform validation
  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
    validateInput(name, value);
  };

  // Validate the input based on the name and value
  const validateInput = (name: string, value: string) => {
    let errorMessage = '';
    switch (name) {
      case 'username':
        errorMessage = value.length < 3 ? 'Username must be at least 3 characters long' : '';
        break;
      case 'email':
        errorMessage = !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? 'Invalid email address' : '';
        break;
      case 'password':
        errorMessage = value.length < 6 ? 'Password must be at least 6 characters long' : '';
        break;
      default:
        break;
    }
    setErrors({ ...errors, [name]: errorMessage });
    // Check overall form validity
    setIsFormValid(Object.values(errors).every((error) => !error));
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <div className='w-[60%] text-white bg-black'>
        <h1 className="text-2xl text-center font-bold m-4">Register</h1>
        <hr />
        <div className="p-8 shadow-md">
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={username}
            onChange={handleInputChange}
          />
          <div className="text-red-500">{errors.username}</div>
          
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={handleInputChange}
          />
          <div className="text-red-500">{errors.email}</div>
          
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={handleInputChange}
          />
          <div className="text-red-500">{errors.password}</div>
          
          <button
            type="submit"
            onClick={onRegister}
            className={`w-full py-2 mb-2 rounded transition duration-300   ${
              isFormValid ? ' text-black bg-white' : 'text-gray-700 hover:opacity-80 bg-gray-400 cursor-not-allowed'
            }`}
            disabled={!isFormValid}
          >
            Register
          </button>
          <Link href="/login" className='text-xs'> Already have an account? </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
