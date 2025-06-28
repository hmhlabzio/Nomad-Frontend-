// START OF FILE: src/components/Footer.jsx

import { useNavigate } from 'react-router-dom';

function Footer({ onContactClick, onSafetyScoreClick, onMoodHeatmapClick, onCostCalculatorClick, onExploreWorldClick }) {
  const navigate = useNavigate();

  return (
    <footer className="bg-black text-gray-300 px-6 sm:px-10 lg:px-20 py-14 w-full">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* About Section */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-2">NomadNetwork</h3>
          <p className="text-sm leading-relaxed text-gray-400">
            Your trusted network for digital nomad visa programs
            worldwide. Connect with fellow nomads and find the perfect
            destination for your remote work lifestyle.
          </p>
        </div>

        {/* Discover Section - Triggers Modals */}
        <div>
          <h4 className="text-white font-semibold text-lg mb-2">Discover</h4>
          <ul className="text-sm space-y-2">
            {/* These list items now directly call the functions passed from App.jsx */}
            <li className="cursor-pointer hover:text-indigo-400 transition" onClick={onExploreWorldClick}>Explore World</li>
            <li className="cursor-pointer hover:text-indigo-400 transition" onClick={onCostCalculatorClick}>Cost Calculator</li>
            <li className="cursor-pointer hover:text-indigo-400 transition" onClick={onMoodHeatmapClick}>Mood Heatmap</li>
            <li className="cursor-pointer hover:text-indigo-400 transition" onClick={onSafetyScoreClick}>Safety Score</li>
          </ul>
        </div>

        {/* Resources Section */}
        <div>
          <h4 className="text-white font-semibold text-lg mb-2">Resources</h4>
          <ul className="text-sm space-y-2">
            <li className="hover:text-indigo-400 cursor-pointer transition">Visa Guide</li>
            <li className="hover:text-indigo-400 cursor-pointer transition">Blog</li>
            <li className="hover:text-indigo-400 cursor-pointer transition">Community</li>
            <li className="hover:text-indigo-400 cursor-pointer transition">Support</li>
          </ul>
        </div>

        {/* Quick Links Section */}
        <div>
          <h4 className="text-white font-semibold text-lg mb-2">Quick Links</h4>
          <ul className="text-sm space-y-2">
            <li className="hover:text-indigo-400 cursor-pointer transition">Privacy Policy</li>
            <li className="hover:text-indigo-400 cursor-pointer transition">Terms of Service</li>
            <li className="hover:text-indigo-400 cursor-pointer transition" onClick={onContactClick}>Contact</li>
            <li className="hover:text-indigo-400 cursor-pointer transition">Follow us</li>
          </ul>
        </div>
      </div>

      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
        © 2025 NomadNetwork. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;

// END OF FILE: src/components/Footer.jsx