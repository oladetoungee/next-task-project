'use client';

import Link from 'next/link';
// Import necessary modules and styles
import React, { useState } from 'react';

const Login = () => {
  // Initialize state for user information and form validation
  const [user, setUser] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({ email: '', password: '' });
  const [isFormValid, setIsFormValid] = useState(false);

  // Destructure state for easier usage
  const { email, password } = user;

  // Handle form submission
  const onLogin = () => {
    isFormValid ? console.log('User Logged In:', user) : console.log('Form has errors. Please fix them.');
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
        <h1 className="text-2xl text-center font-bold m-4">Log In</h1>
        <hr />
        <div className="p-8 shadow-md">
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
            onClick={onLogin}
            className={`w-full py-2 mb-2 rounded transition duration-300   ${
              isFormValid ? ' text-black bg-white' : 'text-gray-700 hover:opacity-80 bg-gray-400 cursor-not-allowed'
            }`}
            disabled={!isFormValid}
          >
            Log In
          </button>
          <Link href="/register" className='text-xs '> Don't have an account? Register here </Link>
        </div>
    
      </div>
    </div>
  );
};

export default Login;
