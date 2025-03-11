import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [likedProducts, setLikedProducts] = useState([]);

  const toggleLike = (product) => {
    setLikedProducts((prev) => {
      if (prev.find((item) => item.id === product.id)) {
        return prev.filter((item) => item.id !== product.id); // Remove if already liked
      } else {
        return [...prev, product]; // Add if not liked
      }
    });
  };

  return (
    <CartContext.Provider value={{ likedProducts, toggleLike }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
