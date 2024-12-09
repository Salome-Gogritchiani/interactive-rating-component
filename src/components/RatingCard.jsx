// src/components/RatingCard.js
import React from "react";
import "./ratingCard.css";

export default function RatingCard({ rating, setRating, submitRating }) {
  const handleRating = (value) => {
    setRating(value);
  };

  return (
    <div className="rating-card">
      <div className="firstchild">
       <div className="star"><img src="/Star.png" alt="Star" /> </div>
       <h2>How did we do?</h2>
       <p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
       <div className="rating-options">
        {[1, 2, 3, 4, 5].map((num) => (
          <button
            key={num}
            className={`rating-btn ${rating === num ? "active" : ""}`}
            onClick={() => handleRating(num)}
          >
            {num}
          </button>
        ))}
        </div>
       <button className="submit-btn" onClick={submitRating} disabled={!rating}>
        Submit
       </button>
      </div>
    </div>
  );
}
