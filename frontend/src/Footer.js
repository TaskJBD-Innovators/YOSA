// src/Footer.js
import React from 'react';
import './Footer.css';
import yosaIcon from './Assets/yosa.png'; 
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section logo">
          <img src={yosaIcon} alt="Yosa Logo" className="yosa-icon" />
          <p>10k</p>
          <p>Worldwide Client Already Connected</p>
        </div>
        <div className="footer-section quick-link">
          <h3>Quick Link</h3>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Blog Post</li>
            <li>Photo Gallery</li>
          </ul>
        </div>
        <div className="footer-section get-in-touch">
          <h3>Get In Touch</h3>
          <ul>
            <li>Contact Us</li>
            <li>Our Services</li>
          </ul>
        </div>
        <div className="footer-section address">
          <h3>Address</h3>
          <p>2464 Royal Ln. Mesa, New Jersey 45463</p>
        </div>
        <div className="footer-section newsletter">
          <h3>Newsletter</h3>
          <input type="email" placeholder="Enter Your Email" />
          <button type="button">Subscribe</button>
          <p>Your email is safe with us, we don't spam.</p>
          <div className="social-icons">
            <i className="fab fa-twitter"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-pinterest"></i>
            <i className="fab fa-youtube"></i>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Copyright 2024. JUSTINE ADDO</p>
      </div>
    </footer>
  );
};

export default Footer;