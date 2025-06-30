import { useState } from "react";
import { useLocation } from 'react-router-dom';

function MoodHeatmap() {
  const [filter, setFilter] = useState("Weekly");
  const location = useLocation();
  const showBackButton = location.pathname === "/mood-heatmap";

  const moodData = {
    Weekly: [
      {
        city: "Tokyo",
        emoji: "💚",
        percentage: 92,
        change: "▲ 2% from last week",
        source: "Based on 1,240+ nomad surveys",
        tagline: "Best for remote work",
      },
      {
        city: "Bali",
        emoji: "😊",
        percentage: 88,
        change: "▼ 1% from last week",
        source: "Based on 980+ reviews",
        tagline: "Top for work-life balance",
      },
      {
        city: "Goa",
        emoji: "😎",
        percentage: 80,
        change: "▲ 5% from last week",
        source: "Based on 750+ reports",
        tagline: "Fastest growing community",
      },
      {
        city: "Paris",
        emoji: "😁",
        percentage: 89,
        change: "No change",
        source: "Based on 1,100+ ratings",
        tagline: "Best cultural experience",
      },
      {
        city: "London",
        emoji: "😎",
        percentage: 90,
        change: "▲ 3% from last week",
        source: "Based on 850+ votes",
        tagline: "Top networking hub",
      },
      {
        city: "Barcelona",
        emoji: "😍",
        percentage: 95,
        change: "▲ 1% from last week",
        source: "Based on 1,500+ reports",
        tagline: "Highest satisfaction rate",
      },
      {
        city: "Gokarna",
        emoji: "😄",
        percentage: 85,
        change: "▲ 2% from last week",
        source: "Based on 600+ check-ins",
        tagline: "Peaceful coastal retreat",
      },
      {
        city: "Delhi",
        emoji: "😎",
        percentage: 80,
        change: "▲ 1% from last week",
        source: "Based on 900+ user reports",
        tagline: "Tech & culture blend",
      },
    ],
    Monthly: [
      {
        city: "Tokyo",
        emoji: "😐",
        percentage: 70,
        change: "▼ 5% from last month",
        source: "Based on 2,100+ surveys",
        tagline: "Busy but efficient",
      },
      {
        city: "Bali",
        emoji: "😍",
        percentage: 91,
        change: "▲ 4% from last month",
        source: "Based on 1,500+ reviews",
        tagline: "Perfect for balance",
      },
      {
        city: "Goa",
        emoji: "😄",
        percentage: 86,
        change: "▲ 3% from last month",
        source: "Based on 1,100+ reports",
        tagline: "Chilled beach life",
      },
      {
        city: "Paris",
        emoji: "😁",
        percentage: 89,
        change: "No change",
        source: "Based on 1,100+ ratings",
        tagline: "Cultural & vibrant",
      },
      {
        city: "London",
        emoji: "😎",
        percentage: 90,
        change: "▲ 2% from last month",
        source: "Based on 1,000+ votes",
        tagline: "Hub of innovation",
      },
      {
        city: "Barcelona",
        emoji: "😍",
        percentage: 95,
        change: "▲ 1% from last month",
        source: "Based on 1,500+ reports",
        tagline: "High satisfaction city",
      },
      {
        city: "Gokarna",
        emoji: "😄",
        percentage: 85,
        change: "▲ 2% from last month",
        source: "Based on 750+ entries",
        tagline: "Hidden gem",
      },
      {
        city: "Delhi",
        emoji: "😎",
        percentage: 80,
        change: "▲ 2% from last month",
        source: "Based on 1,200+ logs",
        tagline: "Dynamic urban space",
      },
    ],
  };

  return (
    <div className="mood-heatmap-container">
      {showBackButton && (
        <button
          onClick={() => (window.location.href = '/')}
          className="mb-4 text-white bg-blue-600 px-4 py-1 rounded hover:bg-blue-700"
        >
          ← Back to Home
        </button>
      )}
      <div className="mood-heatmap-header">
        <h2 className="mood-heatmap-title">Mood Heatmap</h2>
        <select
          className="mood-heatmap-select"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="Weekly">Weekly</option>
          <option value="Monthly">Monthly</option>
        </select>
      </div>

      <div className="mood-scroll-wrapper">
        <div className="mood-row">
          {moodData[filter].map((data, index) => (
            <div className="mood-card" key={index}>
              <div className="mood-emoji">{data.emoji}</div>
              <div className="mood-city">{data.city}</div>
              <div className="mood-percentage">{data.percentage}% Positive</div>
              <div className="mood-change">{data.change}</div>
              <div className="mood-source">{data.source}</div>
              <div className="mood-tagline">{data.tagline}</div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .mood-heatmap-container {
          background-color: white;
          color: black;
          border-radius: 1rem;
          padding: 1.5rem;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          width: 85%;
          margin: 2rem auto;
        }

        .mood-heatmap-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.5rem;
          text-align: center;
        }

        .mood-heatmap-title {
          font-size: 2rem;
          font-weight: bold;
        }

        .mood-heatmap-select {
          padding: 0.4rem 0.75rem;
          border-radius: 0.4rem;
          font-size: 1rem;
          background: #f1f5f9;
          color: #0f172a;
          border: 1px solid #cbd5e1;
        }

        .mood-scroll-wrapper {
          overflow-x: auto;
          padding-bottom: 0.5rem;
        }

        .mood-row {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
        }

        .mood-card {
          background-color: #ffffff;
          border-radius: 1rem;
          padding: 1.25rem;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          position: relative;
        }

        .mood-emoji {
          position: absolute;
          top: 1rem;
          right: 1rem;
          font-size: 1.5rem;
        }

        .mood-city {
          font-size: 1.3rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }

        .mood-percentage {
          font-size: 1.5rem;
          font-weight: bold;
          color: #4f46e5;
          margin-bottom: 0.25rem;
        }

        .mood-change {
          color: green;
          font-size: 0.9rem;
          margin-bottom: 0.25rem;
        }

        .mood-source {
          font-size: 0.85rem;
          color: #475569;
          margin-bottom: 0.5rem;
        }

        .mood-tagline {
          font-size: 0.95rem;
          color: #334155;
          font-weight: 500;
        }
      `}</style>
    </div>
  );
}

export default MoodHeatmap;
