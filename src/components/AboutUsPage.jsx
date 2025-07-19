import React from 'react';
import { useNavigate } from 'react-router-dom';
import Sparkheader from '../components/SparkHeader';
import bg from '../assets/about.jpg'; 
import communityImage from '../assets/asset-cont.png';
import {
  Wifi,
  DollarSign,
  ShieldCheck,
  Users,
  HeartPulse,
  Music2
} from "lucide-react";

function AboutUsPage() {
  const navigate = useNavigate();

  const handleExploreClick = () => {
    navigate('/', { state: { scrollToCities: true } });
  };

  return (
    <>
      
      {/* Background Wrapper including Sparkheader */}
    <div
      className="relative w-full min-h-[60vh] px-4 py-10 sm:py-20 flex flex-col md:flex-row items-center justify-between overflow-hidden"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center bottom',
        backgroundRepeat: 'no-repeat',
        backgroundColor: 'rgba(5, 5, 5, 0.5)',
      }}
     >
      {/* Now Sparkheader appears over background */}
      <div className="absolute top-0 left-0 w-full z-20">
        <Sparkheader />
      </div>

      {/* Left Text Content */}
      <div className="max-w-xl w-full z-10 mt-16 sm:mt-28">
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
          Welcome to Nomad Network Your Gateway <br /> To the World.
        </h1>

        <button
          onClick={handleExploreClick}
          className="bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-900 transition"
        >
          Explore Cities
        </button>
      </div>
    </div>
      {/* Our Mission Section */}
        <section className="bg-white text-gray-800 py-16 px-6 sm:px-12">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold">Our Mission</h2>
           
           <p className="text-base sm:text-lg text-gray-600 leading-7 mt-4 font-semibold">
              To empower digital nomads to live and work anywhere with confidence and ease.
            </p>


            <div className="flex flex-col md:flex-row justify-center items-center gap-6 mt-4 ">
            {/* Circle 1 - Purple */}
            <div
              className="w-60 h-60 rounded-full shadow-md flex flex-col items-center justify-center p-6 text-sm font-medium text-white text-center"
              style={{ backgroundColor: '#a855f7' }}
            >
              <h4 className="text-base font-semibold mb-2">Work from Anywhere</h4>
              <p>
                At NomadNetwork, we believe your job shouldn't tie you to one place—work freely from anywhere in the world.
              </p>
            </div>

            {/* Circle 2 - Green */}
            <div
              className="w-60 h-60 rounded-full shadow-md flex flex-col items-center justify-center p-6 text-sm font-medium text-white text-center"
              style={{ backgroundColor: '#4ade80' }}
            >
              <h4 className="text-base font-semibold mb-2">Freedom Meets Connectivity</h4>
              <p>
                With global connectivity at your fingertips, building your career while exploring the world is no longer a dream—it's your reality.
              </p>
            </div>

            {/* Circle 3 - Yellow */}
            <div
              className="w-60 h-60 rounded-full shadow-md flex flex-col items-center justify-center p-6 text-sm font-medium text-white text-center"
              style={{ backgroundColor: '#facc15' }}
            >
              <h4 className="text-base font-semibold mb-2">Built for Digital Nomads</h4>
              <p>
                We created NomadNetwork to solve the scattered, outdated info problem—offering trusted data on visas, costs, internet, and communities, all in one place.
              </p>
            </div>
            

          </div>
          <p className="text-base sm:text-lg text-gray-700 leading-7 mt-4">
              We decided to build the solution we wished we had.
            </p>

          </div>
        </section>
        <section className="py-16 px-4 sm:px-6 lg:px-12 bg-gray-50 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">What We Do</h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-10 text-base sm:text-lg font-semibold">
            NomadNetwork is your all-in-one platform for navigating the remote lifestyle. We blend reliable data with real community insights to help you thrive in cities worldwide.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* Card 1 */}
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
              <div className="flex items-center justify-center gap-2 text-blue-600 mb-2">
                <Wifi className="w-5 h-5" />
                <h4 className="text-xl font-semibold">Internet Speed</h4>
              </div>
              <p className="text-gray-700 text-sm">Because your work can't wait — we measure download and upload speed for smooth remote operations.</p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
              <div className="flex items-center justify-center gap-2 text-green-600 mb-2">
                <DollarSign className="w-5 h-5" />
                <h4 className="text-xl font-semibold">Cost of Living</h4>
              </div>
              <p className="text-gray-700 text-sm">Plan with confidence using real-time data on rent, food, transport, and essentials.</p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
              <div className="flex items-center justify-center gap-2 text-red-600 mb-2">
                <ShieldCheck className="w-5 h-5" />
                <h4 className="text-xl font-semibold">Safety</h4>
              </div>
              <p className="text-gray-700 text-sm">Stay informed about local safety conditions, travel advisories, and real incident tracking.</p>
            </div>

            {/* Card 4 */}
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
              <div className="flex items-center justify-center gap-2 text-purple-600 mb-2">
                <Users className="w-5 h-5" />
                <h4 className="text-xl font-semibold">Community</h4>
              </div>
              <p className="text-gray-700 text-sm">Find co-working spaces, meetups, and nomad-friendly zones to stay connected on the go.</p>
            </div>

            {/* Card 5 */}
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
              <div className="flex items-center justify-center gap-2 text-pink-600 mb-2">
                <HeartPulse className="w-5 h-5" />
                <h4 className="text-xl font-semibold">Wellness</h4>
              </div>
              <p className="text-gray-700 text-sm">Explore gyms, healthcare access, and wellness programs tailored to remote workers.</p>
            </div>

            {/* Card 6 */}
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
              <div className="flex items-center justify-center gap-2 text-yellow-600 mb-2">
                <Music2 className="w-5 h-5" />
                <h4 className="text-xl font-semibold">Nightlife</h4>
              </div>
              <p className="text-gray-700 text-sm">Enjoy city vibes after work—local entertainment, cafes, events, and vibrant culture await.</p>
            </div>
          </div>
        </section>

        <section className="bg-white py-16 px-4 sm:px-6 lg:px-12">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
            {/* Left Image */}
            <div className="w-full md:w-1/2">
              <img
                 src={communityImage}
                alt="Nomad Community"
                className="w-full h-auto "
              />
            </div>

            {/* Right Content */}
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Join Our Global Community
              </h2>

              <h4 className="text-xl font-semibold text-blue-700 mb-2">
                Welcome to the future of work. Welcome to NomadNetwork.
              </h4>
              <p className="text-gray-700 text-sm">Whether you're a seasoned traveler or just starting to plan your first work-abroad adventure, we're here to guide you every step of the way.</p>

              <button
                onClick={() => window.location.href = '/signup'}
                className="mt-4 inline-block px-6 py-3 text-white bg-blue-600 hover:bg-blue-700 rounded-full font-medium transition-all"
              >
                Join Member
              </button>
            </div>
          </div>
        </section>




    </>
  );
}

export default AboutUsPage;
