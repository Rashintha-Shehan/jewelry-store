import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { product1, product2, product3, product4, product5, product6, product7, product8, product9, product10 } from "../assets/assets"; // Import individual products
import "./ProductPage.css";

const ProductPage = () => {
  const { productId } = useParams(); // Extract product ID from URL

  const products = [
    { id: 1, image: product1, name: "Silver Chain Watch", price: 199.99 },
    { id: 2, image: product2, name: "Simply Square Watch", price: 199.99 },
    { id: 3, image: product3, name: "Gold Steel Watch", price: 159.99 },
    { id: 4, image: product4, name: "Femme Chronos Watch", price: 199.99 },
    { id: 5, image: product5, name: "Gold Pearl Ring", price: 499.99 },
    { id: 6, image: product6, name: "Leaf Diamond Ring", price: 499.99 },
    { id: 7, image: product7, name: "Gold Steel Watch", price: 159.99 },
    { id: 8, image: product8, name: "Femme Chronos Watch", price: 199.99 },
    { id: 9, image: product9, name: "Gold Pearl Ring", price: 499.99 },
    { id: 10, image: product10, name: "Leaf Diamond Ring", price: 499.99 },
    { id: 1, image: product1, name: "Silver Chain Watch", price: 199.99 },
    { id: 2, image: product2, name: "Simply Square Watch", price: 199.99 }
    
  ];

  const product = products.find((prod) => prod.id === parseInt(productId));

  // Declare the hooks before the conditional check
  const [shippingCost] = useState(15.99); // Example shipping cost
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState(""); // New state for email
  const [deliveryInstructions, setDeliveryInstructions] = useState(""); // New state for delivery instructions

  // Check if product is not found and return early
  if (!product) {
    return <h2>Product not found</h2>;
  }

  // Calculate total price and format to 2 decimal places
  const totalPrice = (product.price + shippingCost).toFixed(2);

  // Handle input changes
  const handleAddressChange = (e) => setAddress(e.target.value);
  const handlePhoneChange = (e) => setPhone(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value); // Handle email input change
  const handleDeliveryInstructionsChange = (e) => setDeliveryInstructions(e.target.value); // Handle delivery instructions input change

  return (
    <div className="product-page">
      <div className="product-details">
        <div className="product-images">
          <img src={product.image} alt={product.name} />
          <div className="additional-images">
            <img src={product.image} alt={product.name} />
            <img src={product.image} alt={product.name} />
          </div>
        </div>

        <div className="product-info">
          <h2>{product.name}</h2>
          <p className="price">${product.price}</p>
          
          <div className="shipping-details">
            <h3>Shipping Details</h3>
            <form>
              <div className="form-group">
                <label htmlFor="address">Address</label>
                <input
                  type="text"
                  id="address"
                  value={address}
                  onChange={handleAddressChange}
                  placeholder="Enter your address"
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="text"
                  id="phone"
                  value={phone}
                  onChange={handlePhoneChange}
                  placeholder="Enter your phone number"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={handleEmailChange}
                  placeholder="Enter your email"
                />
              </div>
              <div className="form-group">
                <label htmlFor="delivery-instructions">Delivery Instructions</label>
                <textarea
                  id="delivery-instructions"
                  value={deliveryInstructions}
                  onChange={handleDeliveryInstructionsChange}
                  placeholder="Enter any special delivery instructions"
                />
              </div>
            </form>
          </div>

          <div className="pricing-details">
            <h3>Pricing Summary</h3>
            <p>Product Price: ${product.price.toFixed(2)}</p>
            <p>Shipping Cost: ${shippingCost.toFixed(2)}</p>
            <p><strong>Total Price: ${totalPrice}</strong></p>
          </div>

          <button className="proceed-payment">Proceed to Payment</button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
