
import React from 'react';
import { Link } from 'react-router-dom';
import bg from '../../assets/img/bg.jpeg'; 

const HeroSection = () => {
  return (
    <section className="relative w-full h-full flex px-10 pt-20 gap-20">
      <div className="flex flex-col items-start text-start w-1/2 pl-20 pt-20">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5 leading-tight pr-10">
          Find Your Dream Home
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl mb-10">
          Explore the best properties in your area with ease and confidence.
        </p>
        <Link
          to="/location"
          className="px-8 py-4 bg-violet-900 hover:bg-purple-700 text-white text-lg font-semibold rounded-lg shadow-md transition-transform transform hover:scale-105"
        >
          Start Searching
        </Link>
      </div>
      <div
        className="w-1/2 h-full bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          height: '30rem',
          borderRadius: '0.5rem'
        }}
      ></div>
    </section>
  );
};

export default HeroSection;
