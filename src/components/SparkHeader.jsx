// START OF FILE: src/components/SparkHeader.jsx

import { useState } from 'react';
import { Link } from 'react-router-dom';

function SparkHeader({ onContactClick, onBrowseClick }) { // onBrowseClick is still a prop, but not used now
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full z-10 py-4">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-10 flex justify-between items-center h-16">

        {/* Logo - Navigates to Home */}
        <Link to="/" className="flex items-center space-x-2">
          <div className="rounded-full border-2 border-blue-500 p-[6px]">
            <img
              className="h-10 w-10 rounded-full"
              src="/images/logo.svg" // Ensure this path to your logo is correct
              alt="NomadNetwork Logo"
            />
          </div>
        </Link>

        {/* Navigation - Desktop */}
        <nav className="hidden md:flex space-x-8 items-center">
          <Link to="/" className="text-white hover:text-gray-300 px-3 py-2 text-sm font-medium">
            Home
          </Link>
         
          <Link to="/about-us" className="text-white hover:text-gray-300 px-3 py-2 text-sm font-medium">
            About
          </Link>
          <a
            onClick={onContactClick}
            className="text-white hover:text-gray-300 px-3 py-2 text-sm font-medium cursor-pointer"
          >
            Contact
          </a>
        </nav>

        {/* Get Started CTA */}
        <div className="hidden md:flex">
          <button className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white px-5 py-2 rounded-md font-semibold whitespace-nowrap">
            Get Started
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-200 hover:text-white hover:bg-black focus:outline-none"
          >
            <span className="sr-only">Open main menu</span>
            {isMenuOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black bg-opacity-80 shadow-lg">
          <div className="px-4 pt-2 pb-3 space-y-1">
            <Link to="/" className="block px-3 py-2 text-white hover:text-blue-200">Home</Link>
            
            <Link to="/about-us" className="block px-3 py-2 text-white hover:text-blue-200">About</Link>
            <a
              onClick={onContactClick}
              className="block px-3 py-2 text-white hover:text-blue-200 cursor-pointer"
            >
              Contact
            </a>

            <div className="pt-4 pb-3 border-t border-gray-700">
              <div className="mt-3">
                <button className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white px-5 py-2 rounded-md font-semibold w-full">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default SparkHeader;

// END OF FILE: src/components/SparkHeader.jsx