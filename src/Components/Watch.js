import React, { useState } from 'react';
import './Watch.css';
import { watch1, watch2, watch3, watch4, watch5, watch6, watch7, watch8,watch9,watch10 } from '../assets/assets';

const Watch = () => {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  const watches = [
    { id: 1, image: watch1, price: '$199', rating: 4 },
    { id: 2, image: watch2, price: '$299', rating: 5 },
    { id: 3, image: watch3, price: '$399', rating: 3 },
    { id: 4, image: watch4, price: '$499', rating: 4 },
    { id: 5, image: watch5, price: '$599', rating: 5 },
    { id: 6, image: watch6, price: '$699', rating: 4 },
    { id: 7, image: watch7, price: '$799', rating: 3 },
    { id: 8, image: watch8, price: '$899', rating: 4 },
    { id: 9, image: watch9, price: '$299', rating: 2 },
    { id: 10, image: watch10, price: '$400', rating: 3 },
  ];

  const handleAddToCart = (watch) => {
    setCart([...cart, watch]);
    alert(`${watch.price} Watch added to cart`);
  };

  const handleAddToWishlist = (watch) => {
    setWishlist([...wishlist, watch]);
    alert(`${watch.price} Watch added to wishlist`);
  };

  const renderStars = (rating) => {
    let stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <span key={i} className={i < rating ? 'star filled' : 'star'}>★</span>
      );
    }
    return stars;
  };

  return (
    <div className="watch-container">
      {watches.map(watch => (
        <div key={watch.id} className="watch-item">
          <img src={watch.image} alt={`Watch ${watch.id}`} className="watch-image" />
          <div className="watch-info">
            <p className="watch-price">{watch.price}</p>
            <div className="watch-rating">
              {renderStars(watch.rating)}
            </div>
            <button
              className="buy-now"
              onClick={() => handleAddToCart(watch)}
            >
              Add to Cart
            </button>
            <button
              className="wishlist-btn"
              onClick={() => handleAddToWishlist(watch)}
            >
              Add to Wishlist
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Watch;
