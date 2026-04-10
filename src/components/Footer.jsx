import React from 'react';
import { FaInstagram, FaFacebook, FaYoutube } from 'react-icons/fa';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer-section">
      <div className="container footer-content">
        <div className="footer-brand">
          <h2 className="footer-title">Star Dance Studio ✨</h2>
          <p className="footer-tagline">Where Passion turns into Performance! 💃</p>
        </div>
        
        <div className="footer-socials">
          <a href="#" className="social-icon"><FaInstagram /></a>
          <a href="#" className="social-icon"><FaFacebook /></a>
          <a href="#" className="social-icon"><FaYoutube /></a>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Star Dance Studio. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
