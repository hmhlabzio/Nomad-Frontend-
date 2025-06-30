// START OF FILE: src/App.jsx

import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import React, { useState, useEffect, useRef } from 'react';

// Import the background image
import bannerImage from './assets/banner.jpg'; // Ensure this path is correct for your banner image

// Import all necessary components
import Hero from "./components/Hero"; //
import CityPreview from "./components/CityPreview"; //
import SparkHeader from './components/SparkHeader'; //
import Footer from './components/Footer'; //

// Popup Components
import CostForecaster from './components/CostForecaster'; //
import SafetyScore from "./components/SafetyScore"; //
import MoodHeatmap from "./components/MoodHeatmap"; //
import ExploreWorld from "./components/ExploreWorld";

// Page Components
import AboutUsPage from './components/AboutUsPage';
import InsightsPage from './components/InsightsPage'; // Keeping for potential insights page content, though not in header nav

function App() {
  const [showContactForm, setShowContactForm] = useState(false);
  const [showBrowseForm, setShowBrowseForm] = useState(false); // This state exists, but Browse is removed from header

  // State variables for Footer popups
  const [showSafetyScorePopup, setShowSafetyScorePopup] = useState(false);
  const [showMoodHeatmapPopup, setShowMoodHeatmapPopup] = useState(false);
  const [showCostForecasterPopup, setShowCostForecasterPopup] = useState(false);
  const [showExploreWorldPopup, setShowExploreWorldPopup] = useState(false);

  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: ''
  });
  const [formErrors, setFormErrors] = useState({});

  const validateForm = () => {
    const errors = {};
    if (!formData.fullName.trim()) errors.fullName = 'Full Name is required';
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      errors.email = 'Email is invalid';
    }
    if (!formData.phone.trim()) {
      errors.phone = 'Phone Number is required';
    } else if (!/^\d{10}$/.test(formData.phone)) {
      errors.phone = 'Phone must be 10 digits';
    }
    if (!formData.message.trim()) errors.message = 'Message is required';
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    setFormErrors({});
    setContactSubmitted(true);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      message: ''
    });
    setTimeout(() => {
      setShowContactForm(false);
      setContactSubmitted(false);
    }, 3000);
  };

  // HomeView component to encapsulate home page specific content and logic (like auto-scroll)
  const HomeView = () => {
    const location = useLocation();
    const popularCitiesRef = useRef(null);

    // This useEffect handles the scroll-to-popular-cities functionality on home page load
    useEffect(() => {
      if (location.pathname === '/') {
        const timer = setTimeout(() => {
          if (popularCitiesRef.current) {
            popularCitiesRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 200);

        return () => clearTimeout(timer);
      }
    }, [location.pathname]);

    return (
      <>
        {/* CityPreview is part of the Home page content below the Hero */}
        <div id="popular-cities" ref={popularCitiesRef}>
          {/* onFeedbackSubmit removed as it's not present in CityPreview component in current context */}
          <CityPreview /> {/* */}
        </div>
      </>
    );
  };

  return (
    <Router>
      <div className="bg-white text-black min-h-screen flex flex-col">
        {/*
          CRITICAL: This div applies the background image and min-height ONLY to the Hero section on the Home page.
          SparkHeader is placed within this div with absolute positioning to appear over the background.
        */}
        <div
          className="relative w-full overflow-hidden flex flex-col"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url(${bannerImage})`, //
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            minHeight: '80vh', // This height is for the Hero banner specifically
          }}
        >
          {/* SparkHeader is placed here. This ensures it's always rendered
              at the very top of your application, regardless of the current route, and over the hero image.
          */}
          <SparkHeader
            onContactClick={() => setShowContactForm(true)}
            // onBrowseClick prop is still passed, but no longer directly used for a header link
            onBrowseClick={() => setShowBrowseForm(true)}
          />
          <Hero /> {/* Hero is rendered within this background-image div */}
        </div>

        {/* Main content area, where specific routes are rendered */}
        <main className="flex-grow">
          <Routes>
            {/* Home Page Route: This is where CityPreview is rendered after the Hero */}
            <Route path="/" element={<HomeView />} />

            {/* Other routes: These will NOT show the Hero section */}
            <Route path="/about-us" element={<AboutUsPage />} />
            {/* Using InsightsPage component for "/contact" route as a placeholder.
                You might want to create a dedicated ContactPage component. */}
            <Route path="/contact" element={<InsightsPage />} />
          </Routes>
        </main>

        {/* Footer component (always visible) */}
        <Footer
          onContactClick={() => setShowContactForm(true)}
          onSafetyScoreClick={() => setShowSafetyScorePopup(true)}
          onMoodHeatmapClick={() => setShowMoodHeatmapPopup(true)}
          onCostCalculatorClick={() => setShowCostForecasterPopup(true)}
          onExploreWorldClick={() => setShowExploreWorldPopup(true)}
        />

        {/* ======================================= */}
        {/* ALL POPUP MODALS (Conditionally rendered based on state) */}
        {/* Note: The close button is now handled INSIDE each popup component */}
        {/* ======================================= */}

        {showContactForm && (
          <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4">
            <div className="bg-white text-black p-6 rounded-md w-full max-w-md relative max-h-[90vh] overflow-y-auto">
              {/* Close button handled inside form */}
              <button
                className="absolute top-2 right-3 text-2xl font-bold bg-white text-black hover:text-gray-700"
                onClick={() => setShowContactForm(false)}
              >
                &times;
              </button>
              <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
              {contactSubmitted ? (
                <p className="text-green-600 font-semibold">Thank you! We'll get back to you soon.</p>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label className="block mb-1">Full Name</label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded text-black bg-white"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    />
                    {formErrors.fullName && <p className="text-red-500 text-sm">{formErrors.fullName}</p>}
                  </div>
                  <div className="mb-4">
                    <label className="block mb-1">Email Address</label>
                    <input
                      type="email"
                      className="w-full px-3 py-2 border border-gray-300 rounded text-black bg-white"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                    {formErrors.email && <p className="text-red-500 text-sm">{formErrors.email}</p>}
                  </div>
                  <div className="mb-4">
                    <label className="block mb-1">Phone Number</label>
                    <input
                      type="tel"
                      className="w-full px-3 py-2 border border-gray-300 rounded text-black bg-white"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                    {formErrors.phone && <p className="text-red-500 text-sm">{formErrors.phone}</p>}
                  </div>
                  <div className="mb-4">
                    <label className="block mb-1">Message</label>
                    <textarea
                      className="w-full px-3 py-2 border border-gray-300 rounded text-black bg-white"
                      rows="4"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    ></textarea>
                    {formErrors.message && <p className="text-red-500 text-sm">{formErrors.message}</p>}
                  </div>
                  <button type="submit" className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800">
                    Submit
                  </button>
                </form>
              )}
            </div>
          </div>
        )}

        {/* Removed Browse Countries popup from the main view for simplicity,
            but keeping the state and prop for future flexibility if needed.
            If you need this popup, you'll need to uncomment its div.
        */}
        {/* {showBrowseForm && (
          <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4">
            <div className="bg-white text-black p-6 rounded-md w-full max-w-2xl relative max-h-[90vh] overflow-y-auto">
              <button
                className="absolute top-2 right-3 text-2xl font-bold bg-white text-black hover:text-gray-700"
                onClick={() => setShowBrowseForm(false)}
              >
                &times;
              </button>
              <h2 className="text-2xl font-bold mb-4">Browse Countries</h2>
              <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block mb-1">Country Name</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded bg-white text-black">
                    <option value="">Select a country</option>
                    <option value="Tokyo">Tokyo</option>
                    <option value="Bali">Bali</option>
                    <option value="Paris">Paris</option>
                  </select>
                </div>
                <div>
                  <label className="block mb-1">Date of Travel</label>
                  <input type="date" className="w-full px-3 py-2 border border-gray-300 rounded bg-white" />
                </div>
                <div>
                  <label className="block mb-1">Season / Weather Preference</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded bg-white text-black">
                    <option value="">Select a season</option>
                    <option value="Summer">Summer</option>
                    <option value="Winter">Winter</option>
                    <option value="Rainy">Rainy</option>
                  </select>
                </div>
                <div>
                  <label className="block mb-1">Budget Range</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded bg-white text-black">
                    <option value="">Select a budget</option>
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                  </select>
                </div>
                <div>
                  <label className="block mb-1">Travel Type</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded bg-white text-black">
                    <option value="">Select travel type</option>
                    <option value="Solo">Solo</option>
                    <option value="Couple">Couple</option>
                    <option value="Family">Family</option>
                    <option value="Group">Group</option>
                  </select>
                </div>
                <div>
                  <label className="block mb-1">Popular Activities</label>
                  <div className="space-y-1">
                    <label className="block"><input type="checkbox" className="mr-2" /> Adventure</label>
                    <label className="block"><input type="checkbox" className="mr-2" /> Sightseeing</label>
                    <label className="block"><input type="checkbox" className="mr-2" /> Relaxation</label>
                    <label className="block"><input type="checkbox" className="mr-2" /> Wildlife</label>
                  </div>
                </div>
                <div>
                  <label className="block mb-1">Preferred Continent</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded bg-white text-black">
                    <option value="">Select a continent</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europe</option>
                    <option value="America">America</option>
                  </select>
                </div>
              </form>
              <div className="mt-4 text-right">
                <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800">
                  Explore
                </button>
              </div>
            </div>
          </div>
        )} */}

        {showSafetyScorePopup && (
          <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4">
            <div className="bg-white text-black p-6 rounded-md w-full max-w-4xl relative max-h-[90vh] overflow-y-auto">
              <SafetyScore onClose={() => setShowSafetyScorePopup(false)} /> {/* */}
            </div>
          </div>
        )}

        {showMoodHeatmapPopup && (
          <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4">
            <div className="bg-white text-black p-6 rounded-md w-full max-w-5xl relative max-h-[90vh] overflow-y-auto">
              <MoodHeatmap onClose={() => setShowMoodHeatmapPopup(false)} /> {/* */}
            </div>
          </div>
        )}

        {showCostForecasterPopup && (
          <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4">
            <div className="bg-white text-black p-6 rounded-md w-full max-w-4xl relative max-h-[90vh] overflow-y-auto">
              <CostForecaster onClose={() => setShowCostForecasterPopup(false)} /> {/* */}
            </div>
          </div>
        )}

        {showExploreWorldPopup && (
          <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4">
            <div className="bg-white text-black p-6 rounded-md w-full max-w-7xl relative max-h-[90vh] overflow-y-auto">
              <ExploreWorld onClose={() => setShowExploreWorldPopup(false)} />
            </div>
          </div>
        )}
      </div>
    </Router>
  );
}

export default App;

// END OF FILE: src/App.jsx