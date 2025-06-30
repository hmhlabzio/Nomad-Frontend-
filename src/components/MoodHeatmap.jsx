// START OF FILE: src/components/MoodHeatmap.jsx

import React from 'react';

function MoodHeatmap({ onClose }) {
  const cities = [
    { name: "Tokyo", percentage: 92, change: "+2%", type: "up", reviews: "1,240+ nomad surveys", benefit: "Best for remote work", emoji: "❤️" }, //
    { name: "Bali", percentage: 88, change: "-1%", type: "down", reviews: "980+ reviews", benefit: "Top for work-life balance", emoji: "😊" }, //
    { name: "Goa", percentage: 80, change: "+5%", type: "up", reviews: "750+ reports", benefit: "Fastest growing community", emoji: "😎" }, //
    { name: "Paris", percentage: 89, change: "No change", type: "neutral", reviews: "1,100+ ratings", benefit: "Best cultural experience", emoji: "😁" }, //
    { name: "London", percentage: 90, change: "+3%", type: "up", reviews: "850+ votes", benefit: "Top networking hub", emoji: "🤓" }, //
    { name: "Barcelona", percentage: 95, change: "+1%", type: "up", reviews: "1,500+ reports", benefit: "Highest satisfaction rate", emoji: "💖" }, //
    { name: "Gokarna", percentage: 85, change: "+2%", type: "up", reviews: "600+ check-ins", benefit: "Peaceful coastal retreat", emoji: "😌" }, //
    { name: "Delhi", percentage: 80, change: "+1%", type: "up", reviews: "900+ user reports", benefit: "Tech & culture blend", emoji: "😎" }, //
  ];

  return (
    <div className="p-6 relative text-gray-800"> {/* Added relative for the absolute close button, default text color */}
      {/* Close button for the popup */}
      <button
        className="absolute top-2 right-3 text-2xl font-bold text-gray-700 hover:text-gray-900"
        onClick={onClose}
      >
        &times;
      </button>

      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-gray-800">Nomad Mood Heatmap</h2> {/* */}
        <div className="flex items-center space-x-2">
          <span className="text-gray-600">View:</span> {/* Changed to text-gray-600 */}
          <select className="border border-gray-300 rounded-md px-3 py-1 bg-white text-gray-700"> {/* Changed to text-gray-700 */}
            <option>Weekly</option> {/* */}
            <option>Monthly</option>
            <option>Quarterly</option>
          </select>
        </div>
      </div>
      <p className="text-gray-600 mb-8">Real-time sentiment analysis of digital nomad communities.</p> {/* */}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {cities.map((city, index) => (
          <div key={index} className="bg-gray-50 rounded-lg p-5 shadow-sm border border-gray-200">
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-xl font-semibold text-gray-800">{city.name}</h3> {/* Changed to text-gray-800 */}
              <span className="text-2xl">{city.emoji}</span>
            </div>
            {/* Adjusted font size for percentage to text-2xl, and color to text-indigo-600 */}
            <p className="text-2xl font-bold text-indigo-600 mb-2">{city.percentage}% Positive</p> {/* */}
            <div className={`flex items-center text-sm mb-2 ${city.type === 'up' ? 'text-green-500' : city.type === 'down' ? 'text-red-500' : 'text-gray-500'}`}>
              {city.type === 'up' && (
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" /></svg>
              )}
              {city.type === 'down' && (
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L9 12.586V5a1 1 0 112 0v7.586l2.293-2.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
              )}
              {city.change} from last week
            </div>
            <p className="text-sm text-gray-500 mb-3">Based on {city.reviews}</p> {/* */}
            <p className="text-md font-medium text-gray-700">{city.benefit}</p> {/* Changed to text-gray-700 */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default MoodHeatmap;

// END OF FILE: src/components/MoodHeatmap.jsx