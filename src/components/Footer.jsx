import React from 'react';
import { Link } from 'react-router-dom';

function Footer({
  onSafetyScoreClick,
  onMoodHeatmapClick,
  onCostCalculatorClick,
}) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-br from-black via-gray-900 to-black text-white pt-16 pb-10 px-6 md:px-12 lg:px-20 mt-8">
      {/* Torn Paper SVG Top Edge */}
      <div className="absolute top-0 left-0 w-full overflow-hidden z-0">
        <svg
          viewBox="0 0 1200 100"
          preserveAspectRatio="none"
          className="w-full h-[100px]"
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
      <div className="relative z-10 max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 text-sm sm:text-base">
        
        {/* About Section */}
        <div>
          <h3 className="text-3xl font-bold mb-4 text-white">NomadNetwork</h3>
          <p className="text-gray-400 leading-relaxed">
            Your trusted network for digital nomad visa programs. Connect globally, live freely.
          </p>
          <div className="flex space-x-4 mt-6 text-xl">
            <a href="#" className="hover:text-blue-500"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="hover:text-sky-400"><i className="fab fa-twitter"></i></a>
            <a href="#" className="hover:text-pink-500"><i className="fab fa-instagram"></i></a>
            <a href="#" className="hover:text-blue-700"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xl font-semibold mb-4 text-white">Quick Links</h4>
          <ul className="space-y-4">
            <li>
              <Link
                to="/about-us"
                className="flex items-center space-x-3 bg-gray-800 hover:bg-gray-700 transition-colors duration-300 p-3 rounded-xl shadow-md hover:shadow-lg group"
              >
                <i className="fas fa-users text-green-400 group-hover:text-green-200 text-lg"></i>
                <span className="text-gray-300 group-hover:text-white font-medium">About Us</span>
              </Link>
            </li>
            <li>
              <div
                className="flex items-center space-x-3 bg-gray-800 hover:bg-gray-700 transition-colors duration-300 p-3 rounded-xl shadow-md hover:shadow-lg cursor-pointer group"
              >
                <i className="fas fa-envelope text-blue-400 group-hover:text-blue-200 text-lg"></i>
                <Link
                  to="/contact"
                  className="text-gray-300 group-hover:text-white font-medium "
                  onClick={(e) => e.stopPropagation()}
                >
                  Contact Us
                </Link>             
              </div>
            </li>
            <li>
              <Link
                to="/privacy-policy"
                className="flex items-center space-x-3 bg-gray-800 hover:bg-gray-700 transition-colors duration-300 p-3 rounded-xl shadow-md hover:shadow-lg group"
              >
                <i className="fas fa-lock text-purple-400 group-hover:text-purple-200 text-lg"></i>
                <span className="text-gray-300 group-hover:text-white font-medium">Privacy Policy</span>
              </Link>
            </li>
          </ul>
        </div>

        {/* Tools */}
        <div>
          <h4 className="text-xl font-semibold mb-4 text-white">Tools</h4>
          <ul className="space-y-4">
            <li>
              <div
                onClick={onSafetyScoreClick}
                className="flex items-center space-x-3 bg-gray-800 hover:bg-gray-700 transition-colors duration-300 p-3 rounded-xl cursor-pointer shadow-md hover:shadow-lg group"
              >
                <i className="fas fa-shield-alt text-blue-400 group-hover:text-blue-200 text-lg"></i>
                <span className="text-gray-300 group-hover:text-white font-medium">Safety & Trust Score</span>
              </div>
            </li>
            <li>
              <div
                onClick={onMoodHeatmapClick}
                className="flex items-center space-x-3 bg-gray-800 hover:bg-gray-700 transition-colors duration-300 p-3 rounded-xl cursor-pointer shadow-md hover:shadow-lg group"
              >
                <i className="fas fa-thermometer-half text-pink-400 group-hover:text-pink-200 text-lg"></i>
                <span className="text-gray-300 group-hover:text-white font-medium">Mood Heatmap</span>
              </div>
            </li>
            <li>
              <div
                onClick={onCostCalculatorClick}
                className="flex items-center space-x-3 bg-gray-800 hover:bg-gray-700 transition-colors duration-300 p-3 rounded-xl cursor-pointer shadow-md hover:shadow-lg group"
              >
                <i className="fas fa-coins text-yellow-400 group-hover:text-yellow-200 text-lg"></i>
                <span className="text-gray-300 group-hover:text-white font-medium">Cost of Living Forecaster</span>
              </div>
            </li>
          </ul>
        </div>

        {/* Resources Section */}
        <div>
          <h4 className="text-xl font-semibold mb-4 text-white">Resources</h4>
          <ul className="space-y-4">
            <li>
              <Link
                to="/blog"
                className="flex items-center space-x-3 bg-gray-800 hover:bg-gray-700 transition-colors duration-300 p-3 rounded-xl shadow-md hover:shadow-lg group"
              >
                <i className="fas fa-newspaper text-indigo-400 group-hover:text-indigo-200 text-lg"></i>
                <span className="text-gray-300 group-hover:text-white font-medium">Blog</span>
              </Link>
            </li>
            <li>
              <Link
                to="/community"
                className="flex items-center space-x-3 bg-gray-800 hover:bg-gray-700 transition-colors duration-300 p-3 rounded-xl shadow-md hover:shadow-lg group"
              >
                <i className="fas fa-users text-cyan-400 group-hover:text-cyan-200 text-lg"></i>
                <span className="text-gray-300 group-hover:text-white font-medium">Community</span>
              </Link>
            </li>
            <li>
              <Link
                to="/support"
                className="flex items-center space-x-3 bg-gray-800 hover:bg-gray-700 transition-colors duration-300 p-3 rounded-xl shadow-md hover:shadow-lg group"
              >
                <i className="fas fa-life-ring text-red-400 group-hover:text-red-200 text-lg"></i>
                <span className="text-gray-300 group-hover:text-white font-medium">Support</span>
              </Link>
            </li>
          </ul>
        </div>

        {/* Get In Touch (friend’s design + your content) */}
        <div>
          <h4 className="text-xl font-semibold mb-6 text-white">Get In Touch</h4>
          <div className="flex items-start space-x-3 mb-4">
            <i className="fas fa-map-marker-alt text-pink-400 mt-1 text-lg"></i>
            <p className="text-gray-300 text-sm sm:text-base">
              123 Nomad Lane,<br />Digital City, World 78901
            </p>
          </div>
          <div className="flex items-start space-x-3 mb-4">
            <i className="fas fa-envelope text-blue-400 mt-1 text-lg"></i>
            <p className="text-gray-300 text-sm sm:text-base break-words">
              info@nomadnetwork.com
            </p>
          </div>
          <div className="flex items-start space-x-3">
            <i className="fas fa-phone text-green-400 mt-1 text-lg"></i>
            <p className="text-gray-300 text-sm sm:text-base">+1 (555) 123-4567</p>
          </div>
          <p className="text-gray-400 text-sm mt-4">
            We aim to respond to all inquiries within 24–48 business hours.
          </p>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="relative z-10 border-t border-gray-800 mt-12 pt-6 text-center text-gray-500 text-sm">
        &copy; {currentYear} <span className="text-white">NomadNetwork</span>. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
