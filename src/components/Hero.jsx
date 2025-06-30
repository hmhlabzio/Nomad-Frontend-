import React from 'react';

function Hero() {
  const scrollToPopularCities = () => {
    const section = document.getElementById('popular-cities');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-banner">
      <h1 className="hero-title">
        Find your next country to work remotely with a Digital Nomad Visa.
      </h1>
      <p className="hero-subtitle">
        Smart tools & global insights for modern nomads 🌍✨
      </p>
      <button onClick={scrollToPopularCities} className="hero-button">
        🌐 Browse Countries
      </button>

<style>{`
  .hero-banner {
    width: 100%;
    padding: 2rem 1rem;
    background: linear-gradient(to right,rgb(165, 198, 233),rgb(111, 177, 224),rgb(11, 134, 223));
    text-align: center;
    margin-top: 80px; /* 👈 this ensures it starts just below the sticky header */
  }

  .hero-title {
    font-size: 1.8rem;
    font-weight: 700;
    color: #0f172a;
    max-width: 1000px;
    margin: 0 auto 0.8rem;
  }

  @media (min-width: 768px) {
    .hero-title {
      font-size: 2.4rem;
    }
  }

  .hero-subtitle {
    font-size: 1rem;
    color: #4b5563;
    margin-bottom: 1.5rem;
  }

  .hero-button {
    background-color: #0f172a;
    color: white;
    padding: 0.6rem 1.25rem;
    border-radius: 8px;
    font-weight: 600;
    border: 2px solid #0ea5e9;
    transition: all 0.3s ease;
    cursor: pointer;
  }

  .hero-button:hover {
    background-color: #0ea5e9;
    border-color: #0ea5e9;
  }
`}</style>

    </section>
  );
}

export default Hero;
