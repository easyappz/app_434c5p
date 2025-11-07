import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer" data-easytag="footer-react/src/components/Footer.js">
      <div className="footer-container" data-easytag="footer-container-react/src/components/Footer.js">
        <p>&copy; 2023 Classifieds Board. All rights reserved.</p>
        <p data-easytag="contact-react/src/components/Footer.js">Contact us: info@classifieds.com</p>
      </div>
    </footer>
  );
};

export default Footer;