import React from "react";
import "../styles/Deals.css";

const Deals = () => {
  // Mock data for deals (replace with Firestore data later)
  const deals = [
    {
      id: 1,
      image: "/deal1.jpg",
      title: "50% Off Pizza",
      description: "Get half off on your favorite pizza!",
    },
    {
      id: 2,
      image: "/deal2.jpg",
      title: "Free Coffee",
      description: "Buy one, get one free on all coffees.",
    },
    {
      id: 3,
      image: "/deal3.jpg",
      title: "Happy Hour",
      description: "Enjoy discounted drinks from 5-7 PM.",
    },
    {
      id: 4,
      image: "/deal4.jpg",
      title: "Burger Combo",
      description: "Get a burger, fries, and drink for just $10.",
    },
    {
      id: 5,
      image: "/deal5.jpg",
      title: "Dessert Special",
      description: "20% off all desserts this weekend.",
    },
    {
      id: 6,
      image: "/deal6.jpg",
      title: "Taco Tuesday",
      description: "Tacos starting at $2 every Tuesday.",
    },
  ];

  return (
    <div className="deals">
      <h1>Deals</h1>
      <div className="deals-grid">
        {deals.map((deal) => (
          <div key={deal.id} className="deal-card">
            <img src={deal.image} alt={deal.title} />
            <h3>{deal.title}</h3>
            <p>{deal.description}</p>
            <button className="add-to-wallet">Add to Wallet</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Deals;