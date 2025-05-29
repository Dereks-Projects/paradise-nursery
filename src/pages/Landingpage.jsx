import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css'; // we'll create this file next

const LandingPage = () => {
  return (
    <div className="landing">
      <div className="overlay">
        <h1 className="company-name">Paradise Nursery</h1>
        <p className="company-tagline">
          We bring nature indoors. Explore our hand-picked collection of houseplants to create your own paradise.
        </p>
        <Link to="/products">
          <button className="get-started-btn">Get Started</button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
