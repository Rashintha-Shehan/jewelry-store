import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; 
import "./AllProduct.css";
import { FaHeart, FaRegHeart } from 'react-icons/fa'; 
import { product1, product2, product3, product4, product5, product6, product7, product8, product9, product10,
  watch1, watch2, watch3, watch4, watch5, watch6, watch7, watch8 } from '../assets/assets';

const AllProduct = () => {
  const navigate = useNavigate(); // Initialize navigation function

  const products = [
    { id: 1, image: product1, name: "Silver Chain Watch", price: "$199.99 " },
    { id: 2, image: product2, name: "Simply Square Watch", price: "$199.99 " },
    { id: 3, image: product3, name: "Gold Steel Watch", price: "$159.99 " },
    { id: 4, image: product4, name: "Femme Chronos Watch", price: "$199.99 " },
    { id: 5, image: product5, name: "Gold Pearl Ring", price: "$499.99 " },
    { id: 6, image: product6, name: "Leaf Diamond Ring", price: "$499.99 " },
    { id: 7, image: product7, name: "Gold Steel Watch", price: "$159.99 " },
    { id: 8, image: product8, name: "Femme Chronos Watch", price: "$199.99 " },
    { id: 9, image: product9, name: "Gold Pearl Ring", price: "$499.99 " },
    { id: 10, image: product10, name: "Leaf Diamond Ring", price: "$499.99 " },
    { id: 11, image: watch1, name: "Stainless Steel Watch", price: "$249.99" },
  { id: 12, image: watch2, name: "Luxury Gold Watch", price: "$299.99" },
  { id: 13, image: watch3, name: "Classic Leather Watch", price: "$179.99" },
  { id: 14, image: watch4, name: "Sporty Digital Watch", price: "$129.99" },
  { id: 15, image: watch5, name: "Minimalist Silver Watch", price: "$199.99" },
  { id: 16, image: watch6, name: "Modern Smart Watch", price: "$399.99" },
  { id: 17, image: watch7, name: "Gold Plated Watch", price: "$499.99" },
  { id: 18, image: watch8, name: "Elegant Rose Gold Watch", price: "$249.99" },
  ];

  const [liked, setLiked] = useState(Array(products.length).fill(false));

  const toggleHeart = (index) => {
    const newLiked = [...liked];
    newLiked[index] = !newLiked[index];
    setLiked(newLiked);
  };

  // Function to handle Buy Now click
  const handleBuyNow = (productId) => {
    navigate(`/product/${productId}`); // Navigate to ProductPage with product ID
  };

  return (
    <div className="all-products">
      <h2>All Products</h2>
      <div className="product-grid">
        {products.map((product, index) => (
          <div className="product-item" key={product.id}>
            <div className="heart-icon" onClick={() => toggleHeart(index)}>
              {liked[index] ? <FaHeart className="heart-size" color="red" /> : <FaRegHeart className="heart-size" color="gray" />}
            </div>
            <Link to={`/product/${product.id}`}>
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </Link>
            {/* Buy Now Button with Navigation */}
            <button className="buy-now" onClick={() => handleBuyNow(product.id)}>
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProduct;
