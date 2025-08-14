import React from 'react';
import './Partners.scss';

const Partners: React.FC = () => {
  return (
    <section className="partners">
      <div className="partners-container">
        <div className="partner-card">
          <div className="partner-content">
            <h3 className="partner-title">Parceiros</h3>
            <p className="partner-description">
              Lorem ipsum dolor sit amet, consectetur
            </p>
            <button className="partner-button">CONFIRA</button>
          </div>
        </div>
        
        <div className="partner-card">
          <div className="partner-content">
            <h3 className="partner-title">Parceiros</h3>
            <p className="partner-description">
              Lorem ipsum dolor sit amet, consectetur
            </p>
            <button className="partner-button">CONFIRA</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
