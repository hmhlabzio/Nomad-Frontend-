import { useNavigate } from 'react-router-dom';

function Footer({ onContactClick }) {
  const navigate = useNavigate();

  return (
    <footer className="bg-black text-gray-300 px-6 sm:px-10 lg:px-20 py-14">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* About */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-2">NomadNetwork</h3>
          <p className="text-sm leading-relaxed text-gray-400">
            Your companion for digital nomad life — from visas to lifestyle, trust and cost insights.
          </p>
        </div>

        {/* Discover */}
        <div>
          <h4 className="text-white font-semibold text-lg mb-2">Discover</h4>
          <ul className="text-sm space-y-2">
            <li className="cursor-pointer hover:text-indigo-400 transition" onClick={() => navigate('/explore-world')}>Explore World</li>
            <li className="cursor-pointer hover:text-indigo-400 transition" onClick={() => navigate('/cost-calculator')}>Cost Calculator</li>
            <li className="cursor-pointer hover:text-indigo-400 transition" onClick={() => navigate('/mood-heatmap')}>Mood Heatmap</li>
            <li className="cursor-pointer hover:text-indigo-400 transition" onClick={() => navigate('/safety-score')}>Safety Score</li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 className="text-white font-semibold text-lg mb-2">Resources</h4>
          <ul className="text-sm space-y-2">
            <li className="hover:text-indigo-400 cursor-pointer transition">Visa Guide</li>
            <li className="hover:text-indigo-400 cursor-pointer transition">Blog</li>
            <li className="hover:text-indigo-400 cursor-pointer transition">Community</li>
            <li className="hover:text-indigo-400 cursor-pointer transition">Support</li>
          </ul>
        </div>

        {/* Quick Links */}
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
