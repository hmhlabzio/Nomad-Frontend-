import React from 'react';
import bannerImage from '../assets/banner.jpg';
import SparkHeader from './SparkHeader';

function Hero() {
  return (
    <div
      className="relative w-full text-white"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url(${bannerImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '60vh',
      }}
    >
      <SparkHeader />

      {/* Hero content */}
      <section
        className="px-4 md:px-10 lg:px-20 py-12 md:py-24 flex flex-col gap-10 justify-center"
      >
        <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
          {/* Left content */}
          <div className="md:w-3/5 lg:w-1/2 text-left">
            <p className="text-sm md:text-base tracking-widest uppercase text-gray-200 mb-2">
              • WELCOME TO NOMADNETWORK
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold font-serif leading-snug text-white">
              Find your next country<br />
              to work remotely with a
            </h2>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold font-serif text-yellow-400 drop-shadow-lg mt-2">
  Digital Nomad Visa
</h1>

            <p className="text-base md:text-lg mt-4 mb-8 max-w-xl text-gray-100">
              Discover a world of remote work opportunities. Smart tools & global insights for modern nomads.
            </p>
          </div>

          {/* Right content */}
          <div className="md:w-2/5 lg:w-1/3 flex flex-col items-center md:items-end">
            <div className="bg-white bg-opacity-90 text-black rounded-lg p-6 shadow-xl w-full max-w-sm">
              <h3 className="text-lg md:text-xl font-semibold mb-3 text-gray-800">
                Navigate the World's Digital Nomad
              </h3>
              <p className="text-gray-600 text-sm mb-4">10K+ travellers have used our service.</p>
              <div className="flex items-center -space-x-2 overflow-hidden mb-4">
                <img className="h-8 w-8 rounded-full ring-2 ring-white" src="https://randomuser.me/api/portraits/thumb/men/1.jpg" alt="User 1" />
                <img className="h-8 w-8 rounded-full ring-2 ring-white" src="https://randomuser.me/api/portraits/thumb/women/2.jpg" alt="User 2" />
                <img className="h-8 w-8 rounded-full ring-2 ring-white" src="https://randomuser.me/api/portraits/thumb/men/3.jpg" alt="User 3" />
                <img className="h-8 w-8 rounded-full ring-2 ring-white" src="https://randomuser.me/api/portraits/thumb/women/4.jpg" alt="User 4" />
              </div>
            </div>

            <div className="mt-6 text-white text-sm flex items-center space-x-4">
              <span className="opacity-80">FOLLOW US:</span>
              <a href="#" className="opacity-80 hover:opacity-100"><i className="fab fa-facebook"></i></a>
              <a href="#" className="opacity-80 hover:opacity-100"><i className="fab fa-instagram"></i></a>
              <a href="#" className="opacity-80 hover:opacity-100"><i className="fab fa-twitter"></i></a>
              <a href="#" className="opacity-80 hover:opacity-100"><i className="fab fa-youtube"></i></a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
