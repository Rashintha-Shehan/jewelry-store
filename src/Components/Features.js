import React from 'react';
import './Features.css';
import { DiamondIcon, SecureIcon, DeliveryIcon, PackageIcon } from '../assets/assets'; // Make sure to import your icons

const Features = () => {
  return (
    <div className="features-container">
      <div className="feature-item">
        <img src={DiamondIcon} alt="Diamond Icon" className="feature-icon" />
        <h3>Certified</h3>
        <p>Certificates of authenticity</p>
      </div>
      <div className="feature-item">
        <img src={SecureIcon} alt="Secure Icon" className="feature-icon" />
        <h3>Secure</h3>
        <p>Certified marketplace</p>
      </div>
      <div className="feature-item">
        <img src={DeliveryIcon} alt="Delivery Icon" className="feature-icon" />
        <h3>Shipping</h3>
        <p>Free, fast, and reliable</p>
      </div>
      <div className="feature-item">
        <img src={PackageIcon} alt="Package Icon" className="feature-icon" />
        <h3>Transparent</h3>
        <p>Hassle-free return policy</p>
      </div>
    </div>
  );
};

export default Features;
