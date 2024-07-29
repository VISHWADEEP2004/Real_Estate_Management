import React from 'react';
import { Link } from 'react-router-dom';
import Destination from './Destinations';
import ServiceSection from './ServiceSection';
import Testimonials from './Testimonials';
import AboutUs from './AboutUs';
import LatestNews from './LatestNews';
import CallToAction from './CallToAction';
import img3 from '../../assets/img/img3.jpg';
import HeroSection from './HeroSection';

const Home = () => {
  return (
    <div className="w-full">
      <HeroSection/>
      {/* <div className="flex justify-center mt-8 mb-7">
        <input
          type="text"
          className="w-3/4 p-4 rounded-lg shadow-md bg-input text-foreground dark:bg-secondary dark:text-secondary-foreground"
          placeholder="Search for properties..."
        />
        <button className="ml-2 px-6 py-4 bg-violet-900  text-white rounded-lg shadow-md">
          Search
        </button>
      </div> */}
      <div id="about-us">
            <AboutUs/>
        </div>
        <div id="services">
            <ServiceSection/>
        </div>
        <div id="destinations">
            <Destination/>
        </div>
        <div id="testimonials">
          <Testimonials/>
            {/* Testimonials Section */}
        </div>
        <div id="latest-news">
            {/* Latest News Section */}
        </div>
        <div id="call-to-action">
            {/* Call To Action Section */}
        </div>
    </div>
  );
};

export default Home;
