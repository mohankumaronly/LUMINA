import React from 'react';

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full transform transition-all hover:scale-105 duration-300">
        <div className="text-center">
          {/* Tailwind Logo/Icon */}
          <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-500 rounded-2xl mb-4 shadow-lg">
            <svg 
              className="w-12 h-12 text-white" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M13 10V3L4 14h7v7l9-11h-7z" 
              />
            </svg>
          </div>
          
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Tailwind CSS Working! 🎉
          </h1>
          
          <p className="text-gray-600 mb-6">
            React + TypeScript + Tailwind CSS
          </p>
          
          {/* Color Test */}
          <div className="flex gap-2 justify-center mb-6">
            <div className="w-10 h-10 rounded-full bg-red-500 shadow-md"></div>
            <div className="w-10 h-10 rounded-full bg-blue-500 shadow-md"></div>
            <div className="w-10 h-10 rounded-full bg-green-500 shadow-md"></div>
            <div className="w-10 h-10 rounded-full bg-purple-500 shadow-md"></div>
            <div className="w-10 h-10 rounded-full bg-pink-500 shadow-md"></div>
          </div>
          
          {/* Interactive Button */}
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            Get Started
          </button>
          
          <p className="mt-6 text-sm text-gray-500">
            ✅ Tailwind is properly configured
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;