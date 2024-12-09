// src/App.js
import React, { useState } from "react";
import RatingCard from "./components/RatingCard";
import ThankYouCard from "./components/ThankYouCard";
import "./App.css";

function App() {
  const [rating, setRating] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const submitRating = () => {
    setSubmitted(true);
  };

  return (
    <div className="app">
      {!submitted ? (
        <RatingCard rating={rating} setRating={setRating} submitRating={submitRating} />
      ) : (
        <ThankYouCard rating={rating} />
      )}
    </div>
  );
}

export default App;
