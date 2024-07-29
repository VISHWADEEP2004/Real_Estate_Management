import React from 'react';
import '../../assets/css/ServiceSection.css';

const ServiceSection = () => {
  const services = [
    {
      icon: "🏡",
      title: "Buying a Home",
      description: "Discover a wide range of properties tailored to your needs and budget. Our expert agents will guide you through the process to find your perfect home.",
      link: "#buying"
    },
    {
      icon: "📈",
      title: "Selling a Home",
      description: "Get the best value for your property with our comprehensive marketing strategies and experienced agents. We'll handle everything from listing to closing.",
      link: "#selling"
    },
    {
      icon: "🏢",
      title: "Renting a Property",
      description: "Find the ideal rental property that fits your lifestyle and budget. We offer a wide selection of rental homes and apartments in prime locations.",
      link: "#renting"
    },
    {
      icon: "📝",
      title: "Property Management",
      description: "Ensure your property is well-maintained and profitable with our property management services. We handle tenant screening, rent collection, maintenance, and more.",
      link: "#management"
    },
    {
      icon: "💰",
      title: "Mortgage Assistance",
      description: "Navigate the complexities of financing your home with our mortgage assistance services. We'll help you find the best loan options and secure favorable terms.",
      link: "#mortgage"
    },
    {
      icon: "📊",
      title: "Real Estate Investment",
      description: "Maximize your investment potential with expert advice and comprehensive market analysis. Discover lucrative opportunities in residential and commercial real estate.",
      link: "#investment"
    },
    {
      icon: "🏠",
      title: "Home Valuation",
      description: "Get an accurate valuation of your property from our experienced appraisers. Understand the market value and make informed decisions about your real estate assets.",
      link: "#valuation"
    },
    {
      icon: "🚚",
      title: "Relocation Services",
      description: "Make your move hassle-free with our relocation services. We assist with every aspect of your transition, from finding a new home to settling into new community.",
      link: "#relocation"
    }
  ];

  return (
    <section className="text-secondary-foreground dark:bg-background dark:text-primary-foreground py-12 px-4">
      <h2 className="text-3xl font-semibold mb-8 flex justify-center pt-10">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <div key={index} className="bg-card border shadow-xl text-card-foreground dark:bg-card dark:text-card-foreground p-6 rounded-lg">
            <div className="flex justify-center items-center  text-4xl mb-4">{service.icon}</div>
            <h3 className="flex justify-center items-center  text-xl font-semibold mb-2">{service.title}</h3>
            <p className="flex justify-center items-center  text-base mb-4">{service.description}</p>
            <a href={service.link} className="flex justify-center items-center  text-white border mx-10 w-50 h-10 bg-violet-900 hover:underline rounded-lg">Learn More</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceSection;
