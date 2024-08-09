// import React from 'react';
// import { Link } from 'react-router-dom';
// import '../../assets/css/Footer.css';

// const Footer = () => {
//   return (
//     <div>
//       <footer className="footer border bg-slate-100 dark: dark:bg-gray-800 py-8">
//         <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
//           <div className="footer-about">
//             <h3 className="text-xl font-semibold mb-4">About DreamDwelling</h3>
//             <p>DreamDwelling is your trusted partner in real estate. We help you find, buy, sell, and manage properties with ease and confidence.</p>
//           </div>
//           <div className="footer-links">
//             <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
//             <ul>
//               <li><a href="#home" className="hover:underline">Home</a></li>
//               <li><a href="#about" className="hover:underline">About Us</a></li>
//               <li><a href="#services" className="hover:underline">Services</a></li>
//               <li><a href="#contact" className="hover:underline">Contact Us</a></li>
//             </ul>
//           </div>
//           <div className="footer-contact">
//             <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
//             <p>Email: contact@dreamdwelling.com</p>
//             <p>Phone: +1 (123) 456-7890</p>
//             <p>Address: 123 Dream Street, Real Estate City, RE 12345</p>
//           </div>
//           <div className="footer-social">
//             <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
//             <div className="row-md-4 row-sm-6 row-xs-12">
//               <ul className="social-icons flex flex-row">
//                 <li>
//                   <Link className="facebook" to="https://www.facebook.com/bluestoneocs">
//                     <i className="fa-brands fa-facebook"></i>
//                   </Link>
//                 </li>
//                 <li>
//                   <Link className="dribbble" to="https://www.instagram.com/bluestoneoverseas">
//                     <i className="fa-brands fa-instagram"></i>
//                   </Link>
//                 </li>
//                 <li>
//                   <Link className="gmail" to="#">
//                     <i className="fa-brands fa-google"></i>
//                   </Link>
//                 </li>
//                 <li>
//                   <Link className="linkedin" to="https://www.linkedin.com/company/bluestoneocs/">
//                     <i className="fa-brands fa-linkedin"></i>
//                   </Link>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//         <div className="footer-bottom text-center mt-6">
//           <p>&copy; 2024 DreamDwelling. All rights reserved.</p>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default Footer;

// Footer.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">Company</h3>
          <ul>
            <li><a href="/careers" target="_blank" rel="noopener noreferrer" className="hover:underline">Careers</a></li>
            <li><a href="/aboutus" target="_blank" rel="noopener noreferrer" className="hover:underline">About Us</a></li>
            <li><a href="/partners" target="_blank" rel="noopener noreferrer" className="hover:underline">For Partners</a></li>
            <li><a href="/terms" target="_blank" rel="noopener noreferrer" className="hover:underline">Terms</a></li>
            <li><a href="/annual-return" target="_blank" rel="noopener noreferrer" className="hover:underline">Annual Return</a></li>
            <li><a href="/privacy-policy" target="_blank" rel="noopener noreferrer" className="hover:underline">Privacy Policy</a></li>
            <li><a href="/contact-us" target="_blank" rel="noopener noreferrer" className="hover:underline">Contact Us</a></li>
            <li><a href="/unsubscribe" target="_blank" rel="noopener noreferrer" className="hover:underline">Unsubscribe</a></li>
            <li><a href="/merger-hearing" target="_blank" rel="noopener noreferrer" className="hover:underline">Merger Hearing Advertisement</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Explore</h3>
          <ul>
            <li><a href="/news" target="_blank" rel="noopener noreferrer" className="hover:underline">News</a></li>
            <li><a href="/home-loans" target="_blank" rel="noopener noreferrer" className="hover:underline">Home Loans</a></li>
            <li><a href="/sitemap" target="_blank" rel="noopener noreferrer" className="hover:underline">Sitemap</a></li>
            <li><a href="/international" target="_blank" rel="noopener noreferrer" className="hover:underline">International</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Partner Sites</h3>
          <ul>
            <li><a href="https://www.proptiger.com" target="_blank" rel="noopener noreferrer" className="hover:underline">Proptiger</a></li>
            <li><a href="https://www.makaan.com" target="_blank" rel="noopener noreferrer" className="hover:underline">Makaan</a></li>
            <li><a href="https://www.realestate.com.au" target="_blank" rel="noopener noreferrer" className="hover:underline">realestate.com.au</a></li>
            <li><a href="https://www.realtor.com" target="_blank" rel="noopener noreferrer" className="hover:underline">realtor.com</a></li>
            <li><a href="https://www.99.co" target="_blank" rel="noopener noreferrer" className="hover:underline">99.co</a></li>
            <li><a href="https://www.collinsdictionary.com" target="_blank" rel="noopener noreferrer" className="hover:underline">collinsdictionary.com</a></li>
          </ul>
        </div>

        {/* Social Media Icons */}
        <div>
          <h3 className="text-xl font-bold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
          </div>
        </div>
      </div>
      <div className="text-center mt-8">
        <p>©2012-24 Locon Solutions Pvt. Ltd</p>
      </div>
    </footer>
  );
};

export default Footer;
