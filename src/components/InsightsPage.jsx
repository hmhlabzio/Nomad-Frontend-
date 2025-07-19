import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function InsightsPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const showBackButton = location.pathname === "/insights";

  return (
    <div className="insights-container">
      <style>{`
        .insights-container {
          background-color: white;
          color: black;
          border-radius: 1rem;
          padding: 1.5rem;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          width: 80%;
          margin: 2rem auto;
          text-align: center;
        }
        .insights-title {
          font-size: 2.5rem;
          font-weight: bold;
          margin-bottom: 1rem;
        }
        .insights-content {
          font-size: 1.1rem;
          color: #333;
        }
      `}</style>
      {showBackButton && (
        <button
          onClick={() => navigate(-1)}
          className="mb-4 text-white bg-blue-600 px-4 py-2 rounded hover:bg-blue-700"
        >
          ← Back
        </button>
      )}
      <h2 className="insights-title">Nomad Insights</h2>
      <p className="insights-content">
        This is where your insightful data and analytics will go!
      </p>
    </div>
  );
}

export default InsightsPage;