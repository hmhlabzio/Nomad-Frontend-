import React, { useState } from "react";
import { useLocation } from 'react-router-dom';

function CostForecaster() {
  const [days, setDays] = useState(5);
  const [showFees, setShowFees] = useState(false);
  const [place, setPlace] = useState("Bali");
  const location = useLocation();
  const showBackButton = location.pathname === "/cost-calculator";

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
    <div className="cost-container">
      <style>{`
        .cost-container {
          background: linear-gradient(to right, #e0f7fa, #ffffff);
          color: #1f2937;
          border-radius: 1.5rem;
          padding: 2rem;
          width: 85%;
          max-width: 800px;
          margin: 2rem auto;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
          font-family: 'Segoe UI', sans-serif;
        }

        .title {
          font-size: 2rem;
          font-weight: 700;
          text-align: center;
          margin-bottom: 1.5rem;
          color: #0f172a;
        }

        .scroll-area {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .dropdown-section,
        .slider-box,
        .toggle-box {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .label {
          font-size: 1.1rem;
          font-weight: 600;
          color: #1e293b;
        }

        .select,
        .slider,
        .checkbox {
          margin-left: 1rem;
        }

        .select {
          font-size: 1rem;
          padding: 0.5rem;
          border-radius: 0.5rem;
          border: 1px solid #cbd5e1;
          background-color: #f9fafb;
        }

        .slider {
          width: 60%;
        }

        input[type="range"]::-webkit-slider-thumb {
          background-color: #3b82f6;
          border: none;
        }

        .checkbox {
          width: 20px;
          height: 20px;
        }

        .cost-breakdown {
          background-color: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 1rem;
          padding: 1rem;
          margin-top: 1rem;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
        }

        .cost-breakdown p {
          display: flex;
          justify-content: space-between;
          font-size: 1.1rem;
          margin: 0.5rem 0;
        }

        .total-cost {
          font-weight: bold;
          font-size: 1.25rem;
          color: #2563eb;
        }

        .tips-section {
          margin-top: 2rem;
          background-color: #ecfdf5;
          border-left: 4px solid #10b981;
          padding: 1rem 1.25rem;
          border-radius: 0.75rem;
        }

        .tips-section h3 {
          font-size: 1.2rem;
          font-weight: 700;
          margin-bottom: 0.75rem;
          color: #065f46;
        }

        .tips-section ul {
          padding-left: 1.25rem;
        }

        .tips-section li {
          font-size: 1rem;
          margin-bottom: 0.4rem;
          color: #065f46;
        }

        .back-button {
          margin-bottom: 1rem;
          background-color: #3b82f6;
          color: white;
          padding: 0.5rem 1rem;
          border-radius: 0.5rem;
          font-weight: 500;
          border: none;
          cursor: pointer;
        }

        .back-button:hover {
          background-color: #2563eb;
        }
      `}</style>

      {showBackButton && (
        <button
          onClick={() => (window.location.href = '/')}
          className="back-button"
        >
          ← Back to Home
        </button>
      )}

      <div className="scroll-area">
        <h2 className="title">Cost Forecaster</h2>

        <div className="dropdown-section">
          <label className="label">Place:</label>
          <select
            value={place}
            onChange={(e) => setPlace(e.target.value)}
            className="select"
          >
            {Object.keys(baseRates).map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
        </div>

        <div className="slider-box">
          <label className="label">Days: {days}</label>
          <input
            type="range"
            min="1"
            max="30"
            value={days}
            onChange={(e) => setDays(parseInt(e.target.value))}
            className="slider"
          />
        </div>

        <div className="toggle-box">
          <label className="label">Show hidden fees:</label>
          <input
            type="checkbox"
            checked={showFees}
            onChange={(e) => setShowFees(e.target.checked)}
            className="checkbox"
          />
        </div>

        <div className="cost-breakdown">
          <p>
            <span>Base Cost:</span> <span>${baseCost}</span>
          </p>
          {showFees && (
            <p>
              <span>Hidden Fee:</span> <span>${hiddenFee}</span>
            </p>
          )}
          <p className="total-cost">
            <span>Total Cost:</span> <span>${totalCost}</span>
          </p>
        </div>

        <div className="tips-section">
          <h3>Cost Saving Tips</h3>
          <ul>
            {tips.map((tip, index) => (
              <li key={index}>{tip}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CostForecaster;
