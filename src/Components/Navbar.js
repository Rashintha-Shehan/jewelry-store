import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { useCart } from "../context/CartContext"; // Import context
import "./Navbar.css";


const Navbar = () => {
  const { likedProducts } = useCart(); // Get liked products from context
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="left-section">
        <div className="mobile-phone">
          <FaPhoneAlt className="phone-icon" />
          <span className="support-number">+94 78 35 69 490</span>
        </div>
        <div className="logo">AXELS</div>
      </div>

      <div className="navbar-container">
        <ul className="nav-links">
          <li><Link to="/HomePage">Home</Link></li>
          <li className="dropdown" 
              onMouseEnter={() => setDropdownOpen(true)} 
              onMouseLeave={() => setDropdownOpen(false)}>
            <span className="dropdown-title">Categories ▾</span>
            {dropdownOpen && (
              <ul className="dropdown-menu">
                <li><Link to="/Watch">Watch</Link></li>
                <li><Link to="/categories/ring">Ring</Link></li>
                <li><Link to="/categories/necklace">Necklace</Link></li>
                <li><Link to="/categories/mens">Men's Items</Link></li>
              </ul>
            )}
          </li>

          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>

          {/* Cart Icon with Liked Count */}
          <li className="cart-link">
            <Link to="/cart">
              <IoCartOutline className="cart-icon" />
              {likedProducts.length > 0 && <span className="cart-count">{likedProducts.length}</span>}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
