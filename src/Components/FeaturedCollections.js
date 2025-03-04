import React, { useState } from "react";
import "./FeaturedCollections.css";
import { FaHeart, FaRegHeart } from 'react-icons/fa'; // Importing heart icons
import { product1, product2, product3, product4, product5, product6, product7, product8, product9, product10 } from '../assets/assets';

const FeaturedCollections = () => {
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
    { id: 10, image: product10, name: "Leaf Diamond Ring", price: "$499.99 " }
  ];

  const [liked, setLiked] = useState(Array(products.length).fill(false)); // Dynamically initializing based on products array

  const toggleHeart = (index) => {
    const newLiked = [...liked];
    newLiked[index] = !newLiked[index]; // Toggle the heart status for the clicked product
    setLiked(newLiked);
  };

  return (
    <div className="featured-collections">
      <h2>Featured Men's Collections</h2>
      <div className="collection-grid">
        {products.map((product, index) => (
          <div className="collection-item" key={product.id}>
            <div className="heart-icon" onClick={() => toggleHeart(index)}>
              {liked[index] ? <FaHeart className="heart-size" color="red" /> : <FaRegHeart className="heart-size" color="gray" />}
            </div>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
      <button className="see-all-products">See All Products</button>
    </div>
    
  );
 

};

export default FeaturedCollections;
