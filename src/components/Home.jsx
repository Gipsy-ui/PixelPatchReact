import React from 'react';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Welcome to PixelPatch</h1>
        <p className="text-lg text-gray-600 mb-8">Your trusted partner for device repairs and AI assistance.</p>
        <div className="space-x-4">
          <a href="/signup" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">Get Started</a>
          <a href="/services" className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-300">Explore Services</a>
        </div>
      </div>
    </div>
  );
};

export default Home;
