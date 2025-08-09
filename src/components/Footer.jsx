import React from 'react';
import { Link } from 'react-router-dom';

function Footer({
  onSafetyScoreClick,
  onMoodHeatmapClick,
  onCostCalculatorClick,
}) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-br from-black via-gray-900 to-black text-white pt-16 pb-10 px-4 sm:px-6 md:px-12 lg:px-20 mt-8">
      {/* Torn Paper SVG Top Edge */}
      <div className="absolute top-0 left-0 w-full overflow-hidden z-0">
        <svg
          viewBox="0 0 1200 100"
          preserveAspectRatio="none"
          className="w-full h-[60px] sm:h-[80px] md:h-[100px]"
        >
          <defs>
            <linearGradient id="grayGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#1f2937" />
              <stop offset="50%" stopColor="#374151" />
              <stop offset="100%" stopColor="#4b5563" />
            </linearGradient>
          </defs>
          <path
            d="M0,40 C150,80 350,0 600,40 C850,80 1050,0 1200,40 L1200,0 L0,0 Z"
            fill="url(#grayGradient)"
          />
        </svg>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-[1440px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-10 text-sm sm:text-base">
        
        {/* About Section */}
        <div>
          <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 text-white">NomadNetwork</h3>
          <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
            Your trusted network for digital nomad visa programs. Connect globally, live freely.
          </p>
          <div className="flex space-x-4 mt-4 sm:mt-6 text-lg sm:text-xl">
            <a href="#" className="hover:text-blue-500"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="hover:text-sky-400"><i className="fab fa-twitter"></i></a>
            <a href="#" className="hover:text-pink-500"><i className="fab fa-instagram"></i></a>
            <a href="#" className="hover:text-blue-700"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-white">Quick Links</h4>
          <ul className="space-y-2 sm:space-y-3">
            <li>
              <Link
                to="/about-us"
                className="block bg-gray-800 hover:bg-gray-700 transition-colors duration-300 p-2 sm:p-3 rounded-xl shadow-md hover:shadow-lg text-gray-300 hover:text-white font-medium text-sm sm:text-base"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="block bg-gray-800 hover:bg-gray-700 transition-colors duration-300 p-2 sm:p-3 rounded-xl shadow-md hover:shadow-lg text-gray-300 hover:text-white font-medium text-sm sm:text-base"
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                to="/privacy-policy"
                className="block bg-gray-800 hover:bg-gray-700 transition-colors duration-300 p-2 sm:p-3 rounded-xl shadow-md hover:shadow-lg text-gray-300 hover:text-white font-medium text-sm sm:text-base"
              >
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Tools */}
        <div>
          <h4 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-white">Tools</h4>
          <ul className="space-y-2 sm:space-y-3">
            <li>
              <div
                onClick={onSafetyScoreClick}
                className="block bg-gray-800 hover:bg-gray-700 transition-colors duration-300 p-2 sm:p-3 rounded-xl cursor-pointer shadow-md hover:shadow-lg text-gray-300 hover:text-white font-medium text-sm sm:text-base"
              >
                Safety & Trust Score
              </div>
            </li>
            <li>
              <div
                onClick={onMoodHeatmapClick}
                className="block bg-gray-800 hover:bg-gray-700 transition-colors duration-300 p-2 sm:p-3 rounded-xl cursor-pointer shadow-md hover:shadow-lg text-gray-300 hover:text-white font-medium text-sm sm:text-base"
              >
                Mood Heatmap
              </div>
            </li>
            <li>
              <div
                onClick={onCostCalculatorClick}
                className="block bg-gray-800 hover:bg-gray-700 transition-colors duration-300 p-2 sm:p-3 rounded-xl cursor-pointer shadow-md hover:shadow-lg text-gray-300 hover:text-white font-medium text-sm sm:text-base"
              >
                Cost of Living Forecaster
              </div>
            </li>
          </ul>
        </div>

        {/* Resources Section */}
        <div>
          <h4 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-white">Resources</h4>
          <ul className="space-y-2 sm:space-y-3">
            <li>
              <Link
                to="/blog"
                className="block bg-gray-800 hover:bg-gray-700 transition-colors duration-300 p-2 sm:p-3 rounded-xl shadow-md hover:shadow-lg text-gray-300 hover:text-white font-medium text-sm sm:text-base"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                to="/community"
                className="block bg-gray-800 hover:bg-gray-700 transition-colors duration-300 p-2 sm:p-3 rounded-xl shadow-md hover:shadow-lg text-gray-300 hover:text-white font-medium text-sm sm:text-base"
              >
                Community
              </Link>
            </li>
            <li>
              <Link
                to="/support"
                className="block bg-gray-800 hover:bg-gray-700 transition-colors duration-300 p-2 sm:p-3 rounded-xl shadow-md hover:shadow-lg text-gray-300 hover:text-white font-medium text-sm sm:text-base"
              >
                Support
              </Link>
            </li>
          </ul>
        </div>

        {/* Get In Touch */}
        <div>
          <h4 className="text-lg sm:text-xl font-semibold mb-4 text-white">Get In Touch</h4>
          <div className="flex items-start space-x-3 mb-3">
            <i className="fas fa-map-marker-alt text-pink-400 mt-1 text-lg"></i>
            <p className="text-gray-300 text-sm sm:text-base">
              123 Nomad Lane,<br />Digital City, World 78901
            </p>
          </div>
          <div className="flex items-start space-x-3 mb-3">
            <i className="fas fa-envelope text-blue-400 mt-1 text-lg"></i>
            <p className="text-gray-300 text-sm sm:text-base break-words">
              info@nomadnetwork.com
            </p>
          </div>
          <div className="flex items-start space-x-3">
            <i className="fas fa-phone text-green-400 mt-1 text-lg"></i>
            <p className="text-gray-300 text-sm sm:text-base">+1 (555) 123-4567</p>
          </div>
          <p className="text-gray-400 text-xs sm:text-sm mt-3">
            We aim to respond to all inquiries within 24–48 business hours.
          </p>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="relative z-10 border-t border-gray-800 mt-8 sm:mt-12 pt-4 sm:pt-6 text-center text-gray-500 text-xs sm:text-sm">
        &copy; {currentYear} <span className="text-white">NomadNetwork</span>. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
