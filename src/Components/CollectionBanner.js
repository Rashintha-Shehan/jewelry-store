import React from "react";
import "./CollectionBanner.css";
import Banner from "../assets/Banner.jpg"; // Import the banner image

const CollectionBanner = () => {
  return (
    <div className="collection-banner">
      <img src={Banner} alt="Minimal Me Collection" />
      <div className="banner-content">
        <h1>COLLECTION</h1>
        <h2>Minimal Me</h2>
        <p>Introducing our new minimalist collection. Suitable for the active yet elegant.</p>
        <button className="shop-now">SHOP NOW</button>
      </div>
    </div>
  );
};

export default CollectionBanner;
