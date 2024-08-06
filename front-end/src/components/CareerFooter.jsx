// Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faTwitter, faYoutube, faFacebook } from '@fortawesome/free-brands-svg-icons';

const CarFooter = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <h3 className="text-xl font-bold mb-4">ABOUT US</h3>
          <p>Dream Dwelling is India’s most innovative real estate advertising platform for homeowners, landlords, developers, and real estate brokers.</p>
          <p>Email: ta@dreamdwelling.com</p>
          <p>For feedback, please reach us here</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-4">OUR HOMES</h3>
          <ul>
            <li><Link to="/ahmedabad" className="hover:underline">Ahmedabad</Link></li>
            <li><Link to="/bengaluru" className="hover:underline">Bengaluru</Link></li>
            {/* Add more cities */}
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-bold mb-4">FOLLOW US</h3>
          <div className="flex space-x-4">
            <a href="https://linkedin.com" aria-label="LinkedIn"><FontAwesomeIcon icon={faLinkedin} /></a>
            <a href="https://twitter.com" aria-label="Twitter"><FontAwesomeIcon icon={faTwitter} /></a>
            <a href="https://youtube.com" aria-label="YouTube"><FontAwesomeIcon icon={faYoutube} /></a>
            <a href="https://facebook.com" aria-label="Facebook"><FontAwesomeIcon icon={faFacebook} /></a>
          </div>
        </div>

        {/* Legal Links */}
        <div>
          <h3 className="text-xl font-bold mb-4">LEGAL</h3>
          <ul>
            <li><Link to="/terms-of-use" className="hover:underline">Terms of Use</Link></li>
            <li><Link to="/privacy-policy" className="hover:underline">Privacy Policy</Link></li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-6">
        <p>©2023 Dream Dwelling</p>
      </div>
    </footer>
  );
};

export default CarFooter;
