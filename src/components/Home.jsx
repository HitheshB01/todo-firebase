// src/components/Home.js
import React from 'react';

const Home = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4 animate-pulse">Welcome to My Colorful App</h1>
        <p className="text-2xl mb-6">Experience the vibrant interface</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Home;
