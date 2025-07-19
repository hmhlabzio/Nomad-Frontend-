import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import SparHeader from '../components/SparkHeader';
import { fetchPlaces } from '../utils/api';
import './CityDetails.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

import emailjs from '@emailjs/browser';
import Lottie from "lottie-react";
import loadingAnimation from "../assets/load.json";

function CityDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [city, setCity] = useState(null);
  const [showAnimation, setShowAnimation] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    country: '',
    message: '',
  });

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const loadCity = async () => {
      try {
        const data = await fetchPlaces();
        const match = data.find((c) => String(c.id) === id);
        console.log('Fetched cities:', data);
        console.log('Looking for ID:', id);
        if (!match) {
          console.error('City not found with ID:', id);
        }
        setCity(match);
      } catch (error) {
        console.error('Error fetching city:', error);
      }
    };

    loadCity();

    // Delay showing content for full animation duration (e.g., 3s)
    const timer = setTimeout(() => {
      setShowAnimation(false);
    }, 3000); // Adjust this duration based on your Lottie animation length

    return () => clearTimeout(timer);
  }, [id]);

  const resolveImageUrl = (image) => {
    if (!image) return '/fallback.webp';
    if (image.startsWith('http') || image.startsWith('//')) return image;
    return `${import.meta.env.VITE_PAYLOAD_API_URL}${image}`;
  };

  const getRatingLevel = (value) => {
    if (value >= 80) return { level: 'Excellent', color: '#22c55e' };
    if (value >= 70) return { level: 'Good', color: '#facc15' };
    if (value >= 60) return { level: 'Fair', color: '#f97316' };
    return { level: 'Poor', color: '#ef4444' };
  };

 
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  setIsLoading(true);

  try {
    await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        name: formData.name,
        email: formData.email,
        country: formData.country,
        message: formData.message,
        cityId: city?.id || '',
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    );

    alert('Inquiry sent successfully!');
    setFormData({
      name: '',
      email: '',
      country: '',
      message: '',
      cityId: city?.id || '',
    });
  } catch (error) {
    console.error('Email send failed:', error);
    alert('Failed to send email.');
  } finally {
    setIsLoading(false);
  }
};



  // Show loading animation
  if (showAnimation || !city) {
    return (
      <div className="city-loading-container">
        <Lottie
          animationData={loadingAnimation}
          loop={false}
          autoplay={true}
          style={{ width: 300, height: 300 }}
        />
      </div>
    );
  }

  const imageUrl = resolveImageUrl(city.image);

  return (
    <div className="city-details-container">
      <div className="sticky-header-wrapper">
        <SparHeader />
      </div>

      <div
        className="hero-section text-white"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url(${imageUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          minHeight: '60vh',
          position: 'relative',
        }}
      >
        <div className="back-button" onClick={() => navigate(-1)}>
          <FontAwesomeIcon icon={faArrowLeft} className="back-icon" />
          <span className="back-arrow"></span> Back to Countries
        </div>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>{city.countryName}</h1>
          <p>{city.visaType}</p>
        </div>
      </div>
      


      {/* Stats Section */}
      <div className="stats-grid">
        <div className="stat-box">
          <div className="icon">⏳</div>
          <h3>{city.visaDuration} </h3>
          <p>Visa Duration</p>
        </div>
        <div className="stat-box">
          <div className="icon">📶</div>
          <h3>{city.internetSpeed} Mbps</h3>
          <p>Internet Speed</p>
        </div>
        <div className="stat-box">
          <div className="icon">🌡️</div>
          <h3>{city.climate}</h3>
          <p>Avg. Temperature</p>
        </div>
        <div className="stat-box">
          <div className="icon">💸</div>
          <h3>{city.visaFees} </h3>
          <p>Visa Application Fees</p>
        </div>
      </div>

      {/* Quality Section */}
      <div className="quality-cont">
        <h2>Living Costs & Quality</h2>
        <div className="quality-grid">
          <div className="cost-and-stats">
            <div className="monthly-cost">
              <h3>${city.monthlyCost}<span>/month</span></h3>
              <p>Estimated monthly cost for nomads</p>
            </div>
            <div className="quick-stats">
              <div className="stat"><span>🌡</span>{city.climate}</div>
              <div className="stat"><span>🌿</span>{city.aqi} AQI</div>
              <div className="stat"><span>🛡</span>{getRatingLevel(city.safetyScore).level} Safety</div>
            </div>
          </div>

          <div className="rating-section">
            {[
              { label: '💰 Cost', value: city.cost, color: '#f97316' },
              { label: '📶 Internet', value: city.internetSpeed, color: '#3b82f6' },
              { label: '🛡 Safety', value: city.safetyScore, color: '#22c55e' },
              { label: '❤️ Liked', value: city.overallScore, color: '#ef4444' },
            ].map(({ label, value, color }) => (
              <div className="rating-row" key={label}>
                <div className="rating-label">{label}</div>
                <div className="rating-bar">
                  <div className="fill" style={{ width: `${value}%`, backgroundColor: color }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Visa Overview Section */}
      <div className="visa-overview">
        <h2>Visa Program Overview</h2>
        <div className="visa-content">
          <div className="visa-section">
            <h4 className="section-title">✅ Requirements</h4>
            <ul>
              <li>Minimum income: {city?.monthlyCost}</li>
              <li>Remote work proof</li>
              <li>Health insurance</li>
              <li>Accommodation booking</li>
            </ul>
          </div>
          <div className="visa-section">
            <h4 className="section-title">👤 Benefits</h4>
            <ul>
              <li>Tropical paradise</li>
              <li>Strong nomad community</li>
              <li>Affordable living</li>
              <li>Surf and yoga culture</li>
            </ul>
          </div>
        </div>
        <div className="visa-bottom-stats">
          <div className="stat-block">
            <h5>Processing Time</h5>
            <p>7 days</p>
          </div>
          <div className="stat-block">
            <h5>Income Requirement</h5>
            <p>{city?.monthlyCost}</p>
          </div>
          <div className="stat-block">
            <h5>Application Fee</h5>
            <p>$35</p>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="city-about">
        <h2 className="city-que">Why {city?.countryName} is Perfect for Digital Nomads</h2>
        <p className="city-ans1">{city?.countryName} offers the perfect combination of tropical paradise, strong nomad community, and affordable living.</p>
        <p className="city-ans2">With its beautiful beaches, vibrant co-working scene, and incredibly welcoming community, {city?.name} has become the ultimate destination for lifestyle-focused digital nomads.</p>
      </div>

      {/* Inquiry Form Section */}
      <div className="inquiry-form-wrapper">
        <div className="inquiry-form">
          <h2>Interested in {city.countryName}?</h2>
          <p>Get personalized guidance on the visa application process and living in {city.name}.</p>
        
          <form onSubmit={handleSubmit}>
            <div className="input-row">
              <label>
                Your Name:
                <input type="text" name="name" value={formData.name} onChange={handleChange} required />
              </label>
              <label>
                Your Email:
                <input type="email" name="email" value={formData.email} onChange={handleChange} required />
              </label>
            </div>

            <label>
              Current Country:
              <select name="country" value={formData.country} onChange={handleChange} required>
                <option value="">Select your current country</option>
                <option value="USA">USA</option>
                <option value="Canada">Canada</option>
                <option value="UK">UK</option>
              </select>
            </label>

            <label>
              Message:
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Tell us about your situation and what information you need..."
              ></textarea>
            </label>

            <button type="submit" disabled={isLoading}>
              <FontAwesomeIcon icon={faPaperPlane} style={{ marginRight: '8px' }} />
              {isLoading ? 'Sending...' : 'Send Inquiry'}
            </button>

          </form>
        </div>
      </div>
    </div>
  );
}

export default CityDetailsPage;
