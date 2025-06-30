import React from "react";
import { useState } from "react";
import cityData from '../../CityData.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as fasFaStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as farFaStar } from '@fortawesome/free-regular-svg-icons';

function CityPreview({ onFeedbackSubmit }) {
  const [selectedCity, setSelectedCity] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hoveredCity, setHoveredCity] = useState(null);
  const [feedbackFormInput, setFeedbackFormInput] = useState({
    name: '',
    email: '',
    country: '',
    message: '',
    rating: 0
  });

  const cities = cityData;

  const handleCityClick = (city) => {
    setSelectedCity(city);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCity(null);
  };

  const handleFeedbackFormChange = (e) => {
    const { name, value } = e.target;
    setFeedbackFormInput(prev => ({ ...prev, [name]: value }));
  };

  const handleFeedbackFormSubmit = (e) => {
    e.preventDefault();
    if (onFeedbackSubmit) {
      onFeedbackSubmit({ ...feedbackFormInput, city: selectedCity.name });
    }
    setFeedbackFormInput({ name: '', email: '', country: '', message: '', rating: 0 });
    alert('Feedback submitted!');
    closeModal();
  };

  const handleStarClick = (rating) => {
    setFeedbackFormInput(prev => ({ ...prev, rating }));
  };

  const renderStars = (rating) => {
    const totalStars = 5;
    const stars = [];

    for (let i = 1; i <= totalStars; i++) {
      if (i <= rating) {
        stars.push(
          <FontAwesomeIcon
            key={i}
            icon={fasFaStar}
            className="cursor-pointer text-yellow-400 star-icon"
            onClick={() => handleStarClick(i)}
          />
        );
      } else {
        stars.push(
          <FontAwesomeIcon
            key={i}
            icon={farFaStar}
            className="cursor-pointer text-gray-300 star-icon"
            onClick={() => handleStarClick(i)}
          />
        );
      }
    }
    return stars;
  };

  return (
    <>
      <style>{`
        .container {
          margin: 2rem auto;
          padding: 0 1rem;
        }
        .section-title {
          font-size: 2rem;
          font-weight: bold;
          margin-bottom: 1rem;
        }
        .city-grid {
          display: grid;
          gap: 1.5rem;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        }
        @media (min-width: 768px) {
          .city-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (min-width: 992px) {
          .city-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        .city-card {
          background-color: white;
          color: black;
          border-radius: 0.5rem;
          overflow: hidden;
          box-shadow: 0 4px 6px rgba(0,0,0,0.1);
          cursor: pointer;
          transition: all 0.3s;
          position: relative;
          width: 100%;
        }
        .city-card:hover {
          transform: scale(1.02);
        }
        .city-image-container {
          position: relative;
        }
        .city-image {
          width: 100%;
          height: 160px;
          object-fit: cover;
        }
        .overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: bold;
        }
        .city-info {
          padding: 1rem;
        }
        .city-name {
          font-size: 1.25rem;
          font-weight: bold;
        }
        .city-tagline {
          color: #555;
        }
        .modal-backdrop {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
        }
        .modal {
          background: white;
          width: 90%;
          max-width: 800px;
          border-radius: 0.75rem;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          max-height: 90vh;
          overflow-y: auto;
          color: black;
        }
        .modal-content {
          padding: 1.5rem;
        }
        .modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
        }
        .modal-title {
          font-size: 1.75rem;
          font-weight: bold;
        }
        .modal-tagline {
          color: #666;
        }
        .modal-close-button,
        .modal-close-button-main {
          background: none;
          border: none;
          font-size: 1.25rem;
          cursor: pointer;
        }
        .modal-close-button-main {
          background-color: #2563eb;
          color: white;
          border: none;
          padding: 0.75rem 1.5rem;
          border-radius: 0.5rem;
          cursor: pointer;
          margin-top: 1.5rem;
          transition: all 0.2s ease;
        }
        .modal-close-button-main:hover {
          background-color: #1d4ed8;
          transform: translateY(-1px);
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        .feedback-section-wrapper {
          background-color: #f9fafb;
          border-radius: 0.75rem;
          padding: 1.5rem;
          margin-top: 2rem;
          box-shadow: 0 4px 8px rgba(0,0,0,0.1);
        }
        .feedback-section-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.5rem;
          border-bottom: 1px solid #eee;
          padding-bottom: 1rem;
        }
        .feedback-city-image {
          width: 150px;
          height: 150px;
          object-fit: cover;
          border-radius: 0.5rem;
        }
        .feedback-city-details {
          flex-grow: 1;
        }
        .feedback-city-name {
          font-size: 1.5rem;
          font-weight: bold;
          margin-bottom: 0.2rem;
          color: #0f172a;
        }
        .feedback-rating-container {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-top: 1rem;
          margin-bottom: 1.5rem;
        }
        .feedback-ratings-title {
          font-size: 1.2rem;
          font-weight: 600;
          color: #333;
          white-space: nowrap;
        }
        .stars-container {
          display: flex;
          gap: 0.2rem;
        }
        .star-icon {
          font-size: 1.8rem;
          transition: transform 0.2s;
        }
        .star-icon:hover {
          transform: scale(1.2);
        }
        .feedback-form {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-top: 1.5rem;
        }
        .feedback-form input, .feedback-form select, .feedback-form textarea {
          padding: 0.75rem;
          border: 1px solid #ddd;
          border-radius: 0.5rem;
          background-color: white;
          transition: border-color 0.2s;
        }
        .feedback-form input:focus, 
        .feedback-form select:focus, 
        .feedback-form textarea:focus {
          outline: none;
          border-color: #2563eb;
          box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.1);
        }
        .btn {
          background-color: #2563eb;
          color: white;
          border: none;
          padding: 0.75rem 1.5rem;
          border-radius: 0.5rem;
          cursor: pointer;
          margin-bottom: 1rem;
          font-weight: 500;
          transition: all 0.2s ease;
        }
        .btn:hover {
          background-color: #1d4ed8;
          transform: translateY(-1px);
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        .feedback-heading {
          font-size: 1.8rem;
          font-weight: bold;
          display: flex;
          align-items: center;
          gap: 0.6rem;
          color: #2563eb;
          margin-bottom: 0.5rem;
          border-bottom: 2px solid #2563eb;
          padding-bottom: 0.4rem;
        }
      `}</style>
      <section className="filter-section">
  <div className="filter-toolbar">
    <span className="filter-label">🔍 Filters:</span>

    <select className="filter-dropdown">
      <option>All Regions</option>
      <option>Europe</option>
      <option>Asia</option>
      <option>Americas</option>
      <option>Africa</option>
    </select>

    <select className="filter-dropdown">
      <option>Cost of Living</option>
      <option>Low to High</option>
      <option>High to Low</option>
    </select>

    <select className="filter-dropdown">
      <option>Internet Speed</option>
      <option>Fastest First</option>
      <option>Slowest First</option>
    </select>

    <select className="filter-dropdown">
      <option>Visa Duration</option>
      <option>Short to Long</option>
      <option>Long to Short</option>
    </select>

    <button className="filter-button search">Search</button>
    <button className="filter-button reset">Reset</button>
  </div>

  <style>{`
    .filter-section {
      width: 100%;
      background-color: #f8fafc;
      padding: 0.75rem 0.5rem;
      margin-top: 0rem;
    }
      .section-title {
          font-size: 2rem;
          font-weight: bold;
          margin-bottom: 1rem;
          color: black; /* Add this line */
        }

    .filter-toolbar {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      gap: 1rem;
      max-width: 1400px;
      margin: auto;
      padding: 0 1rem;
    }

    .filter-label {
      font-weight: 600;
      font-size: 1rem;
      color: #0f172a;
      white-space: nowrap;
    }

    .filter-dropdown {
      flex: 1 1 160px;
      padding: 0.55rem 0.75rem;
      border-radius: 8px;
      border: 1px solid #cbd5e1;
      font-size: 1rem;
      background-color: white;
      color: #0f172a;
      transition: border-color 0.3s;
    }

    .filter-dropdown:focus {
      border-color: #2563eb;
      outline: none;
      box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.2);
    }

    .filter-button {
      padding: 0.55rem 1.2rem;
      border-radius: 8px;
      font-size: 0.95rem;
      font-weight: 600;
      border: none;
      cursor: pointer;
      transition: background-color 0.3s, transform 0.2s;
    }

    .filter-button.search {
      background-color: #2563eb;
      color: white;
    }

    .filter-button.search:hover {
      background-color: #1d4ed8;
      transform: translateY(-1px);
    }

    .filter-button.reset {
      background-color: #e2e8f0;
      color: #1e293b;
    }

    .filter-button.reset:hover {
      background-color: #cbd5e1;
      transform: translateY(-1px);
    }

    @media (max-width: 640px) {
      .filter-toolbar {
        flex-direction: column;
        align-items: stretch;
      }

      .filter-button {
        width: 100%;
      }
        .container {
  margin: 1rem auto; /* reduced from 2rem */
  padding: 0 1rem;
}

    }
  `}</style>
</section>

      <div id="popular-cities" className="container">
        <h2 className="section-title">Popular Cities for Digital Nomads</h2>
        <div className="city-grid">
          {cities.map((city) => (
            <div
              key={city.id}
              className="city-card"
              onClick={() => handleCityClick(city)}
              onMouseEnter={() => setHoveredCity(city.id)}
              onMouseLeave={() => setHoveredCity(null)}
            >
              <div className="city-image-container">
                <img
                  src={city.image}
                  alt={city.name}
                  className="city-image"
                  loading="lazy"
                />
                {hoveredCity === city.id && <div className="overlay">{city.name}</div>}
              </div>
              <div className="city-info">
                <h3 className="city-name">{city.name}</h3>
                <p className="city-tagline">{city.tagline}</p>
              </div>
            </div>
          ))}
        </div>

        {isModalOpen && selectedCity && (
          <div className="modal-backdrop">
            <div className="modal">
              <div className="modal-content">
                <div className="modal-header">
                  <div>
                    <h2 className="modal-title">{selectedCity.name}</h2>
                    <p className="modal-tagline">{selectedCity.tagline}</p>
                  </div>
                  <button onClick={closeModal} className="modal-close-button">
                    X
                  </button>
                </div>

                <p>{selectedCity.description}</p>

                <div className="feedback-section-wrapper">
                  <div className="feedback-section-header">
                    <img
                      src={selectedCity.image}
                      alt={selectedCity.name}
                      className="feedback-city-image"
                      loading="lazy"
                    />
                    <div className="feedback-city-details">
                      <h3 className="feedback-city-name">{selectedCity.name}</h3>
                      <p className="feedback-city-tagline">{selectedCity.tagline}</p>
                    </div>
                  </div>
                  
                  <div className="feedback-rating-container">
                    <h3 className="feedback-ratings-title">Nomad Ratings</h3>
                    <div className="stars-container">
                      {renderStars(feedbackFormInput.rating)}
                    </div>
                  </div>

                  <form className="feedback-form" onSubmit={handleFeedbackFormSubmit}>
                    <h1 className="feedback-heading">
                      Your Feedback
                    </h1>

                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={feedbackFormInput.name}
                      onChange={handleFeedbackFormChange}
                      required
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={feedbackFormInput.email}
                      onChange={handleFeedbackFormChange}
                      required
                    />
                    <select name="country" value={feedbackFormInput.country} onChange={handleFeedbackFormChange} required>
                      <option value="">Current Country</option>
                      {cities.map((city) => (
                        <option key={city.name} value={city.name.split(' ')[0].toLowerCase()}>
                          {city.name.split(' ')[0]}
                        </option>
                      ))}
                    </select>
                    <textarea
                      name="message"
                      placeholder="Tell us about your situation..."
                      value={feedbackFormInput.message}
                      onChange={handleFeedbackFormChange}
                      required
                    />
                    <button className="btn" type="submit">
                      Send Inquiry
                    </button>
                  </form>
                </div>

                
                 
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default React.memo(CityPreview);
