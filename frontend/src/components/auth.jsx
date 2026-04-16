import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'boxicons/css/boxicons.min.css';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

const AuthPage = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    password: ''
  });
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((currentData) => ({
      ...currentData,
      [name]: value
    }));
  };

  const handleModeSwitch = () => {
    setIsSignUp((currentMode) => !currentMode);
    setMessage('');
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setMessage('');
    setIsLoading(true);

    try {
      const endpoint = isSignUp ? '/api/auth/register' : '/api/auth/login';
      const payload = isSignUp
        ? formData
        : { username: formData.username, password: formData.password };

      const response = await fetch(`${API_URL}${endpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Authentication failed.');
      }

      localStorage.setItem('trimediToken', data.token);
      localStorage.setItem('trimediUser', JSON.stringify(data.user));
      setMessage(isSignUp ? 'Account created successfully.' : 'Signed in successfully.');

      setTimeout(() => {
        navigate('/');
      }, 700);
    } catch (error) {
      setMessage(error.message);
    } finally {
      setIsLoading(false);
    }
  };

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
            onClick={handleModeSwitch}
            className="bg-white text-red-600 px-6 py-2 rounded-md hover:bg-gray-100"
          >
            {isSignUp ? 'Sign In' : 'Sign Up'}
          </button>
        </div>

        {/* Right Panel (Form) */}
        <div className="p-10 flex flex-col justify-center">
          <form className="space-y-4" onSubmit={handleSubmit}>
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
              {isSignUp ? 'Register with username and password' : 'Login with username and password'}
            </span>

            {isSignUp && (
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
              />
            )}
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Enter Username"
              autoComplete="username"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
            />
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter Password"
              autoComplete={isSignUp ? 'new-password' : 'current-password'}
              minLength={6}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
            />
            {!isSignUp && (
              <a href="#" className="text-xs text-red-500 hover:underline">Forgot Password?</a>
            )}
            {message && (
              <p className={`text-sm ${message.includes('successfully') ? 'text-green-600' : 'text-red-600'}`}>
                {message}
              </p>
            )}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700 disabled:bg-red-300 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Please wait...' : isSignUp ? 'Sign Up' : 'Sign In'}
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default AuthPage;
