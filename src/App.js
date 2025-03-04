import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Ensure Route is imported
import Navbar from "./Components/Navbar";
import HomePage from "./Pages/HomePage";
import Features from "./Components/Features";
import Footer from "./Components/Footer";
import FeaturedCollections from "./Components/FeaturedCollections";
import CollectionBanner from "./Components/CollectionBanner";
import AboutUs from "./Pages/AboutUs"; // Ensure 'U' is uppercase


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HomePage />
              <Features />
              <FeaturedCollections />
              <CollectionBanner />
            </>
          }
        />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
