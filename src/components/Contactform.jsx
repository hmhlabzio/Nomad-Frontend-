import React from 'react';
import Sparkheader from './SparkHeader';
import bgImage from '../assets/contact-bg.jpg'; // Make sure this path is correct

function ContactPage() {
  return (
    <div
      className="h-screen bg-cover bg-center relative"
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0  z-0"></div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col h-full">
        <Sparkheader />

        {/* Centered Contact Section */}
        <div className="flex-grow flex justify-center items-center px-4">
          <div className="max-w-6xl w-full bg-white rounded-lg shadow-lg flex flex-col md:flex-row overflow-hidden ">
            {/* Left Section - Contact Info */}
            <div className="hidden md:block md:w-1/2 bg-cover bg-top bg-no-repeat p-8" style={{ backgroundImage: `url(${bgImage})` }}>
              
            </div>

           {/* Right Section - Contact Form */}
            <div className="w-full md:w-1/2 p-8 bg-gray-100 text-gray-900">
                <h2 className="text-2xl font-bold mb-6 text-center text-black">CONTACT US</h2>
                <form className="space-y-4">
                  <input
                    type="text"
                    placeholder="Enter your Name"
                    className="w-full p-3 border border-gray-300 bg-white text-gray-800 placeholder-gray-500 rounded"
                  />
                  <input
                    type="email"
                    placeholder="Enter a valid email address"
                    className="w-full p-3 border border-gray-300 bg-white text-gray-800 placeholder-gray-500 rounded"
                  />
                  <textarea
                    placeholder="Your Message"
                    rows="4"
                    className="w-full p-3 border border-gray-300 bg-white text-gray-800 placeholder-gray-500 rounded"
                  />
                  <button
                    type="submit"
                    className="bg-black text-white w-full py-3 rounded hover:bg-gray-900 transition font-semibold"
                  >
                    SUBMIT
                  </button>
                </form>
              </div>



          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
