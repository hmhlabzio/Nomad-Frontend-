// src/components/SafetyScore.jsx
import React from 'react';

function SafetyTrustScore({ onClose }) { // Accept onClose prop
  return (
    <div className="safety-score-content bg-white text-black rounded-xl p-6 shadow-lg">
      <h2 className="text-3xl font-bold mb-6 text-center text-blue-700">Safety & Trust Score</h2>
      <p className="text-lg mb-4 text-gray-700 text-center">
        This section provides insights into the safety and trustworthiness of various cities for digital nomads.
        Our scores are based on a comprehensive analysis of crime rates, political stability, healthcare access, and community feedback.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {/* Example Safety Card 1 */}
        <div className="bg-gray-50 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Tokyo, Japan</h3>
          <p className="text-green-600 font-bold text-2xl">95/100</p>
          <p className="text-gray-600">Extremely low crime rates, excellent public services.</p>
        </div>

        {/* Example Safety Card 2 */}
        <div className="bg-gray-50 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Lisbon, Portugal</h3>
          <p className="text-yellow-600 font-bold text-2xl">80/100</p>
          <p className="text-gray-600">Generally safe, but be aware of pickpocketing in tourist areas.</p>
        </div>

        {/* Example Safety Card 3 */}
        <div className="bg-gray-50 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Mexico City, Mexico</h3>
          <p className="text-red-600 font-bold text-2xl">65/100</p>
          <p className="text-gray-600">Safety varies by neighborhood; research and caution advised.</p>
        </div>

        {/* Add more safety score cards as needed */}
      </div>

      <div className="mt-8 text-center">
        <p className="text-gray-600 text-sm">
          Scores are updated regularly. Always exercise caution and research local conditions.
        </p>
      </div>

      {/* No need for a close button here, it's in the parent modal */}
    </div>
  );
}

export default SafetyTrustScore;