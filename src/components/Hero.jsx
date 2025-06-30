// START OF FILE: src/components/Hero.jsx

import React from 'react';

function Hero() {
  const scrollToPopularCities = () => {
    const section = document.getElementById('popular-cities');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative flex flex-col justify-center px-4 md:px-10 lg:px-20 py-10 md:py-16 text-white flex-grow">
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-start justify-between">
        {/* Left content (Headline, Subtitle, Button) */}
        <div className="md:w-3/5 lg:w-1/2 mb-8 md:mb-0 text-left">
          <p className="text-sm md:text-base tracking-widest uppercase text-gray-200 mb-2">
            • WELCOME TO NOMADNETWORK
          </p>
<h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold font-serif leading-snug text-white">
  Find your next country<br />
  to work remotely with a
</h2>
<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif bg-gradient-to-b from-red-500 to-white text-transparent bg-clip-text drop-shadow-lg">
  Digital Nomad Visa
</h1>

          <p className="text-lg md:text-xl mb-8 max-w-xl text-gray-100">
            Discover a world of remote work opportunities. Smart tools & global insights for modern nomads.
          </p>
          <button onClick={scrollToPopularCities} className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition duration-300 flex items-center gap-2">
            START YOUR JOURNEY <span className="text-xl">→</span>
          </button>
        </div>

        {/* Right content (Placeholder for the floating card) */}
        <div className="md:w-2/5 lg:w-1/3 flex flex-col items-center md:items-end">
          <div className="bg-white bg-opacity-90 text-black rounded-lg p-6 shadow-xl max-w-sm w-full relative z-20">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Navigate the World's Digital Nomad</h3>
            <p className="text-gray-600 text-sm mb-4">10K+ digital nomads trusted our service.</p>
            <div className="flex items-center -space-x-2 overflow-hidden mb-4">
              <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://randomuser.me/api/portraits/thumb/men/1.jpg" alt="User 1" />
              <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://randomuser.me/api/portraits/thumb/women/2.jpg" alt="User 2" />
              <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://randomuser.me/api/portraits/thumb/men/3.jpg" alt="User 3" />
              <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://randomuser.me/api/portraits/thumb/women/4.jpg" alt="User 4" />
            </div>
          </div>
          <div className="mt-8 text-white text-sm flex items-center space-x-4">
            <span className="opacity-80">FOLLOW US:</span>
            <a href="#" className="opacity-80 hover:opacity-100">FB</a> 
            <a href="#" className="opacity-80 hover:opacity-100">IG</a>
            <a href="#" className="opacity-80 hover:opacity-100">TW</a>
            <a href="#" className="opacity-80 hover:opacity-100">YT</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

// END OF FILE: src/components/Hero.jsx