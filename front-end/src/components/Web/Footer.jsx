import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faGoogle, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <>
      {/* Site footer */}
      <footer className="bg-gray-800 py-10 text-sm text-gray-400">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/2">
              <h6 className="text-white font-bold uppercase text-lg mb-4">About Us</h6>
              <p className="text-justify  w-80">
                Welcome to dreamdwelling, your premier destination for finding the perfect home or
                investment property. With years of experience in the real estate industry, we are committed to providing you with exceptional service and expert advice.
              </p>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/4">
              <h6 className="text-white font-bold uppercase text-lg mb-4">Visit Us</h6>
              <ul className="list-none">
                <li className="mb-4">
                  <h6 className="text-white font-bold uppercase">Corporate Office</h6>
                  123 Main Street, City, State, ZIP Code
                </li>
                <li className="mb-4">
                  <h6 className="text-white font-bold uppercase">Contact Us</h6>
                  <a href="tel:+1234567890" className="text-gray-400">+1234567890</a>
                </li>
                <li className="mb-4">
                  <h6 className="text-white font-bold uppercase">TIMINGS</h6>
                  9:00 AM - 6:30 PM
                </li>
              </ul>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/4">
              <h6 className="text-white font-bold uppercase text-lg mb-4">Quick Links</h6>
              <ul className="list-none">
                <li className="mb-2">
                  <Link to="/" className="text-gray-400 hover:text-blue-600">Home</Link>
                </li>
                <li className="mb-2">
                  <Link to="/about" className="text-gray-400 hover:text-blue-600">About</Link>
                </li>
                <li className="mb-2">
                  <Link to="#" className="text-gray-400 hover:text-blue-600">Terms of Use</Link>
                </li>
                <li className="mb-2">
                  <Link to="#" className="text-gray-400 hover:text-blue-600">Privacy Policy</Link>
                </li>
                <li className="mb-2">
                  <Link to="/contact" className="text-gray-400 hover:text-blue-600">Contact Us</Link>
                </li>
              </ul>
            </div>
          </div>
          <hr className="border-gray-500 opacity-50 my-4" />
        </div>
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap">
            <div className="w-full md:w-2/3 text-center md:text-left">
              <p className="text-gray-400">
                Copyright © 2024 dreamdwelling. All rights reserved.
              </p>
            </div>
            <div className="w-full md:w-1/3 flex justify-center md:justify-end">
              <ul className="flex space-x-3">
                <li>
                  <Link className="bg-gray-700 text-gray-400 hover:bg-blue-600 rounded-full p-2" to="https://www.facebook.com/houserz">
                    <FontAwesomeIcon icon={faFacebook} />
                  </Link>
                </li>
                <li>
                  <Link className="bg-gray-700 text-gray-400 hover:bg-pink-600 rounded-full p-2" to="https://www.instagram.com/houserz">
                    <FontAwesomeIcon icon={faInstagram} />
                  </Link>
                </li>
                <li>
                  <Link className="bg-gray-700 text-gray-400 hover:bg-red-600 rounded-full p-2" to="#">
                    <FontAwesomeIcon icon={faGoogle} />
                  </Link>
                </li>
                <li>
                  <Link className="bg-gray-700 text-gray-400 hover:bg-blue-700 rounded-full p-2" to="https://www.linkedin.com/company/houserz">
                    <FontAwesomeIcon icon={faLinkedin} />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
