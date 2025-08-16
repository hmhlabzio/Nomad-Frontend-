import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import React from 'react';
import SparHeader from '../components/SparkHeader';
import { fetchPlaces } from '../utils/api';
import './CityDetails.css';
// import bg from '../assets/bg.jpg';
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
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      
    );

    alert('Inquiry sent successfully!');
    setFormData({
      name: '',
      email: '',
      country: city.countryName ,
      message: '',
    });
  } catch (error) {
    console.error('Email send failed:', error);
    alert('Failed to send email.');
  } finally {
    setIsLoading(false);
  }
  console.log("Sending country:", formData.country);

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
          <p>{city.country_description}</p>
        </div>
      </div>

     <div className="majorcity-section">
      <h2>Major Cities</h2>
      <div className="majorcity-grid">
        <div className="majorcity-card">
          <h3>{city.city_one}</h3>
          <p>{city.city_oneinfo}</p>
        </div>
        <div className="majorcity-card">
          <h3>{city.city_two}</h3>
          <p>{city.city_twoinfo}</p>
        </div>
      </div>
    </div>      


      <div className="main-layout">
          {/* Left Side - Living Costs & Quality */}
          <div className="quality-cont" >
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

          {/* Right Side - Stats */}
          <div className="stats-column">
            <div className="stat-box">
              <div className="icon">⏳</div>
              <h3>{city.visaDuration}</h3>
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
              <h3>{city.visaFees}</h3>
              <p>Visa Application Fees</p>
            </div>
          </div>
        </div>


      {/* Visa Overview Section */}
      <div className="visa-overview">

          <div className="visa-layout">
            {/* Left - Requirements */}
            <div className="visa-left">
              <h2>Visa Program Overview</h2>

              <div className="visa-section">
                <h4 className="section-title">✅ Requirements</h4>
                <ul>
                  {city.specialRequirements
                    .split("\n")
                    .map(req => req.replace(/^-+\s*/, "").trim())
                    .filter(req => req.length > 0)
                    .map((req, index) => (
                      <li key={index}>{req}</li>
                    ))}
                </ul>
              </div>
            </div>

            {/* Right - Why Choose + Stats */}
            <div className="visa-right">
              <div className="why-choose">
                <h3>How to Apply? </h3>
                <div className="steps-text">
                  {city.steps_apply
                    .split('\n')
                    .filter(line => line.trim() !== "") // ignore empty lines
                    .map((line, index) => {
                      const isIndented = /^\s/.test(line); // starts with space/tab
                      const trimmed = line.trim();
                      
                      return (
                        <div
                          key={index}
                          style={{ marginLeft: isIndented ? '20px' : '0' }}
                        >
                          {isIndented ? `• ${trimmed}` : trimmed}
                        </div>
                      );
                    })}
                </div>
              </div>

              
            </div>
            

          </div>
           <div className="visa-bottom-stats">
                <div className="stat-block">
                  <h5>Processing Time</h5>
                  <p>{city?.processing_time}</p>
                </div>
                <div className="stat-block">
                  <h5>Income Requirement</h5>
                  <p>{city.minimum_incom}</p>
                </div>
                <div className="stat-block">
                  <h5>Application Fee</h5>
                  <p>{city.visaFees}</p>
                </div>
         </div>
        </div>
       



      {/* About Section */}
<div className="about-inquiry-container">
  <div className="city-about">
    <h2 className="city-que">
      Why {city?.countryName} is Perfect for Digital Nomads
    </h2>
      <p className="city-ans1">
        {city.why_choose
          ?.split('\n') // split only on Enter
          .filter(line => line.trim() !== '') // remove empty lines
          .map((line, index) => (
            <React.Fragment key={index}>
              {line.trim()}
              <br />
            </React.Fragment>
          ))}
      </p>


  </div>

  <div className="inquiry-form">
    <h2>Interested in {city.countryName}?</h2>
    <p>
      Get personalized guidance on the visa application process and living in {" "}
      {city.countryName}.
    </p>

    <form onSubmit={handleSubmit}>
  <div className="input-row">
    <label>
      Your Name:
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
      />
    </label>
    <label>
      Your Email:
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
      />
    </label>
  </div>

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
    <FontAwesomeIcon icon={faPaperPlane} style={{ marginRight: "8px" }} />
    {isLoading ? "Sending..." : "Send Inquiry"}
  </button>
</form>

  </div>
</div>
    </div>
  );
}

export default CityDetailsPage;
