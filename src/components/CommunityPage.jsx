import React from 'react';
import { useNavigate } from 'react-router-dom';
import SparkHeader from '../components/SparkHeader';

function CommunityPage() {
  const navigate = useNavigate();

  const handleJoinClick = () => {
    navigate('/community-forum'); // Update this route as needed
  };

  return (
    <>
      {/* Hero Section with Header Positioned on Top */}
      <div
      className="relative w-full min-h-[80vh] flex items-center justify-center px-6 sm:px-12 py-20 pt-28 sm:pt-20 bg-cover"
  style={{
    backgroundImage:
      "url('https://img.freepik.com/premium-photo/concept-international-collaboration-people-from-different-countries-working-together-around-world_853812-4010.jpg')",
  }}
>

        {/* Overlay behind content */}
        <div className="absolute inset-0 bg-black bg-opacity-70 z-0" />

        {/* Header on top of the background */}
        <div className="absolute top-0 left-0 w-full z-30">
          <SparkHeader />
        </div>

        {/* Banner Content */}
        <div className="relative z-20 text-center px-4 sm:px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight drop-shadow-lg mt-20">
            You’re Not Alone on This Journey.
            <br />
            <span className="text-teal-300">Welcome to the Network.</span>
          </h1>
          <section className=" px-4 sm:px-10 md:px-16 lg:px-24 xl:px-32 py-10 text-center">
          <p className="text-lg md:text-xl max-w-5xl mx-auto text-white leading-relaxed">
            The heart of <strong className="text-teal-600">NomadNetwork</strong> is our global community of thinkers, creators, and adventurers. Here, you can connect with thousands of fellow digital nomads who are charting their own paths around the world.
          </p>
        </section>
        </div>
      </div>

      {/* Rest of the page */}
      <div className="community-page text-gray-800 font-[Poppins]">
        {/* Introduction */}
        

        {/* What You Can Do */}
        <section className="bg-gradient-to-b from-gray-100 to-white px-4 sm:px-10 md:px-16 lg:px-24 xl:px-32 py-10">
          <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">What You Can Do Here</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto text-gray-800">
            {[
              {
                title: 'Ask Questions, Get Answers',
                color: 'text-blue-600',
                text: 'Jump into our city-specific forums. Have a question about finding an apartment in Medellín? Need a recommendation for the best co-working space in Chiang Mai? Our community has the answers.',
              },
              {
                title: 'Share Your Experience',
                color: 'text-pink-600',
                text: 'Your insights are invaluable. Contribute to our Nomad Lifestyle Scores by sharing your on-the-ground experiences. Write reviews, update data, and help us create the most accurate picture of life in cities worldwide.',
              },
              {
                title: 'Find Your People',
                color: 'text-green-600',
                text: 'Use our member directory to connect with nomads who share your interests or profession. Filter by location, industry, or hobbies to find your next collaborator or travel buddy.',
              },
              {
                title: 'Join Local Meetups & Events',
                color: 'text-purple-600',
                text: 'From casual coffee meetups to professional networking events and weekend excursions, find out what’s happening in your current city. Don’t see an event? Create your own and bring the local nomad community together!',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl border border-gray-200 shadow-md hover:shadow-xl transition"
              >
                <h3 className={`text-xl font-semibold mb-2 ${item.color}`}>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Forum Topics */}
        <section className="bg-white px-4 sm:px-10 md:px-16 lg:px-24 xl:px-32 py-10">
          <div className="max-w-4xl mx-auto bg-teal-50 border border-teal-200 rounded-2xl p-6 shadow-md">
            <h4 className="text-xl font-semibold text-teal-700 mb-4">Featured Forum Topics:</h4>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>"First-time nomad - what am I forgetting to pack?"</li>
              <li>"Tax advice for US citizens working abroad?"</li>
              <li>"Best SIM card for Southeast Asia?"</li>
              <li>"Show off your remote work setup!"</li>
            </ul>
          </div>
        </section>

        {/* CTA */}
        <div className="text-center py-8 px-4">
          <button
            onClick={handleJoinClick}
            className="bg-black hover:bg-gray-900 text-white font-semibold text-lg py-3 px-8 rounded-full shadow-lg transition duration-300"
          >
            Join the Conversation
          </button>
        </div>
      </div>
    </>
  );
}

export default CommunityPage;
