import React from "react";
import "../styles/Home.css";

const Home = () => {
  return (
    
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Urban Eats</h1>
          <p>Discover amazing deals and win exciting prizes with Foodopoly!</p>
          <button className="cta-button">Play Foodopoly</button>
        </div>
      </section>

      {/* Featured Deals */}
      <section className="featured-deals">
        <h2>Featured Deals</h2>
        <div className="deals-grid">
          <div className="deal-card">
            <img src="/deal1.jpg" alt="Deal 1" />
            <h3>50% Off Pizza</h3>
            <p>Get half off on your favorite pizza!</p>
          </div>
          <div className="deal-card">
            <img src="/deal2.jpg" alt="Deal 2" />
            <h3>Free Coffee</h3>
            <p>Buy one, get one free on all coffees.</p>
          </div>
          <div className="deal-card">
            <img src="/deal3.jpg" alt="Deal 3" />
            <h3>Happy Hour</h3>
            <p>Enjoy discounted drinks from 5-7 PM.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
     
    </div>
  );
};

export default Home;