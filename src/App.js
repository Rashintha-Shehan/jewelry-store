import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext"; // Import context
import Navbar from "./Components/Navbar";
import HomePage from "./Pages/HomePage";
import Features from "./Components/Features";
import Footer from "./Components/Footer";
import FeaturedCollections from "./Components/FeaturedCollections";
import CollectionBanner from "./Components/CollectionBanner";
import AboutUs from "./Pages/AboutUs";
import ContactUs from "./Pages/ContactUs";
import ProductPage from "./Pages/ProductPage ";
import AllProduct from "./Pages/AllProduct";
import Watch from "./Components/Watch";

const App = () => {
  return (
    <CartProvider> {/* Wrap entire app */}
      <Router>
        <Navbar />
        <Routes>
          <Route
            path="/HomePage"
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
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/product/:productId" element={<ProductPage />} />
          <Route path="/AllProduct" element={<AllProduct />} />
          <Route path="/Watch" element={<Watch />} />
        </Routes>
        <Footer /> {/* Place the Footer here after Routes */}
      </Router>
    </CartProvider>
  );
};

export default App;
