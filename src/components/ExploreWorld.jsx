// START OF FILE: src/components/ExploreWorld.jsx

import React from 'react';

function ExploreWorld({ onClose }) {
  const popularDestinations = [
    { name: "Kyoto, Japan", description: "Ancient temples and serene gardens.", img: "https://via.placeholder.com/150/f0e68c" },
    { name: "Machu Picchu, Peru", description: "Incan ruins and breathtaking mountain views.", img: "https://via.placeholder.com/150/a0e68c" },
    { name: "Santorini, Greece", description: "Iconic white-washed villages and stunning sunsets.", img: "https://via.placeholder.com/150/8cb2e6" },
  ];

  return (
    <div className="p-6 relative"> {/* Added relative for the absolute close button */}
      {/* Close button for the popup */}
      <button
        className="absolute top-2 right-3 text-2xl font-bold text-gray-700 hover:text-gray-900"
        onClick={onClose}
      >
        &times;
      </button>

      <h2 className="text-3xl font-bold text-gray-800 mb-4">Explore The World</h2>
      <p className="text-gray-600 mb-8">
        Discover top destinations for digital nomads based on various criteria.
      </p>

      <div className="bg-gray-50 p-6 rounded-lg shadow-inner">
        <h3 className="text-xl font-semibold text-gray-700 mb-4">Find Your Next Adventure</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {popularDestinations.map((dest, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={dest.img} alt={dest.name} className="w-full h-32 object-cover" />
              <div className="p-4">
                <h4 className="font-semibold text-lg text-gray-800">{dest.name}</h4>
                <p className="text-sm text-gray-600 mt-1">{dest.description}</p>
                <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white text-sm px-4 py-2 rounded">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 text-center">
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Browse All Destinations
          </button>
        </div>
      </div>
    </div>
  );
}

export default ExploreWorld;

// END OF FILE: src/components/ExploreWorld.jsx