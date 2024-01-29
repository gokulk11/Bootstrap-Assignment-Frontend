import React from "react";

const StarRating = ({ rating }) => {
  const stars = [];
  const totalStars = 5;

  // Calculate the number of filled and empty stars
  const filledStars = Math.floor(rating);
  const emptyStars = totalStars - filledStars;

  // Add filled stars
  for (let i = 0; i < filledStars; i++) {
    stars.push(
      <span key={i} className="star">
        &#9733;
      </span>
    );
  }

  // Add empty stars
  for (let i = 0; i < emptyStars; i++) {
    stars.push(
      <span key={i + filledStars} className="star">
        &#9734;
      </span>
    );
  }

  return <div>{stars}</div>;
};

export default StarRating;
