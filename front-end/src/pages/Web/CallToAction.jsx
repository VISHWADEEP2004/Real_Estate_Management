import React from 'react';

const CallToAction = () => {
  return (
    <section className="call-to-action py-12 text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold mb-4">Ready to Find Your Dream Home?</h2>
        <p className="text-lg mb-6">Contact us today to start your journey with DreamDwelling. Our expert agents are here to assist you.</p>
        <a href="#contact" className="cta-button  text-white bg-violet-900 py-3 px-6 rounded-lg font-bold">Get Started</a>
      </div>
    </section>
  );
};

export default CallToAction;
