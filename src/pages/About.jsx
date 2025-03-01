import React from "react";
import "../styles/About.css";

const About = () => {
  return (
    <div className="about">
      <h1>About Urban Eats</h1>
      <div className="about-content">
        <p>
          Urban Eats is your go-to platform for discovering amazing food deals and
          winning exciting prizes with Foodopoly. Our mission is to connect food
          lovers with the best local offers and create a fun, interactive
          experience.
        </p>
        <p>
          Whether you're looking for discounts on your favorite meals or want to
          try something new, Urban Eats has you covered. Join us today and start
          exploring!
        </p>
        <button className="cta-button">Explore Deals</button>
      </div>
    </div>
  );
};

export default About;