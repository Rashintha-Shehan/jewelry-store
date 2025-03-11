import React from "react";
import { Link } from "react-router-dom";
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { useCart } from "../context/CartContext"; // Import context
import "./FeaturedCollections.css";
import { product1, product2, product3, product4, product5, product6, product7, product8, product9, product10 } from '../assets/assets';

const FeaturedCollections = () => {
  const { likedProducts, toggleLike } = useCart(); // Get liked products and function from context

  const products = [
    { id: 1, image: product1, name: "Silver Chain Watch", price: "$199.99" },
    { id: 2, image: product2, name: "Simply Square Watch", price: "$199.99" },
    { id: 3, image: product3, name: "Gold Steel Watch", price: "$159.99" },
    { id: 4, image: product4, name: "Femme Chronos Watch", price: "$199.99" },
    { id: 5, image: product5, name: "Gold Pearl Ring", price: "$499.99" },
    { id: 6, image: product6, name: "Leaf Diamond Ring", price: "$499.99" },
    { id: 7, image: product7, name: "Gold Steel Watch", price: "$159.99" },
    { id: 8, image: product8, name: "Femme Chronos Watch", price: "$199.99" },
    { id: 9, image: product9, name: "Gold Pearl Ring", price: "$499.99" },
    { id: 10, image: product10, name: "Leaf Diamond Ring", price: "$499.99" }
  ];

  return (
    <div className="featured-collections">
      <h2>Featured Men's Collections</h2>
      <div className="collection-grid">
        {products.map((product) => {
          const isLiked = likedProducts.some((item) => item.id === product.id);
          return (
            <div className="collection-item" key={product.id}>
              <div className="heart-icon" onClick={() => toggleLike(product)}>
                {isLiked ? <FaHeart className="heart-size" color="red" /> : <FaRegHeart className="heart-size" color="gray" />}
              </div>
              <Link to={`/product/${product.id}`}>
                <img src={product.image} alt={product.name} />
              </Link>
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </div>
          );
        })}
      </div>
      <Link to="/AllProduct">
        <button className="see-all-products">See All Products</button>
      </Link>
    </div>
  );
};

export default FeaturedCollections;
