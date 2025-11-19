import React from 'react';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Welcome to PixelPatch</h1>
        <p className="text-lg text-gray-600 mb-8">Your trusted partner for device repairs and AI assistance.</p>
        <div className="space-x-4">
          <a href="/dashboard-ai-before" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">Get Started</a>
        </div>
      </div>
    </div>
  );
};

export default Home;
