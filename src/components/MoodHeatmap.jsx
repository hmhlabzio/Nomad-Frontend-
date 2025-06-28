import { useState } from "react";

function MoodHeatmap({ onClose }) { // Accept onClose prop
  const [filter, setFilter] = useState("Weekly");

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
    <div className="bg-white text-black rounded-xl p-6 shadow-lg w-full mx-auto">
      <div className="flex justify-between items-center mb-6 text-center">
        <h2 className="text-3xl font-bold">Mood Heatmap</h2>
        <select
          className="p-2 rounded-md text-base bg-gray-100 text-gray-900 border border-gray-300"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="Weekly">Weekly</option>
          <option value="Monthly">Monthly</option>
        </select>
      </div>

      <div className="overflow-x-auto pb-2">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {moodData[filter].map((data, index) => (
            <div className="bg-white rounded-xl p-5 shadow-md flex flex-col justify-start relative" key={index}>
              <div className="absolute top-4 right-4 text-2xl">{data.emoji}</div>
              <div className="text-xl font-semibold mb-2">{data.city}</div>
              <div className="text-2xl font-bold text-indigo-600 mb-1">{data.percentage}% Positive</div>
              <div className="text-green-600 text-sm mb-1">{data.change}</div>
              <div className="text-sm text-gray-600 mb-2">{data.source}</div>
              <div className="text-base text-gray-700 font-medium">{data.tagline}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MoodHeatmap;