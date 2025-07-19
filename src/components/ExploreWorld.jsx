import React from 'react'; // Keep this React import
import { useLocation, useNavigate } from 'react-router-dom'; // Combine and keep both useLocation and useNavigate
import SmartMap from './SmartMap'; // Keep this SmartMap import


function ExploreWorld() {
  const location = useLocation();
  const navigate = useNavigate();
  const showBackButton = location.pathname === "/explore-world";

  return (
    <div className="explore-world-container">
      {showBackButton && (
        <button
          onClick={() => navigate(-1)}
          className="mb-4 text-white bg-blue-600 px-4 py-2 rounded hover:bg-blue-700"
        >
          ← Back to Home
        </button>
      )}

      <h2 className="explore-world-title">Explore the World</h2>
      <div className="explore-world-map">
        <SmartMap />
      </div>

      <style>{`
        .explore-world-container {
          background-color: white;
          color: black;
          border-radius: 1rem;
          padding: 1.5rem;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          width: 80%;
          margin: auto;
        }

        .explore-world-title {
          font-size: 2.5rem;
          font-weight: 500;
          margin-bottom: 0.5rem;
        }

        .explore-world-map {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 600px; /* Adjust height as needed */
        }
      `}</style>
    </div>
  );
}

export default React.memo(ExploreWorld); // Keep React.memo