import React, { useState, useEffect } from "react";
import { fetchPlaces } from '../utils/api';
import './CityPreview.css';
import fbImage from '../assets/fallback.webp';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCcVisa } from '@fortawesome/free-brands-svg-icons';
// import { faHeart as farFaHeart } from '@fortawesome/free-regular-svg-icons';
// import { faHeart as fasFaHeart } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

function CityPreview() {
  const [places, setPlaces] = useState([]);
  // const [likedCities, setLikedCities] = useState({});
  const [searchTerm, setSearchTerm] = useState('');
  const [visaFilter, setVisaFilter] = useState('');
  const [regionFilter, setRegionFilter] = useState('');
  const [sortOrder, setSortOrder] = useState('');
  const navigate = useNavigate();

  const filteredPlaces = places
    .filter((place) => {
      const matchesSearch = place.countryName?.toLowerCase().includes(searchTerm.toLowerCase()) || false;
      const matchesVisa = visaFilter ? place.visaDuration?.includes(visaFilter) : true;
      const matchesRegion = regionFilter ? place.continent?.toLowerCase() === regionFilter.toLowerCase() : true;
      return matchesSearch && matchesVisa && matchesRegion;
    })
    .sort((a, b) => {
      if (sortOrder === 'lowToHigh') return (a.monthlyCost || 0) - (b.monthlyCost || 0);
      if (sortOrder === 'highToLow') return (b.monthlyCost || 0) - (a.monthlyCost || 0);
      return 0;
    });

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchPlaces();
        setPlaces(data);
      } catch (err) {
        console.error(err.message);
      }
    };
    loadData();
  }, []);

  // const toggleLike = (cityId) => {
  //   setLikedCities(prev => ({
  //     ...prev,
  //     [cityId]: !prev[cityId],
  //   }));
  // };

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

          <select
            className="filter-dropdown"
            value={regionFilter}
            onChange={(e) => setRegionFilter(e.target.value)}
          >
            <option value="">All Regions</option>
            <option>Europe</option>
            <option>Asia</option>
            <option>Central America</option>
            <option>South America</option>
            <option>Middle East</option>

          </select>

          <select
            className="filter-dropdown"
            value={visaFilter}
            onChange={(e) => setVisaFilter(e.target.value)}
          >
            <option value="">All Visa Durations</option>
            <option>3 Months</option>
            <option>6 Months</option>
            <option>1 Year</option>
            <option>1 Year 6 Months</option>
          </select>

          <select
            className="filter-dropdown"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="">Sort by Cost</option>
            <option value="lowToHigh">Low to High</option>
            <option value="highToLow">High to Low</option>
          </select>

          <button
            className="filter-button reset"
            onClick={() => {
              setSearchTerm('');
              setVisaFilter('');
              setRegionFilter('');
              setSortOrder('');
            }}
          >
            Reset
          </button>
        </div>
      </section>

      <div className="container" id="popular-cities">
        <div className="city-grid" >
          {filteredPlaces.map((city) => (
            <div key={city.id} className="city-card" onClick={(e) => {
                      e.stopPropagation();
                      navigate(`/city/${city.id}`);
                    }}>
              <div className="city-image-container">
                <img
                  src={city.image ? city.image : fbImage}
                  srcSet={`
                    ${(city.image ? city.image : fbImage)}?w=400 400w,
                    ${(city.image ? city.image : fbImage)}?w=800 800w
                  `}
                  sizes="(max-width: 600px) 400px, 800px"
                  alt={city.countryName}
                  className="city-image"
                  loading="lazy"
                  decoding="async"
                />
                <div className="overlay-top">
                  <h3 className="overlay-city-name">{city.countryName}</h3>
                </div>
              </div>

              <div className="city-info">
                <div className="city-meta">
                  <span className="price">${city.monthlyCost}/monthly</span>
                  <span className="temp">{city.climate}°C</span>
                  <span className="aqi">
                    {city.visaDuration}
                    <FontAwesomeIcon icon={faCcVisa} className="mr-2" />
                  </span>
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
                  {/* <button
                    className="like-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleLike(city.id);
                    }}
                  >
                    <FontAwesomeIcon icon={likedCities[city.id] ? fasFaHeart : farFaHeart} />
                  </button> */}
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
