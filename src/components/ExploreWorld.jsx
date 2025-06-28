// START OF FILE: src/components/ExploreWorld.jsx

import React from "react";

function ExploreWorld({ onClose }) { // Accepts the onClose prop to close the modal
  const destinations = [
    {
      name: "Kyoto, Japan",
      image: "https://images.unsplash.com/photo-1545564802-b25822f873b7?fit=crop&w=400&h=300&q=80",
      description: "Experience ancient temples, beautiful gardens, and traditional geisha districts. A blend of history and modernity.",
      tags: ["Culture", "History", "Food", "Serene"],
    },
    {
      name: "Queenstown, New Zealand",
      image: "https://images.unsplash.com/photo-1542382216-c73e0c059882?fit=crop&w=400&h=300&q=80",
      description: "The adventure capital of the world, offering bungee jumping, skiing, hiking, and stunning landscapes.",
      tags: ["Adventure", "Nature", "Sports", "Scenic"],
    },
    {
      name: "Amalfi Coast, Italy",
      image: "https://images.unsplash.com/photo-1533054178619-3f0f73b6f8f5?fit=crop&w=400&h=300&q=80",
      description: "Picturesque cliffside villages, crystal-clear waters, and delicious Mediterranean cuisine along stunning cliffs.",
      tags: ["Relaxation", "Scenery", "Food", "Coastal"],
    },
    {
      name: "Patagonia, Chile/Argentina",
      image: "https://images.unsplash.com/photo-1510403759-b1d7d02e0717?fit=crop&w=400&h=300&q=80",
      description: "Vast wilderness with dramatic mountains, glaciers, and diverse wildlife for outdoor enthusiasts.",
      tags: ["Nature", "Adventure", "Hiking", "Wildlife"],
    },
    {
        name: "Bali, Indonesia",
        image: "https://images.unsplash.com/photo-1536152917789-9e80234795e1?fit=crop&w=400&h=300&q=80",
        description: "Island of the Gods, known for its spiritual retreats, beautiful beaches, and vibrant culture.",
        tags: ["Beach", "Culture", "Wellness", "Relaxation"],
    },
    {
        name: "Reykjavik, Iceland",
        image: "https://images.unsplash.com/photo-1527664539864-441f71d5334f?fit=crop&w=400&h=300&q=80",
        description: "Unique landscapes with geothermal spas, the Northern Lights, and a vibrant city life.",
        tags: ["Nature", "Adventure", "Unique", "Cold"],
    },
    {
      name: "Machu Picchu, Peru",
      image: "https://images.unsplash.com/photo-1587474478491-a1e1e9a9b6c0?fit=crop&w=400&h=300&q=80",
      description: "Ancient Inca city high in the Andes mountains, a truly awe-inspiring archaeological site.",
      tags: ["History", "Adventure", "Culture", "Scenic"],
    },
    {
      name: "Great Barrier Reef, Australia",
      image: "https://images.unsplash.com/photo-1541018329623-bb406c7e2b7e?fit=crop&w=400&h=300&q=80",
      description: "The world's largest coral reef system, perfect for diving, snorkeling, and marine life.",
      tags: ["Nature", "Adventure", "Wildlife", "Coastal"],
    },
    {
      name: "Sahara Desert, Morocco",
      image: "https://images.unsplash.com/photo-1518090001099-0d1c7d2c3f91?fit=crop&w=400&h=300&q=80",
      description: "Vast desert landscapes, camel treks, and stunning starry nights.",
      tags: ["Adventure", "Unique", "Nature", "Desert"],
    },
    {
      name: "Cairo, Egypt",
      image: "https://images.unsplash.com/photo-1579294528359-9f79e8c7c9c0?fit=crop&w=400&h=300&q=80",
      description: "Explore ancient pyramids, bustling markets, and the rich history of Egyptian civilization.",
      tags: ["History", "Culture", "Food", "Unique"],
    },
    {
      name: "Banff National Park, Canada",
      image: "https://images.unsplash.com/photo-1523482591678-01124238e8e3?fit=crop&w=400&h=300&q=80",
      description: "Stunning mountain landscapes, turquoise lakes, and abundant wildlife in the Canadian Rockies.",
      tags: ["Nature", "Adventure", "Scenic", "Wildlife"],
    },
    {
      name: "Amazon Rainforest, Brazil",
      image: "https://images.unsplash.com/photo-1515201402324-f7b2c5e13a9d?fit=crop&w=400&h=300&q=80",
      description: "The world's largest rainforest, home to incredible biodiversity and indigenous cultures.",
      tags: ["Nature", "Wildlife", "Adventure", "Unique"],
    },
  ];

  return (
    // Outer container for the component's content when displayed in a modal
    // max-h-[85vh] overflow-y-auto ensures this component itself is scrollable if its content exceeds its height
    <div className="bg-white text-black rounded-2xl p-8 shadow-lg w-full mx-auto max-h-[85vh] overflow-y-auto">
      <h2 className="text-4xl font-bold text-center text-gray-900 mb-8">Explore The World</h2>

      {/* Grid for destination cards - This creates the card layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {destinations.map((destination, index) => (
          <div
            key={index}
            className="bg-gray-50 rounded-xl shadow-md overflow-hidden
                       transform transition-transform duration-300 hover:scale-105
                       flex flex-col cursor-pointer" // Added cursor-pointer to indicate clickability
            // You can add an onClick handler here if you want the cards to do something when clicked:
            // onClick={() => console.log(`Clicked on ${destination.name}`)}
          >
            {/* Image for the card */}
            <img
              src={destination.image}
              alt={destination.name}
              className="w-full h-48 object-cover"
            />
            {/* Content area for the card */}
            <div className="p-5 flex flex-col flex-grow">
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">{destination.name}</h3>
              <p className="text-gray-600 mb-3 flex-grow">{destination.description}</p>
              {/* Tags for the card */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {destination.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Internal Close Button for Explore World component for user convenience */}
      <div className="mt-10 text-center">
        <p className="text-gray-600 text-md mb-4">Discover your next adventure with NomadNetwork!</p>
        <button
          onClick={onClose} // This calls the onClose prop passed from App.jsx to close the modal
          className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          Close Exploration
        </button>
      </div>
    </div>
  );
}

export default ExploreWorld;

// END OF FILE: src/components/ExploreWorld.jsx