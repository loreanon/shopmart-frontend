import React from 'react';
import './styles.css'; // Import a CSS file for styling (optional)
import Navbar from '../../components/Navbar';
const AboutPage = () => {
   
  return (
    <> <Navbar/>
    <div className="about-page-container">
      <div className="about-header">
        <h1 className="about-title">Welcome to ShopMart</h1>
        <p className="about-subtitle">Your go-to place for everything you need!</p>
      </div>

      <div className="about-content">
        <section className="mission-section">
          <h2 className="section-title">Our Mission</h2>
          <p className="section-description">
            At ShopMart, we're more than just a store – we're a community. Our mission is to make high-quality products accessible to everyone while providing excellent customer service. We believe shopping should be a seamless and enjoyable experience for all.
          </p>
        </section>

        <section className="vision-section">
          <h2 className="section-title">Our Vision</h2>
          <p className="section-description">
            Our vision is simple: we aim to redefine online shopping. We want to create a space where quality, convenience, and customer satisfaction come together to deliver exceptional value. We are committed to continuous improvement and staying ahead of the trends to serve you better.
          </p>
        </section>

        <section className="values-section">
          <h2 className="section-title">Our Values</h2>
          <p className="section-description">
            Honesty, integrity, and commitment to excellence are the cornerstones of our business. We strive to build long-lasting relationships with our customers and partners by always delivering on our promises and maintaining an unwavering commitment to quality.
          </p>
        </section>

        <button className="explore-button">Explore More</button>
      </div>
    </div>
    </>
  );
};

export default AboutPage;
