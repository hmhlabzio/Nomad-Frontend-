import { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link

function SparkHeader({ onContactClick, onBrowseClick }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md w-full z-50 fixed top-0 left-0">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-10 flex justify-between items-center h-16">

        {/* Logo - Navigates to Home */}
        <Link to="/" className="flex items-center space-x-2"> {/* Changed to Link */}
          <div className="rounded-full border-2 border-blue-500 p-[6px]">
            <img
              className="h-10 w-10 rounded-full"
              src="/images/logo.svg" 
              alt="Logo"
            />
          </div>
        </Link>

        {/* Navigation - Desktop */}
        <nav className="hidden md:flex space-x-8 items-center">
          <Link to="/" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium"> {/* Home Link */}
            Home
          </Link>
          <a
            onClick={onBrowseClick}
            className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium cursor-pointer"
          >
            Browse Countries
          </a>
          <Link to="/about-us" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium"> {/* About Us Link */}
            About
          </Link>
          {/* Assuming you want these to navigate as well, if they lead to pages */}
          {/* Example: <li><Link to="/insights" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">Insights</Link></li> */}
          {/* Example: <li><Link to="/explore-world" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">Explore World</Link></li> */}
          <a
            onClick={onContactClick}
            className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium cursor-pointer"
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
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
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
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-4 pt-2 pb-3 space-y-1">
            <Link to="/" className="block px-3 py-2 text-gray-900 hover:text-blue-600">Home</Link> {/* Home Link Mobile */}
            <a
              onClick={onBrowseClick}
              className="block px-3 py-2 text-gray-900 hover:text-blue-600 cursor-pointer"
            >
              Browse Countries
            </a>
            <Link to="/about-us" className="block px-3 py-2 text-gray-900 hover:text-blue-600">About</Link> {/* About Us Link Mobile */}
            {/* Add other Link components for mobile if needed */}
            <a
              onClick={onContactClick}
              className="block px-3 py-2 text-gray-900 hover:text-blue-600 cursor-pointer"
            >
              Contact
            </a>

            <div className="pt-4 pb-3 border-t border-gray-200">
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