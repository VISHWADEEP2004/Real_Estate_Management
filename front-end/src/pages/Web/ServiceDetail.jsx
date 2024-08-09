import React from 'react';
import { useParams } from 'react-router-dom';

const serviceDetails = {
    buying: {
      title: "Buying a Home",
      content: "Discover a wide range of properties tailored to your needs and budget. Our expert agents will guide you through the process to find your perfect home.",
      image: "https://marathon.in/wp-content/uploads/2021/08/marathon_blog_page_aug-2021_home-in-30s_01.jpg", // Replace with actual URL
      detailedContent: "When buying a home, it's essential to consider various factors such as location, budget, and future plans. Our team will help you navigate the market, providing insights and advice to make an informed decision. We offer a variety of homes, from affordable starter homes to luxury estates, ensuring that you find the perfect fit for your lifestyle and financial situation."
    },
    selling: {
      title: "Selling a Home",
      content: "Get the best value for your property with our comprehensive marketing strategies and experienced agents. We'll handle everything from listing to closing.",
      image: "https://via.placeholder.com/600x400", // Replace with actual URL
      detailedContent: "Selling a home can be a complex process, but our team is here to make it smooth and stress-free. We use advanced marketing techniques to showcase your property to potential buyers and negotiate the best price on your behalf. Our agents handle all the details, from staging and photography to open houses and final negotiations, ensuring a successful sale."
    },
    renting: {
      title: "Renting a Property",
      content: "Find the ideal rental property that fits your lifestyle and budget. We offer a wide selection of rental homes and apartments in prime locations.",
      image: "https://via.placeholder.com/600x400",
      detailedContent: "Renting a property can be challenging, but our team simplifies the process. We have a wide range of rental properties in various locations and budgets. Our agents help you find the perfect rental, handle lease agreements, and ensure a smooth move-in experience."
    },
    management: {
      title: "Property Management",
      content: "Ensure your property is well-maintained and profitable with our property management services. We handle tenant screening, rent collection, maintenance, and more.",
      image: "https://via.placeholder.com/600x400",
      detailedContent: "Our property management services are designed to maximize your property's potential. From tenant screening and rent collection to maintenance and legal compliance, we handle it all. Our team ensures your property remains profitable and well-maintained, giving you peace of mind."
    },
    mortgage: {
      title: "Mortgage Assistance",
      content: "Navigate the complexities of financing your home with our mortgage assistance services. We'll help you find the best loan options and secure favorable terms.",
      image: "https://via.placeholder.com/600x400",
      detailedContent: "Financing a home can be complex, but our mortgage assistance services simplify the process. We work with various lenders to find the best loan options and terms for you. Our experts guide you through every step, from pre-approval to closing, ensuring a smooth experience."
    },
    investment: {
      title: "Real Estate Investment",
      content: "Maximize your investment potential with expert advice and comprehensive market analysis. Discover lucrative opportunities in residential and commercial real estate.",
      image: "https://via.placeholder.com/600x400",
      detailedContent: "Real estate investment requires expertise and market knowledge. Our team provides comprehensive market analysis and expert advice to help you make informed investment decisions. Whether you're interested in residential or commercial properties, we identify lucrative opportunities and guide you through the process."
    },
    valuation: {
      title: "Home Valuation",
      content: "Get an accurate valuation of your property from our experienced appraisers. Understand the market value and make informed decisions about your real estate assets.",
      image: "https://via.placeholder.com/600x400",
      detailedContent: "Knowing your property's market value is crucial for making informed decisions. Our experienced appraisers provide accurate valuations based on market trends and property features. Whether you're buying, selling, or refinancing, our valuations help you understand your real estate assets' worth."
    },
    relocation: {
      title: "Relocation Services",
      content: "Make your move hassle-free with our relocation services. We assist with every aspect of your transition, from finding a new home to settling into a new community.",
      image: "https://via.placeholder.com/600x400",
      detailedContent: "Relocating can be stressful, but our relocation services make it easy. We assist with every aspect of your move, from finding a new home to settling into a new community. Our team handles logistics, transportation, and all the details to ensure a smooth transition for you and your family."
    }
  };
  const ServiceDetail = () => {
    const { serviceId } = useParams();
    const service = serviceDetails[serviceId];
  
    return (
      <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
        <h1 className="text-2xl font-semibold mb-4 text-center">{service.title}</h1>
        <img src={service.image} alt={service.title} className="mb-4 w-full h-auto rounded-lg" />
        <p className="text-base mb-4">{service.content}</p>
        <p className="text-base">{service.detailedContent}</p>
      </div>
    );
  };
  
  export default ServiceDetail;