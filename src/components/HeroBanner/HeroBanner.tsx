import React from 'react';
import './HeroBanner.scss';

const HeroBanner: React.FC = () => {
  return (
    <section className="hero-banner" style={{backgroundImage: 'url(/banner.png)'}}>
      <div className="banner-content">
        <div className="banner-text">
          <h1 className="banner-title">
            Venha conhecer nossas promoções
          </h1>
          <h2 className="banner-subtitle">
            50% Off nos produtos
          </h2>
          <button className="banner-button">
            Ver produto
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
