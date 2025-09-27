import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-100 via-white to-red-200 text-red-800 font-sans flex flex-col items-center justify-center">
      <div className="w-full max-w-5xl mx-auto px-6 py-12 flex flex-col items-center">
        <header className="mb-10 text-center">
          <h1 className="text-6xl font-extrabold mb-4 text-red-700 drop-shadow-lg tracking-tight animate-fade-in">TriMedi Healthcare</h1>
          <p className="text-xl text-red-500 font-medium mb-2 animate-fade-in">Simplifying Healthcare for Everyone</p>
          <div className="flex justify-center gap-4 mt-4">
            <Link to="/" className="bg-gradient-to-r from-red-500 to-red-700 hover:from-red-700 hover:to-red-500 text-white px-6 py-2 rounded-full font-semibold shadow-lg transition-all duration-200">Home</Link>
            <Link to="/auth" className="border-2 border-red-500 text-red-600 hover:bg-red-600 hover:text-white px-6 py-2 rounded-full font-semibold shadow-lg transition-all duration-200">Auth Page</Link>
          </div>
        </header>

        <section className="w-full mt-8">
          <h2 className="text-4xl font-bold mb-8 text-center text-red-700 animate-fade-in">Key Features</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-8 text-lg">
            <li className="flex items-center bg-white/60 backdrop-blur-lg p-6 rounded-2xl shadow-2xl border border-red-100 hover:scale-105 transition-transform duration-200">
              <span className="mr-4 text-3xl text-red-500">💊</span> Online Pharmacy – Browse and purchase prescription medicines
            </li>
            <li className="flex items-center bg-white/60 backdrop-blur-lg p-6 rounded-2xl shadow-2xl border border-red-100 hover:scale-105 transition-transform duration-200">
              <span className="mr-4 text-3xl text-red-400">🧴</span> Health & Wellness Products – Healthcare essentials, supplements, and devices
            </li>
            <li className="flex items-center bg-white/60 backdrop-blur-lg p-6 rounded-2xl shadow-2xl border border-red-100 hover:scale-105 transition-transform duration-200">
              <span className="mr-4 text-3xl text-red-600">🤖</span> AI-Powered Recommendations – Personalized suggestions based on user history
            </li>
            <li className="flex items-center bg-white/60 backdrop-blur-lg p-6 rounded-2xl shadow-2xl border border-red-100 hover:scale-105 transition-transform duration-200">
              <span className="mr-4 text-3xl text-red-500">👨‍⚕️</span> Doctor Consultation – Connect with certified doctors for prescriptions and guidance
            </li>
            <li className="flex items-center bg-white/60 backdrop-blur-lg p-6 rounded-2xl shadow-2xl border border-red-100 hover:scale-105 transition-transform duration-200">
              <span className="mr-4 text-3xl text-red-400">🚚</span> Smart Order Tracking – Real-time updates from purchase to delivery
            </li>
            <li className="flex items-center bg-white/60 backdrop-blur-lg p-6 rounded-2xl shadow-2xl border border-red-100 hover:scale-105 transition-transform duration-200">
              <span className="mr-4 text-3xl text-red-600">⏰</span> Subscription & Reminders – Automated refills and medication reminders
            </li>
            <li className="flex items-center bg-white/60 backdrop-blur-lg p-6 rounded-2xl shadow-2xl border border-red-100 hover:scale-105 transition-transform duration-200">
              <span className="mr-4 text-3xl text-red-500">💳</span> Secure Payments & Fast Delivery – Multiple payment options and quick delivery
            </li>
          </ul>
        </section>
      </div>
      <footer className="mt-12 text-center text-sm text-red-400 animate-fade-in">
        &copy; {new Date().getFullYear()} TriMedi Healthcare. All rights reserved.
      </footer>
    </div>
  );
};

export default HomePage;