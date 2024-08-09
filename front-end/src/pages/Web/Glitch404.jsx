import React from 'react';
import '../../assets/css/Glitch404.css'

const Glitch404 = () => {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen bg-gray-900">
      <div className="relative text-white font-mono text-9xl leading-none tracking-tighter glitch-container" title="404">
        404
      </div>
      <p className="text-white mt-4 text-2xl">Oops! The page you're looking for doesn't exist.</p>
      <button
        onClick={() => window.location.href = '/'}
        className="mt-8 px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
      >
        Go Back to Home
      </button>
    </div>
  );
};

export default Glitch404;

