import React, { useState } from 'react';
import './styles.css'; // Import custom CSS for styling
import Navbar from '../../components/Navbar';
const ContactPage = () => {
    
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (you could call an API or something here)
    alert('Form submitted!');
  };

  return (
    <><Navbar />

    <div className="contact-page-container">
      <div className="contact-header">
        <h1 className="contact-title">HELLO FROM SHOPMART </h1>
        <p className="contact-subtitle">We'd love to hear from you. Reach out to us anytime!</p>
      </div>

      <div className="contact-form-container">
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows="5"
              required
            />
          </div>

          <button type="submit" className="submit-button">Send Message</button>
        </form>
      </div>
    </div>
    </>
  );
};

export default ContactPage;
