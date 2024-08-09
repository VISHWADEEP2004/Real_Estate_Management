import React from 'react';
import ServiceSection from './ServiceSection';
import Testimonials from './Testimonials';
import AboutUs from './AboutUs';
import HeroSection from './HeroSection';
import Options from './Options';
import Destination from './Destinations';

const Home = () => {
  return (
    <div className="w-full">
      <HeroSection/>
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
        </div>
        {/* <Options/> */}
    </div>
  );
};

export default Home;
