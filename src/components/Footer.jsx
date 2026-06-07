import React from 'react';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-logo">
          <span>✇</span> FLIGHTDECK
        </div>
        <p className="footer-text">
          Designed and engineered for high-altitude performance.<br/>
          Salwa Kazmi © {new Date().getFullYear()}. All Systems Online.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
