import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/Footer.css';

const Footer = () => {
  return (
    <div>
      <footer className="footer border bg-slate-100 dark: dark:bg-gray-800 py-8">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="footer-about">
            <h3 className="text-xl font-semibold mb-4">About DreamDwelling</h3>
            <p>DreamDwelling is your trusted partner in real estate. We help you find, buy, sell, and manage properties with ease and confidence.</p>
          </div>
          <div className="footer-links">
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul>
              <li><a href="#home" className="hover:underline">Home</a></li>
              <li><a href="#about" className="hover:underline">About Us</a></li>
              <li><a href="#services" className="hover:underline">Services</a></li>
              <li><a href="#contact" className="hover:underline">Contact Us</a></li>
            </ul>
          </div>
          <div className="footer-contact">
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <p>Email: contact@dreamdwelling.com</p>
            <p>Phone: +1 (123) 456-7890</p>
            <p>Address: 123 Dream Street, Real Estate City, RE 12345</p>
          </div>
          <div className="footer-social">
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="row-md-4 row-sm-6 row-xs-12">
              <ul className="social-icons flex flex-row">
                <li>
                  <Link className="facebook" to="https://www.facebook.com/bluestoneocs">
                    <i className="fa-brands fa-facebook"></i>
                  </Link>
                </li>
                <li>
                  <Link className="dribbble" to="https://www.instagram.com/bluestoneoverseas">
                    <i className="fa-brands fa-instagram"></i>
                  </Link>
                </li>
                <li>
                  <Link className="gmail" to="#">
                    <i className="fa-brands fa-google"></i>
                  </Link>
                </li>
                <li>
                  <Link className="linkedin" to="https://www.linkedin.com/company/bluestoneocs/">
                    <i className="fa-brands fa-linkedin"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom text-center mt-6">
          <p>&copy; 2024 DreamDwelling. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
