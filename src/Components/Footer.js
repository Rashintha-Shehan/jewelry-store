import React from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaShoppingBag, FaInfoCircle, FaQuestionCircle, FaHome } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Newsletter Section */}
        <div className="newsletter">
          <h3><FaEnvelope /> Newsletter</h3>
          <p>Get our latest news and promo updates directly to your email address every month.</p>
          <input type="email" placeholder="Enter your email address ..." />
          <button>Subscribe</button>
        </div>

        {/* Location Section */}
        <div className="location">
          <h3><FaMapMarkerAlt /> Location</h3>
          <p>123 Main Street, Chicago, IL 60601, United States</p>
        </div>

        {/* Contact Information Section */}
        <div className="contact">
          <h3><FaPhoneAlt /> Contact</h3>
          <p>Phone: +1 (234) 567 890</p>
          <p>Email: hello@peterdraw.co</p>
        </div>

        {/* Products Section */}
        <div className="products">
          <h3><FaShoppingBag /> Products</h3>
          <ul>
            <li>Earrings</li>
            <li>Necklace</li>
            <li>Bracelet</li>
            <li>Ring</li>
            <li>Brooch</li>
            <li>Men’s Jewelry</li>
          </ul>
        </div>

        {/* Company Section */}
        <div className="company">
          <h3><FaInfoCircle /> Company</h3>
          <ul>
            <li>About Us</li>
            <li>Testimonials</li>
            <li>Best Seller</li>
            <li>New Arrivals</li>
            <li>Terms</li>
            <li>Licenses</li>
          </ul>
        </div>

        {/* Support Section */}
        <div className="support">
          <h3><FaQuestionCircle /> Support</h3>
          <ul>
            <li>Size Charts</li>
            <li>Payment Guide</li>
            <li>Help Centre</li>
            <li>Privacy Policy</li>
            <li>Return Policy</li>
            <li>FAQs</li>
            <li>Terms & Conditions</li>
            <li>Sitemap</li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p><FaHome /> &copy; 2025 PeterDraw. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer; 
