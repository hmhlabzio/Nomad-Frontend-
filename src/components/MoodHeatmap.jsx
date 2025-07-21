import moodJson from "../../public/moodHeatmap.json"; // Adjust as needed
import { useState, useEffect } from "react";

function MoodHeatmap() {
  const [filter, setFilter] = useState("Weekly");
  const [moodData, setMoodData] = useState({ Weekly: [], Monthly: [] });
  const [page, setPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(8); // Responsive items per page

  useEffect(() => {
    setMoodData(moodJson);
  }, []);

  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth < 640) {
        setItemsPerPage(4); // 2 cols × 3 rows on mobile
      } else {
        setItemsPerPage(8); // 4 cols × 2 rows on larger screens
      }
    };

    updateItemsPerPage(); // initial
    window.addEventListener("resize", updateItemsPerPage);
    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  const data = moodData[filter] || [];
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const nextPage = () => setPage((prev) => (prev + 1) % totalPages);
  const prevPage = () => setPage((prev) => (prev - 1 + totalPages) % totalPages);

  const visibleCards = data.slice(page * itemsPerPage, page * itemsPerPage + itemsPerPage);

  return (
    <div className="w-full min-h-screen text-gray-800 px-2 sm:px-4">
      {/* Title + View Select in Same Row */}
      <div className="sticky top-0 bg-white z-20 flex flex-col sm:flex-row sm:items-center sm:justify-between py-4 gap-2">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
          Nomad Mood Heatmap
        </h2>

        <div className="flex items-center gap-2 sm:ml-auto">
          <span className="text-sm text-gray-600">View:</span>
          <select
            className="border border-gray-300 rounded-md px-2 py-1 text-sm bg-white"
            value={filter}
            onChange={(e) => {
              setFilter(e.target.value);
              setPage(0);
            }}
          >
            <option value="Weekly">Weekly</option>
            <option value="Monthly">Monthly</option>
          </select>
        </div>
      </div>

      {/* Optional Subtitle */}
      <p className="hidden sm:block text-sm sm:text-base text-gray-600 mb-1">
        Real-time sentiment analysis of digital nomad communities.
      </p>

      {/* Carousel Grid */}
      <div className="relative">
        {/* Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 transition-all duration-300">
          {visibleCards.map((city, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-4 sm:p-5 shadow border border-gray-200 w-full max-w-[95%] mx-auto"
            >
              <div className="flex justify-between items-center">
                <h3 className="text-base sm:text-lg font-semibold text-gray-800">{city.city}</h3>
                <span className="text-xl sm:text-2xl">{city.emoji}</span>
              </div>
              <p className="text-xl font-bold text-indigo-600 mb-1">{city.percentage}% Positive</p>
              <div
                className={`flex items-center text-xs ${
                  city.type === "up"
                    ? "text-green-500"
                    : city.type === "down"
                    ? "text-red-500"
                    : "text-gray-500"
                }`}
              >
                {city.type === "up" && (
                  <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
                {city.type === "down" && (
                  <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L9 12.586V5a1 1 0 112 0v7.586l2.293-2.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
                {city.change}
              </div>
              <p className="hidden sm:block text-xs text-gray-500 mb-1">
                Based on {city.source}
              </p>
              <p className="text-sm font-medium text-gray-700">{city.tagline}</p>
            </div>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex justify-between mt-4 mb-8 sm:mb-6">
          <button
            onClick={prevPage}
            className="text-sm px-3 py-1 sm:px-4 sm:py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            ← Previous
          </button>
          <button
            onClick={nextPage}
            className="text-sm px-3 py-1 sm:px-4 sm:py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Next →
          </button>
        </div>

      </div>
    </div>
  );
}

export default MoodHeatmap;
