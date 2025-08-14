import React from 'react';
import './HeroBanner.scss';

const HeroBanner: React.FC = () => {
  return (
    <section className="hero-banner">
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
      
      {/* Overlay com efeito de neon */}
      <div className="banner-overlay">
        <div className="neon-signs">
          <div className="neon-sign neon-black-friday">BLACK FRIDAY</div>
          <div className="neon-sign neon-friday">FRIDAY</div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
