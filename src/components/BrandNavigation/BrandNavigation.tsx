import React from 'react';
import './BrandNavigation.scss';

const BrandNavigation: React.FC = () => {
  const brands = [
    { name: 'Converse', logo: '/logo.png' },
    { name: 'Converse', logo: '/logo.png' },
    { name: 'Converse', logo: '/logo.png' },
    { name: 'Converse', logo: '/logo.png' },
    { name: 'Converse', logo: '/logo.png' }
  ];

  return (
    <section className="brand-navigation">
      <div className="brand-navigation-container">
        <h2 className="brand-navigation-title">Navegue por marcas</h2>
        <div className="brand-grid">
          {brands.map((brand, index) => (
            <div key={index} className="brand-item">
              <div className="brand-circle">
                <img src={brand.logo} alt={brand.name} className="brand-logo" />
              </div>
              <span className="brand-name">{brand.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandNavigation;