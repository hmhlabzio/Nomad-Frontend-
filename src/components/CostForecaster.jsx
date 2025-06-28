import React, { useState } from "react";

function CostForecaster({ onClose }) { // Accepts onClose prop
  const [days, setDays] = useState(5);
  const [showFees, setShowFees] = useState(false);
  const [place, setPlace] = useState("Bali");

  const baseRates = {
    Bali: 1200,
    Tokyo: 1500,
    Goa: 900,
    Paris: 1800,
    Delhi: 1000,
  };

  const hiddenFee = showFees ? 600 : 0;
  const baseCost = days * baseRates[place];
  const totalCost = baseCost + hiddenFee;

  const tips = [
    "💡 Tip: Booking for 7+ days gives 10% off",
    "📅 Cheapest month: October",
    "🛏️ Try weekdays for cheaper stays",
  ];

  return (
    // Outer container for the component's content when displayed in a modal
    <div className="
      bg-gradient-to-r from-cyan-50 to-white
      text-gray-800 rounded-2xl p-8 w-full max-w-4xl
      mx-auto shadow-xl font-sans max-h-[85vh] overflow-y-auto
    ">
      <div className="flex flex-col gap-6">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">Cost Forecaster</h2>

        {/* Place Dropdown */}
        <div className="flex justify-between items-center bg-white p-4 rounded-lg shadow-sm">
          <label className="text-lg font-semibold text-gray-800">Place:</label>
          <select
            value={place}
            onChange={(e) => setPlace(e.target.value)}
            className="text-lg p-2 rounded-lg border border-gray-300 bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
          >
            {Object.keys(baseRates).map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
        </div>

        {/* Days Slider */}
        <div className="flex justify-between items-center bg-white p-4 rounded-lg shadow-sm">
          <label className="text-lg font-semibold text-gray-800">Days: <span className="font-bold text-blue-600">{days}</span></label>
          <input
            type="range"
            min="1"
            max="30"
            value={days}
            onChange={(e) => setDays(parseInt(e.target.value))}
            className="w-3/5 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer
                       [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:bg-blue-600 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:shadow
                       [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:bg-blue-600 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:appearance-none [&::-moz-range-thumb]:shadow
            "
          />
        </div>

        {/* Hidden Fees Toggle */}
        <div className="flex justify-between items-center bg-white p-4 rounded-lg shadow-sm">
          <label className="text-lg font-semibold text-gray-800">Show hidden fees:</label>
          <input
            type="checkbox"
            checked={showFees}
            onChange={(e) => setShowFees(e.target.checked)}
            className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2 cursor-pointer"
          />
        </div>

        {/* Cost Breakdown */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mt-4 shadow-md">
          <p className="flex justify-between text-lg mb-3">
            <span className="text-gray-700">Base Cost:</span> <span className="font-medium text-gray-900">${baseCost}</span>
          </p>
          {showFees && (
            <p className="flex justify-between text-lg mb-3">
              <span className="text-gray-700">Hidden Fee:</span> <span className="font-medium text-gray-900">${hiddenFee}</span>
            </p>
          )}
          <p className="flex justify-between font-bold text-3xl text-blue-700 pt-4 border-t-2 border-blue-200 mt-4">
            <span>Total Cost:</span> <span>${totalCost}</span>
          </p>
        </div>

        {/* Tips Section */}
        <div className="bg-emerald-50 border-l-4 border-emerald-500 p-5 rounded-lg mt-8 shadow-sm">
          <h3 className="text-xl font-bold text-emerald-800 mb-3">Cost Saving Tips</h3>
          <ul className="list-disc pl-5 space-y-1 text-emerald-700">
            {tips.map((tip, index) => (
              <li key={index} className="text-base">{tip}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CostForecaster;