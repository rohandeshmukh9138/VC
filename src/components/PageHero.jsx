import React from 'react';

const PageHero = ({ title, subtitle, image }) => {
  return (
    <div className="page-hero" style={{
      backgroundImage: `linear-gradient(to right, rgba(15, 15, 26, 0.9), rgba(15, 15, 26, 0.5)), url(${image})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      padding: '180px 0 100px',
      textAlign: 'center',
      position: 'relative'
    }}>
      <div className="container">
        <h1 className="reveal" style={{ fontSize: '3rem', fontWeight: '900', color: '#FFFFFF', marginBottom: '20px' }}>
          {title}
        </h1>
        <p className="reveal" style={{ fontSize: '1.2rem', color: '#F4F6F9', maxWidth: '800px', margin: '0 auto' }}>
          {subtitle}
        </p>
      </div>
      <div style={{
        position: 'absolute',
        bottom: '0',
        left: '0',
        width: '100%',
        height: '4px',
        background: 'linear-gradient(to right, transparent, #FF6B00, transparent)'
      }}></div>
    </div>
  );
};

export default PageHero;
