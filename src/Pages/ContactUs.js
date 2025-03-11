import React, { useState } from 'react';
import './ContactUs.css';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Your message has been sent!');
  };

  return (
    <div className="contact-us">
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>
          At Axels, we value your feedback, inquiries, and any assistance you may need. Our dedicated team is ready to provide you with the support you require.
        </p>
        <p>
          Whether you have questions about our jewelry collections, need assistance with an order, or simply want to share your thoughts, please don't hesitate to reach out to us.
        </p>
      </div>

      <div className="contact-content">
        <div className="contact-info">
          <h3>Customer Support</h3>
          <p>If you have any questions or need assistance with your order, feel free to contact us:</p>
          <p>Email: <a href="mailto:support@axelsjewelry.com">support@axelsjewelry.com</a></p>
          <p>Phone: <a href="tel:+18001234567">1-800-123-4567</a></p>
          <p>Mon-Fri: 9:00 AM - 6:00 PM (EST)</p>

          <h3>Visit Our Showroom</h3>
          <p>123 Main Street, City, State, ZIP</p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>

      <div className="social">
        <h3>Let's Connect!</h3>
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
