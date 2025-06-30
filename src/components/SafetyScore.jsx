import React, { useState } from "react";
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldAlt } from '@fortawesome/free-solid-svg-icons';

function SafetyTrustScore() {
  const [selectedCity, setSelectedCity] = useState("Tokyo");
  const location = useLocation();
  const showBackButton = location.pathname === "/safety-score";

  const cityData = {
    Tokyo: {
      score: 92,
      reason: "Strong Police Presence, Low Incidents",
      flagged: 1,
      news: [
        "Tokyo ranked safest city in Asia for solo travelers.",
        "New AI-powered surveillance system installed in Shibuya district.",
        "Crime rate drops 15% year-over-year according to police report."
      ],
      healthcare: 85,
      nightlife: 90,
      wifi: 95
    },
    Bali: {
      score: 78,
      reason: "Tourist-friendly, Some petty theft",
      flagged: 4,
      news: [
        "Tourist reported wallet theft near beach clubs.",
        "New community safety initiative launched in Kuta.",
        "Local government increases lighting in popular tourist areas."
      ],
      healthcare: 70,
      nightlife: 85,
      wifi: 80
    },
    Goa: {
      score: 70,
      reason: "Common tourist scams, Road safety concerns",
      flagged: 7,
      news: [
        "Advisory issued for travelers regarding scooter rentals.",
        "Police crackdown on illegal touts in North Goa.",
        "Initiative for women's safety launched in coastal areas."
      ],
      healthcare: 65,
      nightlife: 90,
      wifi: 75
    },
    Paris: {
      score: 85,
      reason: "Pickpocketing, Public transport safety",
      flagged: 2,
      news: [
        "Increased police patrols around Eiffel Tower due to pickpocketing.",
        "New security measures implemented in major metro stations.",
        "Local authorities advise caution in crowded tourist spots."
      ],
      healthcare: 90,
      nightlife: 88,
      wifi: 85
    },
    Delhi: {
      score: 65,
      reason: "Traffic safety, Some areas less safe at night",
      flagged: 8,
      news: [
        "Delhi Police launch new app for emergency services.",
        "Public awareness campaign on road safety launched.",
        "Travel advisory updated for certain districts."
      ],
      healthcare: 75,
      nightlife: 70,
      wifi: 70
    },
  };

  const currentCity = cityData[selectedCity];

  const getScoreColor = (score) => {
    if (score > 90) return '#22c55e';
    if (score > 75) return '#eab308';
    return '#ef4444';
  };

  const getBarColor = (percentage) => {
    if (percentage > 85) return '#22c55e';
    if (percentage > 70) return '#eab308';
    return '#ef4444';
  };

  return (
    <div className="safety-container">
      <style>{`
        .safety-container {
          background: linear-gradient(to right, #f0fdfa, #fefce8);
          color: #111827;
          border-radius: 1.5rem;
          padding: 2rem;
          width: 90%;
          max-width: 900px;
          margin: 2rem auto;
          font-family: 'Segoe UI', sans-serif;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.07);
        }

        .safety-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.5rem;
        }

        .safety-title {
          font-size: 2rem;
          font-weight: 700;
          background: linear-gradient(to right, #2563eb, #9333ea);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .city-select {
          padding: 0.5rem 1rem;
          border-radius: 0.5rem;
          font-size: 1rem;
          background: #f3f4f6;
          border: 1px solid #d1d5db;
        }

        .score-display {
          text-align: center;
          margin: 1.5rem 0;
        }

        .score-circle {
          margin: auto;
          width: 120px;
          height: 120px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2.5rem;
          font-weight: bold;
          color: white;
          transition: background-color 0.4s ease;
        }

        .score-reason {
          margin-top: 0.8rem;
          font-size: 1rem;
          color: #475569;
        }

        .flagged {
          margin-top: 0.5rem;
          font-size: 1rem;
          color: #dc2626;
          font-weight: 600;
        }

        .info-bars-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.2rem;
          margin: 2rem 0;
        }

        @media (min-width: 600px) {
          .info-bars-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        .info-bar-item {
          background: white;
          border-radius: 0.75rem;
          padding: 1rem;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
        }

        .info-bar-label {
          margin-bottom: 0.5rem;
          font-weight: 500;
          color: #334155;
        }

        .bar-background {
          background-color: #e5e7eb;
          border-radius: 1rem;
          height: 20px;
          position: relative;
        }

        .bar-fill {
          height: 100%;
          border-radius: 1rem;
          transition: width 0.5s ease;
        }

        .bar-value {
          position: absolute;
          right: 10px;
          top: 50%;
          transform: translateY(-50%);
          color: white;
          font-size: 0.8rem;
          font-weight: bold;
        }

        .news-section {
          background-color: #f9fafb;
          padding: 1rem;
          border-radius: 0.75rem;
          margin-top: 1.5rem;
        }

        .news-section h3 {
          font-size: 1.2rem;
          font-weight: 600;
          color: #1f2937;
          margin-bottom: 0.5rem;
        }

        .news-section ul {
          padding-left: 1.25rem;
        }

        .news-section li {
          font-size: 0.95rem;
          color: #4b5563;
          margin-bottom: 0.3rem;
        }

        .back-button {
          background: #2563eb;
          color: white;
          padding: 0.5rem 1rem;
          border-radius: 0.5rem;
          font-weight: 500;
          border: none;
          cursor: pointer;
          margin-bottom: 1rem;
        }

        .back-button:hover {
          background: #1d4ed8;
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

      <div className="safety-header">
        <h2 className="safety-title">
          <FontAwesomeIcon icon={faShieldAlt} /> Safety & Trust Score
        </h2>
        <select
          value={selectedCity}
          onChange={(e) => setSelectedCity(e.target.value)}
          className="city-select"
        >
          {Object.keys(cityData).map((city) => (
            <option key={city} value={city}>{city}</option>
          ))}
        </select>
      </div>

      <div className="score-display">
        <div
          className="score-circle"
          style={{ backgroundColor: getScoreColor(currentCity.score) }}
        >
          {currentCity.score}
        </div>
        <p className="score-reason">{currentCity.reason}</p>
        {currentCity.flagged > 0 && (
          <p className="flagged">{currentCity.flagged} recent incident(s) flagged</p>
        )}
      </div>

      <div className="info-bars-grid">
        <div className="info-bar-item">
          <div className="info-bar-label">Healthcare Score</div>
          <div className="bar-background">
            <div
              className="bar-fill"
              style={{
                width: `${currentCity.healthcare}%`,
                backgroundColor: getBarColor(currentCity.healthcare),
              }}
            ></div>
            <div className="bar-value">{currentCity.healthcare}%</div>
          </div>
        </div>

        <div className="info-bar-item">
          <div className="info-bar-label">Nightlife Safety</div>
          <div className="bar-background">
            <div
              className="bar-fill"
              style={{
                width: `${currentCity.nightlife}%`,
                backgroundColor: getBarColor(currentCity.nightlife),
              }}
            ></div>
            <div className="bar-value">{currentCity.nightlife}%</div>
          </div>
        </div>

        <div className="info-bar-item">
          <div className="info-bar-label">WiFi Security</div>
          <div className="bar-background">
            <div
              className="bar-fill"
              style={{
                width: `${currentCity.wifi}%`,
                backgroundColor: getBarColor(currentCity.wifi),
              }}
            ></div>
            <div className="bar-value">{currentCity.wifi}%</div>
          </div>
        </div>
      </div>

      <div className="news-section">
        <h3>Recent Safety News & Updates</h3>
        <ul>
          {currentCity.news.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SafetyTrustScore;
