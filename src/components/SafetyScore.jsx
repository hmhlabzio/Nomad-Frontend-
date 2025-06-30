// START OF FILE: src/components/SafetyScore.jsx

import React from 'react';

function SafetyScore({ onClose }) {
  const cities = [
    {
      name: "Tokyo, Japan",
      score: 95,
      description: "Extremely low crime rates, excellent public services.",
    }, //
    {
      name: "Lisbon, Portugal",
      score: 80,
      description: "Generally safe, but be aware of pickpocketing in tourist areas.",
    }, //
    {
      name: "Mexico City, Mexico",
      score: 65,
      description: "Safety varies by neighborhood; research and caution advised.",
    }, //
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

      <div className="flex justify-between items-center mb-4">
        <h2 className="text-3xl font-bold text-gray-800">Safety & Trust Score</h2> {/* */}
      </div>
      <p className="text-gray-600 mb-8"> {/* Changed to text-gray-600 */}
        This section provides insights into the safety and trustworthiness of various cities for digital nomads.
        Our scores are based on a comprehensive analysis of crime rates, political stability, healthcare access,
        and community feedback.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cities.map((city, index) => (
          <div key={index} className="bg-gray-50 rounded-lg p-5 shadow-sm border border-gray-200 text-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{city.name}</h3> {/* Changed to text-gray-800 */}
            <p className="text-5xl font-bold text-blue-600 mb-3">{city.score}/100</p> {/* */}
            <p className="text-md text-gray-700">{city.description}</p> {/* Changed to text-gray-700 */}
          </div>
        ))}
      </div>

      <p className="text-sm text-gray-500 mt-8 text-center"> {/* Changed to text-gray-500 */}
        Scores are updated regularly. Always exercise caution and research local conditions.
      </p>
    </div>
  );
}

export default SafetyScore;

// END OF FILE: src/components/SafetyScore.jsx