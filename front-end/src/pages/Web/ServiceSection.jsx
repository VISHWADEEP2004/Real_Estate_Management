
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import '../../assets/css/ServiceSection.css';

const ServiceSection = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formValues, setFormValues] = useState({ name: '', email: '', message: '' });
  const [isEnquiryFormOpen, setIsEnquiryFormOpen] = useState(false);

  const services = [
    {
      icon: "🏡",
      title: "Buying a Home",
      description: "Discover a wide range of properties tailored to your needs and budget. Our expert agents will guide you through the process to find your perfect home.",
      id: "buying"
    },
    {
      icon: "📈",
      title: "Selling a Home",
      description: "Get the best value for your property with our comprehensive marketing strategies and experienced agents. We'll handle everything from listing to closing.",
      id: "selling"
    },
    {
      icon: "🏢",
      title: "Renting a Property",
      description: "Find the ideal rental property that fits your lifestyle and budget. We offer a wide selection of rental homes and apartments in prime locations.",
      id: "renting"
    },
    {
      icon: "📝",
      title: "Property Management",
      description: "Ensure your property is well-maintained and profitable with our property management services. We handle tenant screening, rent collection, maintenance, and more.",
      id: "management"
    },
    {
      icon: "💰",
      title: "Mortgage Assistance",
      description: "Navigate the complexities of financing your home with our mortgage assistance services. We'll help you find the best loan options and secure favorable terms.",
      id: "mortgage"
    },
    {
      icon: "📊",
      title: "Real Estate Investment",
      description: "Maximize your investment potential with expert advice and comprehensive market analysis. Discover lucrative opportunities in residential and commercial real estate.",
      id: "investment"
    },
    {
      icon: "🏠",
      title: "Home Valuation",
      description: "Get an accurate valuation of your property from our experienced appraisers. Understand the market value and make informed decisions about your real estate assets.",
      id: "valuation"
    },
    {
      icon: "🚚",
      title: "Relocation Services",
      description: "Make your move hassle-free with our relocation services. We assist with every aspect of your transition, from finding a new home to settling into new community.",
      id: "relocation"
    }
  ];

  const serviceDetails = {
    buying: {
      title: "Buying a Home",
      content: "Discover a wide range of properties tailored to your needs and budget. Our expert agents will guide you through the process to find your perfect home.",
      image: "https://marathon.in/wp-content/uploads/2021/08/marathon_blog_page_aug-2021_home-in-30s_01.jpg", 
      detailedContent: "When buying a home, it's essential to consider various factors such as location, budget, and future plans. Our team will help you navigate the market, providing insights and advice to make an informed decision. We offer a variety of homes, from affordable starter homes to luxury estates, ensuring that you find the perfect fit for your lifestyle and financial situation."
    },
    selling: {
      title: "Selling a Home",
      content: "Get the best value for your property with our comprehensive marketing strategies and experienced agents. We'll handle everything from listing to closing.",
      image: "https://bt-wpstatic.freetls.fastly.net/wp-content/blogs.dir/220/files/2024/06/The-Benefits-of-Using-a-Real-Estate-Agent-to-Sell-Your-Home-49841eba67002a1e34da4dc52556aaff9f7b2d74.png", 
      detailedContent: "Selling a home can be a complex process, but our team is here to make it smooth and stress-free. We use advanced marketing techniques to showcase your property to potential buyers and negotiate the best price on your behalf. Our agents handle all the details, from staging and photography to open houses and final negotiations, ensuring a successful sale."
    },
    renting: {
      title: "Renting a Property",
      content: "Find the ideal rental property that fits your lifestyle and budget. We offer a wide selection of rental homes and apartments in prime locations.",
      image: "https://dp5zphk8udxg9.cloudfront.net/wp-content/uploads/2017/04/Rent-Tax-HRA-e1492416603594.jpg",
      detailedContent: "Renting a property can be challenging, but our team simplifies the process. We have a wide range of rental properties in various locations and budgets. Our agents help you find the perfect rental, handle lease agreements, and ensure a smooth move-in experience."
    },
    management: {
      title: "Property Management",
      content: "Ensure your property is well-maintained and profitable with our property management services. We handle tenant screening, rent collection, maintenance, and more.",
      image: "https://planradar-website.s3.amazonaws.com/production/uploads/2020/02/residentialpropertymanagement.jpg",
      detailedContent: "Our property management services are designed to maximize your property's potential. From tenant screening and rent collection to maintenance and legal compliance, we handle it all. Our team ensures your property remains profitable and well-maintained, giving you peace of mind."
    },
    mortgage: {
      title: "Mortgage Assistance",
      content: "Navigate the complexities of financing your home with our mortgage assistance services. We'll help you find the best loan options and secure favorable terms.",
      image: "https://szocka.com/wp-content/uploads/2020/07/mortgagepic.jpg",
      detailedContent: "Financing a home can be complex, but our mortgage assistance services simplify the process. We work with various lenders to find the best loan options and terms for you. Our experts guide you through every step, from pre-approval to closing, ensuring a smooth experience."
    },
    investment: {
      title: "Real Estate Investment",
      content: "Maximize your investment potential with expert advice and comprehensive market analysis. Discover lucrative opportunities in residential and commercial real estate.",
      image: "https://letsdigg.in/wp-content/uploads/2023/09/rental-property-investment-strategy.jpeg",
      detailedContent: "Real estate investment requires expertise and market knowledge. Our team provides comprehensive market analysis and expert advice to help you make informed investment decisions. Whether you're interested in residential or commercial properties, we identify lucrative opportunities and guide you through the process."
    },
    valuation: {
      title: "Home Valuation",
      content: "Get an accurate valuation of your property from our experienced appraisers. Understand the market value and make informed decisions about your real estate assets.",
      image: "https://www.imtilak.net/uploads/posts/3aa588445a485a6869b10a0d29b241f4bYH700.webp",
      detailedContent: "Knowing your property's market value is crucial for making informed decisions. Our experienced appraisers provide accurate valuations based on market trends and property features. Whether you're buying, selling, or refinancing, our valuations help you understand your real estate assets' worth."
    },
    relocation: {
      title: "Relocation Services",
      content: "Make your move hassle-free with our relocation services. We assist with every aspect of your transition, from finding a new home to settling into a new community.",
      image: "https://quickmovenow.com/wp-content/uploads/relocating-when-you-own-a-house.jpg",
      detailedContent: "Relocating can be stressful, but our relocation services make it easy. We assist with every aspect of your move, from finding a new home to settling into a new community. Our team handles logistics, transportation, and all the details to ensure a smooth transition for you and your family."
    }
  };

  const handleLearnMoreClick = (id) => {
    setSelectedService(serviceDetails[id]);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
    setFormValues({ name: '', email: '', message: '' }); // Clear form values
    setIsEnquiryFormOpen(false);
  };

  const handleEnquiryFormChange = (e) => {
    const { name, value } = e.target;
    setFormValues(prevValues => ({ ...prevValues, [name]: value }));
  };

  const handleEnquirySubmit = (e) => {
    e.preventDefault();
    console.log('Enquiry submitted:', formValues);
    setIsEnquiryFormOpen(false);
  };

  return (
    <section className="text-secondary-foreground dark:bg-background dark:text-primary-foreground py-12 px-4">
      <h2 className="text-3xl font-semibold mb-8 flex justify-center pt-10">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service) => (
          <div key={service.id} className="bg-card border shadow-xl text-card-foreground dark:bg-card dark:text-card-foreground p-6 rounded-lg">
            <div className="flex justify-center items-center text-4xl mb-4">{service.icon}</div>
            <h3 className="flex justify-center items-center text-xl font-semibold mb-2">{service.title}</h3>
            <p className="flex justify-center items-center text-base mb-4">{service.description}</p>
            <button
              onClick={() => handleLearnMoreClick(service.id)}
              className="flex justify-center items-center text-white border mx-10 w-60 h-10 bg-violet-900 hover:underline rounded-lg"
            >
              Learn More
            </button>
          </div>
        ))}
      </div>
      {isModalOpen && selectedService && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50 ">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 max-w-3xl  relative flex flex-col md:flex-row transition-all duration-300 ease-in-out">
            <button
              onClick={handleCloseModal}
              className="absolute top-2 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-100"
            >
               <FontAwesomeIcon icon={faTimes} size="lg" />
            </button>
            <div className={`flex-1 p-6 transition-all duration-300 ${isEnquiryFormOpen ? 'w-1/2' : 'w-full'}`}>
              <h1 className="text-2xl font-semibold mb-4">{selectedService.title}</h1>
              <img src={selectedService.image} alt={selectedService.title} className=" " />
              <p className="text-base mb-4">{selectedService.content}</p>
              <p className="text-base mb-4">{selectedService.detailedContent}</p>
              {!isEnquiryFormOpen ? (
                <button
                  onClick={() => setIsEnquiryFormOpen(true)}
                  className="bg-violet-900 text-white py-2 px-4 rounded-lg hover:bg-violet-700 mt-4"
                >
                  Enquire Now
                </button>
              ) : (
                <button
                  onClick={() => setIsEnquiryFormOpen(false)}
                  className="bg-gray-600 text-white py-2 px-4 rounded-lg hover:bg-gray-700 mt-4"
                >
                  Close Form
                </button>
              )}
            </div>
            {isEnquiryFormOpen && (
              <div className="flex-1 p-6 bg-gray-100 dark:bg-gray-700 mt-10 mb-10">
                <h3 className="text-xl font-semibold mb-4">Enquiry Form</h3>
                <form onSubmit={handleEnquirySubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold mb-2">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formValues.name}
                      onChange={handleEnquiryFormChange}
                      className="w-full border rounded-lg p-2"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formValues.email}
                      onChange={handleEnquiryFormChange}
                      className="w-full border rounded-lg p-2"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold mb-2">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formValues.message}
                      onChange={handleEnquiryFormChange}
                      className="w-full border rounded-lg p-2"
                      rows="4"
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="bg-violet-900 text-white py-2 px-4 rounded-lg hover:bg-violet-700"
                  >
                    Submit
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default ServiceSection;
