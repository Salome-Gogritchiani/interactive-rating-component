// src/components/ThankYouCard.js
import React from "react";
import "./ThankYouCard.css";

export default function ThankYouCard({ rating }) {
  return (
    <div className="thank-you-card">
      <img src="/Online payment_Two Color(1) 2.png" alt="Star" />
      <div className="selected"><p>You selected {rating} out of 5</p></div>
      <h2>Thank you!</h2>
      <p>We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>
    </div>
  );
}
