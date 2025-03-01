import React from "react";
import "../styles/Home.css";
import blackCouple from "../assets/images/black-couple.jpg"; 
import cheerful from "../assets/images/cheerful-couple.jpg";
import youngMan from "../assets/images/young-man.jpg";

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
            <img src={blackCouple} alt="Deal 1" />
            <h3>50% Off Pizza</h3>
            <p>Get half off on your favorite pizza!</p>
          </div>
          <div className="deal-card">
            <img src={cheerful} alt="Deal 2" />
            <h3>Free Coffee</h3>
            <p>Buy one, get one free on all coffees.</p>
          </div>
          <div className="deal-card">
            <img src={youngMan} alt="Deal 3" />
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