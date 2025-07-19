import React, { useState, useEffect } from "react";
import { fetchPlaces } from '../utils/api';
import './CityPreview.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCcVisa } from '@fortawesome/free-brands-svg-icons';

import { faHeart as farFaHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as fasFaHeart } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

function CityPreview() {
  const [places, setPlaces] = useState([]);
  const [likedCities, setLikedCities] = useState({});
  const navigate = useNavigate();
  const API_URL = import.meta.env.VITE_PAYLOAD_API_URL;
  const [searchTerm, setSearchTerm] = useState('');
  const [visaFilter, setVisaFilter] = useState('');
  const [regionFilter, setRegionFilter] = useState('');

  const filteredPlaces = places.filter((place) => {
  const matchesSearch = place.countryName?.toLowerCase().includes(searchTerm.toLowerCase()) || false;

  const matchesVisa = visaFilter ? place.visaDuration?.includes(visaFilter) : true;
  const matchesRegion = regionFilter ? place.continent?.toLowerCase() === regionFilter.toLowerCase() : true;
  

  return matchesSearch && matchesVisa && matchesRegion;
});




  useEffect(() => {
  const loadData = async () => {
    try {
      const data = await fetchPlaces();
      setPlaces(data); // 👈 directly set the array
    } catch (err) {
      console.error(err.message);
    }
  };
  loadData();
}, []);


  const toggleLike = (cityId) => {
    setLikedCities(prev => ({
      ...prev,
      [cityId]: !prev[cityId],
    }));
  };

  const getRatingLevel = (value) => {
    if (value >= 80) return { level: 'Excellent', color: '#22c55e' };
    if (value >= 70) return { level: 'Good', color: '#facc15' };
    if (value >= 60) return { level: 'Fair', color: '#f97316' };
    if (value >= 50) return { level: 'Poor', color: '#ef4444' };
    return { level: 'Poor', color: '#ef4444' };
  };

  return (
    <>
      <section className="filter-section">
        <div className="filter-toolbar" style={{ width: '100%' }}>
          <input
                type="text"
                placeholder="Search by Country..."
                className="filter-search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />

              <select className="filter-dropdown" value={regionFilter} onChange={(e) => setRegionFilter(e.target.value)}>
                <option value="">All Regions</option>
                <option>Europe</option>
                <option>Asia</option>
                <option>Central America</option>
                <option>South America</option>
              </select>

              <select className="filter-dropdown" value={visaFilter} onChange={(e) => setVisaFilter(e.target.value)}>
                <option value="">All Visa Durations</option>
                <option>3 Months</option>
                <option>6 Months</option>
                <option>1 Year</option>
                <option>1 Year 6 Months</option>
              </select>

              <button
                className="filter-button reset"
                onClick={() => {
                  setSearchTerm('');
                  setVisaFilter('');
                  setRegionFilter('');
                }}
              >
                Reset
              </button>
          </div>
      </section>


      <div className="container" id="popular-cities">
        {/* <h2 className="section-title">Popular Destinations</h2> */}
        <div className="city-grid">
          {filteredPlaces.map((city) => (
            <div key={city.id} className="city-card">
              <div className="city-image-container">
               <img
                  src={city.image ? city.image : '/fallback.webp'}
                  alt={city.country_name}
                  className="city-image"
                  loading="lazy"
                />

                <div className="overlay-top">
                  <h3 className="overlay-city-name">{city.countryName}</h3>
                  {/* <p className="overlay-country">{city.country}</p> */}
                </div>
                {/* <div className="internet-speed">{city.internet || '25'} Mbps</div> */}
              </div>

              <div className="city-info">
                <div className="city-meta">
                  <span className="price">${city.monthlyCost}/monthly</span>
                  <span className="temp">{city.climate}°C</span>
                  <span className="aqi">
                   {city.visaDuration}
                   <FontAwesomeIcon icon={faCcVisa} className="mr-2" /> 
                  </span>
                  {/* <span className="aqi">{city.aqi} AQI</span> */}
                </div>

                <div className="rating-bars">
                  {['costPerDay', 'internetSpeed', 'safetyScore', 'overallScore'].map((key) => {
                    const value = city[key] || 0;
                    const { level, color } = getRatingLevel(value);
                    return (
                      <div className="rating" key={key}>
                        <span>{key.charAt(0).toUpperCase() + key.slice(1)}</span>
                        <div className="bar">
                          <div
                            className="fill"
                            style={{ width: `${value}%`, backgroundColor: color }}
                          ></div>
                        </div>
                        <div className="rating-text">{level}</div>
                      </div>
                    );
                  })}
                </div>

                <div className="card-buttons">
                  <button
                    className="details-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(`/city/${city.id}`);
                    }}
                  >
                    View Details
                  </button>
                  <button
                    className="like-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleLike(city.id);
                    }}
                  >
                    <FontAwesomeIcon icon={likedCities[city.id] ? fasFaHeart : farFaHeart} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default React.memo(CityPreview);
