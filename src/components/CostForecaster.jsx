// START OF FILE: src/components/CostForecaster.jsx

import React from 'react';

function CostForecaster({ onClose }) {
  return (
    <div className="p-6 relative"> {/* Added relative for the absolute close button */}
      {/* Close button for the popup */}
      <button
        className="absolute top-2 right-3 text-2xl font-bold text-gray-700 hover:text-gray-900"
        onClick={onClose}
      >
        &times;
      </button>

      <h2 className="text-3xl font-bold text-gray-800 mb-4">Cost of Living Forecaster</h2>
      <p className="text-gray-600 mb-8">
        Estimate your monthly expenses in various cities worldwide based on your lifestyle.
      </p>
      
      <div className="bg-gray-50 p-6 rounded-lg shadow-inner">
        <h3 className="text-xl font-semibold text-gray-700 mb-4">Calculate Your Costs</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="city-select">
              Select City:
            </label>
            <select
              id="city-select"
              className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            >
              <option value="">Choose a city</option>
              <option value="tokyo">Tokyo</option>
              <option value="bali">Bali</option>
              <option value="paris">Paris</option>
              <option value="london">London</option>
              <option value="barcelona">Barcelona</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lifestyle-select">
              Lifestyle:
            </label>
            <select
              id="lifestyle-select"
              className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            >
              <option value="">Select lifestyle</option>
              <option value="frugal">Frugal</option>
              <option value="mid-range">Mid-range</option>
              <option value="luxury">Luxury</option>
            </select>
          </div>
          {/* Add more input fields for specific expenses like rent, food, transport etc. */}
        </div>
        <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Get Estimate
        </button>
      </div>

      <div className="mt-8 text-center">
        <p className="text-gray-700 text-lg">Estimated Monthly Cost: <span className="text-blue-600 font-bold text-2xl">$XXXX / Month</span></p>
        <p className="text-sm text-gray-500 mt-2">
          Disclaimer: This is an estimate based on average data and may vary.
        </p>
      </div>
    </div>
  );
}

export default CostForecaster;

// END OF FILE: src/components/CostForecaster.jsx