import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white text-red-700 font-sans">
      <div className="flex flex-col justify-center items-center w-full h-full px-6 py-12">
        <header className="mb-10 text-center">
          <h1 className="text-5xl font-extrabold mb-3 text-red-800">TriMedi Healthcare</h1>
          <p className="text-lg text-red-600">Simplifying Healthcare for Everyone</p>
        </header>

        <nav className="flex justify-center mb-12 space-x-6">
          <Link to="/" className="text-white bg-red-600 hover:bg-red-700 px-5 py-2 rounded-md font-medium shadow-md">Home</Link>
          <Link to="/auth" className="text-red-600 border border-red-600 hover:bg-red-600 hover:text-white px-5 py-2 rounded-md font-medium shadow-md">Auth Page</Link>
        </nav>

        <section className="w-full max-w-5xl">
          <h2 className="text-3xl font-bold mb-6 text-center">Key Features</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-lg">
            <li className="flex items-start bg-red-50 p-4 rounded shadow"><span className="mr-2 text-red-800">•</span> Online Pharmacy – Browse and purchase prescription medicines</li>
            <li className="flex items-start bg-red-50 p-4 rounded shadow"><span className="mr-2 text-red-800">•</span> Health & Wellness Products – Healthcare essentials, supplements, and devices</li>
            <li className="flex items-start bg-red-50 p-4 rounded shadow"><span className="mr-2 text-red-800">•</span> AI-Powered Recommendations – Personalized suggestions based on user history</li>
            <li className="flex items-start bg-red-50 p-4 rounded shadow"><span className="mr-2 text-red-800">•</span> Doctor Consultation – Connect with certified doctors for prescriptions and guidance</li>
            <li className="flex items-start bg-red-50 p-4 rounded shadow"><span className="mr-2 text-red-800">•</span> Smart Order Tracking – Real-time updates from purchase to delivery</li>
            <li className="flex items-start bg-red-50 p-4 rounded shadow"><span className="mr-2 text-red-800">•</span> Subscription & Reminders – Automated refills and medication reminders</li>
            <li className="flex items-start bg-red-50 p-4 rounded shadow"><span className="mr-2 text-red-800">•</span> Secure Payments & Fast Delivery – Multiple payment options and quick delivery</li>
          </ul>
        </section>
      </div>
    </div>
  );
};


export default HomePage