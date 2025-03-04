import React from 'react';
import './HomePage.css';
import { Homepage2 } from '../assets/assets.js';  // Only import Homepage1 now

const HomePage = () => {
  return (
    <div className="homepage-container">
      <div className="left-half">
        <h1>Live in Glamour</h1>
        <p>Reach the perfect glamour style with our exclusive jewelry collections.</p>
        <button className="shop-now">SHOP NOW</button>
      </div>
      <div className="right-half">
        <div className="right-top">
          <img src={Homepage2} alt="Jewelry Collection 1" className="homepage-img" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
