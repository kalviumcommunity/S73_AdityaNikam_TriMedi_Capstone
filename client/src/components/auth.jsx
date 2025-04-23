import React, { useState } from 'react';
import 'boxicons/css/boxicons.min.css';


const AuthPage = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden grid grid-cols-2">

        {/* Left Panel */}
        <div className="bg-red-600 text-white flex flex-col justify-center items-center p-10">
          <img src="/logo.png" alt="TriMedi Logo" className="w-40 mb-4" />
          <h1 className="text-2xl font-bold mb-2">
            {isSignUp ? 'Welcome Back to TriMedi' : 'Make Healthcare Simpler'}
          </h1>
          <p className="text-sm text-center mb-6">
            {isSignUp
              ? 'Sign in with your ID & Password'
              : 'Get medicine info, order online, consult doctors from home.'}
          </p>
          <button
            onClick={() => setIsSignUp(!isSignUp)}
            className="bg-white text-red-600 px-6 py-2 rounded-md hover:bg-gray-100"
          >
            {isSignUp ? 'Sign In' : 'Sign Up'}
          </button>
        </div>

        {/* Right Panel (Form) */}
        <div className="p-10 flex flex-col justify-center">
          <form className="space-y-4">
            <h1 className="text-3xl font-bold text-red-700 mb-4">
              {isSignUp ? 'Create Account' : 'Sign In'}
            </h1>
            <div className="flex space-x-3 text-red-700 text-xl mb-2">
              <a href="#"><i className='bx bxl-google hover:text-red-900'></i></a>
              <a href="#"><i className='bx bxl-facebook hover:text-red-900'></i></a>
              <a href="#"><i className='bx bxl-github hover:text-red-900'></i></a>
              <a href="#"><i className='bx bxl-linkedin hover:text-red-900'></i></a>
            </div>
            <span className="text-sm text-gray-600">
              {isSignUp ? 'Register with E-mail' : 'Login with Email & Password'}
            </span>

            {isSignUp && (
              <input
                type="text"
                placeholder="Name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
              />
            )}
            <input
              type="email"
              placeholder="Enter E-mail"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
            />
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
            />
            {!isSignUp && (
              <a href="#" className="text-xs text-red-500 hover:underline">Forgot Password?</a>
            )}
            <button
              type="button"
              className="w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700"
            >
              {isSignUp ? 'Sign Up' : 'Sign In'}
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default AuthPage;