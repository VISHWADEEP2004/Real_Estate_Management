import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="w-full">
      <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: 'url(/path/to/your/image.jpg)' }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Find Your Dream Home</h1>
          <p className="text-xl mb-8">Explore the best properties in your area</p>
          <Link to="/search" className="px-8 py-4 bg-purple-600 hover:bg-purple-700 rounded-full text-lg font-semibold">
            Start Searching
          </Link>
        </div>
      </div>

      <div className="flex justify-center mt-8">
        <input
          type="text"
          className="w-3/4 p-4 rounded-lg shadow-md"
          placeholder="Search for properties..."
        />
        <button className="ml-2 px-6 py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-lg shadow-md">
          Search
        </button>
      </div>

      <div className="my-16 px-8">
        <h2 className="text-4xl font-bold text-center mb-8">Featured Properties</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {/* Example Property Card */}
          <div className="w-80 bg-white shadow-lg rounded-lg overflow-hidden">
            <img src="/path/to/property1.jpg" alt="Property 1" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-bold">Beautiful Family House</h3>
              <p className="text-gray-600 mt-2">$500,000</p>
              <p className="text-gray-600 mt-2">3 Beds • 2 Baths • 1,500 sqft</p>
              <Link to="/property/1" className="block mt-4 text-purple-600 hover:underline">
                View Details
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 py-16 px-8">
        <h2 className="text-4xl font-bold text-center mb-8">Contact Us</h2>
        <div className="max-w-3xl mx-auto">
          <form>
            <div className="mb-4">
              <label className="block text-gray-700">Name</label>
              <input type="text" className="w-full p-4 border rounded-lg" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <input type="email" className="w-full p-4 border rounded-lg" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Message</label>
              <textarea className="w-full p-4 border rounded-lg"></textarea>
            </div>
            <button className="w-full py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-lg">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;
