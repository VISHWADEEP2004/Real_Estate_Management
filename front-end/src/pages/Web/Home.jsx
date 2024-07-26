import React from 'react';
import { Link } from 'react-router-dom';
import Destination from './Destinations';

const Home = () => {
  return (
    <div className="w-full">
        <div
      className="relative h-screen bg-cover bg-center"
      style={{
        backgroundImage: 'url(https://assets.gqindia.com/photos/60f96f3119900248e3af9ee4/16:9/w_1920,h_1080,c_limit/Expensive%20properties%20in%20Mumbai%20.jpg)'
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
        <h1 className="text-5xl font-bold mb-4 text-white">Find Your Dream Home</h1>
        <p className="text-xl mb-8 text-white">Explore the best properties in your area</p>
        <Link
          to="/search"
          className="px-8 py-4 bg-purple-600 hover:bg-purple-700 rounded-full text-lg font-semibold text-white"
        >
          Start Searching
        </Link>
      </div>
    </div>
      <div className="flex justify-center mt-8">
        <input
          type="text"
          className="w-3/4 p-4 rounded-lg shadow-md bg-input text-foreground dark:bg-secondary dark:text-secondary-foreground"
          placeholder="Search for properties..."
        />
        <button className="ml-2 px-6 py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-lg shadow-md">
          Search
        </button>
      </div>

     
      <Destination/>
    </div>
  );
};

export default Home;
