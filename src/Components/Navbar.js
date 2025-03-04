import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa"; // Phone icon
import { IoCartOutline } from "react-icons/io5"; // Cart icon

import "./Navbar.css";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Left Section: Mobile Number and Logo */}
      <div className="left-section">
        <div className="mobile-phone">
          <FaPhoneAlt className="phone-icon" />
          <span className="support-number">+94 76 123 4567</span>
        </div>
        <div className="logo">AXELS</div>
      </div>

      {/* Navigation Links */}
      <div className="navbar-container">
        <ul className="nav-links">
          <li><Link to="/demo">Home</Link></li>

          {/* Dropdown Menu for Categories */}
          <li className="dropdown" 
              onMouseEnter={() => setDropdownOpen(true)} 
              onMouseLeave={() => setDropdownOpen(false)}>
            <span className="dropdown-title">Categories ▾</span>
            {dropdownOpen && (
              <ul className="dropdown-menu">
                <li><Link to="/categories/watch">Watch</Link></li>
                <li><Link to="/categories/ring">Ring</Link></li>
                <li><Link to="/categories/necklace">Necklace</Link></li>
                <li><Link to="/categories/mens">Men's Items</Link></li>
              </ul>
            )}
          </li>

          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>

          {/* Cart Icon as a Link */}
          <li className="cart-link">
            <Link to="/cart">
              <IoCartOutline className="cart-icon" />
              <span className="cart-count">1</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
